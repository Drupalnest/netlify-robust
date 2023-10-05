// import React, { useEffect } from "react";
// import Teams from "./[appGroup.name]/Teams";
// import cookie from 'js-cookie';

// const teams = () => {

//   let token = '';

//   useEffect(() => {
//     // Get the value of the 'BEARER_TOKEN' cookie
//     token = cookie.get('BEARER_TOKEN');
    
//     // Print the token to the console
//     console.log('BEARER_TOKEN inside useEffect:', token);
//   }, []); // This will run once when the component mounts

//   // You can now use 'token' outside of the useEffect
//   console.log('BEARER_TOKEN outside useEffect:', token);

 
//   return (
//     <div>
//       <Teams />
//     </div>
//   );
// };

// export default teams;





import React, { useEffect, useState } from "react";
import Teams from "./[appGroup.name]/Teams";
// import { getBearerToken } from "../../token/node/getTokenWithServiceAccount/scheduler.js"

const TeamsPage = () => {
  // const [token, setToken] = useState('');

  // useEffect(() => {
  //   // Get the initial token
  //   setToken(getBearerToken());

  //   // Set up an interval to periodically update the token in your component
  //   const interval = setInterval(() => {
  //     setToken(getBearerToken());
  //   }, 60000); // 60 seconds = 1 minute

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(interval);
  // }, []);

  
  return (
    <div>
      <Teams/>
      {/* <p>Bearer Token: {token}</p> */}
    </div>
  );
};

export default TeamsPage;






















// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeams } from "../redux/store";
// import { Link, navigate } from "gatsby";
// import Layout from "../components/Layout";
// import { fetchApps, fetchTeamDetails } from "../redux/store";
// import { useLocation } from "@reach/router";
// import DropdownComponent from "../components/DropDown/DropdownComponent";
// import SearchIcon from "@mui/icons-material/Search";
// import { MDBBtn } from "mdbreact";
// import { Container } from "mdbreact";
// import Cookies from "js-cookie";

// const TeamList = ( responseData ) => {

// //   const accessToken = Cookies.get("accessToken");
// // console.log("accessToken:", accessToken)

// console.log("responseData",responseData)

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredTeams, setFilteredTeams] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const tableRef = useRef(); // Create a ref for the table element
//   const dispatch = useDispatch();
//   //const location = useLocation();

//   const teams = useSelector((state) => state.teams.data);
//   console.log("teams", teams);
//   const isFetching = teams ? teams.isFetching : false;

//   const appgroups = teams ? teams.appGroups : [];
//   console.log("appgroups", appgroups);

//   // const token = Cookies.get("tokenn");
//   // console.log("token", token);

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
//     tableRef.current && window.$(tableRef.current).DataTable();
//   }, []);

  



//   // useEffect(() => {
//   //   // Assuming responseData is an object received from an API call or some data source.
   
//   //   if (responseData) {
//   //     const userData = JSON.stringify(responseData);
//   //     console.log("userData", userData);
  
//   //     const adminName = responseData.current_user.name;
//   //     console.log("adminName",adminName)
  
//   //     if (adminName) {
//   //       navigate("/teams");
//   //     } else {
//   //       navigate("/login");
//   //     }
    

//   // useEffect(() => {
//   //   const admin = JSON.parse(localStorage.getItem("userData"));
//   //   const adminName = admin?.current_user?.name;

//   //   logout_token:"aUgrSnKGXYIb2VYMJhratXaLSUAJ2x3QyZeUG1v5z6U"

//   //   //const adminName = "ajay.gadhavana+1@gmail.com";

//   //   if (logout_token) {
//   //     navigate("/teams");
//   //   } else {
//   //     navigate("/login");
//   //   }


//   useEffect(() => {
//     const admin = JSON.parse(localStorage.getItem("userData"));
//     const adminName = admin?.current_user?.name;

//     const logout_token = localStorage.getItem("logout_token");

//     // const adminName = "ajay.gadhavana+1@gmail.com";

