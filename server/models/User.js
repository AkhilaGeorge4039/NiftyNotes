const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  notesId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "NotesModel",
    },
  ],
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
