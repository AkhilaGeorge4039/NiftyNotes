import Sidebar from "./Sidebar";
import Note from "./Note";
import AddNote from "./AddNote";
import Card from "../card";
import Search from "../Search";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [notes, setNotes] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [color, setColor] = useState("");
  const [notesId, setNotesId] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [totalNotes, setTotalNotes] = useState(0); // New state to hold total number of notes

  useEffect(() => {
    axios
      .post("http://localhost:3001/notes", {
        id: localStorage.getItem("selectedUser"),
      })
      .then((result) => {
        console.log(result);
        setNotes(result);
        setTotalNotes(result.data.length); // Set total number of notes
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:3001/users").then((result) => {
      setUser(result);
    });
  }, []);

  const fetch = (sort) => {
    axios
      .post("http://localhost:3001/notes", {
        id: localStorage.getItem("selectedUser"),
        sort: sort,
      })
      .then((result) => {
        console.log(result);
        setNotes(result);
        setTotalNotes(result.data.length); // Set total number of notes
      })
      .catch((err) => console.log(err));
  };

  const Delete = (id) => {
    axios
      .post("http://localhost:3001/deleteNote", {
        id: localStorage.getItem("selectedUser"),
        noteId: id,
      })
      .then((result) => {
        console.log(result);
        setNotes(result);
        setTotalNotes(result.data.length); // Set total number of notes
      })
      .catch((err) => console.log(err));
  };

  const updateNode = (title, description, color, notesId) => {
    setTitle(title);
    setDescription(description);
    setColor(color);
    setNotesId(notesId);
  };

  const search = (title) => {
    console.log("search", title);
    axios
      .post("http://localhost:3001/search", {
        id: localStorage.getItem("selectedUser"),
        title: title,
      })
      .then((result) => {
        console.log(result);
        setNotes(result);
        setTotalNotes(result.data.length); // Set total number of notes
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={`${darkMode ? "dark-mode" : ""}`}>
        <Card />

        <div className="flex flex-wrap">
          <div className="w-3/12 pt-8">
            <Sidebar></Sidebar>
            <button
              onClick={() =>
                setDarkMode((previousDarkMode) => !previousDarkMode)
              }
              className="save flex py-5 px-8 w-full gap-2"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <div className="w-9/12 p-8 flex flex-wrap gap-7 ">
            <Search Search={search} sort={fetch} />
            <AddNote
              fetchData={fetch}
              title={title}
              description={description}
              color={color}
              notesId={notesId}
              user={user}
            />
            <Note notesVal={notes} delete={Delete} updateNode={updateNode} />
            <div className="w-full notesnumber">
              Total Notes: {totalNotes}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
