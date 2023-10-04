// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeams } from "../../redux/store";
// import { Link, navigate } from "gatsby";
// import Layout from "../../components/Layout";
// import { fetchApps, fetchTeamDetails } from "../../redux/store";
// import { useLocation } from "@reach/router";
// import Logout from "../../components/Auth/Logout";
// //import { Logout } from "@mui/icons-material";

// const TeamList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTeams, setFilteredTeams] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state

//   const dispatch = useDispatch();
//   const location = useLocation();

//   // const teamsData = pageContext.teamsData;
//   // console.log("teamsData",teamsData)

//   const teams = useSelector((state) => state.teams.data);
//   console.log("teams", teams);
//   const isFetching = teams ? teams.isFetching : false; // Check if teams is defined

//   const appgroups = teams ? teams.appGroups : []; // Check if teams is defined
//   console.log("appgroups", appgroups);

//   const handleClickTeam = (appGroup) => {
//     dispatch(fetchTeamDetails(appGroup));
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   const handleFetchApps = (appGroup) => {
//     dispatch(fetchApps(appGroup)); // Use the parameter appGroup
//   };

//   //const Admin_Name = "ajay.gadhavana+2@gmail.com";

//   // const admin = JSON.parse(localStorage.getItem("userData"));

//   //     const adminName = admin.current_user.name;

//   //   useEffect(() => {
//   //     const admin = JSON.parse(localStorage.getItem("userData"));
//   //     const adminName = admin?.current_user?.name;

//   //     if (!adminName) {
//   //       // Redirect to the login page
//   //       navigate('/login'); // Replace '/login' with the actual path to your login page
//   //     }
//   //   }, []);

//   //   // Assuming `teams` is an array of objects
//   //   const filteredTeams = appgroups
//   //   ? appgroups
//   //       .map((team) => {
//   //         if (team.attributes) {
//   //           const developerDetailsAttr = team.attributes.find(
//   //             (attr) => attr.name === "__apigee_reserved__developer_details"
//   //           );
//   //           if (developerDetailsAttr) {
//   //             const developerDetails = JSON.parse(developerDetailsAttr.value);
//   //             return developerDetails.some(
//   //               (detail) => detail.developer === adminName
//   //             )
//   //               ? team
//   //               : null;
//   //           }
//   //         }
//   //         return null; // Handle the case where attribute is not found or attributes is undefined
//   //       })
//   //       .filter(Boolean)
//   //   : []; // Return an empty array if appgroups is undefined

//   // console.log("filteredTeams", filteredTeams);

//   useEffect(() => {
//     const admin = JSON.parse(localStorage.getItem("userData"));
//     const adminName = admin?.current_user?.name;

//     if (adminName) {
//       navigate("/teams");
//     } else {
//       navigate("/login");
//     }

//     const updatedFilteredTeams = appgroups
//       ? appgroups
//           .map((team) => {
//             if (team.attributes) {
//               const developerDetailsAttr = team.attributes.find(
//                 (attr) => attr.name === "__apigee_reserved__developer_details"
//               );
//               if (developerDetailsAttr) {
//                 const developerDetails = JSON.parse(developerDetailsAttr.value);
//                 return developerDetails.some(
//                   (detail) => detail.developer === adminName
//                 )
//                   ? team
//                   : null;
//               }
//             }
//             return null;
//           })
//           .filter(Boolean)
//       : [];

//     const filteredTeams = updatedFilteredTeams
//       ? updatedFilteredTeams.filter((team) =>
//           team.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       : [];

//     setFilteredTeams(filteredTeams);

//     console.log("filteredTeams", filteredTeams);
//   }, [navigate, appgroups, searchTerm, currentPage]);

//   const itemsPerPage = 5;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);

//   // Pagination function
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // const filteredTeams = appgroups
//   // ? appgroups.filter((team) =>
//   //     team.name.toLowerCase().includes(searchTerm.toLowerCase())
//   //   )
//   // : [];
//   // const handleViewClick = () => {
//   //   navigate(`/${teamName}`);
//   //   setCurrentPage(`/${teamName}`);
//   // };

//   // const handleEditClick = () => {
//   //   navigate(`/${teamName}/edit`);

//   // };

//   // const handleDeleteClick = () => {

//   //   navigate(`/${teamName}/delete`);

//   // };

//   // const handleMemberClick = () => {

//   //   navigate(`/${teamName}/members`);

//   // };
//   // const handleAppsClick = () => {

//   //   navigate(`/${teamName}/apps`);

//   // };

//   if (!isFetching && teams.length === 0) {
//     return (
//       <p
//         style={{
//           margin: "auto",
//           textAlign: "center",
//           marginTop: "50vh",
//           transform: "translateY(-50%)",
//         }}
//       >
//         Loading appgroups...
//       </p>
//     );
//   }

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//           <div className="page">
//             <div className="page__tasks">
//               <div className="container">
//                 <div className="contextual-region block block--starbucks-actions">
//                   <div className="my-4">
//                     <Link
//                       to="/add-team"
//                       className="button button-action btn btn-sm btn-primary"
//                       // style={{
//                       //   cursor: "pointer",
//                       //   fontWeight: 400,
//                       //   fontSize: "14px",
//                       //   fontFamily: "Sodo Sans, sans-serif",
//                       // }}
//                     >
//                       Add Appgroup
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Logout />

//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div></div>

//                   <div className="container">
//                     <h1
//                       className="js-quickedit-page-title page__title mb-0"
//                       // style={{
//                       //   fontSize: "24px",
//                       //   fontStyle: "normal",
//                       //   fontWeight: "600",
//                       //   fontFamily: "Sodo Sans, sans-serif",
//                       // }}
//                     >
//                       AppGroups
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <main className="main" role="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <div className="input-group input-group-sm mb-3 d-flex">
//                         <input
//                           type="text"
//                           className="form-control mx-2"
//                           placeholder="Search"
//                           aria-label="Search"
//                           aria-describedby="basic-addon2"
//                           style={{ width: "100px" }}
//                           value={searchTerm}
//                           onChange={handleSearch}
//                         />
//                         <div className="input-group-append mx-2">
//                           <button className="btn btn-primary" type="button">
//                             Search
//                           </button>
//                         </div>
//                       </div>

//                       <table className="responsive-enabled table">
//                         <tbody>
//                           {currentItems.length > 0 ? (
//                             currentItems.map((appGroup, index) => (
//                               <tr
//                                 key={appGroup.name}
//                                 className={index % 2 === 0 ? "even" : "odd"}
//                               >
//                                 <td>
//                                   <button
//                                     onClick={() =>
//                                       handleClickTeam(appGroup.name)
//                                     }
//                                     style={{
//                                       background: "none",
//                                       border: "none",
//                                       cursor: "pointer",
//                                       fontWeight: 500,
//                                       fontSize: "14px",
//                                       fontFamily: "Sodo Sans", // Adding the font family
//                                     }}
//                                   >
//                                     {/* <Link to="/team-details">
//                                       {appGroup.name}
//                                     </Link>
//                                      */}
//                                     <Link to={`/${appGroup.name}`}>
//                                       {appGroup.name}
//                                     </Link>
//                                   </button>
//                                 </td>
//                                 <td>
//                                   <div className="dropbutton-wrapper">
//                                     <div
//                                       className="dropbutton-widget"
//                                       style={{ width: "150px" }}
//                                     >
//                                       <ul className="dropbutton">
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             cursor: "pointer",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/apps`}
//                                             onClick={() => {
//                                               handleFetchApps(appGroup.name);
//                                               handleClickTeam(appGroup.name);
//                                             }}
//                                           >
//                                             Appgroup Apps
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/members`}
//                                             onClick={() =>
//                                               handleClickTeam(appGroup.name)
//                                             }
//                                           >
//                                             Members
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/edit`}
//                                             onClick={() =>
//                                               handleClickTeam(appGroup.name)
//                                             }
//                                           >
//                                             Edit
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/delete`}
//                                             onClick={() =>
//                                               handleClickTeam(appGroup.name)
//                                             }
//                                           >
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="2">No app groups found.</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>