//     if (logout_token) {
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
//       <div
//         className="overflow-auto  "
//         style={{ marginBottom: "80px", marginTop: "110px" }}
//       >
//         <div>
//           <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//             <div className="page">
//               <div className="page__tasks">
//                 <div className="container">
//                   <div className="contextual-region block block--starbucks-actions">
//                     <div className="d-flex justify-content-center mt-3 ">
//                       <Link
//                         to="/add-team"
//                         className="button button-action btn rounded btn-md text-white "
//                         style={{ backgroundColor: "#F46223", fontSize: "15px" }}
//                       >
//                         Add Appgroup
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="container">
//                 <h5 className="mb-3 text-h2">Appgroups</h5>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container table-responsive">
//           <div className="input-group mb-4 d-flex">
//             <input
//               type="text"
//               className="form-control"
//               id="advanced-search-input"
//               placeholder="Search by name"
//               value={searchTerm}
//               onChange={handleSearch}
//             />

//             {/* <MDBBtn
//             className="btn btn-sm"
//             id="advanced-search-button"
//             type="button"
//             value={searchTerm}
//             onChange={handleSearch}
//           >
//             <SearchIcon />
//           </MDBBtn> */}
//           </div>
//           <div id="datatable" />
//           <div className="container table-responsive ">
//             {currentItems.length > 0 ? (
//               <table className="table" ref={tableRef}>
//                 <thead>
//                   {/* <tr>
//                      <th scope="col">#</th>
//                     <th scope="col">Name</th>
//                     <th
//                       scope="col"
//                       style={{ marginRight:"200px"}}
//                       className="dataTables_filter "
//                     >
//                       Appgroups Name
//                     </th> 
//                   </tr> */}
//                 </thead>
//                 <tbody className=" border-bottom">
//                   {currentItems.map((appGroup, index) => (
//                     <tr key={appGroup.name} className=" border-bottom">
//                       <td
//                         className=" text-center align-middle border-bottom align-content-center  "
//                         scope="row"
//                       >
//                         {index + 1}
//                       </td>
//                       <td className="text-center align-middle  border-bottom">
//                         <button
//                           className=" fw-bold rounded-3"
//                           onClick={() => handleClickTeam(appGroup.name)}
//                           style={{
//                             background: "none",
//                             border: "none",
//                             cursor: "pointer",
//                             fontSize: "20px",
//                           }}
//                         >
//                           {/* onClick={() => handleFetchApps(appGroup.name)} */}
//                           <Link to={`/${appGroup.name}`}>{appGroup.name}</Link>
//                         </button>
//                       </td>
//                       <td
//                         className="rounded-3  border-bottom"
//                         style={{ textAlign: "end" }}
//                       >
//                         <DropdownComponent
//                           appGroup={appGroup.name}
//                           //onClick={() => handleClickTeam(appGroup.name)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No appgroups found</p>
//             )}
//           </div>
//           <div className="d-flex justify-content-between mt-3">
//             <div>
//               <label htmlFor="rowsPerPageSelect">Rows per page:</label>
//               <select
//                 className="form-select form-select-sm"
//                 id="rowsPerPageSelect"
//                 value={rowsPerPage}
//                 onChange={handleRowsPerPageChange}
//               >
//                 {[5, 10, 20].map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <nav aria-label="Page navigation example">
//               <ul className="pagination">
//                 <li
//                   className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//                 >
//                   <button
//                     className="page-link  text-white "
//                     onClick={() => paginate(currentPage - 1)}
//                     style={{
//                       backgroundColor: "#002A5C",
//                     }}
//                   >
//                     Previous
//                   </button>
//                 </li>
//                 {Array.from({
//                   length: Math.ceil(filteredTeams.length / rowsPerPage),
//                 }).map((_, index) => (
//                   <li
//                     key={index}
//                     className={`page-item ${
//                       currentPage === index + 1 ? "active " : ""
//                     }`}
//                   >
//                     <button
//                       className="page-link "
//                       onClick={() => paginate(index + 1)}
//                     >
//                       {index + 1}
//                     </button>
//                   </li>
//                 ))}
//                 <li
//                   className={`page-item ${
//                     currentPage ===
//                     Math.ceil(filteredTeams.length / rowsPerPage)
//                       ? "disabled"
//                       : ""
//                   }`}
//                 >
//                   <button
//                     className="page-link text-white"
//                     onClick={() => paginate(currentPage + 1)}
//                     style={{
//                       backgroundColor: "#002A5C",
//                     }}
//                   >
//                     Next
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default TeamList;
