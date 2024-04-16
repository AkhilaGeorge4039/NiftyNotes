import React, { useEffect, useState } from "react";
import axios from "axios";

function AddNote(props) {
  const [noteTitle, setNoteTitle] = useState();
  const [noteText, setNoteText] = useState();
  const [noteColor, setNoteColor] = useState();
  const [collaborationUserId, setCollaborationUserId] = useState();
  const [collaborationUserName, setCollaborationUserName] = useState();
  const [error, setError] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown open/close
  const { title, description, color, notesId, user } = props;

  useEffect(() => {
    setNoteTitle(title);
    setNoteText(description);
    setNoteColor(color);
  }, [title, description, color, notesId]);

  const handleSubmit = (e) => {
    setNoteTitle(e.target.value);
    setNoteText(e.target.value);
  };

  const handleCreateClick = (e) => {
    console.log("local", localStorage.getItem("selectedUser"));

    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/addNotes",
        {
          title: noteTitle,
          description: noteText,
          color: noteColor,
          id: localStorage.getItem("selectedUser"),
          collaborationUser: collaborationUserId,
        },
        {
          // withCredentials: true
        }
      )
      .then((result) => {
        console.log(result);
        setNoteTitle("");
        setNoteText("");
        setNoteColor("");
        props.fetchData();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateClick = (e) => {
    console.log("local", localStorage.getItem("selectedUser"));

    e.preventDefault();
    axios
      .post("http://localhost:3001/updateNotes", {
        noteId: props.notesId,
        title: noteTitle,
        description: noteText,
        color: noteColor,
        id: localStorage.getItem("selectedUser"),
      })
      .then((result) => {
        console.log(result);
        props.fetchData();
        setNoteTitle("");
        setNoteText("");
        setNoteColor("");
      })
      .catch((err) => console.log(err));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const setUser = (e) => {
    setCollaborationUserId(e._id);
    setCollaborationUserName(e.fullName);
    toggleDropdown();
  };

  return (
    <>
      <div className="w-full flex flex-col createNote">
        <div className="w-8/12">
          <input
            type="text"
            name="title"
            placeholder="Enter note title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="p-4 w-full bg-yellow-200 focus:outline-0"
          />
          <textarea
            rows="8"
            cols="10"
            placeholder="Type to add a note decription..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className=" w-full p-4 bg-yellow-200 focus:outline-0 flex"
          />
        </div>
        <div className="w-8/12 p-4 bg-yellow-200 button-div gap-3 flex flex-wrap justify-end items-center mb-8">
          <label htmlFor="colorbd" className="colorSel cursor-pointer">
            Choose color
          </label>
          <input
            type="color"
            id="colorbd"
            name="colorbd"
            className="h-full cursor-pointer mr-2 bg-yellow-200"
            value={noteColor}
            onChange={(e) => setNoteColor(e.target.value)}
          />
          <button className="bg-black/50 py-3 px-4 rounded inline-flex gap-2 font-bold text-white">
            Clear
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
          {props?.notesId == 0 && (
            <button
              className="bg-black/50 py-3 px-4 rounded inline-flex gap-2 font-bold text-white"
              onClick={handleCreateClick}
            >
              Create{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          )}
          {props?.notesId != 0 && (
            <button
              className="bg-black/50 py-3 px-4 rounded inline-flex gap-2 font-bold text-white"
              onClick={handleUpdateClick}
            >
              Update{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
          )}
          {/* Dropdown Button */}
          <div className="relative inline-block text-left">
            <button
              className="bg-black/50 py-3 px-4 rounded inline-flex gap-2 font-bold text-white"
              onClick={toggleDropdown}
            >
              {collaborationUserName ? collaborationUserName : "Select User"}
            </button>
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {user?.data?.map((res) => {
                    return (
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => setUser(res)}
                      >
                        {res.fullName}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNote;
