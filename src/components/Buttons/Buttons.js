// import React, { useState } from "react";
// import View from "../Teams/View";
// import EditTeam from "../Teams/EditTeam";
// import TeamMembers from "../TeamMembers/TeamMembers";
// import TeamApps from "../TeamApps/TeamApps";
// import DeleteTeam from "../Teams/DeleteTeam";

// const Buttons = () => {
//   const [currentPage, setCurrentPage] = useState("view");

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <ul
//         className="tabs nav-tabs nav-tabs--primary clearfix"
//         style={{ marginLeft: "150px" }}
//       >
//         <li className="nav-item tabs__tab">
//           <button
//             onClick={() => setCurrentPage("view")}
//             className={`nav-link ${currentPage === "view" ? "active" : ""}`}
//           >
//             View
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             onClick={() => setCurrentPage("edit")}
//             className={`nav-link ${currentPage === "edit" ? "active" : ""}`}
//           >
//             Edit
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             onClick={() => setCurrentPage("delete")}
//             className={`nav-link ${currentPage === "delete" ? "active" : ""}`}
//           >
//             Delete
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             onClick={() => setCurrentPage("members")}
//             className={`nav-link ${currentPage === "members" ? "active" : ""}`}
//           >
//             Members
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             onClick={() => setCurrentPage("apps")}
//             className={`nav-link ${currentPage === "apps" ? "active" : ""}`}
//           >
//             Team Apps
//           </button>
//         </li>
//       </ul>

//       {currentPage === "view" && "./view"}
//       {currentPage === "edit" && "./edit"}
//       {currentPage === "delete" && "./delete"}
//       {currentPage === "members" && "./members"}
//       {currentPage === "apps" && "./apps"}
//     </div>
//   );
// };

// export default Buttons;

// import { Link } from "gatsby";
// import React from "react";

// const Buttons = () => {

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <ul
//         className="tabs nav-tabs nav-tabs--primary clearfix"
//         style={{ marginLeft: "150px" }}
//       >
//         <li className="nav-item tabs__tab">
//           <Link className="nav-link" to="">View</Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link className="nav-link" to="/edit">Edit</Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link className="nav-link" to="/delete">Delete</Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link className="nav-link active" to="">Members</Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link className="nav-link" to="/apps">Team Apps</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Buttons;

// import { Link } from "gatsby";
// import React, { useState } from "react";

// const Buttons = () => {

//   const [currentPage, setCurrentPage] = useState("");

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <ul
//         className="tabs nav-tabs nav-tabs--primary clearfix"
//         style={{ marginLeft: "150px" }}
//       >
//         <li className="nav-item tabs__tab">
//           <Link className={`nav-link ${currentPage === "" ? "active" : ""}`} to="/view">
//             View
//           </Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link className={`nav-link ${currentPage === "/edit" ? "active" : ""}`} to="/edit">
//             Edit
//           </Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link className={`nav-link ${currentPage === "/delete" ? "active" : ""}`} to="/delete">
//             Delete
//           </Link>
//         </li>
//         {/* <li className="nav-item tabs__tab">
//           <Link className={`nav-link ${currentPage === "/members" ? "active" : ""}`} to="/members">
//             Members
//           </Link>
//         </li> */}
//         <li className="nav-item tabs__tab">
//           <Link className={`nav-link ${currentPage === "/apps" ? "active" : ""}`} to="/apps">
//             Team Apps
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Buttons;

// import { Link } from "gatsby";
// import React, { useEffect, useState } from "react";
// import { fetchApps, fetchTeams } from "../../redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";

// const Buttons = () => {
//   const [currentPage, setCurrentPage] = useState("");

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails ? teamDetails.name : "";
//   console.log("teamButtonName", teamName);

//   const handleViewClick = () => {
//     navigate("/teams/view");
//   };

//   const handleEditClick = () => {
//     navigate("/teams/EditTeam");
//   };

//   const handleDeleteClick = () => {
//     navigate("/teams/DeleteTeam");
//   };

