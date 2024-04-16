import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    axios
      .post("http://localhost:3001/forgot-password", { email }) // Adjust the URL to match your server
      .then((result) => {
        if (result.data.message === "Password reset link sent successfully") {
          navigate("/login");
        } else {
          setError("User not found"); // Set error message if user not found
        }
      })
      .catch((err) => {
        setError("Something went wrong"); // Set error message for other errors
        console.log(err);
      });
  };

  return (
    <>
      <div className="px-10 h-full">
        <form
          className="signup-form max-w-lg w-full mx-auto flex flex-col gap-5 h-full justify-center"
          onSubmit={handleSubmit}
        >
          <h3 className="font-semibold text-2xl mb-2">Forgot Password</h3>
          <input
            type="email"
            name="email"
            value={email} // Bind value attribute to state
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-5 border border-stone-600 rounded-md bg-transparent"
          />
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <button
            type="submit"
            id="sb"
            className="p-5 border border-pri-color hover:bg-transparent hover:text-pri-color rounded-md bg-pri-color text-white font-semibold uppercase cursor-pointer duration-100 mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
