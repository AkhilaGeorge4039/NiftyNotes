import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="landing">
        <div className="hero-sec primary-colorbg">
          <div className="container">
            <header className="flex flex-wrap items-center justify-between py-4">
              <div className="mb-2 mb-md-0">
                <Link to="/" className="inline-flex text-body-emphasis">
                  <img src="images/Logo.png" alt="logo" />
                </Link>
              </div>

              <ul className="nav flex mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="#aboutus" className="nav-link px-2">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#features" className="nav-link px-2">
                    Features
                  </a>
                </li>
                <li>
                  <Link to="/home" className="nav-link px-2">
                    Create Note
                  </Link>
                </li>
              </ul>

              <div className="col-md-3 text-right">
                <Link to="/login">
                  <button type="button" className="btn btn-pri">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn btn-sec ms-3">
                    Sign-up
                  </button>
                </Link>
              </div>
            </header>

            <section className="hero-content pt-8 pb-16">
              <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                <div className="w-full lg:w-1/2">
                  <h1 className="text-3xl lg:text-5xl font-bold text-body-emphasis mb-4">
                    Welcome to NiftyNotes Your Smart Note-Taking Companion
                  </h1>
                  <p className="text-lg">
                    Capture, Organize, and Remember
                    <br />
                    Every Brilliant Idea, Anytime, Anywhere
                  </p>
                  <div className="mt-6">
                    <Link to="/home">
                      <button
                        type="button"
                        className="btn btn-pri btn-lg px-4 me-2"
                        fdprocessedid="vl3jdg"
                      >
                        Get started
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <img src="images/hero-image.png" loading="lazy" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="about-sec sec-pad" id="aboutus">
          <div className="container">
            <section className="about-content">
              <h2 className="sec-head text-center">About us</h2>
              <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                <div className="w-full lg:w-5/12">
                  <img
                    src="images/about-img.png"
                    loading="lazy"
                    alt="about-img"
                  />
                </div>
                <div className="w-full lg:w-7/12">
                  <h3 className="text-3xl font-bold text-body-emphasis mb-3">
                    Simplifying Note-Taking
                  </h3>
                  <p className="">
                    At NiftyNotes, we believe in the power of simplicity. Our
                    journey began with a shared passion for making note-taking
                    an effortless and enjoyable experience for everyone.
                  </p>
                  <ul className="mt-4">
                    <li>
                      Intuitive Design: Crafted for a delightful note-taking
                      experience.
                    </li>
                    <li>
                      Smart Organization: Intelligently organizes notes for easy
                      retrieval.
                    </li>
                    <li>
                      Cross-Platform Accessibility: Access notes anytime,
                      anywhere.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="feature-sec sec-pad secondarycolorbg" id="features">
          <div className="container">
            <section>
              <h2 className="sec-head text-center text-white">
                Smart Features
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="feature bg-white p-8 rounded text-center shadow">
                  <div className="feature-icon text-center mb-3">
                    <img src="images/icon1.png" alt="icon" />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Effortless
                    <br />
                    Note-Taking
                  </h4>
                  <p>
                    Capture your ideas seamlessly with a user-friendly
                    interface.
                  </p>
                </div>
                <div className="feature bg-white p-5 rounded text-center shadow">
                  <div className="feature-icon mb-3">
                    <img src="images/icon1.png" alt="icon" />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Edit and
                    <br />
                    Customize
                  </h4>
                  <p>
                    Highlights the ability to modify notes and personalize them.
                  </p>
                </div>
                <div className="feature bg-white p-5 rounded text-center shadow">
                  <div className="feature-icon mb-3">
                    <img src="images/icon1.png" alt="icon" />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Quick
                    <br /> Notes
                  </h4>
                  <p>
                    Easily note down your thoughts, tasks, and ideas in an
                    instant.
                  </p>
                </div>
                <div className="feature bg-white p-5 rounded text-center shadow">
                  <div className="feature-icon mb-3">
                    <img src="images/icon1.png" alt="icon" />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Access
                    <br /> Anywhere
                  </h4>
                  <p>
                    Access your notes from any device, whether you're using
                    device
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="primary-colorbg sec-pad text-center">
          <div className="container">
            <Link to="/">
              <img src="images/Logo.png" alt="logo" />
            </Link>
            <ul className="nav flex justify-center my-8 gap-4">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-body-secondary">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/home" className="nav-link px-2 text-body-secondary">
                  Create Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link px-2 text-body-secondary"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="list-unstyled flex items-center justify-center pb-5 mb-4">
              <li className="mx-3">
                <a
                  className="inline-flex items-center justify-center text-light rounded-full secondarycolorbg link-body-emphasis"
                  href="https://www.facebook.com/profile.php?id=61556960226499"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li className="mx-3">
                <a
                  className="inline-flex items-center justify-center text-light rounded-full secondarycolorbg link-body-emphasis"
                  href="https://twitter.com/NiftyNotesapp"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    class="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>
                </a>
              </li>
              <li className="mx-3">
                <a
                  className="inline-flex items-center justify-center text-light rounded-full secondarycolorbg link-body-emphasis"
                  href="#"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">
              Copyright Reserved NiftyNotes
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Dashboard;
