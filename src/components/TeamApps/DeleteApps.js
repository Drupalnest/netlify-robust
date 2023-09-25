// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { updateAppDetails } from "../../redux/store"; // Assuming the correct path to the action
// import { Link } from "gatsby";

// const DeleteApps = ({ appName, teamName }) => {
//   const appDetails = useSelector((state) => state.app.appDetails);
//   const [verificationCode, setVerificationCode] = useState("");
//   const [isDeleted, setIsDeleted] = useState(false);
//   const dispatch = useDispatch();
//   console.log("appDetails", appDetails);

//   useEffect(() => {
//     // Fetch the app details here using the provided API endpoint
//     axios
//       .get(
//         `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Use the correct environment variable for the bearer token
//           },
//         }
//       )
//       .then((response) => {
//         dispatch(updateAppDetails(response.data)); // Dispatch the fetched app details to the Redux store
//       })
//       .catch((error) => {
//         console.error("Error fetching app details:", error);
//       });
//   }, [appName, teamName, dispatch]);

//   const handleDelete = (e) => {
//     e.preventDefault();

//     // Check if the verification code matches the app name
//     if (verificationCode === appDetails.name) {
//       axios
//         .delete(
//           `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Use the correct environment variable for the bearer token
//             },
//           }
//         )
//         .then((response) => {
//           if (response.status === 200) {
//             alert("Team App Deleted successfully");
//             setIsDeleted(true);
//           } else {
//             // Handle error if the deletion was not successful
//             setIsDeleted(false);
//           }
//         })
//         .catch((error) => {
//           // Handle error if the request fails
//           setIsDeleted(false);
//           console.error("Error deleting team app:", error);
//         });
//     } else {
//       alert("Verification code does not match the app name.");
//     }
//   };

//   if (!appDetails) {
//     return <div>Loading...</div>;
//   }

//   if (isDeleted) {
//     return (
//       <div>
//         <h2>Team app deleted successfully!</h2>
//         <Link to="/">Go back to home</Link>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <header className="page__header"></header>
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div />
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     Are you sure you want to delete the &nbsp;
//                     <em  >{appDetails.name}</em> team app?
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <main className="main" role="main">
//             <a id="main-content" tabIndex={-1} />
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div className="hidden" />

//                     <form
//                       className="team-app-delete-form team-app-confirm-form confirmation"
//                       onSubmit={handleDelete}
//                     >
//                       This action cannot be undone.
//                       <input type="hidden" className="form-control" />
//                       <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-verification-code js-form-item-verification-code form-group">
//                         <label className="js-form-required form-required">
//                           Type "
//                           <em  >{appDetails.name}</em>" to
//                           proceed
//                           <i className="fas fa-asterisk text-danger form-required__indicator" />
//                         </label>
//                         <input
//                           type="text"
//                           name="verification_code"
//                           value={verificationCode}
//                           onChange={(e) => setVerificationCode(e.target.value)}
//                           size={60}
//                           maxLength={128}
//                           className="required form-control"
//                           required="required"
//                         />
//                       </div>
//                       <div
                       
//                         className="form-actions js-form-wrapper form-wrapper"
                        
//                       >
//                         <button
//                           type="submit"
//                           name="deleteAppButton"
//                           className="button button--primary js-form-submit form-submit btn btn-primary"
//                         >
//                           Delete
//                         </button>
//                         <Link to="/" className="button">
//                           Cancel
//                         </Link>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteApps;

// import { Link } from "gatsby";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const DeleteApps = ({ appName, teamName }) => {
//   const appDetails = useSelector((state) => state.app.appDetails);
//   const [verificationCode, setVerificationCode] = useState("");
//   const [isDeleted, setIsDeleted] = useState(false);

