// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../../../components/Layout";
// import AppsButton from "./AppsButton";
// import {
//   fetchTeamDetails,
//   fetchAppDetails,
//   updateAppDetails,
//   appDetails,
//   trackEvent,
// } from "../../../redux/store";
// import "../../../style/popup.css";
// import { BsChevronDown, BsChevronUp } from "react-icons/bs";
// //import "../../../styles/popup.css";
// import { Link, navigate } from "gatsby";
// import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
// //import "./viewstyle.css";
// import DropDownDark from "../../../images/DropDownDark.svg";
// import { ToastContainer, toast } from "react-toastify";

// const ViewApp = () => {
//   const dispatch = useDispatch();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const [showDropdown, setShowDropdown] = useState({});

//   const toggleDropdown = (credentialKey) => {
//     setDropdownOpen(!dropdownOpen);
//     setShowDropdown((prevState) => ({
//       ...prevState,
//       [credentialKey]: !prevState[credentialKey],
//     }));
//   };
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );

//   const userName = loginResponse?.current_user?.name;
//   console.log("userName", userName);
//   // const toggleDropdown = () => {
//   //   setDropdownOpen(!dropdownOpen);
//   // };
//   const getImageSource = () => {
//     if (showDropdown) {
//       // Use the open dropdown icon (reversed)
//       return "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Ctitle%3E03_Iconography%2FDefault%2FDrop_Down_Dark%3C%2Ftitle%3E%0A%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%2203_Iconography%2FDefault%2FDrop_Down_Dark%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Crect%20id%3D%22Bounds%22%20fill%3D%22%23FF0000%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cpolyline%20id%3D%22Path-5%22%20stroke%3D%22%23666666%22%20stroke-width%3D%221.75%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(12.078668%2C%2011.959429)%20rotate(-90.000000)%20translate(-12.078668%2C%20-11.959429)%22%20points%3D%2214.5577155%206.88076112%209.5192385%2011.9192381%2014.6380971%2017.0380967%22%3E%3C%2Fpolyline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"; // Replace with your open dropdown SVG data
//     } else {
//       // Use the closed dropdown icon

//       return "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Ctitle%3E03_Iconography%2FDefault%2FDrop_Down_Dark%3C%2Ftitle%3E%0A%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%2203_Iconography%2FDefault%2FDrop_Down_Dark%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Crect%20id%3D%22Bounds%22%20fill%3D%22%23FF0000%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cpolyline%20id%3D%22Path-5%22%20stroke%3D%22%23666666%22%20stroke-width%3D%221.75%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(12.078668%2C%2011.959429)%20rotate(-90.000000)%20translate(-12.078668%2C%20-11.959429)%22%20points%3D%2214.5577155%206.88076112%209.5192385%2011.9192381%2014.6380971%2017.0380967%22%3E%3C%2Fpolyline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"; // Replace with your closed dropdown SVG data
//     }
//   };

//   // const teamDetails = useSelector((state) => state.teamDetails);
//   // console.log("teamDetails",teamDetails)

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const isFetching = appDetailsData ? appDetailsData.loading : true; // Handle null value

//   const teamName = appDetailsData ? appDetailsData.appGroup : "";
//   console.log("teamName", teamName);

//   const appName = appDetailsData ? appDetailsData.name : "";

//   // console.log("appData",appData)

//   console.log("appName", appName);

//   // useEffect(() => {
//   //   // Fetch updated app details after the component mounts
//   //   dispatch(fetchAppDetails(teamName, appName));
//   // }, [dispatch, teamName, appName]);

//   const [showSecrets, setShowSecrets] = useState({});
//   const [showconsumerkey, setshowconsumerkey] = useState({});
//   const [showKey, setShowKey] = useState(false);
//   const [showKey1, setShowKey1] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [copyMessage, setCopyMessage] = useState("");
//   const textInputRef = useRef(null);
//   const [copyMessages, setCopyMessages] = useState({});
//   const [showConfirmButton, setShowConfirmButton] = useState(false);
//   // const copyToClipboard = (text, index) => {
//   //   navigator.clipboard.writeText(text);
//   //   setCopyMessage("Copied!");
//   //   setCopiedIndexes([...copiedIndexes, index]);
//   //   setTimeout(() => {
//   //     setCopyMessage("");
//   //   }, 2000);
//   // };

//   // const copyToClipboard = async (text, index) => {
//   //   try {
//   //     await navigator.clipboard.writeText(text);
//   //     setCopyMessage("");

//   //     // dispatch(trackEvent({
//   //     //   username: userName,
//   //     //   timestamp: new Date(),
//   //     //   operations: `${appName} API key ${consumerKey} and secret copied`,
//   //     // }));

//   //     setTimeout(() => {
//   //       setCopyMessage("");
//   //     }, 2000);
//   //   } catch (error) {
//   //     console.error("Error copying to clipboard:", error);
//   //     // Handle the error here if needed
//   //   }
//   // };

//   const copyToClipboard = async (
//     text,
//     identifier,
//     consumerKey,
//     consumerSecret
//   ) => {
//     try {
//       await navigator.clipboard.writeText(text);

//       if (identifier === "consumerKey") {
//         // setCopyMessage("Consumer Key Copied!");
//         setCopyMessage();

//         dispatch(
//           trackEvent({
//             username: userName,
//             timestamp: new Date(),
//             operations: `Consumer Key copied from ${appName} Appgroup Apps in ${teamName} Appgroup`,
//           })
//         );
//       } else if (identifier === "consumerSecret") {
//         //setCopyMessage("Consumer Secret Copied!");
//         setCopyMessage();

//         dispatch(
//           trackEvent({
//             username: userName,
//             timestamp: new Date(),
//             operations: `Consumer Secret copied from ${appName} Appgroup Apps in ${teamName} Appgroup`,
//           })
//         );
//       }

//       setTimeout(() => {
//         setCopyMessage("");
//       }, 2000);
//     } catch (error) {
//       console.error("Error copying to clipboard:", error);
//       // Handle the error here if needed
//     }
//   };

//   // const copyToClipboard = async (consumerKey, consumerSecret) => {
//   //   try {
//   //     const textToCopy = `${consumerKey}\n${consumerSecret}`;
//   //     await navigator.clipboard.writeText(textToCopy);
//   //     setCopyMessage("Copied!");

//   //     // Dispatch your action here
//   //     dispatch(trackEvent({
//   //       username: userName,
//   //       timestamp: new Date(),
//   //       operations: `${appName} API key ${consumerKey} and secret copied`,
//   //     }));
//   //   } catch (error) {
//   //     console.error("Error copying to clipboard:", error);
//   //   }
//   // };

//   function customFormatTimestamp(timestamp) {
//     if (!timestamp) {
//       return "N/A";
//     }

//     const customDate = new Date(parseInt(timestamp));
//     if (!isNaN(customDate)) {
//       const now = new Date();
//       const diff = now - customDate;

//       const seconds = Math.floor(diff / 1000);
//       const minutes = Math.floor(seconds / 60);
//       const hours = Math.floor(minutes / 60);
//       const days = Math.floor(hours / 24);
//       const weeks = Math.floor(days / 7);
//       const months = Math.floor(days / 30); // Approximation, not precise
//       const years = Math.floor(months / 12);
//       const timeZone = "UTC";

//       if (years >= 1) {
//         const remainingMonths = months % 12;
//         const remainingWeeks = Math.floor((days % 30) / 7);
//         const remainingDays = days % 7;
//         return `${years} years ${remainingMonths} months`;
//       } else if (months >= 1) {
//         const remainingWeeks = Math.floor((days % 30) / 7);
//         const remainingDays = days % 7;
//         return `${months} months ${remainingWeeks} weeks`;
//       } else if (weeks >= 1) {
//         const remainingDays = days % 7;
//         return `${weeks} weeks ${remainingDays} days ago`;
//       } else if (days >= 1) {
//         const remainingHours = hours % 24;
//         return `${days} days ${remainingHours} hours ago`;
//       } else if (hours >= 1) {
//         const remainingMinutes = minutes % 60;
//         return `${hours} hours ${remainingMinutes} minutes ago`;
//       } else if (minutes >= 1) {
//         const remainingSeconds = seconds % 60;
//         return `${minutes} minutes ${remainingSeconds} seconds ago`;
//       } else {
//         return `${seconds} seconds ago`;
//       }
//     } else {
//       return "Invalid Date";
//     }
//   }

//   function customFormatTDate(timestamp) {
//     if (!timestamp) {
//       return "N/A";
//     }

//     const customDateObject = new Date(parseInt(timestamp));
//     if (!isNaN(customDateObject)) {
//       const options = {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         second: "numeric",
//         hour12: true,
//         timeZone: "UTC",
//       };

//       const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
//         customDateObject
//       );
//       return `${formattedDate} (UTC)`;
//     } else {
//       return "Invalid Date";
//     }
//   }

//   function customFormatDateTimetamp(timestamp) {
//     const customDate = new Date(parseInt(timestamp));

//     if (isNaN(customDate)) {
//       return "Invalid Date";
//     }

//     const now = new Date();
//     const diff = customDate - now;

//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const weeks = Math.floor(days / 7);
//     const months = Math.floor(weeks / 4.4); // Approximately 4.4 weeks in a month
//     const remainingWeeks = Math.floor(weeks % 4.8);

//     const options = {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       timeZone: "UTC", // Specify the timeZone as 'UTC'
//     };
//     const dateObject = customDate;

//     return `${new Intl.DateTimeFormat("en-US", options).format(
//       dateObject
//     )} (UTC) in ${months} months ${remainingWeeks} weeks`;
//   }

//   const timestamp = Date.now() + 365 * 24 * 60 * 60 * 1000;

//   const formattedDate = customFormatDateTimetamp(timestamp);

//   console.log(formattedDate);

//   const generateRandomSecret = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let key = "";
//     for (let i = 0; i < 64; i++) {
//       key += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return key;
//   };

//   const generateRandomKey = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let secret = "";
//     for (let i = 0; i < 48; i++) {
//       secret += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return secret;
//   };

//   const togglePopup = async () => {
//     setShowPopup(!showPopup);
//     setShowConfirmButton(false); // Hide the button when toggling the popup
//     setTimeout(() => {
//       setShowConfirmButton(true); // Show the button after 1 second
//     }, 1500);
//   };

//   const handleConfirmClick = async () => {
//     try {
//       const oneYearInMilliseconds = 365 * 24 * 60 * 60;
//       const randomKey = generateRandomKey();
//       const randomSecret = generateRandomSecret();

//       const tokenResponse = await fetch(
//         "https://robustapihub.netlify.app/.netlify/functions/a"
//       );
//       const { accessToken } = await tokenResponse.json();
//       const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys`;
//       const bearerToken = accessToken;

//       const response = await axios.post(
//         apiUrl,
//         {
//           consumerKey: randomKey,
//           consumerSecret: randomSecret,
//           expiresInSeconds: oneYearInMilliseconds,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${bearerToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       dispatch(fetchAppDetails(teamName, appName));

//       dispatch(
//         trackEvent({
//           // timestamp: new Date(),
//           // operation: "Appgroup App Key Added",
//           // //button: "Add Member Button",
//           // consumerKey: randomKey,
//           // consumerSecret: randomSecret,
//           // teamName: teamName,
//           // appName: appName,

//           username: userName,
//           timestamp: new Date(),
//           operations: `${appName}  API key added`,
//         })
//       );
//       //alert("API key created successfully");
//     } catch (error) {
//       //alert("Error creating API key: " + error.message);
//       toast.error("Error creating API key: " + error.message);
//     }
//   };

//   useEffect(() => {
//     const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
//       (credential) =>
//         !credential.apiProducts ? true : credential.apiProducts.length === 0
//     );

//     credentialsWithNoApiProducts?.sort(
//       (cred1, cred2) => parseInt(cred2.createdAt) - parseInt(cred1.createdAt)
//     );

