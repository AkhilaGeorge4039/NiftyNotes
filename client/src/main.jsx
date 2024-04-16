// index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/Template/DefaultLayout";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/Home/Home";
import AddNote from "./components/Home/AddNote";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<DefaultLayout />} /> */}
        <Route
          path="/login"
          element={
            <DefaultLayout>
              <Login />
            </DefaultLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <DefaultLayout>
              <Signup />
            </DefaultLayout>
          }
        />
        <Route
          path="/home"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/addnote"
          element={
            <DefaultLayout>
              <AddNote />
            </DefaultLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <DefaultLayout>
              <ForgotPassword />
            </DefaultLayout>
          }
        />
        <Route
          path="/reset-password/:id/:token"
          element={
            <DefaultLayout>
              <ResetPassword />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
