const express = require("express");
// const router = express.Router();
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require('body-parser');
const Users = require("./models/User");
const Notes = require("./models/Notes");
var session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();
// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "https://niftynotesapp.netlify.app",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(
  session({
    secret: "1234",
  })
);

global.loggedIn = null;
app.use("*", (req, res, next) => {
  loggedIn = req.session.loggedInUserId;
  userType = req.session.userType;
  next();
});

// app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://akhilageorge555:AkhilaEbin28@cluster0.clek4jz.mongodb.net/NiftyNotes"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email })
    .then((user) => {
      if (user) {
        req.session.loggedInUserId = user._id;
        console.log("Session..", req.session.loggedInUserId);

        if (user.password === password) {
          res.json({
            message: "Login Successful",
            fullName: user.fullName,
            id: user._id,
          });
        } else {
          res.json({ error: "The password is incorrect." });
        }
      } else {
        res.json({ error: "No record exists." });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/users", async (req, res) => {
  Users.find().then((user) => {
    return res.json(user);
  });
});

app.post("/signup", (req, res) => {
  Users.create(req.body)
    .then((User) => {
      res.json(User);
    })
    .catch((err) => res.json(err));
});

app.post("/addNotes", async (req, res) => {
  const isShared = req.body?.collaborationUser ? true : false;
  const data = new Notes({
    title: req.body.title,
    description: req.body.description,
    color: req.body.color,
    date: new Date(),
    shared: isShared,
  });

  // const collabUser = req.body.collaborationUser;
  console.log("collabUser", req.body);

  // console.log("log..", req.body.id);
  let notesId;
  const userId = req.body.id;
  Notes.create(data)
    .then(async (noteRes) => {
      // console.log("data..", noteRes);
      notesId = noteRes._id;
      // res.json(noteRes);
      // console.log("notesId..", notesId);

      const user = await Users.findById(userId);
      // console.log("user fetch..", user);

      user?.notesId.push(notesId);
      await user.save();
      if (req.body?.collaborationUser) {
        Users.findById(req.body?.collaborationUser).then((collabUser) => {
          collabUser.notesId.push(notesId);
          console.log("collabUser fetched", collabUser);
          collabUser.save();
        });
      }

      return res.json(data);
    })
    .catch((err) => {
      console.log("error", err);

      res.json(err);
    });
});

app.post("/notes", async (req, res) => {
  const userId = req.body.id;

  const user = await Users.findById(userId);
  const all = await Notes.find();
  const notes = all.filter((x) => user.notesId.includes(x._id));
  if (req.body.sort == "asc") {
    notes.sort((a, b) => a.date - b.date);
  } else {
    notes.sort((a, b) => b.date - a.date);
  }
  console.log("notes..", notes);
  res.json(notes);
});
app.post("/updateNotes", async (req, res) => {
  const userId = req.body.id;
  const noteId = req.body.noteId;
  const findNo = await Notes.findById(noteId);

  findNo.title = req.body.title;
  findNo.description = req.body.description;
  findNo.color = req.body.color;
  findNo.date = new Date();

  await findNo.updateOne(findNo);
  const notes = await Notes.find();
  notes.sort((a, b) => b.date - a.date);
  res.json(notes);
});

app.post("/deleteNote", async (req, res) => {
  const userId = req.body.id;
  const noteId = req.body.noteId;
  await Notes.findOneAndDelete({ _id: noteId });

  const user = await Users.findById(userId);
  const note = user.notesId.find((x) => x === noteId);
  user.notesId.splice(note, 1);

  await user.updateOne(user);
  let latestNotes = await Notes.find();
  latestNotes = latestNotes.filter((x) => user.notesId.includes(x._id));

  latestNotes.sort((a, b) => b.date - a.date);
  res.json(latestNotes);
});

app.post("/search", async (req, res) => {
  const userId = req.body.id;
  const title = req.body.title;
  const user = await Users.findById(userId);
  const all = await Notes.find();
  let notes = all.filter((x) => user.notesId.includes(x._id));
  if (title != "") {
    notes = notes.filter((x) =>
      x.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  notes.sort((a, b) => b.date - a.date);
  console.log("notes..", notes);
  res.json(notes);
});

// Start server
app.listen(3001, () => console.log(`Server is running`));

app.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  Users.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ Status: "User not found" });
    }
    const token = jwt.sign({ id: user._id }, "jwt_secret_key", {
      expiresIn: "1d",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "akhilageorge555@gmail.com",
        pass: "uour xbae ygew uywa",
      },
    });

    var mailOptions = {
      from: "akhilageorge555@gmail.com",
      to: email, // Use the email provided by the user
      subject: "Reset your password",
      text: `http://localhost:5173/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      } else {
        return res.json({ message: "Password reset link sent successfully" });
      }
    });
  });
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    // Verify the token
    jwt.verify(token, "jwt_secret_key", async (err, decoded) => {
      if (err) {
        console.error("Error with token:", err);
        return res.status(400).json({ Status: "Error with token" });
      } else {
        // Update the user's password in the database
        const user = await Users.findById(id);
        if (!user) {
          return res.status(404).json({ Status: "User not found" });
        }

        // Update the password without hashing
        await Users.findByIdAndUpdate(id, { password });
        res.json({ Status: "Success" });
      }
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ Status: "Error resetting password" });
  }
});
