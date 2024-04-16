import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    setLoading(true); // Set loading state while request is in progress
    axios
      .post(`http://localhost:3001/reset-password/${id}/${token}`, { password })
      .then((result) => {
        if (result.data.Status === "Success") {
          // Show success message
          alert(
            "Password reset successful. You will now be redirected to the login page."
          );
          // Redirect to login page
          navigate("/login");
        } else {
          setError("An error occurred while resetting the password."); // Set error message if reset fails
        }
      })
      .catch((err) => {
        setError("An error occurred while resetting the password."); // Set generic error message
      })
      .finally(() => {
        setLoading(false); // Reset loading state after request is complete
      });
  };

  return (
    <>
      <div className="px-10 h-full">
        <form
          className="signup-form max-w-lg w-full mx-auto flex flex-col gap-5 h-full justify-center"
          onSubmit={handleSubmit}
        >
          <h3 className="font-semibold text-2xl mb-2">Reset Password</h3>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="p-5 border border-stone-600 rounded-md bg-transparent"
            disabled={loading} // Disable input while request is in progress
          />
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Display error message */}
          <button
            type="submit"
            id="sb"
            className="p-5 border border-pri-color hover:bg-transparent hover:text-pri-color rounded-md bg-pri-color text-white font-semibold uppercase cursor-pointer duration-100 mt-4"
            disabled={loading} // Disable button while request is in progress
          >
            {loading ? "Updating..." : "Update"}{" "}
            {/* Change button text based on loading state */}
          </button>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