//     const latestCredential = credentialsWithNoApiProducts?.[0];
//     const latestConsumerKey = latestCredential?.consumerKey || null;

//     console.log("Latest Consumer Key without apiProducts:", latestConsumerKey);
//   }, [appDetailsData]);

//   const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
//     (credential) =>
//       !credential.apiProducts ? true : credential.apiProducts.length === 0
//   );

//   credentialsWithNoApiProducts?.sort(
//     (cred1, cred2) => parseInt(cred2.createdAt) - parseInt(cred1.createdAt)
//   );

//   const latestCredential = credentialsWithNoApiProducts?.[0];
//   const latestConsumerKey = latestCredential?.consumerKey || null;

//   console.log("Latest Consumer Key without apiProducts:", latestConsumerKey);

//   let apiProducts = [];

//   for (let i = 0; i < (appDetailsData?.credentials?.length ?? 0); i++) {
//     const credential = appDetailsData.credentials[i];
//     apiProducts = credential?.apiProducts
//       ? credential.apiProducts.map((product) => product.apiproduct)
//       : [];

//     if (apiProducts.length > 0) {
//       break;
//     }
//   }

//   console.log(
//     "API Products from First Credential with apiProducts:",
//     apiProducts
//   );

//   const handleAddAPIProduct = async () => {
//     const tokenResponse = await fetch(
//       "https://robustapihub.netlify.app/.netlify/functions/a"
//     );
//     const { accessToken } = await tokenResponse.json();
//     const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys/${latestConsumerKey}`;
//     const bearerToken = accessToken;

//     const requestBody = {
//       apiProducts: apiProducts,
//     };

//     try {
//       await axios.post(apiUrl, requestBody, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });
//       dispatch(fetchAppDetails(teamName, appName));
//       // dispatch(
//       //   trackEvent({
//       //     timestamp: new Date(),
//       //     operation: "Appgroup App Api Product Added",
//       //     appgroupName: teamName,
//       //     appName: appName,
//       //     selectedApiProduct: apiProducts,
//       //   })
//       // );
//       //alert("API key and product added successfully");
//       toast.success("API key and product added successfully!");
//       setShowPopup(false);
//     } catch (error) {
//       //alert("Error adding API product: " + error);
//       toast.error("Error adding API product: " + error);
//     }
//   };

//   const toggleVisibility = (key) => {
//     setShowSecrets((prevShowSecrets) => ({
//       ...prevShowSecrets,
//       [key]: !prevShowSecrets[key],
//     }));

//     setShowKey((prevShowKey) => ({
//       ...prevShowKey,
//       [key]: !prevShowKey[key],
//     }));
//   };

//   const toggleVisibility2 = (key) => {
//     setshowconsumerkey((prevShowConsumer) => ({
//       ...prevShowConsumer,
//       [key]: !prevShowConsumer[key],
//     }));
//     setShowKey1((prevShowkey) => ({
//       ...prevShowkey,
//       [key]: !prevShowkey[key],
//     }));
//   };

//   const hideKey = (key) => {
//     return "•".repeat(15);
//   };

//   const handleRemovekey = async (teamName, appName, consumerKey) => {
//     const tokenResponse = await fetch(
//       "https://robustapihub.netlify.app/.netlify/functions/a"
//     );
//     const { accessToken } = await tokenResponse.json();
//     const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}`;
//     const bearerToken = accessToken;

//     try {
//       await axios.delete(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });
//       dispatch(
//         trackEvent({
//           // timestamp: new Date(),
//           // operation: "Appgroup App Consumer Key Deleted",
//           // teamName: teamName,
//           // appName: appName,
//           // selectedApiProduct: apiProducts,
//           // consumerKey: consumerKey,

//           username: userName,
//           timestamp: new Date(),
//           operations: `${teamName} Appgroup updated, ${consumerKey} key is deleted from ${appName} Appgroup Apps`,
//         })
//       );
//       dispatch(fetchAppDetails(teamName, appName));
//       //alert("Key removed successfully");
//       toast.success("Key removed successfully!");
//     } catch (error) {
//       //alert("Error removing key: " + error);
//       toast.error("Error removing key: " + error);
//     }
//   };

