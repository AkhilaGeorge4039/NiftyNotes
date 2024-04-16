// DefaultLayout.jsx
import React from "react";
import Header from "../header";

const DefaultLayout = ({ children }) => (
  <>
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  </>
);

export default DefaultLayout;
