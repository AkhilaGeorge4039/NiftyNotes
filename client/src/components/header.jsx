import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState(null);
  const location = useLocation(); // Using useLocation hook to get current location

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("selectedUserName");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, [location.key]); // Include location.key in the dependency array to force re-render on navigation

  const logout = () => {
    sessionStorage.removeItem("selectedUserName");
    setUsername(null);
  };

  return (
    <>
      <div className="px-10">
        <div className="flex flex-col items-center gap-2 py-6 md:flex-row md:justify-between ">
          <div className="logo">
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
                className=" max-w-44 md:max-w-72"
              />
            </Link>
          </div>
          <div className="nav-bar">
            <nav>
              <ul className="flex flex-wrap gap-4 font-semibold uppercase">
                <li>
                  <h2>{username}</h2>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {username && (
                  <li>
                    <Link to="/login" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
