// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "gatsby";
// // import axios from "axios";

// // Import the Redux action to update app details
// import { fetchAppDetails, fetchTeamDetails } from "../../redux/store"; // Replace "./path/to/actions" with the actual path to your action file
// import Layout from "../Layout";
// import AppsButton from "./AppsButton";

// const TeamApps = () => {
//   // const teamDetails = useSelector((state) => state.teamDetails);
//   // const teamName = useSelector((state) => state.teamDetails.name);
//   // console.log("teamNameData", teamName);

//   const apps = useSelector((state) => state.appsData.appsData);
//   console.log("apps", apps);
//   const isFetching = apps.loading ;

//   const appsName = apps.appGroup;
//   console.log("appsName", appsName);

//   // Define a state to hold the app details
//   const [appDetails, setAppDetails] = useState(null);

//   // Get the dispatch function from the Redux store
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(fetchTeamDetails(teamName));
//   // }, [dispatch]);

//   const handleAppClick = (appName) => {
//     // dispatch(fetchAppDetails(teamName, appName));
//   };

//   // if (!apps || !appsName) {
//   //   return <div>Loading...</div>;
//   // }

//   if (isFetching) {
//     return <p style={{ margin: "auto", textAlign: "center", marginTop: "50vh", transform: "translateY(-50%)" }}>Loading appgroups...</p>;
//   }

//   if (!isFetching && apps.length === 0) {
//     return <p style={{ margin: "auto", textAlign: "center", marginTop: "50vh", transform: "translateY(-50%)" }}>Loading appgroups...</p>;
//   }

//   return (
//     <Layout>
//       <AppsButton />
//       <div>
//         <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//           <div className="page">
//             <div className="page__tasks">
//               <div className="container">
//                 <div className="contextual-region block block--starbucks-actions">
//                   <div className="my-4">
//                     <Link
//                       to="/add-apps"
//                       className="button button-action btn btn-sm btn-primary"
//                     >
//                       Add appgroups app
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div></div>

//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Appgroups Apps
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="container py-5">
//               <div className="row">
//                 <div className="page__content col-md">
//                   <div className="hidden" />

//                   <table className="table--app-list responsive-enabled table">
//                     <thead>
//                       <tr>
//                         <th
//                           specifier="displayName"
//                           aria-sort="ascending"
//                           className="is-active"
//                         >
//                           <Link to="">Appgroups app name</Link>
//                         </th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {appsName.length === 0 ? ( // Check if the array is empty
//                         <tr>
//                           <td colSpan="2">No apps found</td>
//                         </tr>
//                       ) : (
//                         appsName.map((appName, index) => (
//                           <tr key={appName.id}>
//                             <td>
//                               <Link
//                                 to="/view-app"
//                                 onClick={() => handleAppClick(appName)}
//                               >
//                                 {appName.name}
//                                 {/* Assuming the 'app' object has a 'name' property */}
//                               </Link>
//                             </td>
//                             <td>
//                               <div className="dropbutton-wrapper">
//                                 <div
//                                   className="dropbutton-widget"
//                                   style={{ width: "150px" }}
//                                 >
//                                   <ul className="dropbutton">
//                                     <li style={{ listStyle: "none" }}>
//                                       <Link
//                                         to="/edit-app"
//                                         onClick={() => handleAppClick(appName)}
//                                       >
//                                         Edit
//                                       </Link>
//                                     </li>
//                                     <li
//                                       style={{
//                                         listStyle: "none",
//                                         marginTop: "7px",
//                                       }}
//                                     >
//                                       <Link
//                                         to="/delete-app"
//                                         onClick={() => handleAppClick(appName)}
//                                       >
//                                         Delete
//                                       </Link>
//                                     </li>
//                                     {/* <li>
//                   <Link
//                     to="/AppsButton"
//                     onClick={() => handleAppClick(appName)}
//                   >
//                     Analytics
//                   </Link>
//                 </li> */}
//                                   </ul>
//                                 </div>
//                               </div>
//                             </td>
//                           </tr>
//                         ))
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default TeamApps;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "gatsby";
// // import axios from "axios";

