import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Login Successful") {
          console.log("res login client", result.data);
          sessionStorage.setItem(
            "selectedUser",
            JSON.stringify(result.data.id)
          );
          sessionStorage.setItem(
            "selectedUserName",
            JSON.stringify(result.data.fullName)
          );

          // Check for the correct message
          navigate("/home"); // Redirect to home upon successful login
        } else {
          setError(result.data.error); // Set error message if login fails
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="px-10 2xl:h-full">
        <form
          className="signup-form max-w-lg w-full mx-auto flex flex-col gap-5 h-full justify-center"
          onSubmit={handleSubmit}
        >
          <h3 className="font-semibold text-lg md:text-2xl mb-2">
            Login Details
          </h3>
          <input
            type="email"
            name="email"
            value={email} // Bind value attribute to state
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="md:p-5 p-3 border border-stone-600 rounded-md bg-transparent"
          />
          <input
            type="password"
            name="password"
            value={password} // Bind value attribute to state
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="md:p-5 p-3 border border-stone-600 rounded-md bg-transparent"
          />
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <Link to="/forgot-password" className="text-right text-base">
            Forgot Password?
          </Link>
          <button
            type="submit"
            id="sb"
            className="md:p-5 p-3 border border-pri-color hover:bg-transparent hover:text-pri-color rounded-md bg-pri-color text-white font-semibold uppercase cursor-pointer duration-100 mt-4"
          >
            Login
          </button>
          <Link to="/signup">
            Don't have an account? <b>Signup Here!</b>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