//                   <nav
//                     aria-label="Page navigation"
//                     className="d-flex justify-content-left  "
//                   >
//                     <ul className="pagination  d-flex" style={{ gap: '0.5rem' }} >
//                       <li
//                         className={`page-item ${
//                           currentPage === 1 ? "disabled" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => paginate(currentPage - 1)}
//                         >
//                           Previous
//                         </button>
//                       </li>
//                       {Array.from({
//                         length: Math.ceil(filteredTeams.length / itemsPerPage),
//                       }).map((_, index) => (
//                         <li
//                           key={index}
//                           className={`page-item ${
//                             currentPage === index + 1 ? "active" : ""
//                           }`}
//                         >
//                           <button
//                             className="page-link"
//                             onClick={() => paginate(index + 1)}
//                           >
//                             {index + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li
//                         className={`page-item ${
//                           currentPage ===
//                           Math.ceil(filteredTeams.length / itemsPerPage)
//                             ? "disabled"
//                             : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => paginate(currentPage + 1)}
//                         >
//                           Next
//                         </button>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>

//     </Layout>
//   );
// };

// export default TeamList;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeams } from "../../redux/store";
// import { Link, navigate } from "gatsby";
// import Layout from "../Layout";
// import { fetchApps, fetchTeamDetails } from "../../redux/store";
// import { useLocation, useParams } from "@reach/router";