// // Import the Redux action to update app details
// import { fetchAppDetails, fetchTeamDetails } from "../../redux/store"; // Replace "./path/to/actions" with the actual path to your action file
// import Layout from "../Layout";
// import AppsButton from "./AppsButton";

// const TeamApps = () => {
//    const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = useSelector((state) => state.teamDetails.name);
//   console.log("teamNameData", teamName);

//   const apps = useSelector((state) => state.appsData.appsData);
//   console.log("apps", apps);
//   // const isFetching = apps.loading;

//   const isFetching = apps ? apps.loading : false; // Add a check for apps before accessing properties

//   if (!apps) {
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

//   const appgroupsapp = apps.appGroupApps;
//   console.log("appgroupsapp", appgroupsapp);

//   // const appsName = apps.appGroupApps.name;
//   // console.log("appsName", appsName);

//   // const name=apps.appGroupApps.name
//   // console.log("name",name)

//   // Define a state to hold the app details
//   // const [appDetails, setAppDetails] = useState(null);

//   // Get the dispatch function from the Redux store

//   // useEffect(() => {
//   //   dispatch(fetchTeamDetails(teamName));
//   // }, [dispatch]);

//   const handleAppClick = (appName) => {
//      dispatch(fetchAppDetails(teamName, appName));
//   };

//   if (!apps || !appgroupsapp) {
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

//   if (isFetching) {
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

//   if (!isFetching && appgroupsapp.length === 0) {
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
//       <AppsButton />
//       <div>
//         <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//           <div className="page">
//             <div className="page__tasks">
//               <div className="container">
//                 <div className="contextual-region block block--starbucks-actions">
//                   <div className="my-4">
//                     <Link
//                       to="/add-apps"
//                       className="button button-action btn btn-sm btn-primary"
//                     >
//                       Add appgroups app
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div></div>

//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Appgroups Apps
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="container py-5">
//               <div className="row">
//                 <div className="page__content col-md">
//                   <div className="hidden" />
//                   {isFetching ? (
//                     <p
//                       style={{
//                         margin: "auto",
//                         textAlign: "center",
//                         marginTop: "50vh",
//                         transform: "translateY(-50%)",
//                       }}
//                     >
//                       Loading appgroups...
//                     </p>
//                   ) : (
//                     <table className="table--app-list responsive-enabled table">
//                       <thead>
//                         <tr>
//                           <th
//                             specifier="displayName"
//                             aria-sort="ascending"
//                             className="is-active"
//                           >
//                             <Link to="">Appgroups app name</Link>
//                           </th>
//                         </tr>
//                       </thead>

