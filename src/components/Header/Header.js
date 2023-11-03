// import React from "react";
//  import "../../styles/style.css";

// import { Link } from "gatsby";
// import logo from "../../images/logo.png";

// const Header = () => {
//   return (
//     <header id="navbar" className="navbar navbar-static-top navbar-default">
//       <div className="navbar__global">
//         <div className="navbar navbar-static-top navbar-default">
//           <div className="navbar__global">
//             <div className="container">
//               <div className="flex-container">
//                 <div className="brand">
//                   <Link className="brand__logo" title="Home">
//                     <img src={logo} alt="Starbucks Developer Portal" />
//                   </Link>
//                   <span className="brand__line"></span>
//                   <span className="brand__slogan">
//                     Starbucks Developer Portal - Dev
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="navbar__collapse">
//         <div className="mr-auto Main-Navigation">
//           <div className="navigation">
//             <nav className="navbar navbar-expand-lg justify-content-between navbar- sticky-top">
//               <div className="container">
//                 <div className="collapse navbar-collapse">
//                   <div className="contextual-region block block--starbucks-main-menu">
//                     <ul className="nav navbar-nav">
//                       <li className="nav-item dropdown">
//                         <Link className="nav-link">My Apps</Link>
//                       </li>
//                       <li className="nav-item active dropdown">
//                         <Link to="/teams" className="nav-link">
//                           My Appgroups
//                         </Link>
//                       </li>
//                       <li className="nav-item dropdown">
//                         <Link className="nav-link">API Catalog</Link>
//                       </li>
//                       <li className="nav-item dropdown">
//                         <Link className="nav-link dropdown-toggle">
//                           Get Started
//                         </Link>
//                       </li>
//                       <li className="nav-item dropdown">
//                         <Link className="nav-link">App Dashboard</Link>
//                       </li>
//                       <li className="nav-item dropdown">
//                         <Link className="nav-link">User Mgmt</Link>
//                       </li>
//                       <li className="nav-item dropdown">
//                         <Link title="Self-Service Utility" className="nav-link">
//                           Self-Service Utility
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { Link } from "gatsby";
// import React, { useState } from "react";
// import Logout from "../Auth/Logout";
// import "../../style/globle.css";
// import Logo from "../../images/logo-main.png";

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [navbarCollapsed, setNavbarCollapsed] = useState(true);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleNavbar = () => {
//     setNavbarCollapsed(!navbarCollapsed);
//   };
//   return (
//     <nav className="navbar container-fluid navbar-expand-lg    navbar-light custom-bg-indigo p-4 pl-5 pt-2 fixed-top  ">
//       <div className="d-flex  justify-content-center  container-fluid border border-danger ">
//         <div className=" d-flex ">
//           <button
//             className={`navbar-toggler ${
//               navbarCollapsed ? "" : "collapsed"
//             } text-dark`}
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={!navbarCollapsed ? "true" : "false"}
//             aria-label="Toggle navigation"
//             onClick={toggleNavbar}
//           >
//             <i className="fas fa-bars" />
//           </button>

//           <div
//             className={`collapse navbar-collapse   ${
//               navbarCollapsed ? "" : "show"
//             }`}
//             id="navbarSupportedContent"
//           >
//             <div className="brand  ">
//               <Link className="brand__logo" title="Home">
//                 <img
//                   src={Logo}
//                   alt="Robust API Hub"
//                   loading="lazy"
//                   style={{ width: "250px", height: "40px" }}
//                 />
//               </Link>
//               <span className="brand__line"></span>
//               {/* <span className="brand__slogan">
//                     Starbucks Developer Portal - Dev
//                   </span> */}
//             </div>

//             <div className="d-flex   mx-4">
//               <ul className="navbar-nav  mb-2 mb-lg-0 d-flex   ">
//                 <li className="nav-item  ">
//                   <Link className="nav-link text-dark" to="#">
//                     My Apps
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-dark" to="/teams">
//                     Appgroups
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-dark" to="#">
//                     API Catalog
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link text-dark"
//                     target="_blank"
//                     to="https://login.sastoo.com/realms/sastoo/protocol/openid-connect/registrations?client_id=drupal&response_type=code&scope=openid%20email%20profile&redirect_uri=http%3A//userlogin.sastoo.com/openid-connect/generic"
//                   >
//                     Get Started
//                   </Link>
//                 </li>

//                 {/* <li className="nav-item">
//                   <Link className="nav-link text-dark" to="#">
//                     App Dashboard
//                   </Link>
//                 </li> */}

//                 {/* <li className="nav-item">
//                   <Link className="nav-link text-dark" to="#">
//                     User Mgmt
//                   </Link>
//                 </li> */}

//                 {/* <li className="nav-item">
//                   <Link className="nav-link text-dark" to="#">
//                     Self-Service Utility
//                   </Link>
//                 </li> */}
//               </ul>
//             </div>

//             <div className="d-flex ">
//               <Link className="link-secondary me-3" to="#">
//                 {/* <i className="fas fa-shopping-cart" /> */}
//               </Link>

//               <div className="d-flex mx-4 ">
//                 {/* <div className="dropdown ">
//               <Link
//                 className="link-secondary me-3 dropdown-toggle hidden-arrow"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-mdb-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="fas fa-bell" />
//                 <span className="badge rounded-pill badge-notification bg-danger">
//                   1
//                 </span>
//               </Link>
//               <ul
//                 className="dropdown-menu dropdown-menu-end"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <li>
//                   <Link className="dropdown-item" href="#">
//                     Some news
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" href="#">
//                     Another news
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" href="#">
//                     Something else here
//                   </Link>
//                 </li>
//               </ul>
//             </div> */}
//                 {/* Avatar */}
//                 <div className="dropdown ">
//                   <Link
//                     className="dropdown-toggle d-flex align-items-center hidden-arrow"
//                     to="#"
//                     id="navbarDropdownMenuAvatar"
//                     role="button"
//                     onClick={toggleDropdown}
//                     aria-expanded={dropdownOpen ? "true" : "false"}
//                   >
//                     {/* <img
//                       src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//                       className="rounded-circle"
//                       height={25}
//                       style={{ width: "50px", height: "50px" }}
//                       alt="Black and White Portrait of a Man"
//                       loading="lazy"
//                     /> */}
//                     <svg
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fas"
//                       data-icon="circle-user"
//                       class="svg-inline--fa fa-circle-user"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 512 512"
//                       height={40}
//                     >
//                       <path
//                         fill="black"
//                         d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
//                       ></path>
//                     </svg>
//                   </Link>

//                   <ul
//                     className={`dropdown-menu dropdown-menu-end ${
//                       dropdownOpen ? "show" : ""
//                     }`}
//                     aria-labelledby="navbarDropdownMenuAvatar"
//                   >
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         My profile
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Settings
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item">
//                         <Logout />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import Logout from "../Auth/Logout";
import "../../style/globle.css";
import Logo from "../../images/logo-main.png";
import { Link } from "gatsby";
import { useEffect } from "react";

const Header = () => {
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
const isLoggedIn =  userData

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-bg-indigo p-4 pl-5 pt-2 fixed-top  " >
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

          <ul className="navbar-nav ml-auto mr-5 ">
          <li className="nav-item">
              <Link className="hover-effect nav-link text-dark" to="/usertrack">
              Activity Log
              </Link>
            </li>
            <li className="nav-item">
              <Link className="hover-effect nav-link text-dark" to="/myapps">
                My Apps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/teams">
                Appgroups
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                API Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                target="_blank"
                to="https://login.sastoo.com/realms/sastoo/protocol/openid-connect/registrations?client_id=drupal&response_type=code&scope=openid%20email%20profile&redirect_uri=http%3A//userlogin.sastoo.com/openid-connect/generic"
              >
                Get Started
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                className="nav-link text-dark"
                target="_blank"
                to="https://login.sastoo.com/realms/robustapi/protocol/openid-connect/auth?client_id=robu[…]ct/generic&state=7tWhkgWSRlSz52XGb4Erxk2UYIoBt6EpdhT2UVKffew"
              >
              Login
              </Link>
            </li> */}
          </ul>

          <div className="ml-2 d-flex mr-5">
            <Link className="link-secondary me-3" to="#">
              {/* Icon or content */}
            </Link>
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen ? "true" : "false"}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-user"
                  class="svg-inline--fa fa-circle-user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height={40}
                >
                  <path
                    fill="black"
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  ></path>
                </svg>
              </Link>

              <ul
                className={`dropdown-menu  ${
                  dropdownOpen ? "show" : ""
                } border border-1`}
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    My profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>

                {isLoggedIn && (
                  <li>
                    <Link className="dropdown-item">
                      <Logout />
                    </Link>
                  </li>
                )}

                {/* {!isLoggedIn && (
                  <li>
                    <Link className="dropdown-item" to="#">
                      Login
                    </Link>
                  </li>
                )} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;




// import React, { useState } from "react";
// import Logout from "../Auth/Logout";
// import "../../style/globle.css";
// import Logo from "../../images/logo-main.png";
// import { Link } from "gatsby";
// import { useEffect } from "react";

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [navbarCollapsed, setNavbarCollapsed] = useState(true);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleNavbar = () => {
//     setNavbarCollapsed(!navbarCollapsed);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (dropdownOpen && !event.target.closest(".dropdown")) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [dropdownOpen]);

//   // When user logs in
//   const userData = localStorage.getItem("logout_token");
//   const isLoggedIn = userData;

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light custom-bg-indigo p-4 pl-5 pt-2 fixed-top">
//       <div className="container-fluid">
//         <button
//           className={`navbar-toggler ${
//             navbarCollapsed ? "" : "collapsed"
//           } text-dark`}
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded={!navbarCollapsed ? "true" : "false"}
//           aria-label="Toggle navigation"
//           onClick={toggleNavbar}
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div
//           className={`collapse navbar-collapse ${
//             navbarCollapsed ? "" : "show"
//           }`}
//           id="navbarSupportedContent"
//         >
//           <Link className="navbar-brand d-flex align-items-center" to="/teams">
//             <img
//               src={Logo}
//               alt="Robust API Hub"
//               className="img-fluid"
//               style={{ maxHeight: "40px" }}
//             />
//           </Link>

//           <ul className="navbar-nav ml-auto mr-5">
//             <li className="nav-item">
//               <Link className="hover-effect nav-link text-dark" to="/usertrack">
//                 Activity Log
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="hover-effect nav-link text-dark" to="/usertrack">
//                 Activity Log
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="hover-effect nav-link text-dark" to="/usertrack">
//                 Activity Log
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="hover-effect nav-link text-dark" to="/usertrack">
//                 Activity Log
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="hover-effect nav-link text-dark" to="/usertrack">
//                 Activity Log
//               </Link>
//             </li>
//             {/* Add more navigation links here */}
//           </ul>

//           <div className="ml-2 d-flex mr-5">
//             <div className="dropdown">
//               <Link
//                 className="dropdown-toggle d-flex align-items-center hidden-arrow"
//                 to="#"
//                 id="navbarDropdownMenuAvatar"
//                 role="button"
//                 onClick={toggleDropdown}
//                 aria-expanded={dropdownOpen ? "true" : "false"}
//               >
//                 {/* Add user icon here */}
//               </Link>

//               <ul
//                 className={`dropdown-menu  ${
//                   dropdownOpen ? "show" : ""
//                 } border border-1`}
//                 aria-labelledby="navbarDropdownMenuAvatar"
//               >
//                 <li>
//                   <Link className="dropdown-item" to="#">
//                     My profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="#">
//                     Settings
//                   </Link>
//                 </li>

//                 {isLoggedIn && (
//                   <li>
//                     <Link className="dropdown-item">
//                       <Logout />
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