// const TeamList = () => {
//   const dispatch = useDispatch();
//   const { appGroup: appGroupName } = useParams();
//   const location = useLocation();

//   const teams = useSelector((state) => state.teams.data);
//   const isFetching = teams.isFetching;

//   const appgroups = teams.appGroups;

//   const handleClickTeam = (appGroup) => {
//     dispatch(fetchTeamDetails(appGroup));
//   };

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   useEffect(() => {
//     if (appGroupName) {
//       // Fetch teams using the appGroup name
//       dispatch(fetchTeams(appGroupName));
//     }
//   }, [dispatch, appGroupName]);

//   const handleFetchApps = (appGroup) => {
//     dispatch(fetchApps(appGroup));
//     handleClickTeam(appGroup);
//   };

//   if (!isFetching && teams.length === 0) {
//     return (
//       <p
//         style={{
//           margin: "auto",
//           textAlign: "center",
//           marginTop: "50vh",
//           transform: "translateY(-50%)",
//         }}
//       >
//         Loading appgroups...
//       </p>
//     );
//   }

//   const selectedAppGroup = appgroups.find(
//     (appGroup) => appGroup.name === appGroupName
//   );

//   return (
//     <Layout>
//       <div>
//         {/* ... rest of your code ... */}
//         <table className="responsive-enabled table">
//           <tbody>
//             {appgroups.length > 0 ? (
//               appgroups.map((appGroup, index) => (
//                 <tr
//                   key={appGroup.name}
//                   className={index % 2 === 0 ? "even" : "odd"}
//                 >
//                   <td>
//                     <button
//                       onClick={() => handleClickTeam(appGroup.name)}
//                       style={{
//                         background: "none",
//                         border: "none",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <Link to={`/${appGroup.name}`}>{appGroup.name}</Link>
//                     </button>
//                   </td>
//                   {/* ... rest of your code ... */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="2">No app groups found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         {/* ... rest of your code ... */}
//       </div>
//     </Layout>
//   );
// };

// export default TeamList;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, navigate } from "gatsby";
// import Layout from "../Layout";
// import { selectTeam } from "../../redux/store"; // Import the action creator

// const TeamList = () => {
//   const dispatch = useDispatch();
//   const teams = useSelector((state) => state.teams);
//   console.log("teams", teams);

//   const handleClickTeam = (team) => {
//     // Dispatch an action to store the selected team's data in Redux
//     dispatch(selectTeam(team));

//     // Navigate to the "team-details" page
//     navigate("/team-details");
//   };

//   return (
//     <Layout>
//       {/* ... (existing JSX) */}
//       <main className="main" role="main">
//         <div className="page-layout-sidebar-default">
//           <div className="container py-5">
//             <div className="row">
//               <div className="page__content col-md">
//                 <table className="responsive-enabled table">
//                   <tbody>
//                     {teams.appGroups.map((team, index) => (
//                       <tr
//                         key={team.name}
//                         className={index % 2 === 0 ? "even" : "odd"}
//                       >
//                         <td>
//                           <button
//                             onClick={() => handleClickTeam(team)}
//                             style={{
//                               background: "none",
//                               border: "none",
//                               cursor: "pointer",
//                             }}
//                           >
//                             {/* Pass the team details as state */}
//                             <Link
//                               to="/team-details"
//                             >
//                               {team.name}
//                             </Link>
//                           </button>
//                         </td>
//                         {/* ... (rest of the code) */}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       {/* ... (rest of the JSX) */}
//     </Layout>
//   );
// };

// export default TeamList;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeams } from "../../redux/store";
// import { Link, navigate } from "gatsby";
// import Layout from "../../components/Layout";
// import { fetchApps, fetchTeamDetails } from "../../redux/store";
// import { useLocation } from "@reach/router";
// import Logout from "../../components/Auth/Logout";
// import DropdownComponent from "../../components/DropDown/DropdownComponent";

// import SearchIcon from "@mui/icons-material/Search";

// const TeamList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTeams, setFilteredTeams] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const dispatch = useDispatch();
//   const location = useLocation();

//   const teams = useSelector((state) => state.teams.data);
//   console.log("teams", teams);
//   const isFetching = teams ? teams.isFetching : false;

//   const appgroups = teams ? teams.appGroups : [];
//   console.log("appgroups", appgroups);

//   const handleClickTeam = (appGroup) => {
//     dispatch(fetchTeamDetails(appGroup));
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   const handleFetchApps = (appGroup) => {
//     dispatch(fetchApps(appGroup)); // Use the parameter appGroup
//   };

//   useEffect(() => {
//     const admin = JSON.parse(localStorage.getItem("userData"));
//     const adminName = admin?.current_user?.name;

//     if (adminName) {
//       navigate("/teams");
//     } else {
//       navigate("/login");
//     }

//     const updatedFilteredTeams = appgroups
//       ? appgroups
//           .map((team) => {
//             if (team.attributes) {
//               const developerDetailsAttr = team.attributes.find(
//                 (attr) => attr.name === "__apigee_reserved__developer_details"
//               );
//               if (developerDetailsAttr) {
//                 const developerDetails = JSON.parse(developerDetailsAttr.value);
//                 return developerDetails.some(
//                   (detail) => detail.developer === adminName
//                 )
//                   ? team
//                   : null;
//               }
//             }
//             return null;
//           })
//           .filter(Boolean)
//       : [];

//     const filteredTeams = updatedFilteredTeams
//       ? updatedFilteredTeams.filter((team) =>
//           team.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       : [];

//     setFilteredTeams(filteredTeams);

//     console.log("filteredTeams", filteredTeams);
//   }, [navigate, appgroups, searchTerm, currentPage]);

//   const itemsPerPage = 5;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   if (!isFetching && teams.length === 0) {
//     return (
//       <p
//         style={{
//           margin: "auto",
//           textAlign: "center",
//           marginTop: "50vh",
//           transform: "translateY(-50%)",
//         }}
//       >
//         Loading appgroups...
//       </p>
//     );
//   }

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//           <div className="page">
//             <div className="page__tasks">
//               <div className="container">
//                 <div className="contextual-region block block--starbucks-actions">
//                   <div className="my-4">
//                     <Link
//                       to="/add-team"
//                       className="button button-action btn btn-sm btn-primary"
//                     >
//                       Add Appgroup
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Logout />

//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div></div>

//                   <div className="container">
//                     <h1
//                       className="js-quickedit-page-title page__title mb-0"
//                       // style={{
//                       //   fontSize: "24px",
//                       //   fontStyle: "normal",
//                       //   fontWeight: "600",
//                       //   fontFamily: "Sodo Sans, sans-serif",
//                       // }}
//                     >
//                       AppGroups
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* <main className="main" role="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <div className="input-group input-group-sm mb-3 d-flex">
//                         <input
//                           type="text"
//                           className="form-control mx-2"
//                           placeholder="Search"
//                           aria-label="Search"
//                           aria-describedby="basic-addon2"
//                           style={{ width: "100px" }}
//                           value={searchTerm}
//                           onChange={handleSearch}
//                         />
//                         <div className="input-group-append mx-2">
//                           <button className="btn btn-primary" type="button">
//                             Search
//                           </button>
//                         </div>
//                       </div>

//                       <table className="responsive-enabled table">
//                         <tbody>
//                           {currentItems.length > 0 ? (
//                             currentItems.map((appGroup, index) => (
//                               <tr
//                                 key={appGroup.name}
//                                 className={index % 2 === 0 ? "even" : "odd"}
//                               >
//                                 <td>
//                                   <button
//                                     onClick={() =>
//                                       handleClickTeam(appGroup.name)
//                                     }
//                                     style={{
//                                       background: "none",
//                                       border: "none",
//                                       cursor: "pointer",
//                                       fontWeight: 500,
//                                       fontSize: "14px",
//                                       fontFamily: "Sodo Sans",
//                                     }}
//                                   >

//                                     <Link to={`/${appGroup.name}`}>
//                                       {appGroup.name}
//                                     </Link>
//                                   </button>
//                                 </td>
//                                 <td>
//                                   <div className="dropbutton-wrapper">
//                                     <div
//                                       className="dropbutton-widget"
//                                       style={{ width: "150px" }}
//                                     >
//                                       <ul className="dropbutton">
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             cursor: "pointer",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/apps`}
//                                             onClick={() => {
//                                               handleFetchApps(appGroup.name);
//                                               handleClickTeam(appGroup.name);
//                                             }}
//                                           >
//                                             Appgroup Apps
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/members`}
//                                             onClick={() =>
//                                               handleClickTeam(appGroup.name)
//                                             }
//                                           >
//                                             Members
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/edit`}
//                                             onClick={() =>
//                                               handleClickTeam(appGroup.name)
//                                             }
//                                           >
//                                             Edit
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                             fontWeight: 500,
//                                             fontSize: "12.25px",
//                                             fontFamily: "Sodo Sans",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${appGroup.name}/delete`}
//                                             onClick={() =>
//                                               handleClickTeam(appGroup.name)
//                                             }
//                                           >
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="2">No app groups found.</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>

//                   <nav
//                     aria-label="Page navigation"
//                     className="d-flex justify-content-left  "
//                   >
//                     <ul
//                       className="pagination  d-flex"
//                       style={{ gap: "0.5rem" }}
//                     >
//                       <li
//                         className={`page-item ${
//                           currentPage === 1 ? "disabled" : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => paginate(currentPage - 1)}
//                         >
//                           Previous
//                         </button>
//                       </li>
//                       {Array.from({
//                         length: Math.ceil(filteredTeams.length / itemsPerPage),
//                       }).map((_, index) => (
//                         <li
//                           key={index}
//                           className={`page-item ${
//                             currentPage === index + 1 ? "active" : ""
//                           }`}
//                         >
//                           <button
//                             className="page-link"
//                             onClick={() => paginate(index + 1)}
//                           >
//                             {index + 1}
//                           </button>
//                         </li>
//                       ))}
//                       <li
//                         className={`page-item ${
//                           currentPage ===
//                           Math.ceil(filteredTeams.length / itemsPerPage)
//                             ? "disabled"
//                             : ""
//                         }`}
//                       >
//                         <button
//                           className="page-link"
//                           onClick={() => paginate(currentPage + 1)}
//                         >
//                           Next
//                         </button>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </main> */}
//           </div>
//         </div>
//       </div>

//       <div className="container table-responsive">
//         {/* <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div> */}

//         <div className="input-group mb-4">
//           <input
//             type="text"
//             className="form-control"
//             id="advanced-search-input"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <button
//             className="btn btn-primary"
//             id="advanced-search-button"
//             type="button"
//             value={searchTerm}
//             onChange={handleSearch}
//           >
//             <SearchIcon />
//           </button>
//         </div>

//         <div id="datatable" />
//         <table
//           id="dtBasicExample"
//           className="table table-striped table-bordered table-sm"
//           cellSpacing={0}
//           width="100%"
//         >
//           <thead>
//             <tr>
//               <th className="th-sm">#</th> {/* Added index column */}
//               <th className="th-sm">Name</th>
//               <th className="th-sm">Position</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.length > 0 ? (
//               currentItems.map((appGroup, index) => (
//                 <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
//                   <td>{index + 1}</td>
//                   <td>
//                     <Link to={`/${appGroup.name}`}>{appGroup.name}</Link>
//                   </td>
//                   <td>
//                     <DropdownComponent appGroup={appGroup.name} />
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No app groups found.</td>
//               </tr>
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Position</th>
//             </tr>
//           </tfoot>
//         </table>

//         <nav aria-label="Page navigation example">
//           <ul className="pagination">
//             <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage(currentPage - 1)}
//               >
//                 Previous
//               </button>
//             </li>
//             {Array.from({
//               length: Math.ceil(filteredTeams.length / itemsPerPage),
//             }).map((_, index) => (
//               <li
//                 key={index}
//                 className={`page-item ${
//                   currentPage === index + 1 ? "active" : ""
//                 }`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => setCurrentPage(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               </li>
//             ))}
//             <li
//               className={`page-item ${
//                 currentPage === Math.ceil(filteredTeams.length / itemsPerPage)
//                   ? "disabled"
//                   : ""
//               }`}
//             >
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage(currentPage + 1)}
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </Layout>
//   );
// };

