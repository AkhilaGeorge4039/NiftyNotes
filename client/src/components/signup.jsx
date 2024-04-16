import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        fullName,
        email,
        password,
        confirmPassword,
      })
      .then((result) => {
        alert("Signup Succsssfull");
        navigate("/login");
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
          <h3 className="font-semiboldtext-lg md:text-2xl mb-2">
            Signup Details
          </h3>
          <input
            type="text"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="md:p-5 p-3 border border-stone-600 rounded-md bg-transparent"
          />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="md:p-5 p-3 border border-stone-600 rounded-md bg-transparent"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="md:p-5 p-3 border border-stone-600 rounded-md bg-transparent"
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="md:p-5 p-3 border border-stone-600 rounded-md bg-transparent"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            value="Signup"
            className="md:p-5 p-3 border border-pri-color hover:bg-transparent hover:text-pri-color rounded-md bg-pri-color text-white font-semibold uppercase cursor-pointer duration-100 mt-4"
          >
            Sign Up{" "}
          </button>
          <Link to="/login">
            Already have an account? <b>Login Here!</b>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