//   useEffect(() => {
//     // Fetch the app details here (if needed) using the provided API endpoint
//     // For example:
//     // fetch(`https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`)
//     //   .then((response) => response.json())
//     //   .then((data) => setAppDetails(data))
//     //   .catch((error) => console.error("Error fetching app details:", error));
//   }, [appName, teamName]);

//   const handleDelete = (e) => {
//     e.preventDefault();

//     // Check if the verification code matches the app name
//     if (verificationCode === appName) {
//       // Make the DELETE request to delete the team app using Axios
//       console.log("Verification code:", verificationCode);
//       console.log("App name:", appName);
//       axios
//         .delete(
//           `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Use the correct environment variable for the bearer token
//             },
//           }
//         )
//         .then((response) => {
//           if (response.status === 200) {
//             // Team app deleted successfully
//             setIsDeleted(true);
//           } else {
//             // Handle error if the deletion was not successful
//             setIsDeleted(false);
//           }
//         })
//         .catch((error) => {
//           // Handle error if the request fails
//           setIsDeleted(false);
//           console.error("Error deleting team app:", error);
//         });
//     }
//   };

//   if (!appDetails) {
//     return <div>Loading...</div>;
//   }

//   if (isDeleted) {
//     return (
//       <div>
//         <h2>Team app deleted successfully!</h2>
//         <Link to="/">Go back to home</Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <form
//         className="team-app-delete-form team-app-confirm-form confirmation"
//         onSubmit={handleDelete}
//       >
//         <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-verification-code js-form-item-verification-code form-group">
//           <label
//             htmlFor="edit-verification-code"
//             className="js-form-required form-required"
//           >
//             Type "<em  >{appDetails.name}</em>" to proceed
//             <i className="fas fa-asterisk text-danger form-required__indicator" />
//           </label>
//           <input
//             type="text"
//             id="edit-verification-code"
//             name="verification_code"
//             value={verificationCode}
//             onChange={(e) => setVerificationCode(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           name="deleteAppButton"
//           className="button button--primary js-form-submit form-submit btn btn-primary"
//         >
//           Delete
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DeleteApps;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { updateAppDetails } from "../../redux/store"; // Assuming the correct path to the action
// import { Link } from "gatsby";

// const DeleteApps = ({ appName, teamName }) => {
//   const appDetails = useSelector((state) => state.app.appDetails);
//   const [verificationCode, setVerificationCode] = useState("");
//   const [isDeleted, setIsDeleted] = useState(false);
//   const dispatch = useDispatch();
//   console.log("appDetails",appDetails)

//   useEffect(() => {
//     // Fetch the app details here using the provided API endpoint
//     axios
//       .get(
//         `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Use the correct environment variable for the bearer token
//           },
//         }
//       )
//       .then((response) => {
//         dispatch(updateAppDetails(response.data)); // Dispatch the fetched app details to the Redux store
//       })
//       .catch((error) => {
//         console.error("Error fetching app details:", error);
//       });
//   }, [appName, teamName, dispatch]);

//   const handleDelete = (e) => {
//     e.preventDefault();

//     // Check if the verification code matches the app name
//     if (verificationCode === appDetails.name) {
//       axios
//         .delete(
//           `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Use the correct environment variable for the bearer token
//             },
//           }
//         )
//         .then((response) => {
//           if (response.status === 200) {
//             alert("Team App Deleted successfully");
//             setIsDeleted(true);
//           } else {
//             // Handle error if the deletion was not successful
//             setIsDeleted(false);
//           }
//         })
//         .catch((error) => {
//           // Handle error if the request fails
//           setIsDeleted(false);
//           console.error("Error deleting team app:", error);
//         });
//     } else {
//       alert("Verification code does not match the app name.");
//     }
//   };

//   if (!appDetails) {
//     return <div>Loading...</div>;
//   }

