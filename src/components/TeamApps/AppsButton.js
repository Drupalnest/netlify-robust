// // #00754A
// import { Link } from "gatsby";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAppDetails, fetchApps } from "../../redux/store";

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





import { Link } from "gatsby";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppDetails, fetchApps } from "../../redux/store";


const AppsButton = () => {
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

  

    const handleBackClick = () => {
    navigate(`/${teamName}/delete`);
    setCurrentPage(`/${teamName}/delete`);
  };


  // const handleFetchApps = (teamName) => {
  //   dispatch(fetchApps(teamName));
  // };

  // useEffect(() => {
  //   dispatch(fetchTeams());
  // }, [dispatch]);

  return (
    <div className="buttons-container">
      <div className=" container   ">
        <ul className="nav nav-tabs  ">
          <li className="nav-item">
            <button
              className={`btn text-white mx-2  btn-md ${
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
              className={`btn  text-white mx-2 btn-md ${
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
              className={`btn text-white mx-2 btn-md ${
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
              className={`btn text-white mx-2 btn-md ${
                currentPage === `/${teamName}/delete` ? "active" : ""
              }`}
              onClick={handleBackClick}
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