//   const handleRevokeKey = async (teamName, appName, consumerKey) => {
//     const tokenResponse = await fetch(
//       "https://robustapihub.netlify.app/.netlify/functions/a"
//     );
//     const { accessToken } = await tokenResponse.json();
//     const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
//     const bearerToken = accessToken;

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 204) {
//         // Key revoked successfully

//         dispatch(fetchAppDetails(teamName, appName));

//         dispatch(
//           trackEvent({
//             // timestamp: new Date(),
//             // operation: "Appgroup App Consumer Key Revoked",
//             // teamName: teamName,
//             // appName: appName,
//             // selectedApiProduct: apiProducts,
//             // consumerKey: consumerKey,

//             username: userName,
//             timestamp: new Date(),
//             operations: `${teamName} Appgroup updated, ${consumerKey} key is revoked from ${appName} Appgroups Apps`,
//           })
//         );

//         //alert("Key revoked successfully");
//         toast.success("Key revoked successfully!");
//       } else {
//         //alert("Key revocation was not successful");
//         toast.error("Key revocation was not successful");
//       }
//     } catch (error) {
//       //alert("Error revoking key: " + error.message);
//       toast.error("Error revoking key: " + error.message);
//     }
//   };

//   if (!appDetailsData || (appDetailsData && isFetching)) {
//     return (
//       <Layout>
//         <div style={{ marginTop: "110px" }}>
//           <AppsButton />
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div className="container">
//                     <h3 className="js-quickedit-page-title page__title mb-0">
//                       Loading appgroups appdetails...
//                     </h3>
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
//       <div style={{ marginTop: "110px" }}>
//         <AppsButton />

//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div
//                     data-contextual-id="block:block=pagetitle:langcode=en"
//                     data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                   />
//                   <div className="container">
//                     <h3 className="js-quickedit-page-title page__title mb-0">
//                       {appDetailsData.name} team app
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <main className="main" role="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-3">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
//                         <div
//                           className="tab-pane show active"
//                           // style={{ border: "1px solid red" }}
//                         >
//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">Details</h4>
//                             <div className="card-body">
//                               <div className="container">
//                                 <div className="row">
//                                   <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
//                                     <div
//                                       className="field__label  my-1"
//                                       style={{ width: "100%" }}
//                                     >
//                                       Team App status
//                                     </div>
//                                   </div>
//                                   <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
//                                     <div className="field__item  my-1">
//                                       <span className="badge badge-success">
//                                         {appDetailsData.status}
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="container">
//                                 <div className="row">
//                                   <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
//                                     <div
//                                       className="field__label  my-1 "
//                                       style={{ width: "100%" }}
//                                     >
//                                       Created
//                                     </div>
//                                   </div>
//                                   <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
//                                     <div className="field__item  my-1">
//                                       {appDetailsData.createdAt
//                                         ? customFormatTimestamp(
//                                             appDetailsData.createdAt
//                                           )
//                                         : "N/A"}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>

//                               <div className="container">
//                                 <div className="row">
//                                   <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
//                                     <div
//                                       className="field__label  my-1 "
//                                       style={{ width: "100%" }}
//                                     >
//                                       Last updated
//                                     </div>
//                                   </div>
//                                   <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
//                                     <div className="field__item  my-1">
//                                       {appDetailsData.lastModifiedAt
//                                         ? customFormatTimestamp(
//                                             appDetailsData.lastModifiedAt
//                                           )
//                                         : "N/A"}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="card apigee-entity--app__credentials">
//                             <div className="container">
//                               <div className="row">
//                                 <div className="col-6">
//                                   <h4 className="card-header bg-white">
//                                     Credentials
//                                   </h4>
//                                 </div>
//                                 <div className="col-6 d-flex justify-content-end align-items-center">
//                                   <button
//                                     className="all-buttons-color text-white use-ajax button btn  btn-md"
//                                     onClick={() => {
//                                       togglePopup();
//                                       handleConfirmClick();
//                                     }}
//                                   >
//                                     Add key
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>

//                             {showPopup && (
//                               <div className="popup-overlay">
//                                 <div className="popup">
//                                   <span className="close" onClick={togglePopup}>
//                                     &times;
//                                   </span>
//                                   <div className="popup-content">
//                                     <h2>Add Key</h2>
//                                     <p>
//                                       Do you really want to create a new API key
//                                       for this team app?
//                                     </p>
//                                     <label>
//                                       Set an expiry date:
//                                       <select>
//                                         <option>1 Year</option>
//                                         {/* Add other options here */}
//                                       </select>
//                                     </label>
//                                     <div className="popup-buttons">
//                                       <button
//                                         className="popup-button cancel-button"
//                                         onClick={togglePopup}
//                                       >
//                                         Cancel
//                                       </button>
//                                       {showConfirmButton && (
//                                         <button
//                                           className="all-buttons-color text-white  btn btn-md "
//                                           onClick={handleAddAPIProduct}
//                                         >
//                                           Confirm
//                                         </button>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )}

//                             <div
//                               className="card-body  "
//                               style={{
//                                 //border: "7px solid green",
//                                 fontSize: "16px",
//                               }}
//                             >
//                               {appDetailsData.credentials?.length > 0 ? (
//                                 appDetailsData.credentials.map(
//                                   (credential, index) => {
//                                     if (credential.status === "approved") {
//                                       const credentialKey =
//                                         credential.consumerKey;
//                                       return (
//                                         <fieldset
//                                           className=" d-flex  container mb-2 border-bottom "
//                                           key={index}
//                                           //style={{ border: "4px solid green" }}
//                                         >
//                                           <div
//                                             className="w-50 "
//                                             style={
//                                               {
//                                                 //border: "2px solid blue",
//                                                 //width: "40%",
//                                                 //fontSize: "15px",
//                                               }
//                                             }
//                                           >
//                                             <div className="d-flex flex-row justify-content-between ">
//                                               <div
//                                                 className=""
//                                                 style={{ width: "160px" }}
//                                               >
//                                                 <label className="fw-bold">
//                                                   Consumer Key
//                                                 </label>
//                                               </div>

//                                               <div className=" d-flex flex-row">
//                                                 {showconsumerkey[
//                                                   credential.consumerKey
//                                                 ] ? (
//                                                   <div
//                                                     className="text-center"
//                                                     style={{
//                                                       maxHeight: "35px",
//                                                       overflowY: "auto",
//                                                       width: "200px",
//                                                     }}
//                                                   >
//                                                     {credential.consumerKey}
//                                                   </div>
//                                                 ) : (
//                                                   <div className="">
//                                                     {hideKey(
//                                                       credential.consumerKey
//                                                     )}
//                                                   </div>
//                                                 )}
//                                               </div>

//                                               <div className="d-flex flex-row justify-content-between ">
//                                                 <span
//                                                   className="mx-3"
//                                                   style={{
//                                                     cursor: "pointer",
//                                                   }}
//                                                   onClick={() =>
//                                                     toggleVisibility2(
//                                                       credential.consumerKey
//                                                     )
//                                                   }
//                                                 >
//                                                   {showKey1 ? (
//                                                     <VisibilityOffOutlinedIcon
//                                                       style={{
//                                                         fontSize: "1.2rem",
//                                                         color: "#f46223",
//                                                       }}
//                                                     />
//                                                   ) : (
//                                                     <RemoveRedEyeOutlinedIcon
//                                                       style={{
//                                                         fontSize: "1.2rem",
//                                                         color: "#f46223",
//                                                       }}
//                                                     />
//                                                   )}
//                                                 </span>

//                                                 <span
//                                                   onClick={() =>
//                                                     copyToClipboard(
//                                                       credential.consumerKey,
//                                                       "consumerKey"
//                                                     )
//                                                   }
//                                                   style={{
//                                                     cursor: "pointer",
//                                                   }}
//                                                   title="Click to copy"
//                                                 >
//                                                   <ContentCopyOutlinedIcon
//                                                     style={{
//                                                       fontSize: "1.2rem",
//                                                       color: "#f46223",
//                                                     }}
//                                                   />
//                                                 </span>
//                                                 <span>{copyMessage}</span>
//                                               </div>
//                                             </div>

//                                             <div className="d-flex flex-row justify-content-between ">
//                                               <div
//                                                 className=""
//                                                 style={{ width: "160px" }}
//                                               >
//                                                 <label className="fw-bold">
//                                                   Consumer Secret
//                                                 </label>
//                                               </div>

//                                               <div className=" d-flex flex-row ">
//                                                 {showSecrets[
//                                                   credential.consumerSecret
//                                                 ] ? (
//                                                   <div
//                                                     className="text-center"
//                                                     style={{
//                                                       maxHeight: "30px",
//                                                       overflowY: "auto",
//                                                       width: "200px",
//                                                     }}
//                                                   >
//                                                     {credential.consumerSecret}
//                                                   </div>
//                                                 ) : (
//                                                   <div className="">
//                                                     {hideKey(
//                                                       credential.consumerSecret
//                                                     )}
//                                                   </div>
//                                                 )}
//                                               </div>

//                                               <div className="d-flex flex-row justify-content-between ">
//                                                 <span
//                                                   className="mx-3"
//                                                   style={{
//                                                     cursor: "pointer",
//                                                   }}
//                                                   onClick={() =>
//                                                     toggleVisibility(
//                                                       credential.consumerSecret
//                                                     )
//                                                   }
//                                                 >
//                                                   {showKey1 ? (
//                                                     <VisibilityOffOutlinedIcon
//                                                       style={{
//                                                         fontSize: "1.2rem",
//                                                         color: "#f46223",
//                                                       }}
//                                                     />
//                                                   ) : (
//                                                     <RemoveRedEyeOutlinedIcon
//                                                       style={{
//                                                         fontSize: "1.2rem",
//                                                         color: "#f46223",
//                                                       }}
//                                                     />
//                                                   )}
//                                                 </span>

//                                                 <span
//                                                   onClick={() =>
//                                                     copyToClipboard(
//                                                       credential.consumerSecret,
//                                                       "consumerSecret"
//                                                     )
//                                                   }
//                                                   style={{
//                                                     cursor: "pointer",
//                                                   }}
//                                                   title="Click to copy"
//                                                 >
//                                                   <ContentCopyOutlinedIcon
//                                                     style={{
//                                                       fontSize: "1.2rem",
//                                                       color: "#f46223",
//                                                     }}
//                                                   />
//                                                 </span>
//                                                 <span>{copyMessage}</span>
//                                               </div>
//                                             </div>

//                                             <div className="d-flex flex-row ">
//                                               <div
//                                                 className=""
//                                                 style={{ width: "185px" }}
//                                               >
//                                                 <label> Issued </label>
//                                               </div>
//                                               <div className="ml-5">
//                                                 {credential.issuedAt
//                                                   ? customFormatTDate(
//                                                       credential.issuedAt
//                                                     )
//                                                   : "N/A"}
//                                               </div>
//                                             </div>

//                                             <div className="d-flex flex-row justify-content-between">
//                                               <div
//                                                 className=""
//                                                 style={{
//                                                   width: "160px",
//                                                 }}
//                                               >
//                                                 <label> Expires </label>
//                                               </div>
//                                               <div
//                                                 style={{
//                                                   marginLeft: "135px",
//                                                 }}
//                                               >
//                                                 {credential.expiresAt
//                                                   ? customFormatDateTimetamp(
//                                                       credential.expiresAt
//                                                     )
//                                                   : "N/A"}
//                                               </div>
//                                             </div>

//                                             <div className=" d-flex flex-row justify-content-start ">
//                                               <div
//                                                 style={{ width: "190px" }}
//                                                 className=""
//                                               >
//                                                 <label> Key Status </label>
//                                               </div>
//                                               <div
//                                                 className="justify-content-start "
//                                                 style={{
//                                                   marginLeft: "50px",
//                                                 }}
//                                               >
//                                                 <span className="badge badge-success">
//                                                   {credential.status}
//                                                 </span>
//                                               </div>
//                                             </div>
//                                           </div>

//                                           <div
//                                             className="item-property w-50   "
//                                             // style={{ marginLeft: "45px" }}
//                                             style={
//                                               {
//                                                 // border: "5px solid pink",
//                                                 //display: "flex",
//                                                 //flexDirection: "column",
//                                                 //width: "60%",
//                                               }
//                                             }
//                                           >
//                                             <div
//                                               className=""
//                                               style={
//                                                 {
//                                                   //marginLeft: "465px",
//                                                   //border: "5px solid green",
//                                                 }
//                                               }
//                                             >
//                                               <div
//                                                 className="d-flex justify-content-end  "
//                                                 style={
//                                                   {
//                                                     //display: "flex",
//                                                     //alignItems: "center",
//                                                     //border:"2px solid red"
//                                                   }
//                                                 }
//                                               >
//                                                 <button
//                                                   className="custom-button all-buttons-color text-white border btn btn-sm m-0 border-0"
//                                                   onClick={() =>
//                                                     handleRevokeKey(
//                                                       teamName,
//                                                       appDetailsData.name,
//                                                       credential.consumerKey
//                                                     )
//                                                   }
//                                                 >
//                                                   Revoke
//                                                 </button>

//                                                 <div
//                                                   style={{
//                                                     position: "relative",
//                                                   }}
//                                                 >
//                                                   <button
//                                                     // className="dropdown-toggle"

//                                                     onClick={() =>
//                                                       toggleDropdown(
//                                                         credentialKey
//                                                       )
//                                                     }
//                                                     className="all-add-buttons text-white border border-0 m-0"
//                                                     style={{
//                                                       width: "25px",
//                                                       height: "35px",
//                                                       display: "flex",
//                                                       alignItems: "center",
//                                                       justifyContent: "center",
//                                                     }}
//                                                   >
//                                                     {/* &#9660; */}
//                                                     {/* {DropDownDark} */}
//                                                     <button
//                                                       onClick={toggleDropdown}
//                                                       className="all-add-buttons text-white border-0 m-0"
//                                                     >
//                                                       {dropdownOpen ? (
//                                                         <BsChevronUp />
//                                                       ) : (
//                                                         <BsChevronDown />
//                                                       )}
//                                                     </button>
//                                                   </button>
//                                                 </div>
//                                               </div>

//                                               {showDropdown[credentialKey] && (
//                                                 <div
//                                                   className=" d-flex justify-content-end "
//                                                   style={
//                                                     {
//                                                       //position: "absolute",
//                                                       //width: "114px",
//                                                       //textAlign: "left",
//                                                       //border: "1px solid blue",
//                                                       //overflow: "auto",
//                                                       //zIndex: 1, // Ensure the dropdown appears above other content
//                                                     }
//                                                   }
//                                                 >
//                                                   <button
//                                                     className="all-buttons-color text-white btn btn-sm mr-4 m-0"
//                                                     style={{
//                                                       // width: "114px",
//                                                       //textAlign: "left",
//                                                       position: "absolute",
//                                                       zIndex: 1,
//                                                     }}
//                                                     onClick={() => {
//                                                       const removePath = `/${teamName}/apps/${appName}/remove?team=${teamName}&appName=${appName}&consumerKey=${credential.consumerKey}`;
//                                                       setShowDropdown(false);
//                                                       navigate(removePath);
//                                                     }}
//                                                   >
//                                                     Delete
//                                                   </button>
//                                                 </div>
//                                               )}
//                                             </div>

//                                             <div
//                                               className=""
//                                               style={
//                                                 {
//                                                   //marginRight: "200px",
//                                                   //border: "1px solid red",
//                                                   //width: "600px",
//                                                 }
//                                               }
//                                             >
//                                               <label
//                                                 className="ml-5"
//                                                 //style={{ marginLeft: "70px" }}
//                                               >
//                                                 Products
//                                               </label>
//                                               {credential &&
//                                               credential.apiProducts &&
//                                               credential.apiProducts.length >
//                                                 0 ? (
//                                                 <div className="">
//                                                   {credential.apiProducts.map(
//                                                     (product, productIndex) => (
//                                                       <div
//                                                         className=" "
//                                                         key={productIndex}
//                                                       >
//                                                         <div className=" d-flex justify-content-between   ">
//                                                           <span className="ml-5">
//                                                             {product.apiproduct}
//                                                           </span>

//                                                           <div className="mr-5">
//                                                             <span className="badge badge-success ">
//                                                               {product.status
//                                                                 ? "Enabled"
//                                                                 : "Disabled"}
//                                                             </span>
//                                                           </div>
//                                                         </div>
//                                                       </div>
//                                                     )
//                                                   )}
//                                                 </div>
//                                               ) : (
//                                                 <p
//                                                   style={{
//                                                     marginLeft: "32px",
//                                                   }}
//                                                 >
//                                                   No API products found for this
//                                                   credential.
//                                                 </p>
//                                               )}
//                                             </div>
//                                           </div>
//                                         </fieldset>
//                                       );
//                                     }
//                                   }
//                                 )
//                               ) : (
//                                 <p style={{ marginLeft: "32px" }}>
//                                   No credentials found for this app.
//                                 </p>
//                               )}
//                             </div>
//                           </div>

//                           <div className="card apigee-entity--app__credentials">
//                             <details className="js-form-wrapper form-wrapper card bg-lighter mb-3">
//                               <summary
//                                 role="button"
//                                 aria-expanded="false"
//                                 aria-pressed="false"
//                                 className="card-header bg-lighter"
//                               >
//                                 Revoked keys (
//                                 {
//                                   appDetailsData.credentials.filter(
//                                     (credential) =>
//                                       credential.status === "revoked"
//                                   ).length
//                                 }
//                                 )
//                               </summary>

//                               <div
//                                 className="card-body pb-0"
//                                 // style={{ border: "7px solid green" }}
//                                 style={{ fontSize: "16px" }}
//                               >
//                                 {/* Iterate over revoked credentials */}
//                                 {appDetailsData.credentials?.length > 0 ? (
//                                   appDetailsData.credentials.map(
//                                     (credential, index) => {
//                                       if (credential.status === "revoked") {
//                                         return (
//                                           <fieldset
//                                             className="items--inline app-credentiald-flex flex-wrap  border-bottom m-1 "
//                                             key={index}
//                                             //style={{ border: "5px solid red" }}
//                                           >
//                                             <legend>Credential</legend>

//                                             <div className="fieldset-wrapper d-flex ">
//                                               <div
//                                                 className="w-50 "
//                                                 style={
//                                                   {
//                                                     //border: "2px solid blue",
//                                                     //width: "40%",
//                                                     //fontSize: "15px",
//                                                   }
//                                                 }
//                                               >
//                                                 <div className="d-flex flex-row justify-content-between ">
//                                                   <div
//                                                     className=""
//                                                     style={{ width: "160px" }}
//                                                   >
//                                                     <label className="fw-bold">
//                                                       Consumer Key
//                                                     </label>
//                                                   </div>

//                                                   <div className=" d-flex flex-row">
//                                                     {showconsumerkey[
//                                                       credential.consumerKey
//                                                     ] ? (
//                                                       <div
//                                                         className="text-center"
//                                                         style={{
//                                                           maxHeight: "35px",
//                                                           overflowY: "auto",
//                                                           width: "200px",
//                                                         }}
//                                                       >
//                                                         {credential.consumerKey}
//                                                       </div>
//                                                     ) : (
//                                                       <div className="">
//                                                         {hideKey(
//                                                           credential.consumerKey
//                                                         )}
//                                                       </div>
//                                                     )}
//                                                   </div>

//                                                   <div className="d-flex flex-row justify-content-between ">
//                                                     <span
//                                                       className="mx-3"
//                                                       style={{
//                                                         cursor: "pointer",
//                                                       }}
//                                                       onClick={() =>
//                                                         toggleVisibility2(
//                                                           credential.consumerKey
//                                                         )
//                                                       }
//                                                     >
//                                                       {showKey1 ? (
//                                                         <VisibilityOffOutlinedIcon
//                                                           style={{
//                                                             fontSize: "1.2rem",
//                                                             color: "#f46223",
//                                                           }}
//                                                         />
//                                                       ) : (
//                                                         <RemoveRedEyeOutlinedIcon
//                                                           style={{
//                                                             fontSize: "1.2rem",
//                                                             color: "#f46223",
//                                                           }}
//                                                         />
//                                                       )}
//                                                     </span>

//                                                     <span
//                                                       onClick={() =>
//                                                         copyToClipboard(
//                                                           credential.consumerKey,
//                                                           "consumerKey"
//                                                         )
//                                                       }
//                                                       style={{
//                                                         cursor: "pointer",
//                                                       }}
//                                                       title="Click to copy"
//                                                     >
//                                                       <ContentCopyOutlinedIcon
//                                                         style={{
//                                                           fontSize: "1.2rem",
//                                                           color: "#f46223",
//                                                         }}
//                                                       />
//                                                     </span>
//                                                     <span>{copyMessage}</span>
//                                                   </div>
//                                                 </div>

//                                                 <div className="d-flex flex-row justify-content-between ">
//                                                   <div
//                                                     className=""
//                                                     style={{ width: "160px" }}
//                                                   >
//                                                     <label className="fw-bold">
//                                                       Consumer Secret
//                                                     </label>
//                                                   </div>

//                                                   <div className=" d-flex flex-row ">
//                                                     {showSecrets[
//                                                       credential.consumerSecret
//                                                     ] ? (
//                                                       <div
//                                                         className="text-center"
//                                                         style={{
//                                                           maxHeight: "30px",
//                                                           overflowY: "auto",
//                                                           width: "200px",
//                                                         }}
//                                                       >
//                                                         {
//                                                           credential.consumerSecret
//                                                         }
//                                                       </div>
//                                                     ) : (
//                                                       <div className="">
//                                                         {hideKey(
//                                                           credential.consumerSecret
//                                                         )}
//                                                       </div>
//                                                     )}
//                                                   </div>

//                                                   <div className="d-flex flex-row justify-content-between ">
//                                                     <span
//                                                       className="mx-3"
//                                                       style={{
//                                                         cursor: "pointer",
//                                                       }}
//                                                       onClick={() =>
//                                                         toggleVisibility(
//                                                           credential.consumerSecret
//                                                         )
//                                                       }
//                                                     >
//                                                       {showKey1 ? (
//                                                         <VisibilityOffOutlinedIcon
//                                                           style={{
//                                                             fontSize: "1.2rem",
//                                                             color: "#f46223",
//                                                           }}
//                                                         />
//                                                       ) : (
//                                                         <RemoveRedEyeOutlinedIcon
//                                                           style={{
//                                                             fontSize: "1.2rem",
//                                                             color: "#f46223",
//                                                           }}
//                                                         />
//                                                       )}
//                                                     </span>

//                                                     <span
//                                                       onClick={() =>
//                                                         copyToClipboard(
//                                                           credential.consumerSecret,
//                                                           "consumerSecret"
//                                                         )
//                                                       }
//                                                       style={{
//                                                         cursor: "pointer",
//                                                       }}
//                                                       title="Click to copy"
//                                                     >
//                                                       <ContentCopyOutlinedIcon
//                                                         style={{
//                                                           fontSize: "1.2rem",
//                                                           color: "#f46223",
//                                                         }}
//                                                       />
//                                                     </span>
//                                                     <span>{copyMessage}</span>
//                                                   </div>
//                                                 </div>

//                                                 <div className="d-flex flex-row ">
//                                                   <div
//                                                     className=""
//                                                     style={{ width: "190px" }}
//                                                   >
//                                                     <label> Issued </label>
//                                                   </div>
//                                                   <div className="ml-5">
//                                                     {credential.issuedAt
//                                                       ? customFormatTDate(
//                                                           credential.issuedAt
//                                                         )
//                                                       : "N/A"}
//                                                   </div>
//                                                 </div>

//                                                 <div className="d-flex flex-row justify-content-between">
//                                                   <div
//                                                     className=""
//                                                     style={{ width: "160px" }}
//                                                   >
//                                                     <label> Expires </label>
//                                                   </div>
//                                                   <div
//                                                     style={{
//                                                       marginLeft: "135px",
//                                                     }}
//                                                   >
//                                                     {credential.expiresAt
//                                                       ? customFormatDateTimetamp(
//                                                           credential.expiresAt
//                                                         )
//                                                       : "N/A"}
//                                                   </div>
//                                                 </div>

//                                                 <div className=" d-flex flex-row justify-content-start ">
//                                                   <div
//                                                     style={{ width: "190px" }}
//                                                     className=""
//                                                   >
//                                                     <label> Key Status </label>
//                                                   </div>
//                                                   <div
//                                                     className="justify-content-start"
//                                                     style={{
//                                                       marginLeft: "55px",
//                                                     }}
//                                                   >
//                                                     <span className="badge badge-success">
//                                                       {credential.status}
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                               </div>
//                                               {/* API Products */}

//                                               <div
//                                                 className="item-property w-50"
//                                                 style={
//                                                   {
//                                                     //border: "1px solid red",
//                                                     //display: "flex",
//                                                     //flexDirection: "column",
//                                                     // border: "1px solid blue",
//                                                     //marginRight: "70px",
//                                                     //width: "60%",
//                                                   }
//                                                 }
//                                               >
//                                                 <div
//                                                   className="dropbutton-wrapper d-flex justify-content-end "
//                                                   // style={{
//                                                   //   border: "8px solid blue",
//                                                   // }}
//                                                 >
//                                                   <div className="dropbutton-widget">
//                                                     <div className="dropbutton">
//                                                       <div>
//                                                         <button
//                                                           className="custom-button all-buttons-color text-white border btn btn-sm m-0 border-0"
//                                                           // style={{
//                                                           //   marginLeft: "450px",
//                                                           // }}
//                                                           onClick={() =>
//                                                             handleRemovekey(
//                                                               teamName,
//                                                               appDetailsData.name,
//                                                               credential.consumerKey
//                                                             )
//                                                           }
//                                                         >
//                                                           Delete
//                                                         </button>
//                                                       </div>
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                                 <div
//                                                   className="wrapper--secondary"
//                                                   style={
//                                                     {
//                                                       ///  border: "1px solid red",
//                                                       //marginLeft: "45px",
//                                                     }
//                                                   }
//                                                 >
//                                                   <label className="ml-5">
//                                                     Products
//                                                   </label>
//                                                   {credential &&
//                                                   credential.apiProducts &&
//                                                   credential.apiProducts
//                                                     .length > 0 ? (
//                                                     <div>
//                                                       {credential.apiProducts.map(
//                                                         (
//                                                           product,
//                                                           productIndex
//                                                         ) => (
//                                                           <div
//                                                             className=" "
//                                                             key={productIndex}
//                                                           >
//                                                             <div className=" d-flex justify-content-between   ">
//                                                               <span className="ml-5">
//                                                                 {
//                                                                   product.apiproduct
//                                                                 }
//                                                               </span>

//                                                               <div className="mr-5">
//                                                                 <span className="badge badge-success ">
//                                                                   {product.status
//                                                                     ? "Enabled"
//                                                                     : "Disabled"}
//                                                                 </span>
//                                                               </div>
//                                                             </div>
//                                                           </div>
//                                                         )
//                                                       )}
//                                                     </div>
//                                                   ) : (
//                                                     <p className="ml-5">
//                                                       No API products found for
//                                                       this credential.
//                                                     </p>
//                                                   )}
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </fieldset>
//                                         );
//                                       }
//                                     }
//                                   )
//                                 ) : (
//                                   <p style={{ marginLeft: "32px" }}>
//                                     No credentials found for this app.
//                                   </p>
//                                 )}
//                               </div>
//                             </details>
//                           </div>

//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">
//                               Custom Attributes
//                             </h4>

//                             <div className="card-body">
//                               <fieldset className="app-custom-attribute">
//                                 <div className="fieldset-wrapper" />

//                                 <div className="">
//                                   <div className="container mt-4 ">
//                                     <div className="row  ">
//                                       <div className="  ">
//                                         <h4 className="mb-4 ">
//                                           Coffee Selection
//                                         </h4>

//                                         <div className="form-check mb-2">
//                                           <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="espressoCheckbox"
//                                           />
//                                           <label
//                                             className="form-check-label"
//                                             htmlFor="espressoCheckbox"
//                                           >
//                                             Espresso
//                                           </label>
//                                         </div>

//                                         <div className="form-check mb-2">
//                                           <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="cappuccinoCheckbox"
//                                           />
//                                           <label
//                                             className="form-check-label"
//                                             htmlFor="cappuccinoCheckbox"
//                                           >
//                                             Cappuccino
//                                           </label>
//                                         </div>

//                                         <div className="form-check mb-2">
//                                           <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="latteCheckbox"
//                                           />
//                                           <label
//                                             className="form-check-label"
//                                             htmlFor="latteCheckbox"
//                                           >
//                                             Latte
//                                           </label>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ViewApp;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import AppsButton from "./AppsButton";
import {
  fetchTeamDetails,
  fetchAppDetails,
  updateAppDetails,
  appDetails,
  trackEvent,
} from "../../../redux/store";
import "../../../style/popup.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
//import "../../../styles/popup.css";
import { Link, navigate } from "gatsby";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
//import "./viewstyle.css";
import DropDownDark from "../../../images/DropDownDark.svg";
import { ToastContainer, toast } from "react-toastify";

const ViewApp = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState({});

  const toggleDropdown = (credentialKey) => {
    setDropdownOpen(!dropdownOpen);
    setShowDropdown((prevState) => ({
      ...prevState,
      [credentialKey]: !prevState[credentialKey],
    }));
  };
  const loginResponse = useSelector(
    (state) => state.loginReducer.loginResponse
  );

  const userName = loginResponse?.current_user?.name;
  console.log("userName", userName);
  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };
  const getImageSource = () => {
    if (showDropdown) {
      // Use the open dropdown icon (reversed)
      return "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Ctitle%3E03_Iconography%2FDefault%2FDrop_Down_Dark%3C%2Ftitle%3E%0A%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%2203_Iconography%2FDefault%2FDrop_Down_Dark%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Crect%20id%3D%22Bounds%22%20fill%3D%22%23FF0000%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cpolyline%20id%3D%22Path-5%22%20stroke%3D%22%23666666%22%20stroke-width%3D%221.75%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(12.078668%2C%2011.959429)%20rotate(-90.000000)%20translate(-12.078668%2C%20-11.959429)%22%20points%3D%2214.5577155%206.88076112%209.5192385%2011.9192381%2014.6380971%2017.0380967%22%3E%3C%2Fpolyline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"; // Replace with your open dropdown SVG data
    } else {
      // Use the closed dropdown icon

      return "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Ctitle%3E03_Iconography%2FDefault%2FDrop_Down_Dark%3C%2Ftitle%3E%0A%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%3Cg%20id%3D%2203_Iconography%2FDefault%2FDrop_Down_Dark%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Crect%20id%3D%22Bounds%22%20fill%3D%22%23FF0000%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2224%22%20height%3D%2224%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Cpolyline%20id%3D%22Path-5%22%20stroke%3D%22%23666666%22%20stroke-width%3D%221.75%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20transform%3D%22translate(12.078668%2C%2011.959429)%20rotate(-90.000000)%20translate(-12.078668%2C%20-11.959429)%22%20points%3D%2214.5577155%206.88076112%209.5192385%2011.9192381%2014.6380971%2017.0380967%22%3E%3C%2Fpolyline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"; // Replace with your closed dropdown SVG data
    }
  };

  // const teamDetails = useSelector((state) => state.teamDetails);
  // console.log("teamDetails",teamDetails)

  const appDetailsData = useSelector(
    (state) => state.appDetailsData.appDetailsData
  );
  console.log("appDetailsData", appDetailsData);

  const isFetching = appDetailsData ? appDetailsData.loading : true; // Handle null value

  const teamName = appDetailsData ? appDetailsData.appGroup : "";
  console.log("teamName", teamName);

  const appName = appDetailsData ? appDetailsData.name : "";

  // console.log("appData",appData)

  console.log("appName", appName);

  // useEffect(() => {
  //   // Fetch updated app details after the component mounts
  //   dispatch(fetchAppDetails(teamName, appName));
  // }, [dispatch, teamName, appName]);

  const [showSecrets, setShowSecrets] = useState({});
  const [showconsumerkey, setshowconsumerkey] = useState({});
  const [showKey, setShowKey] = useState(false);
  const [showKey1, setShowKey1] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const textInputRef = useRef(null);
  const [copyMessages, setCopyMessages] = useState({});
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  // const copyToClipboard = (text, index) => {
  //   navigator.clipboard.writeText(text);
  //   setCopyMessage("Copied!");
  //   setCopiedIndexes([...copiedIndexes, index]);
  //   setTimeout(() => {
  //     setCopyMessage("");
  //   }, 2000);
  // };

  // const copyToClipboard = async (text, index) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     setCopyMessage("");

  //     // dispatch(trackEvent({
  //     //   username: userName,
  //     //   timestamp: new Date(),
  //     //   operations: `${appName} API key ${consumerKey} and secret copied`,
  //     // }));

  //     setTimeout(() => {
  //       setCopyMessage("");
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error copying to clipboard:", error);
  //     // Handle the error here if needed
  //   }
  // };

  const copyToClipboard = async (
    text,
    identifier,
    consumerKey,
    consumerSecret
  ) => {
    try {
      await navigator.clipboard.writeText(text);

      if (identifier === "consumerKey") {
        // setCopyMessage("Consumer Key Copied!");
        setCopyMessage();

        dispatch(
          trackEvent({
            username: userName,
            timestamp: new Date(),
            operations: `Consumer Key copied from ${appName} Appgroup Apps in ${teamName} Appgroup`,
          })
        );
      } else if (identifier === "consumerSecret") {
        //setCopyMessage("Consumer Secret Copied!");
        setCopyMessage();

        dispatch(
          trackEvent({
            username: userName,
            timestamp: new Date(),
            operations: `Consumer Secret copied from ${appName} Appgroup Apps in ${teamName} Appgroup`,
          })
        );
      }

      setTimeout(() => {
        setCopyMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      // Handle the error here if needed
    }
  };

  // const copyToClipboard = async (consumerKey, consumerSecret) => {
  //   try {
  //     const textToCopy = `${consumerKey}\n${consumerSecret}`;
  //     await navigator.clipboard.writeText(textToCopy);
  //     setCopyMessage("Copied!");

  //     // Dispatch your action here
  //     dispatch(trackEvent({
  //       username: userName,
  //       timestamp: new Date(),
  //       operations: `${appName} API key ${consumerKey} and secret copied`,
  //     }));
  //   } catch (error) {
  //     console.error("Error copying to clipboard:", error);
  //   }
  // };

  function customFormatTimestamp(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const customDate = new Date(parseInt(timestamp));
    if (!isNaN(customDate)) {
      const now = new Date();
      const diff = now - customDate;

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30); // Approximation, not precise
      const years = Math.floor(months / 12);
      const timeZone = "UTC";

      if (years >= 1) {
        const remainingMonths = months % 12;
        const remainingWeeks = Math.floor((days % 30) / 7);
        const remainingDays = days % 7;
        return `${years} years ${remainingMonths} months`;
      } else if (months >= 1) {
        const remainingWeeks = Math.floor((days % 30) / 7);
        const remainingDays = days % 7;
        return `${months} months ${remainingWeeks} weeks`;
      } else if (weeks >= 1) {
        const remainingDays = days % 7;
        return `${weeks} weeks ${remainingDays} days ago`;
      } else if (days >= 1) {
        const remainingHours = hours % 24;
        return `${days} days ${remainingHours} hours ago`;
      } else if (hours >= 1) {
        const remainingMinutes = minutes % 60;
        return `${hours} hours ${remainingMinutes} minutes ago`;
      } else if (minutes >= 1) {
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds ago`;
      } else {
        return `${seconds} seconds ago`;
      }
    } else {
      return "Invalid Date";
    }
  }

  function customFormatTDate(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const customDateObject = new Date(parseInt(timestamp));
    if (!isNaN(customDateObject)) {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "UTC",
      };

      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        customDateObject
      );
      return `${formattedDate} (UTC)`;
    } else {
      return "Invalid Date";
    }
  }

  function customFormatDateTimetamp(timestamp) {
    const customDate = new Date(parseInt(timestamp));

    if (isNaN(customDate)) {
      return "Invalid Date";
    }

    const now = new Date();
    const diff = customDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4.4); // Approximately 4.4 weeks in a month
    const remainingWeeks = Math.floor(weeks % 4.8);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC", // Specify the timeZone as 'UTC'
    };
    const dateObject = customDate;

    return `${new Intl.DateTimeFormat("en-US", options).format(
      dateObject
    )} (UTC) in ${months} months ${remainingWeeks} weeks`;
  }

  const timestamp = Date.now() + 365 * 24 * 60 * 60 * 1000;

  const formattedDate = customFormatDateTimetamp(timestamp);

  console.log(formattedDate);

  const generateRandomSecret = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for (let i = 0; i < 64; i++) {
      key += characters[Math.floor(Math.random() * characters.length)];
    }
    return key;
  };

  const generateRandomKey = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let secret = "";
    for (let i = 0; i < 48; i++) {
      secret += characters[Math.floor(Math.random() * characters.length)];
    }
    return secret;
  };

  const togglePopup = async () => {
    setShowPopup(!showPopup);
    setShowConfirmButton(false); // Hide the button when toggling the popup
    setTimeout(() => {
      setShowConfirmButton(true); // Show the button after 1 second
    }, 1500);
  };

  const handleConfirmClick = async () => {
    try {
      const oneYearInMilliseconds = 365 * 24 * 60 * 60;
      const randomKey = generateRandomKey();
      const randomSecret = generateRandomSecret();

      const tokenResponse = await fetch(
        "https://robustapihub.netlify.app/.netlify/functions/a"
      );
      const { accessToken } = await tokenResponse.json();
      const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys`;
      const bearerToken = accessToken;

      const response = await axios.post(
        apiUrl,
        {
          consumerKey: randomKey,
          consumerSecret: randomSecret,
          expiresInSeconds: oneYearInMilliseconds,
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(fetchAppDetails(teamName, appName));

      dispatch(
        trackEvent({
          // timestamp: new Date(),
          // operation: "Appgroup App Key Added",
          // //button: "Add Member Button",
          // consumerKey: randomKey,
          // consumerSecret: randomSecret,
          // teamName: teamName,
          // appName: appName,

          username: userName,
          timestamp: new Date(),
          operations: `${appName}  API key added`,
        })
      );
      //alert("API key created successfully");
    } catch (error) {
      //alert("Error creating API key: " + error.message);
      toast.error("Error creating API key: " + error.message);
    }
  };

  useEffect(() => {
    const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
      (credential) =>
        !credential.apiProducts ? true : credential.apiProducts.length === 0
    );

    credentialsWithNoApiProducts?.sort(
      (cred1, cred2) => parseInt(cred2.createdAt) - parseInt(cred1.createdAt)
    );

    const latestCredential = credentialsWithNoApiProducts?.[0];
    const latestConsumerKey = latestCredential?.consumerKey || null;

    console.log("Latest Consumer Key without apiProducts:", latestConsumerKey);
  }, [appDetailsData]);

  const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
    (credential) =>
      !credential.apiProducts ? true : credential.apiProducts.length === 0
  );

  credentialsWithNoApiProducts?.sort(
    (cred1, cred2) => parseInt(cred2.createdAt) - parseInt(cred1.createdAt)
  );

  const latestCredential = credentialsWithNoApiProducts?.[0];
  const latestConsumerKey = latestCredential?.consumerKey || null;

  console.log("Latest Consumer Key without apiProducts:", latestConsumerKey);

  let apiProducts = [];

  for (let i = 0; i < (appDetailsData?.credentials?.length ?? 0); i++) {
    const credential = appDetailsData.credentials[i];
    apiProducts = credential?.apiProducts
      ? credential.apiProducts.map((product) => product.apiproduct)
      : [];

    if (apiProducts.length > 0) {
      break;
    }
  }

  console.log(
    "API Products from First Credential with apiProducts:",
    apiProducts
  );

  const handleAddAPIProduct = async () => {
    const tokenResponse = await fetch(
      "https://robustapihub.netlify.app/.netlify/functions/a"
    );
    const { accessToken } = await tokenResponse.json();
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys/${latestConsumerKey}`;
    const bearerToken = accessToken;

    const requestBody = {
      apiProducts: apiProducts,
    };

    try {
      await axios.post(apiUrl, requestBody, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      dispatch(fetchAppDetails(teamName, appName));
      // dispatch(
      //   trackEvent({
      //     timestamp: new Date(),
      //     operation: "Appgroup App Api Product Added",
      //     appgroupName: teamName,
      //     appName: appName,
      //     selectedApiProduct: apiProducts,
      //   })
      // );
      //alert("API key and product added successfully");
      toast.success("API key and product added successfully!");
      setShowPopup(false);
    } catch (error) {
      //alert("Error adding API product: " + error);
      toast.error("Error adding API product: " + error);
    }
  };

  const toggleVisibility = (key) => {
    setShowSecrets((prevShowSecrets) => ({
      ...prevShowSecrets,
      [key]: !prevShowSecrets[key],
    }));

    setShowKey((prevShowKey) => ({
      ...prevShowKey,
      [key]: !prevShowKey[key],
    }));
  };

  const toggleVisibility2 = (key) => {
    setshowconsumerkey((prevShowConsumer) => ({
      ...prevShowConsumer,
      [key]: !prevShowConsumer[key],
    }));
    setShowKey1((prevShowkey) => ({
      ...prevShowkey,
      [key]: !prevShowkey[key],
    }));
  };

  const hideKey = (key) => {
    return "•".repeat(15);
  };

  const handleRemovekey = async (teamName, appName, consumerKey) => {
    const tokenResponse = await fetch(
      "https://robustapihub.netlify.app/.netlify/functions/a"
    );
    const { accessToken } = await tokenResponse.json();
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}`;
    const bearerToken = accessToken;

    try {
      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      dispatch(
        trackEvent({
          // timestamp: new Date(),
          // operation: "Appgroup App Consumer Key Deleted",
          // teamName: teamName,
          // appName: appName,
          // selectedApiProduct: apiProducts,
          // consumerKey: consumerKey,

          username: userName,
          timestamp: new Date(),
          operations: `${teamName} Appgroup updated, ${consumerKey} key is deleted from ${appName} Appgroup Apps`,
        })
      );
      dispatch(fetchAppDetails(teamName, appName));
      //alert("Key removed successfully");
      toast.success("Key removed successfully!");
    } catch (error) {
      //alert("Error removing key: " + error);
      toast.error("Error removing key: " + error);
    }
  };

  const handleRevokeKey = async (teamName, appName, consumerKey) => {
    const tokenResponse = await fetch(
      "https://robustapihub.netlify.app/.netlify/functions/a"
    );
    const { accessToken } = await tokenResponse.json();
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
    const bearerToken = accessToken;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      if (response.status === 204) {
        // Key revoked successfully

        dispatch(fetchAppDetails(teamName, appName));

        dispatch(
          trackEvent({
            // timestamp: new Date(),
            // operation: "Appgroup App Consumer Key Revoked",
            // teamName: teamName,
            // appName: appName,
            // selectedApiProduct: apiProducts,
            // consumerKey: consumerKey,

            username: userName,
            timestamp: new Date(),
            operations: `${teamName} Appgroup updated, ${consumerKey} key is revoked from ${appName} Appgroups Apps`,
          })
        );

        //alert("Key revoked successfully");
        toast.success("Key revoked successfully!");
      } else {
        //alert("Key revocation was not successful");
        toast.error("Key revocation was not successful");
      }
    } catch (error) {
      //alert("Error revoking key: " + error.message);
      toast.error("Error revoking key: " + error.message);
    }
  };

  //

  const selectedDescription =
    appDetailsData?.attributes.find((attr) => attr.name === "description")
      ?.value || "";
  console.log("selected Decription", selectedDescription);

  // const [cleanedCoffeeOptions, setCleanedCoffeeOptions] = useState([]);
  // const [selectedCoffeeOptionsDuplicates, setSelectedCoffeeOptionsDuplicates] =
  //   useState([]);
  // const [selectedCoffeeOptions, setSelectedCoffeeOptions] = useState([]);

  // const selectedCoffee =
  //   appDetailsData?.attributes.find((attr) => attr.name === "coffeeOptions")
  //     ?.value || "";
  // console.log("coffeeOptions", selectedCoffee);

  // const parsedSelectedCoffee = JSON.parse(selectedCoffee);

  // useEffect(() => {
  //   const newCleanedCoffeeOptions = [];
  //   const newSelectedCoffeeOptionsDuplicates = [];

  //   const regex = /s:(\d+):\\"([^\\]+)\\"/g;

  //   let match;
  //   while ((match = regex.exec(parsedSelectedCoffee)) !== null) {
  //     const [, length, coffeeName] = match;
  //     const cleanedValue = length > 0 ? coffeeName : "0";

  //     if (cleanedValue !== "0") {
  //       newCleanedCoffeeOptions.push(cleanedValue);

  //       if (
  //         length > 0 &&
  //         newCleanedCoffeeOptions.filter((value) => value === cleanedValue)
  //           .length > 1
  //       ) {
  //         newSelectedCoffeeOptionsDuplicates.push(cleanedValue);
  //       }
  //     }
  //   }

  //   setCleanedCoffeeOptions(newCleanedCoffeeOptions);
  //   setSelectedCoffeeOptionsDuplicates(newSelectedCoffeeOptionsDuplicates);
  // }, [parsedSelectedCoffee]);

  // const serializeProductNames = () => {
  //   return coffeeOptions.map((name) => {
  //     const isSelected = selectedCoffeeOptions.includes(name);
  //     const value = isSelected ? name : "0";
  //     return `s:${name.length}:\\"${name}\\":s:${value.length}:\\"${value}\\"`;
  //   });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     // Log selected coffee options
  //     console.log("Selected Coffee Options:", selectedCoffeeOptions);

  //     const tokenResponse = await fetch(
  //       "https://robustapihub.netlify.app/.netlify/functions/a"
  //     );
  //     const { accessToken } = await tokenResponse.json();

  //     // Assuming appName and appId are defined
  //     const response = await fetch(
  //       `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //         body: JSON.stringify({
  //           attributes: [
  //             {
  //               name: "description",
  //               value: selectedDescription,
  //             },
  //             {
  //               name: "coffeeOptions",
  //               value: JSON.stringify(
  //                 serializeProductNames(selectedCoffeeOptions)
  //               ),
  //             },
  //           ],
  //         }),
  //       }
  //     );

  //     const result = await response.json();
  //     dispatch(fetchAppDetails(teamName, appName));
  //     // Handle the result as needed
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // const handleCheckboxChange = (coffeeName) => {
  //   const updatedSelection = selectedCoffeeOptions.includes(coffeeName)
  //     ? selectedCoffeeOptions.filter((name) => name !== coffeeName)
  //     : [...selectedCoffeeOptions, coffeeName];

  //   setSelectedCoffeeOptions(updatedSelection);

  //   // Update selectedCoffeeOptionsDuplicates based on cleanedCoffeeOptions
  //   const newSelectedCoffeeOptionsDuplicates = updatedSelection.filter(
  //     (value) =>
  //       updatedSelection.indexOf(value) !== updatedSelection.lastIndexOf(value)
  //   );

  //   setSelectedCoffeeOptionsDuplicates(newSelectedCoffeeOptionsDuplicates);
  // };

  const coffeeOptions = ["Espresso", "Cappuccino", "Latte", "AbcdB"];

  const selectedCoffee =
    appDetailsData?.attributes.find((attr) => attr.name === "coffeeOptions")
      ?.value || "";
  console.log("coffeeOptions", selectedCoffee);

  const coffeearray1 = [{ selectedCoffee }];
  // console.log("array1", array1);

  // unserializedData Data
  const unserializedDataCoffee = coffeearray1
    .map((item) => {
      if (item && item.selectedCoffee) {
        const regex = /s:\d+:\\\"(.*?)\\\"/g;
        const matches = item.selectedCoffee.match(regex);
        if (matches) {
          return matches.map((match) => {
            const extractedValue = match
              .replace(/\\\\/g, "\\")
              .replace(/s:\d+:\\\"(.*?)\\\"/, "$1");
            return extractedValue !== "0" ? extractedValue : null;
          });
        }
      }
      return [];
    })
    .flat()
    .filter((value) => value !== null);

  console.log("unserializedDataCoffee", unserializedDataCoffee);

  const findDuplicatesCoffee = (namesArrayCoffee) => {
    const duplicatesCoffee = {};
    const duplicateItemsCoffee = [];

    // Count occurrences of each item in the array
    namesArrayCoffee.forEach((item) => {
      if (!duplicatesCoffee[item]) {
        duplicatesCoffee[item] = 1;
      } else {
        duplicatesCoffee[item]++;
      }
    });

    // Identify items with counts greater than 1 as duplicates
    Object.entries(duplicatesCoffee).forEach(([item, count]) => {
      if (count > 1) {
        duplicateItemsCoffee.push(item);
      }
    });

    return duplicateItemsCoffee;
  };

  const duplicateItemsCoffee = findDuplicatesCoffee(unserializedDataCoffee);
  console.log("duplicateItemsCoffee", duplicateItemsCoffee);

  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [checkedAttributes, setCheckedAttributes] = useState([]);

  useEffect(() => {
    setCheckedAttributes(duplicateItemsCoffee);
  }, []);

  const handleAttributeChange = (attributeValue) => {
    setSelectedAttributes((prevAttributes) => {
      if (prevAttributes.includes(attributeValue)) {
        return prevAttributes.filter((attr) => attr !== attributeValue);
      } else {
        return [...prevAttributes, attributeValue];
      }
    });
  };

  const handleCheckboxChange = (attribute) => {
    setCheckedAttributes((prevChecked) => {
      if (prevChecked.includes(attribute)) {
        return prevChecked.filter((attr) => attr !== attribute);
      } else {
        return [...prevChecked, attribute];
      }
    });
  };

  const handleCheckboxChangeForDuplicates = (attribute) => {
    setCheckedAttributes((prevChecked) => {
      const isDuplicate = duplicateItemsCoffee.includes(attribute);

      if (isDuplicate) {
        // If the attribute is a duplicate, find its original attribute
        const originalAttribute = duplicateItemsCoffee.find((item) =>
          item.includes(attribute)
        );

        // Check if the original attribute is already selected
        const isOriginalAttributeSelected =
          prevChecked.includes(originalAttribute);

        if (isOriginalAttributeSelected) {
          // If the original attribute is selected, uncheck both the original and the duplicate
          return prevChecked.filter(
            (attr) => attr !== originalAttribute && attr !== attribute
          );
        } else {
          // If the original attribute is not selected, check both the original and the duplicate
          return [...prevChecked, originalAttribute, attribute];
        }
      } else {
        // If the attribute is not a duplicate, toggle its checked state
        return prevChecked.includes(attribute)
          ? prevChecked.filter((attr) => attr !== attribute)
          : [...prevChecked, attribute];
      }
    });
  };

  const mergedArray = [...selectedAttributes, ...checkedAttributes];
  const selectedAttribute = Array.from(new Set(mergedArray));

  console.log("selectedAttribute", selectedAttribute);

  const unselectedAttributes = coffeeOptions
    ? coffeeOptions.filter((attr) => !selectedAttribute.includes(attr))
    : [];

  const formattedSelectedAttribute = selectedAttribute.map((attrName) => ({
    [attrName]: attrName,
  }));

  const formattedUnselectedAttribute = unselectedAttributes.map((attr) => ({
    [attr]: "0",
  }));

  const finalOutput = [
    ...formattedSelectedAttribute,
    ...formattedUnselectedAttribute,
  ];

  console.log("finalOutput", finalOutput);

  const parsedFinalOutput = JSON.parse(JSON.stringify(finalOutput, null, 2));

  const serializeData = parsedFinalOutput.map((item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    const serializedKey = `s:${key.length}:\\"${key}\\"`;
    const serializedValue = `s:${value.length}:\\"${value}\\"`;
    return `${serializedKey}:${serializedValue}`;
  });
  console.log("serializeData", serializeData);

  const serializedApiProduct22 = serializeData.join(",");
  console.log("serializedApiProduct22", serializedApiProduct22);

  const handleSubmit = async () => {
    try {
      // Log selected coffee options
      console.log("Selected Coffee Options:", serializedApiProduct22);

      const tokenResponse = await fetch(
        "https://robustapihub.netlify.app/.netlify/functions/a"
      );
      const { accessToken } = await tokenResponse.json();

      // Assuming appName and appId are defined
      const serializedCofeeProduct = serializeData.join(",");
      const response = await fetch(
        `https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups/${teamName}/apps/${appName}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            attributes: [
              {
                name: "description",
                value: selectedDescription,
              },
              {
                name: "coffeeOptions",
                value: serializedCofeeProduct,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        dispatch(fetchAppDetails(teamName, appName));
        console.log("Setting showToast to true");
        dispatch(
          trackEvent({
            username: userName,
            timestamp: new Date(),
            operations: `${appName} New attribute Added  ${serializedApiProduct22}`,
          })
        );
        //alert("Appgroup created successfully!");
        toast.success("Attribute added successfully!", {
          autoClose: 3000,
        });
        //navigate("/teams");
      } else {
        toast.error("Failed to create Attribute"); // Show error toast
      }
    } catch (error) {
      if (error instanceof TypeError) {
        toast.error(
          "Attribute already exists. Please try with a different name"
        );
      } else {
        console.error("Error:", error);
      }
    }
  };

  if (!appDetailsData || (appDetailsData && isFetching)) {
    return (
      <Layout>
        <div style={{ marginTop: "110px" }}>
          <AppsButton />
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h3 className="js-quickedit-page-title page__title mb-0">
                      Loading appgroups appdetails...
                    </h3>
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
      <div style={{ marginTop: "110px" }}>
        <AppsButton />

        <div className="dialog-off-canvas-main-canvas">
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div
                    data-contextual-id="block:block=pagetitle:langcode=en"
                    data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
                  />
                  <div className="container">
                    <h3 className="js-quickedit-page-title page__title mb-0">
                      {appDetailsData.name} team app
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <main className="main" role="main">
              <div className="page-layout-sidebar-default">
                <div className="container py-3">
                  <div className="row">
                    <div className="page__content col-md">
                      <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
                        <div
                          className="tab-pane show active"
                          // style={{ border: "1px solid red" }}
                        >
                          <div className="card apigee-entity--app__details">
                            <h4 className="card-header bg-white">Details</h4>
                            <div className="card-body">
                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
                                    <div
                                      className="field__label  my-1"
                                      style={{ width: "100%" }}
                                    >
                                      Team App status
                                    </div>
                                  </div>
                                  <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
                                    <div className="field__item  my-1">
                                      <span className="badge badge-success">
                                        {appDetailsData.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
                                    <div
                                      className="field__label  my-1 "
                                      style={{ width: "100%" }}
                                    >
                                      Created
                                    </div>
                                  </div>
                                  <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
                                    <div className="field__item  my-1">
                                      {appDetailsData.createdAt
                                        ? customFormatTimestamp(
                                            appDetailsData.createdAt
                                          )
                                        : "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 col-12">
                                    <div
                                      className="field__label  my-1 "
                                      style={{ width: "100%" }}
                                    >
                                      Last updated
                                    </div>
                                  </div>
                                  <div className="col-sm-8 col-md-8 col-lg-9 col-xl-9 col-12">
                                    <div className="field__item  my-1">
                                      {appDetailsData.lastModifiedAt
                                        ? customFormatTimestamp(
                                            appDetailsData.lastModifiedAt
                                          )
                                        : "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card apigee-entity--app__credentials ">
                            <div className="container">
                              <div className="row border">
                                <div className="col-6">
                                  <h4 className="card-header bg-white">
                                    Credentials
                                  </h4>
                                </div>
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                  <button
                                    className="all-buttons-color text-white use-ajax button btn  btn-md"
                                    onClick={() => {
                                      togglePopup();
                                      handleConfirmClick();
                                    }}
                                  >
                                    Add key
                                  </button>
                                </div>
                              </div>
                            </div>

                            {showPopup && (
                              <div className="popup-overlay">
                                <div className="popup">
                                  <span className="close" onClick={togglePopup}>
                                    &times;
                                  </span>
                                  <div className="popup-content">
                                    <h2>Add Key</h2>
                                    <p>
                                      Do you really want to create a new API key
                                      for this team app?
                                    </p>
                                    <label>
                                      Set an expiry date:
                                      <select>
                                        <option>1 Year</option>
                                        {/* Add other options here */}
                                      </select>
                                    </label>
                                    <div className="popup-buttons">
                                      <button
                                        className="popup-button cancel-button"
                                        onClick={togglePopup}
                                      >
                                        Cancel
                                      </button>
                                      {showConfirmButton && (
                                        <button
                                          className="all-buttons-color text-white  btn btn-md "
                                          onClick={handleAddAPIProduct}
                                        >
                                          Confirm
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div
                              className="card-body  "
                              style={{
                                //border: "7px solid green",
                                fontSize: "16px",
                              }}
                            >
                              {appDetailsData.credentials?.length > 0 ? (
                                appDetailsData.credentials.map(
                                  (credential, index) => {
                                    if (credential.status === "approved") {
                                      const credentialKey =
                                        credential.consumerKey;
                                      return (
                                        <fieldset
                                          className="container mb-2 border-bottom border border-danger d-lg-flex flex-lg-row flex-md-row flex-sm-row flex-xs-column"
                                          key={index}
                                          //style={{ border: "4px solid green" }}
                                        >
                                          <div
                                            className="w-50 border border-primary p-2"
                                            style={
                                              {
                                                //border: "2px solid blue",
                                                //width: "40%",
                                                //fontSize: "15px",
                                              }
                                            }
                                          >
                                            <div className="d-flex flex-row justify-content-between ">
                                              <div
                                                className=""
                                                style={{ width: "160px" }}
                                              >
                                                <label className="fw-bold">
                                                  Consumer Key
                                                </label>
                                              </div>

                                              <div className=" d-flex flex-row">
                                                {showconsumerkey[
                                                  credential.consumerKey
                                                ] ? (
                                                  <div
                                                    className="text-center"
                                                    style={{
                                                      maxHeight: "35px",
                                                      overflowY: "auto",
                                                      width: "200px",
                                                    }}
                                                  >
                                                    {credential.consumerKey}
                                                  </div>
                                                ) : (
                                                  <div className="">
                                                    {hideKey(
                                                      credential.consumerKey
                                                    )}
                                                  </div>
                                                )}
                                              </div>

                                              <div className="d-flex flex-row justify-content-between ">
                                                <span
                                                  className="mx-3"
                                                  style={{
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={() =>
                                                    toggleVisibility2(
                                                      credential.consumerKey
                                                    )
                                                  }
                                                >
                                                  {showKey1 ? (
                                                    <VisibilityOffOutlinedIcon
                                                      style={{
                                                        fontSize: "1.2rem",
                                                        color: "#f46223",
                                                      }}
                                                    />
                                                  ) : (
                                                    <RemoveRedEyeOutlinedIcon
                                                      style={{
                                                        fontSize: "1.2rem",
                                                        color: "#f46223",
                                                      }}
                                                    />
                                                  )}
                                                </span>

                                                <span
                                                  onClick={() =>
                                                    copyToClipboard(
                                                      credential.consumerKey,
                                                      "consumerKey"
                                                    )
                                                  }
                                                  style={{
                                                    cursor: "pointer",
                                                  }}
                                                  title="Click to copy"
                                                >
                                                  <ContentCopyOutlinedIcon
                                                    style={{
                                                      fontSize: "1.2rem",
                                                      color: "#f46223",
                                                    }}
                                                  />
                                                </span>
                                                <span>{copyMessage}</span>
                                              </div>
                                            </div>

                                            <div className="d-flex flex-row justify-content-between ">
                                              <div
                                                className=""
                                                style={{ width: "160px" }}
                                              >
                                                <label className="fw-bold">
                                                  Consumer Secret
                                                </label>
                                              </div>

                                              <div className=" d-flex flex-row ">
                                                {showSecrets[
                                                  credential.consumerSecret
                                                ] ? (
                                                  <div
                                                    className="text-center"
                                                    style={{
                                                      maxHeight: "30px",
                                                      overflowY: "auto",
                                                      width: "200px",
                                                    }}
                                                  >
                                                    {credential.consumerSecret}
                                                  </div>
                                                ) : (
                                                  <div className="">
                                                    {hideKey(
                                                      credential.consumerSecret
                                                    )}
                                                  </div>
                                                )}
                                              </div>

                                              <div className="d-flex flex-row justify-content-between ">
                                                <span
                                                  className="mx-3"
                                                  style={{
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={() =>
                                                    toggleVisibility(
                                                      credential.consumerSecret
                                                    )
                                                  }
                                                >
                                                  {showKey1 ? (
                                                    <VisibilityOffOutlinedIcon
                                                      style={{
                                                        fontSize: "1.2rem",
                                                        color: "#f46223",
                                                      }}
                                                    />
                                                  ) : (
                                                    <RemoveRedEyeOutlinedIcon
                                                      style={{
                                                        fontSize: "1.2rem",
                                                        color: "#f46223",
                                                      }}
                                                    />
                                                  )}
                                                </span>

                                                <span
                                                  onClick={() =>
                                                    copyToClipboard(
                                                      credential.consumerSecret,
                                                      "consumerSecret"
                                                    )
                                                  }
                                                  style={{
                                                    cursor: "pointer",
                                                  }}
                                                  title="Click to copy"
                                                >
                                                  <ContentCopyOutlinedIcon
                                                    style={{
                                                      fontSize: "1.2rem",
                                                      color: "#f46223",
                                                    }}
                                                  />
                                                </span>
                                                <span>{copyMessage}</span>
                                              </div>
                                            </div>

                                            <div className="d-flex flex-row ">
                                              <div
                                                className=""
                                                style={{ width: "185px" }}
                                              >
                                                <label> Issued </label>
                                              </div>
                                              <div className="ml-5">
                                                {credential.issuedAt
                                                  ? customFormatTDate(
                                                      credential.issuedAt
                                                    )
                                                  : "N/A"}
                                              </div>
                                            </div>

                                            <div className="d-flex flex-row justify-content-between">
                                              <div
                                                className=""
                                                style={{
                                                  width: "160px",
                                                }}
                                              >
                                                <label> Expires </label>
                                              </div>
                                              <div
                                                style={{
                                                  marginLeft: "135px",
                                                }}
                                              >
                                                {credential.expiresAt
                                                  ? customFormatDateTimetamp(
                                                      credential.expiresAt
                                                    )
                                                  : "N/A"}
                                              </div>
                                            </div>

                                            <div className=" d-flex flex-row justify-content-start ">
                                              <div
                                                style={{ width: "190px" }}
                                                className=""
                                              >
                                                <label> Key Status </label>
                                              </div>
                                              <div
                                                className="justify-content-start "
                                                style={{
                                                  marginLeft: "50px",
                                                }}
                                              >
                                                <span className="badge badge-success">
                                                  {credential.status}
                                                </span>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="item-property w-50  border border-primary "
                                            // style={{ marginLeft: "45px" }}
                                            style={
                                              {
                                                // border: "5px solid pink",
                                                //display: "flex",
                                                //flexDirection: "column",
                                                //width: "60%",
                                              }
                                            }
                                          >
                                            <div
                                              className=""
                                              style={
                                                {
                                                  //marginLeft: "465px",
                                                  //border: "5px solid green",
                                                }
                                              }
                                            >
                                              <div
                                                className="d-flex justify-content-end  "
                                                style={
                                                  {
                                                    //display: "flex",
                                                    //alignItems: "center",
                                                    //border:"2px solid red"
                                                  }
                                                }
                                              >
                                                <button
                                                  className="custom-button all-buttons-color text-white border btn btn-sm m-0 border-0"
                                                  onClick={() =>
                                                    handleRevokeKey(
                                                      teamName,
                                                      appDetailsData.name,
                                                      credential.consumerKey
                                                    )
                                                  }
                                                >
                                                  Revoke
                                                </button>

                                                <div
                                                  style={{
                                                    position: "relative",
                                                  }}
                                                >
                                                  <button
                                                    // className="dropdown-toggle"

                                                    onClick={() =>
                                                      toggleDropdown(
                                                        credentialKey
                                                      )
                                                    }
                                                    className="all-add-buttons text-white border border-0 m-0"
                                                    style={{
                                                      width: "25px",
                                                      height: "35px",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                    }}
                                                  >
                                                    {/* &#9660; */}
                                                    {/* {DropDownDark} */}
                                                    <button
                                                      onClick={toggleDropdown}
                                                      className="all-add-buttons text-white border-0 m-0"
                                                    >
                                                      {dropdownOpen ? (
                                                        <BsChevronUp />
                                                      ) : (
                                                        <BsChevronDown />
                                                      )}
                                                    </button>
                                                  </button>
                                                </div>
                                              </div>

                                              {showDropdown[credentialKey] && (
                                                <div
                                                  className=" d-flex justify-content-end "
                                                  style={
                                                    {
                                                      //position: "absolute",
                                                      //width: "114px",
                                                      //textAlign: "left",
                                                      //border: "1px solid blue",
                                                      //overflow: "auto",
                                                      //zIndex: 1, // Ensure the dropdown appears above other content
                                                    }
                                                  }
                                                >
                                                  <button
                                                    className="all-buttons-color text-white btn btn-sm mr-4 m-0"
                                                    style={{
                                                      // width: "114px",
                                                      //textAlign: "left",
                                                      position: "absolute",
                                                      zIndex: 1,
                                                    }}
                                                    onClick={() => {
                                                      const removePath = `/${teamName}/apps/${appName}/remove?team=${teamName}&appName=${appName}&consumerKey=${credential.consumerKey}`;
                                                      setShowDropdown(false);
                                                      navigate(removePath);
                                                    }}
                                                  >
                                                    Delete
                                                  </button>
                                                </div>
                                              )}
                                            </div>

                                            <div
                                              className=""
                                              style={
                                                {
                                                  //marginRight: "200px",
                                                  //border: "1px solid red",
                                                  //width: "600px",
                                                }
                                              }
                                            >
                                              <label
                                                className="ml-5"
                                                //style={{ marginLeft: "70px" }}
                                              >
                                                Products
                                              </label>
                                              {credential &&
                                              credential.apiProducts &&
                                              credential.apiProducts.length >
                                                0 ? (
                                                <div className="">
                                                  {credential.apiProducts.map(
                                                    (product, productIndex) => (
                                                      <div
                                                        className=" "
                                                        key={productIndex}
                                                      >
                                                        <div className=" d-flex justify-content-between   ">
                                                          <span className="ml-5">
                                                            {product.apiproduct}
                                                          </span>

                                                          <div className="mr-5">
                                                            <span className="badge badge-success ">
                                                              {product.status
                                                                ? "Enabled"
                                                                : "Disabled"}
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              ) : (
                                                <p
                                                  style={{
                                                    marginLeft: "32px",
                                                  }}
                                                >
                                                  No API products found for this
                                                  credential.
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                        </fieldset>
                                      );
                                    }
                                  }
                                )
                              ) : (
                                <p style={{ marginLeft: "32px" }}>
                                  No credentials found for this app.
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="card apigee-entity--app__credentials">
                            <details className="js-form-wrapper form-wrapper card bg-lighter mb-3">
                              <summary
                                role="button"
                                aria-expanded="false"
                                aria-pressed="false"
                                className="card-header bg-lighter"
                              >
                                Revoked keys (
                                {
                                  appDetailsData.credentials.filter(
                                    (credential) =>
                                      credential.status === "revoked"
                                  ).length
                                }
                                )
                              </summary>

                              <div
                                className="card-body pb-0"
                                // style={{ border: "7px solid green" }}
                                style={{ fontSize: "16px" }}
                              >
                                {/* Iterate over revoked credentials */}
                                {appDetailsData.credentials?.length > 0 ? (
                                  appDetailsData.credentials.map(
                                    (credential, index) => {
                                      if (credential.status === "revoked") {
                                        return (
                                          <fieldset
                                            className="items--inline app-credentiald-flex flex-wrap  border-bottom m-1 "
                                            key={index}
                                            //style={{ border: "5px solid red" }}
                                          >
                                            <legend>Credential</legend>

                                            <div className="fieldset-wrapper d-flex ">
                                              <div
                                                className="w-50 "
                                                style={
                                                  {
                                                    //border: "2px solid blue",
                                                    //width: "40%",
                                                    //fontSize: "15px",
                                                  }
                                                }
                                              >
                                                <div className="d-flex flex-row justify-content-between ">
                                                  <div
                                                    className=""
                                                    style={{ width: "160px" }}
                                                  >
                                                    <label className="fw-bold">
                                                      Consumer Key
                                                    </label>
                                                  </div>

                                                  <div className=" d-flex flex-row">
                                                    {showconsumerkey[
                                                      credential.consumerKey
                                                    ] ? (
                                                      <div
                                                        className="text-center"
                                                        style={{
                                                          maxHeight: "35px",
                                                          overflowY: "auto",
                                                          width: "200px",
                                                        }}
                                                      >
                                                        {credential.consumerKey}
                                                      </div>
                                                    ) : (
                                                      <div className="">
                                                        {hideKey(
                                                          credential.consumerKey
                                                        )}
                                                      </div>
                                                    )}
                                                  </div>

                                                  <div className="d-flex flex-row justify-content-between ">
                                                    <span
                                                      className="mx-3"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() =>
                                                        toggleVisibility2(
                                                          credential.consumerKey
                                                        )
                                                      }
                                                    >
                                                      {showKey1 ? (
                                                        <VisibilityOffOutlinedIcon
                                                          style={{
                                                            fontSize: "1.2rem",
                                                            color: "#f46223",
                                                          }}
                                                        />
                                                      ) : (
                                                        <RemoveRedEyeOutlinedIcon
                                                          style={{
                                                            fontSize: "1.2rem",
                                                            color: "#f46223",
                                                          }}
                                                        />
                                                      )}
                                                    </span>

                                                    <span
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerKey,
                                                          "consumerKey"
                                                        )
                                                      }
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon
                                                        style={{
                                                          fontSize: "1.2rem",
                                                          color: "#f46223",
                                                        }}
                                                      />
                                                    </span>
                                                    <span>{copyMessage}</span>
                                                  </div>
                                                </div>

                                                <div className="d-flex flex-row justify-content-between ">
                                                  <div
                                                    className=""
                                                    style={{ width: "160px" }}
                                                  >
                                                    <label className="fw-bold">
                                                      Consumer Secret
                                                    </label>
                                                  </div>

                                                  <div className=" d-flex flex-row ">
                                                    {showSecrets[
                                                      credential.consumerSecret
                                                    ] ? (
                                                      <div
                                                        className="text-center"
                                                        style={{
                                                          maxHeight: "30px",
                                                          overflowY: "auto",
                                                          width: "200px",
                                                        }}
                                                      >
                                                        {
                                                          credential.consumerSecret
                                                        }
                                                      </div>
                                                    ) : (
                                                      <div className="">
                                                        {hideKey(
                                                          credential.consumerSecret
                                                        )}
                                                      </div>
                                                    )}
                                                  </div>

                                                  <div className="d-flex flex-row justify-content-between ">
                                                    <span
                                                      className="mx-3"
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      onClick={() =>
                                                        toggleVisibility(
                                                          credential.consumerSecret
                                                        )
                                                      }
                                                    >
                                                      {showKey1 ? (
                                                        <VisibilityOffOutlinedIcon
                                                          style={{
                                                            fontSize: "1.2rem",
                                                            color: "#f46223",
                                                          }}
                                                        />
                                                      ) : (
                                                        <RemoveRedEyeOutlinedIcon
                                                          style={{
                                                            fontSize: "1.2rem",
                                                            color: "#f46223",
                                                          }}
                                                        />
                                                      )}
                                                    </span>

                                                    <span
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerSecret,
                                                          "consumerSecret"
                                                        )
                                                      }
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon
                                                        style={{
                                                          fontSize: "1.2rem",
                                                          color: "#f46223",
                                                        }}
                                                      />
                                                    </span>
                                                    <span>{copyMessage}</span>
                                                  </div>
                                                </div>

                                                <div className="d-flex flex-row ">
                                                  <div
                                                    className=""
                                                    style={{ width: "190px" }}
                                                  >
                                                    <label> Issued </label>
                                                  </div>
                                                  <div className="ml-5">
                                                    {credential.issuedAt
                                                      ? customFormatTDate(
                                                          credential.issuedAt
                                                        )
                                                      : "N/A"}
                                                  </div>
                                                </div>

                                                <div className="d-flex flex-row justify-content-between">
                                                  <div
                                                    className=""
                                                    style={{ width: "160px" }}
                                                  >
                                                    <label> Expires </label>
                                                  </div>
                                                  <div
                                                    style={{
                                                      marginLeft: "135px",
                                                    }}
                                                  >
                                                    {credential.expiresAt
                                                      ? customFormatDateTimetamp(
                                                          credential.expiresAt
                                                        )
                                                      : "N/A"}
                                                  </div>
                                                </div>

                                                <div className=" d-flex flex-row justify-content-start ">
                                                  <div
                                                    style={{ width: "190px" }}
                                                    className=""
                                                  >
                                                    <label> Key Status </label>
                                                  </div>
                                                  <div
                                                    className="justify-content-start"
                                                    style={{
                                                      marginLeft: "55px",
                                                    }}
                                                  >
                                                    <span className="badge badge-success">
                                                      {credential.status}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              {/* API Products */}

                                              <div
                                                className="item-property w-50"
                                                style={
                                                  {
                                                    //border: "1px solid red",
                                                    //display: "flex",
                                                    //flexDirection: "column",
                                                    // border: "1px solid blue",
                                                    //marginRight: "70px",
                                                    //width: "60%",
                                                  }
                                                }
                                              >
                                                <div
                                                  className="dropbutton-wrapper d-flex justify-content-end "
                                                  // style={{
                                                  //   border: "8px solid blue",
                                                  // }}
                                                >
                                                  <div className="dropbutton-widget">
                                                    <div className="dropbutton">
                                                      <div>
                                                        <button
                                                          className="custom-button all-buttons-color text-white border btn btn-sm m-0 border-0"
                                                          // style={{
                                                          //   marginLeft: "450px",
                                                          // }}
                                                          onClick={() =>
                                                            handleRemovekey(
                                                              teamName,
                                                              appDetailsData.name,
                                                              credential.consumerKey
                                                            )
                                                          }
                                                        >
                                                          Delete
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="wrapper--secondary"
                                                  style={
                                                    {
                                                      ///  border: "1px solid red",
                                                      //marginLeft: "45px",
                                                    }
                                                  }
                                                >
                                                  <label className="ml-5">
                                                    Products
                                                  </label>
                                                  {credential &&
                                                  credential.apiProducts &&
                                                  credential.apiProducts
                                                    .length > 0 ? (
                                                    <div>
                                                      {credential.apiProducts.map(
                                                        (
                                                          product,
                                                          productIndex
                                                        ) => (
                                                          <div
                                                            className=" "
                                                            key={productIndex}
                                                          >
                                                            <div className=" d-flex justify-content-between   ">
                                                              <span className="ml-5">
                                                                {
                                                                  product.apiproduct
                                                                }
                                                              </span>

                                                              <div className="mr-5">
                                                                <span className="badge badge-success ">
                                                                  {product.status
                                                                    ? "Enabled"
                                                                    : "Disabled"}
                                                                </span>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        )
                                                      )}
                                                    </div>
                                                  ) : (
                                                    <p className="ml-5">
                                                      No API products found for
                                                      this credential.
                                                    </p>
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </fieldset>
                                        );
                                      }
                                    }
                                  )
                                ) : (
                                  <p style={{ marginLeft: "32px" }}>
                                    No credentials found for this app.
                                  </p>
                                )}
                              </div>
                            </details>
                          </div>

                          <div className="card apigee-entity--app__details">
                            <h4 className="card-header bg-white">
                              Custom Attributes
                            </h4>

                            <div className="card-body">
                              <fieldset className="app-custom-attribute">
                                <div className="fieldset-wrapper" />

                                {/* <div className="  ">
                                  <h4 className="mb-4">Coffee Selection</h4>

                                  {coffeeOptions.map((coffeeName) => (
                                    <div
                                      className="form-check mb-2"
                                      key={coffeeName}
                                    >
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`${coffeeName}Checkbox`}
                                        // checked={selectedCoffeeOptionsDuplicates.includes(
                                        //   coffeeName
                                        // )}
                                        onChange={() =>
                                          handleCheckboxChange(coffeeName)
                                        }
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={`${coffeeName}Checkbox`}
                                      >
                                        {coffeeName}
                                      </label>
                                    </div>
                                  ))}

                                  <button
                                    type="button"
                                    className="btn btn-primary mt-3"
                                    onClick={handleSubmit}
                                  >
                                    Submit
                                  </button>
                                </div> */}

                                <div>
                                  {coffeeOptions &&
                                    coffeeOptions.length > 0 && (
                                      <div className="p-4 fieldset-wrapper">
                                        <div className="form-checkboxes">
                                          {coffeeOptions.map((item) => (
                                            <div
                                              key={item}
                                              className="form-item form-item-field-api-product-0-value-corp-iag-code-token form-check"
                                            >
                                              <ul
                                                style={{
                                                  padding: 0,
                                                  margin: 0,
                                                }}
                                              >
                                                <li
                                                  key={item}
                                                  style={{ listStyle: "none" }}
                                                >
                                                  <input
                                                    type="checkbox"
                                                    value={item}
                                                    style={{
                                                      marginRight: "0.5em",
                                                    }}
                                                    checked={checkedAttributes.includes(
                                                      item
                                                    )}
                                                    onChange={() =>
                                                      handleCheckboxChangeForDuplicates(
                                                        item
                                                      )
                                                    }
                                                  />
                                                  {item}
                                                </li>
                                              </ul>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                  <div className="pl-4">
                                    {coffeeOptions &&
                                      coffeeOptions.length > 0 && (
                                        <button
                                          onClick={handleSubmit}
                                          className="all-buttons-color text-white form-submit btn btn-md"
                                        >
                                          Add Items
                                        </button>
                                      )}
                                  </div>
                                  {/* <div class="container">
  <p class="text text-sm-sm text-sm-md text-md-lg text-lg-xl">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    like Aldus PageMaker including versions of Lorem Ipsum.
   
  </p>
</div> */}
                                </div>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewApp;



