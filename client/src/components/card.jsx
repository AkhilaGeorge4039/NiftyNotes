import React, { useState, useEffect } from "react";

function Card({ email, password }) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Fetch the user's full name from the server after successful login
    fetchFullName(email, password);
  }, [email, password]);

  const fetchFullName = async (email, password) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Use email and password parameters
      });
      const data = await response.json();
      console.log("Response from server:", data); // Log the response data
      if (response.ok) {
        setFullName(data.fullName);
      } else {
        console.error("Error from server:", data.error); // Log the error message
      }
    } catch (error) {
      console.error("Error fetching full name:", error);
    }
  };

  return (
    <>
      <div className="bg-pri-color text-white py-5 mb-5 px-10">
        <h1>Welcome to NiftyNotes... Start creating your notes!!!</h1>
      </div>
    </>
  );
}

export default Card;