//   if (isDeleted) {
//     return (
//       <div>
//         <h2>Team app deleted successfully!</h2>
//         <Link to="/">Go back to home</Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <form
//         className="team-app-delete-form team-app-confirm-form confirmation"
//         onSubmit={handleDelete}
//       >
//         <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-verification-code js-form-item-verification-code form-group">
//           <label
//             htmlFor="edit-verification-code"
//             className="js-form-required form-required"
//           >
//             Type "<em  >{appDetails.name}</em>" to proceed
//             <i className="fas fa-asterisk text-danger form-required__indicator" />
//           </label>
//           <input
//             type="text"
//             id="edit-verification-code"
//             name="verification_code"
//             value={verificationCode}
//             onChange={(e) => setVerificationCode(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           name="deleteAppButton"
//           className="button button--primary js-form-submit form-submit btn btn-primary"
//         >
//           Delete
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DeleteApps;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeamApp,fetchAppDetails,fetchApps } from "../../redux/store"; // Import your deleteTeamApp action from Redux
import { Link, navigate } from "gatsby";
import Layout from "../Layout";
import AppsButton from "./AppsButton";



const DeleteApps = () => {
  // const [companyName, setCompanyName] = useState("");
  const [appName, setAppName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch(); // Hook to dispatch actions

  // Replace 'teamDetails' with your actual selector for the team details from Redux
//  const teamDetails = useSelector((state) => state.teamDetails);
//   console.log("teamDetails",teamDetails)

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const teamName = appDetailsData.appGroup;
//   console.log("teamName", teamName);


//   const appNames = appDetailsData.name;
//   console.log("appNames", appNames);

const appDetailsData = useSelector(
  (state) => state.appDetailsData.appDetailsData
);
console.log("appDetailsData", appDetailsData);

const isFetching = appDetailsData ? appDetailsData.loading : true; // Handle null value


const teamName = appDetailsData ? appDetailsData.appGroup : "";
console.log("teamName", teamName);


const appNames = appDetailsData ? appDetailsData.name : "";

// console.log("appData",appData)

console.log("appNames", appNames);




  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (appNames !== appDetailsData.name) {
      setErrorMessage("Incorrect app name. Please type the correct app name.");
      return;
    }

    try {
     
      await dispatch(deleteTeamApp(teamName, appName));
     
      setAppName("");
      // setCompanyName("");
      setErrorMessage("");
      alert("Appgroups apps deleted successfully");
      dispatch(fetchApps(teamName));
      navigate("/apps");
    } catch (error) {
      
      setErrorMessage(`Error deleting appgroup app: ${error.message}`);
    }
  };

  if (!appDetailsData || (appDetailsData && isFetching)) {
    return (
      <Layout>
        <div>
        <AppsButton />
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      Loading appgroups appdetails...
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

  return (
    <Layout>
    <AppsButton/>
    <div>
      <div className="page">
        <div className="page__content-above">
          {/* ... Rest of the code ... */}
        </div>
        <div className="dialog-off-canvas-main-canvas">
          <div className="container">
            <form
              className="team-delete-form team-confirm-form confirmation"
              onSubmit={handleFormSubmit}
            >
              <strong>
                All appgroups app, credentials, and team membership information will be
                deleted.
              </strong>
              This action cannot be undone.
              <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-verification-code js-form-item-verification-code form-group">
                <label
                  htmlFor="edit-verification-code"
                  className="js-form-required form-required"
                >
                  Type "<em  >{appDetailsData.name}</em>" to
                  proceed
                  <i className="fas fa-asterisk text-danger form-required__indicator" />
                </label>
                <input
                  type="text"
                  size={60}
                  maxLength={128}
                  className="required form-control"
                  required="required"
                  aria-required="true"
                  id="appName"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                />
              </div>
              <div className="form-actions js-form-wrapper form-wrapper">
                <button
                  type="submit"
                  className="button button--primary js-form-submit form-submit btn btn-primary"
                >
                  Delete appgroups App
                </button>
                <Link to="/apps" className="button">
                  Cancel
                </Link>
              </div>
            </form>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default DeleteApps;
