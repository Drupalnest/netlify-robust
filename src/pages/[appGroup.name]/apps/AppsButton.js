// // #00754A
// import { Link } from "gatsby";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAppDetails, fetchApps } from "../../../redux/store";

// const AppsButton = () => {
//   const [currentPage, setCurrentPage] = useState("");

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <ul
//         className="tabs nav-tabs nav-tabs--primary clearfix"
//         style={{ marginLeft: "150px" }}
//       >
//         <li className="nav-item tabs__tab">
//           <Link
//             className={`nav-link ${
//               currentPage === "/view-app" ? "active" : ""
//             }`}
//             to="/view-app"
//             onClick={() => setCurrentPage("/view-app")}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             View
//           </Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link
//             className={`nav-link ${
//               currentPage === "/edit-app" ? "active" : ""
//             }`}
//             to="/edit-app"
//             onClick={() => setCurrentPage("/edit-app")}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Edit
//           </Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link
//             className={`nav-link ${
//               currentPage === "/delete-app" ? "active" : ""
//             }`}
//             to="/delete-app"
//             onClick={() => setCurrentPage("/delete-app")}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Delete
//           </Link>
//         </li>
//         <li className="nav-item tabs__tab">
//           <Link
//             className={`nav-link ${currentPage === "/apps" ? "active" : ""}`}
//             to="/apps"
//             onClick={() => setCurrentPage("/apps")}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Back to apps
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AppsButton;




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { navigate } from "gatsby";
// import { fetchAppDetails, fetchApps, fetchTeams } from "../../../redux/store";

// const AppsButton = () => {
//   const [currentPage, setCurrentPage] = useState("");

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails ? teamDetails.name : "";

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const appName = appDetailsData ? appDetailsData.name : "";
//   console.log("appName", appName);

//   const handleViewClick = () => {
//     navigate(`/${teamName}/apps/${appName}`);
//     setCurrentPage(`/${teamName}/apps/${appName}`);
//   };

//   const handleEditClick = () => {
//     navigate(`/${teamName}/apps/${appName}/edit`);
//     setCurrentPage(`/${teamName}/apps/${appName}/edit`);
//   };

//   const handleDeleteClick = () => {
//     navigate(`/${teamName}/apps/${appName}/delete`);
//     setCurrentPage(`/${teamName}/apps/${appName}/delete`);
//   };

//   const handlebackToAppsClick = () => {
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
//               currentPage === `/${teamName}/apps/${appName.name}`
//                 ? "active"
//                 : ""
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
//               currentPage === `/${teamName}/apps/${appName.name}/edit`
//                 ? "active"
//                 : ""
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
//               currentPage === `/${teamName}/apps/${appName.name}/delete`
//                 ? "active"
//                 : ""
//             }`}
//             onClick={handleDeleteClick}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Delete
//           </button>
//         </li>

//         <li className="nav-item tabs__tab">
//           <button
//             className={`nav-link ${
//               currentPage === `/${teamName}/apps` ? "active" : ""
//             }`}
//             onClick={handlebackToAppsClick}
//             style={{ fontWeight: "400", fontSize: "14px" }}
//           >
//             Back to apps
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AppsButton;






import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "gatsby";
import { fetchAppDetails, fetchApps, fetchTeams } from "../../../redux/store";


const AppsButton = () => {
   const [currentPage, setCurrentPage] = useState("");

  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  const teamName = teamDetails ? teamDetails.name : "";

  const appDetailsData = useSelector(
    (state) => state.appDetailsData.appDetailsData
  );
  console.log("appDetailsData", appDetailsData);

  const appName = appDetailsData ? appDetailsData.name : "";
  console.log("appName", appName);

  const handleViewClick = () => {
    navigate(`/${teamName}/apps/${appName}`);
    setCurrentPage(`/${teamName}/apps/${appName}`);
  };

  const handleEditClick = () => {
    navigate(`/${teamName}/apps/${appName}/edit`);
    setCurrentPage(`/${teamName}/apps/${appName}/edit`);
  };

  const handleDeleteClick = () => {
    navigate(`/${teamName}/apps/${appName}/delete`);
    setCurrentPage(`/${teamName}/apps/${appName}/delete`);
  };

  const handlebackToAppsClick = () => {
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
              className={`btn text-white mx-2 rounded btn-md ${
                currentPage === `/${teamName}` ? "active" : ""
              }`}
              onClick={handleViewClick}
              style={{ backgroundColor: "#002A5C" }}
            >
              View
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn  text-white rounded mx-2 btn-md ${
                currentPage === `/${teamName}/edit` ? "active" : ""
              }`}
              onClick={handleEditClick}
              style={{ backgroundColor: "#002A5C" }}
            >
              Edit
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn text-white rounded mx-2 btn-md ${
                currentPage === `/${teamName}/delete` ? "active" : ""
              }`}
              onClick={handleDeleteClick}
              style={{ backgroundColor: "#002A5C" }}
            >
              Delete
            </button>
          </li>
         
          <li className="nav-item">
            <button
              className={`btn text-white rounded mx-2 btn-md ${
                currentPage === `/${teamName}/apps` ? "active" : ""
              }`}
              
                onClick={handlebackToAppsClick}
              
              style={{ backgroundColor: "#002A5C" }}
            >
             Back to apps
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppsButton;