//                       <tbody>
//                         {appgroupsapp.length > 0 ? (
//                           appgroupsapp.map((appName, index) => (
//                             <tr key={appName.id}>
//                               <td>
//                                 <Link
//                                   to="/view-app"
//                                   onClick={() => handleAppClick(appName.name)}
//                                 >
//                                   {appName.name}
//                                 </Link>
//                               </td>
//                               <td>
//                                 <div className="dropbutton-wrapper">
//                                   <div
//                                     className="dropbutton-widget"
//                                     style={{ width: "150px" }}
//                                   >
//                                     <ul className="dropbutton">
//                                       <li style={{ listStyle: "none" }}>
//                                         <Link
//                                           to="/edit-app"
//                                           onClick={() =>
//                                             handleAppClick(appName.name)
//                                           }
//                                         >
//                                           Edit
//                                         </Link>
//                                       </li>
//                                       <li
//                                         style={{
//                                           listStyle: "none",
//                                           marginTop: "7px",
//                                         }}
//                                       >
//                                         <Link
//                                           to="/delete-app"
//                                           onClick={() =>
//                                             handleAppClick(appName.name)
//                                           }
//                                         >
//                                           Delete
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         ) : (
//                           <tr>
//                             <td colSpan="2">No app groups found.</td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default TeamApps;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchAppDetails, fetchTeamDetails } from "../../redux/store";
// import Layout from "../../components/Layout";
// import { Link } from "gatsby";
// import Buttons from "../../components/Buttons/Buttons";
// import AppDropdownComponent from "../../components/DropDown/appsDropDown";

// const TeamApps = () => {
//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails ? teamDetails.name : "";
//   console.log("teamName", teamName);

//   const apps = useSelector((state) => state.appsData.appsData);
//   console.log("apps", apps);

//   const isFetchingApps = apps ? apps.loading : true;

//   const appgroupsapp = apps ? apps.appGroupApps : [];
//   console.log("appgroupsapp", appgroupsapp);

//   if (isFetchingApps && appgroupsapp.length === 0) {
//     return (
//       <p
//         style={{
//           margin: "auto",
//           textAlign: "center",
//           marginTop: "50vh",
//           transform: "translateY(-50%)",
//         }}
//       >
//         Loading appgroups apps
//       </p>
//     );
//   }

//   if (!apps.appGroupApps || apps.appGroupApps.length === 0) {
//     return (
//       <Layout>
//         <div style={{ marginTop: "120px" }}>
//           <Buttons />
//           <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//             <div className="page">
//               <div className="page__tasks">
//                 <div className="container">
//                   <div className="contextual-region block block--starbucks-actions">
//                     <div className="d-flex justify-content-center mt-3 ">
//                       <Link
//                         to={`/${teamName}/apps/add-apps`}
//                         className="all-add-buttons button rounded button-action btn btn-md text-white "
//                       >
//                         Add appgroups app
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       {/* Loading appgroup apps.. */}
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
//   if (!apps.appGroupApps || apps.appGroupApps.length === 0) {
//     return (
//       <Layout>
//         <div>
//           <Buttons />

//           <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//             <div className="page">
//               <div className="page__content-above">
//                 <div className="container-fluid px-0">
//                   <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                     <div className="container">
//                       <h1 className="js-quickedit-page-title page__title mb-0">
//                         No apps found
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   const handleAppClick = (appName) => {
//     dispatch(fetchAppDetails(teamName, appName));
//   };

//   if (isFetchingApps) {
//     return (
//       <Layout>
//         <div>
//           <Buttons />
//           <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//             <div className="page">
//               <div className="page__content-above">
//                 <div className="container-fluid px-0">
//                   <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                     <div className="container">
//                       <h3 className="js-quickedit-page-title page__title mb-0">
//                         Loading appgroup apps...
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div style={{ marginTop: "120px" }}>
//         <Buttons />
//         <div style={{ marginTop: "50px" }}>
//           <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
//             <div className="page">
//               <div className="page__tasks">
//                 <div className="container">
//                   <div className="contextual-region block block--starbucks-actions">
//                     <div className="d-flex justify-content-center mt-3 ">
//                       <Link
//                         to={`/${teamName}/apps/add-apps`}
//                         className="all-add-buttons button button-action btn btn-md text-white "
//                       >
//                         Add appgroups app
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="page__content-above">
//                 <div className="container-fluid px-0">
//                   <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                     <div className="container">
//                       <h3 className="js-quickedit-page-title page__title mb-0">
//                         Appgroups Apps
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="container py-3">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div className="container table-responsive  ">
//                       <table className="table--app-list responsive-enabled table">
//                         <thead className=" border-bottom">
//                           <tr className="text-center align-middle  border-bottom">
//                             <th className=" border-bottom">Sr. No. </th>
//                             <th className=" border-bottom">
//                               Appgroups app name
//                             </th>
//                             <th className=" border-bottom">Action</th>
//                           </tr>
//                         </thead>

//                         <tbody className="text-center align-middle">
//                           {apps.appGroupApps ||
//                           apps.appGroupApps.length === 0 ? (
//                             appgroupsapp.map((appName, index) => (
//                               <tr
//                                 key={appName.id}
//                                 className=" text-center align-middle  border-bottom"
//                               >
//                                 <td
//                                   className=" text-center align-middle  border-bottom align-content-center  "
//                                   scope="row"
//                                 >
//                                   {index + 1}
//                                 </td>
//                                 <td className=" text-center align-middle   border-bottom">
//                                   <button
//                                     className="rounded-3 text-center align-middle fw-bold "
//                                     onClick={() => handleAppClick(appName.name)}
//                                     style={{
//                                       background: "none",
//                                       border: "none",
//                                       cursor: "pointer",
//                                       color: "black",
//                                     }}
//                                   >
//                                     <Link
//                                       to={`/${teamName}/apps/${appName.name}`}
//                                     >
//                                       {appName.name}
//                                     </Link>
//                                   </button>
//                                 </td>

//                                 {/* <td className=" text-center align-middle border-bottom p-0 ">
//                                   <div className="dropbutton-wrapper">
//                                     <div
//                                       className="dropbutton-widget"
//                                       style={{ width: "150px" }}
//                                     >
//                                       <ul className="dropbutton">
//                                         <li style={{ listStyle: "none" }}>
//                                           <Link
//                                             to={`/${teamName}/apps/${appName.name}/edit`}
//                                             onClick={() =>
//                                               handleAppClick(appName.name)
//                                             }
//                                           >
//                                             Edit
//                                           </Link>
//                                         </li>
//                                         <li
//                                           style={{
//                                             listStyle: "none",
//                                             marginTop: "7px",
//                                           }}
//                                         >
//                                           <Link
//                                             to={`/${teamName}/apps/${appName.name}/delete`}
//                                             onClick={() =>
//                                               handleAppClick(appName.name)
//                                             }
//                                           >
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                 </td> */}
//                                 <td className="rounded-3 text-center align-middle  border-bottom">
//                                   <AppDropdownComponent
//                                     teamName={teamName}
//                                     appName={appName.name}
//                                     //handleAppClick={handleAppClick}

//                                   />
//                                 </td>
//                               </tr>
//                             ))
//                           ) : (
//                             <tr>
//                               <td colSpan="2">No apps found.</td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default TeamApps;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAppDetails, fetchTeamDetails } from "../../redux/store";
import Layout from "../../components/Layout";
import { Link } from "gatsby";
import Buttons from "../../components/Buttons/Buttons";
import AppDropdownComponent from "../../components/DropDown/appsDropDown";

const TeamApps = () => {
  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  const teamName = teamDetails ? teamDetails.name : "";
  console.log("teamName", teamName);

  const apps = useSelector((state) => state.appsData.appsData);
  console.log("apps", apps);

  const isFetchingApps = apps ? apps.loading : true;

  const appgroupsapp = apps ? apps.appGroupApps : [];
  console.log("appgroupsapp", appgroupsapp);

  if (isFetchingApps && appgroupsapp.length === 0) {
    return (
      <p
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "50vh",
          transform: "translateY(-50%)",
        }}
      >
        Loading appgroups apps
      </p>
    );
  }

  if (!apps.appGroupApps || apps.appGroupApps.length === 0) {
    return (
      <Layout>
        <div style={{ marginTop: "120px" }}>
          <Buttons />
          <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
            <div className="page">
              <div className="page__tasks" style={{ marginTop: "70px" }}>
                <div className="container">
                  <div className="contextual-region block block--starbucks-actions">
                    <div className="d-flex justify-content-center mt-3 ">
                      <Link
                        to={`/${teamName}/apps/add-apps`}
                        className="all-add-buttons button rounded button-action btn btn-md text-white "
                      >
                        Add appgroups app
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="page__content-above">
                <div className="container-fluid px-0">
                  <div className="contextual-region block block--pagetitle bg-lighter py-4">
                    <div className="container">
                      <h3 className="js-quickedit-page-title page__title mb-0">
                        Appgroups Apps
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <table className="table--app-list responsive-enabled table">
                <thead className=" border-bottom">
                  <tr className="text-center align-middle  border-bottom">
                    <th className=" border-bottom">App. No. </th>
                    <th className=" border-bottom">Appgroups app name</th>
                    <th className=" border-bottom">Action</th>
                  </tr>
                </thead>
                <tbody className="text-center align-middle">
                  <tr className="text-center align-middle  ">
                    <td colSpan="3">
                      {apps.appGroupApps
                        ? "No apps found."
                        : "No apps found. Please add appgroups."}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      {/* Loading appgroup apps.. */}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!apps.appGroupApps || apps.appGroupApps.length === 0) {
    return (
      <Layout>
        <div>
          <Buttons />

          <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
            <div className="page">
              <div className="page__content-above">
                <div className="container-fluid px-0">
                  <div className="contextual-region block block--pagetitle bg-lighter py-4">
                    <div className="container">
                      <h1 className="js-quickedit-page-title page__title mb-0">
                        No apps found
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAppClick = (appName) => {
    dispatch(fetchAppDetails(teamName, appName));
  };

  if (isFetchingApps) {
    return (
      <Layout>
        <div>
          <Buttons />
          <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
            <div className="page">
              <div className="page__content-above">
                <div className="container-fluid px-0">
                  <div className="contextual-region block block--pagetitle bg-lighter py-4">
                    <div className="container">
                      <h3 className="js-quickedit-page-title page__title mb-0">
                        Loading appgroup apps...
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ marginTop: "120px" }}>
        <Buttons />
        <div style={{ marginTop: "50px" }}>
          <div className="dialog-off-canvas-main-canvas toolbar-icon-9 adminimal-admin-toolbar toolbar-tray-open toolbar-horizontal toolbar-fixed toolbar-loading fontyourface path--entity-team-collection user-logged-in path-teams">
            <div className="page">
              <div className="page__tasks">
                <div className="container">
                  <div className="contextual-region block block--starbucks-actions">
                    <div className="d-flex justify-content-center mt-3 ">
                      <Link
                        to={`/${teamName}/apps/add-apps`}
                        className="all-add-buttons button button-action btn btn-md text-white "
                      >
                        Add appgroups app
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="page__content-above">
                <div className="container-fluid px-0">
                  <div className="contextual-region block block--pagetitle bg-lighter py-4">
                    <div className="container">
                      <h3 className="js-quickedit-page-title page__title mb-0">
                        Appgroups Apps
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container py-3">
                <div className="row">
                  <div className="page__content col-md">
                    <div className="container table-responsive  ">
                      <table className="table--app-list responsive-enabled table">
                        <thead className=" border-bottom">
                          <tr className="text-center align-middle  border-bottom">
                            <th className=" border-bottom">App.No. </th>
                            <th className=" border-bottom">
                              Appgroups app name
                            </th>
                            <th className=" border-bottom">Action</th>
                          </tr>
                        </thead>
                        <tbody className="text-center align-middle">
                          {apps.appGroupApps && apps.appGroupApps.length > 0 ? (
                            apps.appGroupApps.map((appName, index) => (
                              <tr
                                key={appName.id}
                                className=" text-center align-middle  border-bottom"
                              >
                                <td
                                  className=" text-center align-middle  border-bottom align-content-center  "
                                  scope="row"
                                >
                                  {index + 1}
                                </td>
                                <td className=" text-center align-middle   border-bottom">
                                  <button
                                    className="rounded-3 text-center align-middle fw-bold "
                                    onClick={() => handleAppClick(appName.name)}
                                    style={{
                                      background: "none",
                                      border: "none",
                                      cursor: "pointer",
                                      color: "black",
                                    }}
                                  >
                                    <Link
                                      to={`/${teamName}/apps/${appName.name}`}
                                    >
                                      {appName.name}
                                    </Link>
                                  </button>
                                </td>
                                <td className="rounded-3 text-center align-middle  border-bottom">
                                  <AppDropdownComponent
                                    teamName={teamName}
                                    appName={appName.name}
                                  />
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="3">
                                {apps.appGroupApps
                                  ? "No apps found."
                                  : "Please add appgroups."}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamApps;
