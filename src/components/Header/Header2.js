import React, { useState } from "react";
import Logout from "../Auth/Logout";
import Logo from "../../images/logo-main.png";
import { Link } from "gatsby";
import { useEffect } from "react";
import "../../style/page.css";

const Header2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownOpen && !event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  // When user logs in
  const userData = localStorage.getItem("logout_token");
  const isLoggedIn = userData;

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-bg-indigo p-4 pl-5 pt-2 fixed-top  ">
      <div className="container-fluid  ">
        <button
          className={`navbar-toggler ${
            navbarCollapsed ? "" : "collapsed"
          } text-dark`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!navbarCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${
            navbarCollapsed ? "" : "show"
          }`}
          id="navbarSupportedContent"
        >
          <Link className="navbar-brand d-flex align-items-center" to="/teams">
            <img
              src={Logo}
              alt="Robust API Hub"
              className="img-fluid"
              style={{ maxHeight: "40px" }} // Set a maximum height if needed
            />
          </Link>

          <ul className="navbar-nav ml-auto mr-md-5">
            <li className="nav-item mx-md-3 my-2 my-md-0">
              <Link className="nav-link text-dark" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 my-md-0">
              <Link className="nav-link text-dark" to="#">
                Products
              </Link>
            </li>
            <li className="nav-item mx-md-3 my-2 my-md-0">
              <Link className="nav-link text-dark" to="#">
                Help
              </Link>
            </li>
            <li
              className="nav-item  login-link bg-orange px-4 py-0.5  orange-background-color"
              style={{ borderRadius: "0.9rem" }}
            >
              <Link className="nav-link  text-white" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