//   const handleFetchApps = (teamName) => {
//     dispatch(fetchApps(teamName)); // Use the parameter appGroup
//   };

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   const handleLinkClick = (page) => {
//     setCurrentPage(page); // Update currentPage when a link is clicked
//   };

//   useEffect(() => {
//     console.log("Updated currentPage:", currentPage);
//   }, [currentPage]);

//   // <button onClick={handleViewClick}>View</button>
//   // <button onClick={handleEditClick}>EditTeams</button>

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <ul
//         className="tabs nav-tabs nav-tabs--primary clearfix"
//         style={{ marginLeft: "150px" }}
//       >
//         <li className="nav-item tabs__tab ">
//           <button
//             className={`nav-link ${currentPage === `/${teamName}/view` ? "active" : ""}`}
//             //to={`/${teamName}/view`}
//             onClick={handleViewClick}

//             style={{
//               fontWeight: "400",
//               fontSize: "14px",
//             }}
//           >
//             View
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link  ${currentPage === "/edit" ? "active" : ""}`}
//            // to="/edit"
//             onClick={() => handleLinkClick("/edit")}
//             //onClick={() => setCurrentPage("/edit")}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >

//             Edit
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link  ${
//               currentPage === "/teams/delete" ? "active" : ""
//             }`}
//            // to="/team-details/delete"
//             onClick={() => handleLinkClick("/teams/delete")}
//            // onClick={() => setCurrentPage("/team-details/delete")}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Delete
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link  ${
//               currentPage === "/members" ? "active" : ""
//             }`}
//            // to="/members"
//             onClick={() => {
//               setCurrentPage("/members");
//               handleFetchApps(teamName);
//             }}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Members
//           </button>
//         </li>
//         {/* <li className="nav-item tabs__tab">
//           <Link
//             className={`nav-link ${currentPage === "/apps" ? "active" : ""}`}
//             to="/apps"
//             // onClick={() => setCurrentPage("/apps")
//             // }
//             onClick={() => {
//             setCurrentPage('/apps');
//             handleFetchApps(selectedTeam.selectedTeam);
//           }}
//           >
//             Team Apps
//           </Link>
//         </li> */}
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link${currentPage === "/apps" ? " active" : ""}`}
//            // to="/apps"

//             onClick={() => {
//               handleLinkClick("/apps")
//               //setCurrentPage("/apps");
//               handleFetchApps(teamName); // Call the fetch function when Delete button is clicked
//             }}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Appgroups Apps
//           </button>
//         </li>

//         <button to="/teams/view">view</button>
//         <button to="/teams/EditTeam">EditTeams</button>

//         <button onClick={handleViewClick}>View</button>
//       <button onClick={handleEditClick}>EditTeams</button>
//       </ul>
//     </div>
//   );
// };

// export default Buttons;

// import React, { useEffect, useState } from "react";
// import { fetchApps, fetchTeams } from "../../redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";

// const Buttons = () => {
//   const [currentPage, setCurrentPage] = useState("");

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails ? teamDetails.name : "";

//   const handleViewClick = () => {
//     navigate(`/${teamName}`);
//     setCurrentPage(`/${teamName}`);
//   };

//   const handleEditClick = () => {
//     navigate(`/${teamName}/edit`);
//     setCurrentPage(`/${teamName}/edit`);
//   };

//   const handleDeleteClick = () => {

//     navigate(`/${teamName}/delete`);
//     setCurrentPage(`/${teamName}/delete`);
//   };

//   const handleMemberClick = () => {

//     navigate(`/${teamName}/members`);
//     setCurrentPage(`/${teamName}/members`);
//   };
//   const handleAppsClick = () => {

//     navigate(`/${teamName}/apps`);
//     setCurrentPage(`/${teamName}/apps`);
//   };

//   const handleFetchApps = (teamName) => {
//     dispatch(fetchApps(teamName));
//   };

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <ul
//         className="tabs nav-tabs nav-tabs--primary clearfix"
//         style={{ marginLeft: "150px" }}
//       >
//         <li className="nav-item tabs__tab ">
//           <button
//             className={`nav-link ${
//               currentPage === `/${teamName}` ? "active" : ""
//             }`}
//             onClick={handleViewClick}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             View
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link ${
//               currentPage === `/${teamName}/edit` ? "active" : ""
//             }`}
//             onClick={handleEditClick}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Edit
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link ${
//               currentPage === `/${teamName}/delete`  ? "active" : ""
//             }`}
//             onClick={handleDeleteClick}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Delete
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link ${currentPage === `/${teamName}/members` ? "active" : ""}`}
//             // onClick={() => {
//             //   // setCurrentPage("/members");
//             //   // handleFetchApps(teamName);
//             //   onClick={handleMemberClick}
//             // }}
//             onClick={handleMemberClick}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Members
//           </button>
//         </li>
//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link ${currentPage === `/${teamName}/apps` ? "active" : ""}`}
//             onClick={() => {
//               handleAppsClick()
//               handleFetchApps(teamName);
//             }}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Appgroups Apps
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Buttons;






import React, { useEffect, useState } from "react";
import { fetchApps, fetchTeams } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "gatsby";

const Buttons = () => {
  const [currentPage, setCurrentPage] = useState("");

  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  const teamName = teamDetails ? teamDetails.name : "";

  const handleViewClick = () => {
    navigate(`/${teamName}`);
    setCurrentPage(`/${teamName}`);
  };

  const handleEditClick = () => {
    navigate(`/${teamName}/edit`);
    setCurrentPage(`/${teamName}/edit`);
  };

  const handleDeleteClick = () => {
    navigate(`/${teamName}/delete`);
    setCurrentPage(`/${teamName}/delete`);
  };

  const handleMemberClick = () => {
    navigate(`/${teamName}/members`);
    setCurrentPage(`/${teamName}/members`);
  };

  const handleAppsClick = () => {
    navigate(`/${teamName}/apps`);
    setCurrentPage(`/${teamName}/apps`);
  };

  const handleFetchApps = (teamName) => {
    dispatch(fetchApps(teamName));
  };

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div className="buttons-container">
      <div className=" container   ">
        <ul className="nav nav-tabs  ">
          <li className="nav-item">
            <button
              className={`btn all-buttons-color rounded text-white mx-2  btn-md ${
                currentPage === `/${teamName}` ? "active" : ""
              }`}
              onClick={handleViewClick}
            >
              View
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn all-buttons-color rounded text-white mx-2 btn-md ${
                currentPage === `/${teamName}/edit` ? "active" : ""
              }`}
              onClick={handleEditClick}
            >
              Edit
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn all-buttons-color rounded  text-white mx-2 btn-md ${
                currentPage === `/${teamName}/delete` ? "active" : ""
              }`}
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn all-buttons-color rounded  text-white mx-2 btn-md ${
                currentPage === `/${teamName}/members` ? "active" : ""
              }`}
              onClick={handleMemberClick}
            >
              Members
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn all-buttons-color rounded text-white mx-2 btn-md ${
                currentPage === `/${teamName}/apps` ? "active" : ""
              }`}
              onClick={() => {
                handleAppsClick();
                handleFetchApps(teamName);
              }}
            >
              Appgroups Apps
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Buttons;