// export default TeamList;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeams } from "../../redux/store";
// import { Link, navigate } from "gatsby";
// import Layout from "../../components/Layout";
// import { fetchApps, fetchTeamDetails } from "../../redux/store";
// import { useLocation } from "@reach/router";
// import DropdownComponent from "../../components/DropDown/DropdownComponent";
// import SearchIcon from "@mui/icons-material/Search";
// import { MDBDataTableV5 } from "mdbreact";
// import { MDBBtn } from "mdbreact";
// import { Container } from "mdbreact";

// const TeamList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTeams, setFilteredTeams] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(6);

//   const dispatch = useDispatch();
//   const location = useLocation();

//   const teams = useSelector((state) => state.teams.data);
//   console.log("teams", teams);
//   const isFetching = teams ? teams.isFetching : false;

//   const appgroups = teams ? teams.appGroups : [];
//   console.log("appgroups", appgroups);

//   const handleClickTeam = (appGroup) => {
//     dispatch(fetchTeamDetails(appGroup));
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   const handleFetchApps = (appGroup) => {
//     dispatch(fetchApps(appGroup)); // Use the parameter appGroup
//   };

//   useEffect(() => {
//     const admin = JSON.parse(localStorage.getItem("userData"));
//     const adminName = admin?.current_user?.name;

//     if (adminName) {
//       navigate("/teams");
//     } else {
//       navigate("/login");
//     }

//     const updatedFilteredTeams = appgroups
//       ? appgroups
//           .map((team) => {
//             if (team.attributes) {
//               const developerDetailsAttr = team.attributes.find(
//                 (attr) => attr.name === "__apigee_reserved__developer_details"
//               );
//               if (developerDetailsAttr) {
//                 const developerDetails = JSON.parse(developerDetailsAttr.value);
//                 return developerDetails.some(
//                   (detail) => detail.developer === adminName
//                 )
//                   ? team
//                   : null;
//               }
//             }
//             return null;
//           })
//           .filter(Boolean)
//       : [];

//     const filteredTeams = updatedFilteredTeams
//       ? updatedFilteredTeams.filter((team) =>
//           team.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       : [];

//     setFilteredTeams(filteredTeams);

//     console.log("filteredTeams", filteredTeams);
//   }, [navigate, appgroups, searchTerm, currentPage]);

//   const indexOfLastItem = currentPage * rowsPerPage;
//   const indexOfFirstItem = indexOfLastItem - rowsPerPage;
//   const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const handleRowsPerPageChange = (e) => {
//     setRowsPerPage(e.target.value);
//     setCurrentPage(1); // Reset to the first page when rows per page changes
//   };

//   if (!isFetching && teams.length === 0) {
//     return (
//       <p
//         style={{
//           margin: "auto",
//           textAlign: "center",
//           marginTop: "50vh",
//           transform: "translateY(-50%)",
//         }}
//       >
//         Loading appgroups...
//       </p>
//     );
//   }

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//           <div className="page">
//             <div className="page__tasks">
//               <div className="container">
//                 <div className="contextual-region block block--starbucks-actions">
//                   <div className="my-4">
//                     <Link
//                       to="/add-team"
//                       className="button button-action btn btn-sm btn-primary"
//                     >
//                       Add Appgroup
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div></div>

//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       AppGroups
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>

//       <div className="container table-responsive">
//         <div className="input-group mb-4">
//           <input
//             type="text"
//             className="form-control"
//             id="advanced-search-input"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <MDBBtn
//             className="btn btn-sm "
//             id="advanced-search-button"
//             type="button"
//             value={searchTerm}
//             onChange={handleSearch}
//           >
//             <SearchIcon />
//           </MDBBtn>
//         </div>

//         <div id="datatable" />
//         <Container className="container table-responsive border">
//           {currentItems.length > 0 && (
//             <MDBDataTableV5
//               hover
//               entriesOptions={[5, 10, 20]}
//               entries={rowsPerPage}
//               pagesAmount={Math.ceil(filteredTeams.length / rowsPerPage)}
//               responsive
//               searchLabel=""
//               className="ml-1"
//               style={{marginLeft:"7px"}}
//               data={{
//                 columns: [
//                   {
//                     label: "#",
//                     field: "index",
//                     sort: "asc",
//                     className: "px-3 my-3 mx-auto !important",
//                   },
//                   {
//                     label: "Name",
//                     field: "name",
//                     sort: "asc",
//                     className: "px-3",
//                   },
//                   {
//                     label: "Position",
//                     field: "position",
//                     sort: "asc",
//                     className: "px-3 my-3 mx-auto !important",
//                     style: { marginLeft: "300px" }
//                   },
//                 ],
//                 rows: currentItems.map((appGroup, index) => ({
//                   index: index + 1,
//                   name: <Link to={`/${appGroup.name}`}>{appGroup.name}</Link>,
//                   position: <DropdownComponent appGroup={appGroup.name} />,
//                 })),
//               }}
//             />
//           )}
//         </Container>

//         {/* <div className="d-flex justify-content-between mt-3">
//           <div>
//             <label htmlFor="rowsPerPageSelect">Rows per page:</label>
//             <select
//               className="form-select form-select-sm"
//               id="rowsPerPageSelect"
//               value={rowsPerPage}
//               onChange={handleRowsPerPageChange}
//             >
//               {[5, 10, 20].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <nav aria-label="Page navigation example">
//             <ul className="pagination">
//               <li
//                 className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => paginate(currentPage - 1)}
//                 >
//                   Previous
//                 </button>
//               </li>
//               {Array.from({
//                 length: Math.ceil(filteredTeams.length / rowsPerPage),
//               }).map((_, index) => (
//                 <li
//                   key={index}
//                   className={`page-item ${
//                     currentPage === index + 1 ? "active" : ""
//                   }`}
//                 >
//                   <button
//                     className="page-link"
//                     onClick={() => paginate(index + 1)}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ))}
//               <li
//                 className={`page-item ${
//                   currentPage === Math.ceil(filteredTeams.length / rowsPerPage)
//                     ? "disabled"
//                     : ""
//                 }`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => paginate(currentPage + 1)}
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div> */}
//       </div>
//     </Layout>
//   );
// };

// export default TeamList;

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../../redux/store";
import { Link, navigate } from "gatsby";
import Layout from "../../components/Layout";
import { fetchApps, fetchTeamDetails } from "../../redux/store";
import { useLocation } from "@reach/router";
import DropdownComponent from "../../components/DropDown/DropdownComponent";
import SearchIcon from "@mui/icons-material/Search";
import { MDBBtn } from "mdbreact";
import { Container } from "mdbreact";
import Cookies from "js-cookie";

const TeamList = ({ responseData }) => {

//   const accessToken = Cookies.get("accessToken");
// console.log("accessToken:", accessToken)


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const tableRef = useRef(); // Create a ref for the table element
  const dispatch = useDispatch();
  //const location = useLocation();

  const teams = useSelector((state) => state.teams.data);
  console.log("teams", teams);
  const isFetching = teams ? teams.isFetching : false;

  const appgroups = teams ? teams.appGroups : [];
  console.log("appgroups", appgroups);

  // const token = Cookies.get("tokenn");
  // console.log("token", token);

  const handleClickTeam = (appGroup) => {
    dispatch(fetchTeamDetails(appGroup));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  const handleFetchApps = (appGroup) => {
    dispatch(fetchApps(appGroup)); // Use the parameter appGroup
  };



  useEffect(() => {
    tableRef.current && window.$(tableRef.current).DataTable();
  }, []);

  



  // useEffect(() => {
  //   // Assuming responseData is an object received from an API call or some data source.
   
  //   if (responseData) {
  //     const userData = JSON.stringify(responseData);
  //     console.log("userData", userData);
  
  //     const adminName = responseData.current_user.name;
  //     console.log("adminName",adminName)
  
  //     if (adminName) {
  //       navigate("/teams");
  //     } else {
  //       navigate("/login");
  //     }
    

  // useEffect(() => {
  //   const admin = JSON.parse(localStorage.getItem("userData"));
  //   const adminName = admin?.current_user?.name;

  //   logout_token:"aUgrSnKGXYIb2VYMJhratXaLSUAJ2x3QyZeUG1v5z6U"

  //   //const adminName = "ajay.gadhavana+1@gmail.com";

  //   if (logout_token) {
  //     navigate("/teams");
  //   } else {
  //     navigate("/login");
  //   }


  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("userData"));
    const adminName = admin?.current_user?.name;

    const logout_token = localStorage.getItem("logout_token");

    // const adminName = "ajay.gadhavana+1@gmail.com";

    if (logout_token) {
      navigate("/teams");
    } else {
      navigate("/login");
    }



    

    const updatedFilteredTeams = appgroups
      ? appgroups
          .map((team) => {
            if (team.attributes) {
              const developerDetailsAttr = team.attributes.find(
                (attr) => attr.name === "__apigee_reserved__developer_details"
              );
              if (developerDetailsAttr) {
                const developerDetails = JSON.parse(developerDetailsAttr.value);
                return developerDetails.some(
                  (detail) => detail.developer === adminName
                )
                  ? team
                  : null;
              }
            }
            return null;
          })
          .filter(Boolean)
      : [];

    const filteredTeams = updatedFilteredTeams
      ? updatedFilteredTeams.filter((team) =>
          team.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

    setFilteredTeams(filteredTeams);

    console.log("filteredTeams", filteredTeams);
  }, [navigate, appgroups, searchTerm, currentPage]);

 
 
 
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(e.target.value);
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  if (!isFetching && teams.length === 0) {
    return (
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "50vh",
          transform: "translateY(-50%)",
        }}
      >
        Loading appgroups...
      </p>
    );
  }

  return (
    <Layout>
      <div
        className="overflow-auto  "
        style={{ marginBottom: "80px", marginTop: "110px" }}
      >
        <div>
          <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
            <div className="page">
              <div className="page__tasks">
                <div className="container">
                  <div className="contextual-region block block--starbucks-actions">
                    <div className="d-flex justify-content-center mt-3 ">
                      <Link
                        to="/add-team"
                        className="button button-action btn rounded btn-md text-white "
                        style={{ backgroundColor: "#F46223", fontSize: "15px" }}
                      >
                        Add Appgroup
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <h5 className="mb-3 text-h2">Appgroups</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container table-responsive">
          <div className="input-group mb-4 d-flex">
            <input
              type="text"
              className="form-control"
              id="advanced-search-input"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
            />

            {/* <MDBBtn
            className="btn btn-sm"
            id="advanced-search-button"
            type="button"
            value={searchTerm}
            onChange={handleSearch}
          >
            <SearchIcon />
          </MDBBtn> */}
          </div>
          <div id="datatable" />
          <div className="container table-responsive ">
            {currentItems.length > 0 ? (
              <table className="table" ref={tableRef}>
                <thead>
                  {/* <tr>
                     <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th
                      scope="col"
                      style={{ marginRight:"200px"}}
                      className="dataTables_filter "
                    >
                      Appgroups Name
                    </th> 
                  </tr> */}
                </thead>
                <tbody className=" border-bottom">
                  {currentItems.map((appGroup, index) => (
                    <tr key={appGroup.name} className=" border-bottom">
                      <td
                        className=" text-center align-middle border-bottom align-content-center  "
                        scope="row"
                      >
                        {index + 1}
                      </td>
                      <td className="text-center align-middle  border-bottom">
                        <button
                          className=" fw-bold rounded-3"
                          onClick={() => handleClickTeam(appGroup.name)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                        >
                          {/* onClick={() => handleFetchApps(appGroup.name)} */}
                          <Link to={`/${appGroup.name}`}>{appGroup.name}</Link>
                        </button>
                      </td>
                      <td
                        className="rounded-3  border-bottom"
                        style={{ textAlign: "end" }}
                      >
                        <DropdownComponent
                          appGroup={appGroup.name}
                          //onClick={() => handleClickTeam(appGroup.name)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No appgroups found</p>
            )}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div>
              <label htmlFor="rowsPerPageSelect">Rows per page:</label>
              <select
                className="form-select form-select-sm"
                id="rowsPerPageSelect"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
              >
                {[5, 10, 20].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link  text-white "
                    onClick={() => paginate(currentPage - 1)}
                    style={{
                      backgroundColor: "#002A5C",
                    }}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({
                  length: Math.ceil(filteredTeams.length / rowsPerPage),
                }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active " : ""
                    }`}
                  >
                    <button
                      className="page-link "
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage ===
                    Math.ceil(filteredTeams.length / rowsPerPage)
                      ? "disabled"
                      : ""
                  }`}
                >
                  <button
                    className="page-link text-white"
                    onClick={() => paginate(currentPage + 1)}
                    style={{
                      backgroundColor: "#002A5C",
                    }}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamList;
