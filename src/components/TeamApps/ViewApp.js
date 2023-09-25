// import { Link } from "gatsby";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const ViewApp = ({ appName, teamName }) => {
//   const [showSecret, setShowSecret] = useState(false);
//   const [showKey, setShowKey] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const toggleVisibility1 = () => {
//     setShowSecret((prevShowSecret) => !prevShowSecret);
//   };

//   const toggleVisibility2 = () => {
//     setShowKey((prevShowKey) => !prevShowKey);
//   };

//   const hideKey = (key) => {
//     return "•".repeat(key.length);
//   };

//   const appDetails = useSelector((state) => state.app.appDetails);

//   // console.log("asf",appDetails)

//   // function getRelativeTimeFromNow(createdAtTimestamp) {
//   //   const now = new Date();
//   //   const createdAt = new Date(createdAtTimestamp);
//   //   const diffInMilliseconds = now - createdAt;

//   //   // Define the number of milliseconds in each unit of time
//   //   const oneDay = 24 * 60 * 60 * 1000;
//   //   const oneWeek = 7 * oneDay;

//   //   // Calculate the difference in days and weeks
//   //   const diffInDays = Math.floor(diffInMilliseconds / oneDay);
//   //   const diffInWeeks = Math.floor(diffInMilliseconds / oneWeek);

//   //   // Calculate the remaining days after considering the weeks
//   //   const remainingDays = diffInDays - diffInWeeks * 7;

//   //   // Construct the output string
//   //   let output = "";
//   //   if (diffInWeeks > 0) {
//   //     output += `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} `;
//   //   }
//   //   if (remainingDays > 0) {
//   //     output += `${remainingDays} day${remainingDays > 1 ? "s" : ""} `;
//   //   }
//   //   output += "ago";

//   //   return output;
//   // }

//   // const createdAtTimestamp = appDetails.createdAt; // Replace this with your actual timestamp
//   // const relativeTime = getRelativeTimeFromNow(createdAtTimestamp);
//   // console.log(relativeTime); // Output will be something like "3 weeks 6 days ago"

//   // const asjg=appDetails.credentials.consumerKey
//   // console.log("ksufs",asjg)

//   // function getRelativeTimeFromNow(lastModifiedAtTimestamp) {
//   //   const now = new Date();
//   //   const lastModifiedAt = new Date(lastModifiedAtTimestamp);
//   //   const diffInMilliseconds = now - lastModifiedAt;

//   //   // Define the number of milliseconds in each unit of time
//   //   const oneDay = 24 * 60 * 60 * 1000;
//   //   const oneWeek = 7 * oneDay;

//   //   // Calculate the difference in days and weeks
//   //   const diffInDays = Math.floor(diffInMilliseconds / oneDay);
//   //   const diffInWeeks = Math.floor(diffInMilliseconds / oneWeek);

//   //   // Calculate the remaining days after considering the weeks
//   //   const remainingDays = diffInDays - diffInWeeks * 7;

//   //   // Construct the output string
//   //   let output = "";
//   //   if (diffInWeeks > 0) {
//   //     output += `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} `;
//   //   }
//   //   if (remainingDays > 0) {
//   //     output += `${remainingDays} day${remainingDays > 1 ? "s" : ""} `;
//   //   }
//   //   output += "ago";

//   //   return output;
//   // }

//   // const lastModifiedAtTimestamp = appDetails.lastModifiedAt; // Replace this with your actual timestamp
//   // const lastmodify = getRelativeTimeFromNow(lastModifiedAtTimestamp);
//   // console.log(lastmodify); // Output will be something like "3 weeks 6 days ago"

//   // Retrieve the selected app from the teamDetails.apps array
//   // const selectedApp = teamDetails.apps[selectedAppIndex] || {};
//   // console.log("Selected App Index:", selectedAppIndex);

//   // Retrieve the name of the selected app
//   // const selectedAppName = selectedApp.name || "";
//   // console.log("jdbjsd",selectedAppName);

//   // const serializedData = teamDetails.attributes;

//   // const unserializeData = (serializedData) => {
//   //   const regex = /s:\d+:\\\"(.*?)\\\"/g;
//   //   let match;
//   //   const unserializedArray = [];

//   //   while ((match = regex.exec(serializedData[0].value)) !== null) {
//   //     const value = match[1].replace(/\\\\/g, "\\"); // The serialized value
//   //     if (!unserializedArray.includes(value)) {
//   //       unserializedArray.push(value);
//   //     }
//   //   }

//   //   return unserializedArray;
//   // };

//   // const unserializedData = unserializeData(serializedData);
//   return (
//     <div>
//       <div>
//         <div>
//           {/* <h1>{teamName}</h1>
//           <p>Display Name: {teamDetails.displayName}</p>
//           <p>Organization: {teamDetails.organization}</p>
//           <p>Status: {teamDetails.status}</p>
//           <p>Created By: {teamDetails.createdBy}</p>
//           <p>Last Modified By: {teamDetails.lastModifiedBy}</p>
//           <p>Created At: {new Date(teamDetails.createdAt).toString()}</p>
//           <p>
//             Last Modified At: {new Date(teamDetails.lastModifiedAt).toString()}
//           </p>

//           <h2>Apps:</h2>
//           <ul>
//             {teamDetails.apps.map((app, index) => (
//               <li key={index}>{app}</li>
//             ))}
//           </ul> */}

//           {/* <h2>Attributes:</h2>

//           {teamDetails.attributes.map((attribute, index) => {

//             return (
//               <div>
//                 <li key={index}>
//                   {attribute.name}:
//                   <h2>Unserialized Data (without duplicates):</h2>
//                   <ul>
//                     {unserializedData.map((value, index) => (
//                       <li key={index}>{value}</li>
//                     ))}
//                   </ul>
//                 </li>
//               </div>
//             );
//           })} */}
//         </div>
//       </div>

//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <header className="page__header">
//             <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=starbucks_tabs&args%5B1%5D=full&args%5B2%5D&token=MEkI12DtyJlNIxuOGvgD3VFvH_cZWONfyjuDDe873eY" />
//           </header>
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div
//                   data-contextual-id="block:block=pagetitle:langcode=en"
//                   data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                 />
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     {appDetails.name} team app
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <main className="main" role="main">
//             <Link id="main-content" tabIndex={-1} />
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div data-drupal-messages-fallback="" className="hidden" />
//                     <span data-big-pipe-placeholder-id="callback=Drupal%5CCore%5CRender%5CElement%5CStatusMessages%3A%3ArenderMessages&args%5B0%5D&token=_HAdUpwWmet0TOTe2PSiJuMntExoshbm1kh2wQzzzAA" />
//                     <div
//                       data-quickedit-entity-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9"
//                       className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full"
//                     >
//                       <div className="tab-pane show active" id="credentials-">
//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">Details</h4>
//                           <div className="card-body">
//                             <div
//                               data-quickedit-field-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9/status/und/full"
//                               className="field field--inline d-sm-flex align-items-sm-center team-app__status"
//                             >
//                               <div className="field__label">
//                                 Team App status
//                               </div>
//                               <div className="field__item">
//                                 <span className="badge badge-success">
//                                   {appDetails.status}
//                                 </span>
//                               </div>
//                             </div>
//                             <div
//                               data-quickedit-field-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9/createdAt/und/full"
//                               className="field field--inline d-sm-flex align-items-sm-center team-app__createdat"
//                             >
//                               <div className="field__label">Created</div>
//                               <div className="field__item">
//                                 {new Date(appDetails.createdAt).toString()}
//                               </div>
//                             </div>
//                             <div
//                               data-quickedit-field-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9/lastModifiedAt/und/full"
//                               className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat"
//                             >
//                               <div className="field__label">Last updated</div>
//                               <div className="field__item">
//                                 {new Date(appDetails.lastModifiedAt).toString()}
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="card apigee-entity--app__credentials">
//                           <h4 className="card-header bg-white">
//                             <div>
//                               <p>Credential </p>
//                             </div>

//                             <Link
//                               href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/add"
//                               data-dialog-type="modal"
//                               data-dialog-options='{"width":500,"height":450,"draggable":false,"autoResize":false}'
//                               className="use-ajax button btn btn-primary btn-sm"
//                               hrefLang="und"
//                             >
//                               Add key
//                             </Link>
//                           </h4>

//                           <div
//                             className="card-body pb-0"
//                             style={{ border: "1px solid red" }}
//                           >
//                             {appDetails.credentials.length > 0 ? (
//                               <fieldset className="items--inline app-credential">
//                                 <legend>Credential</legend>
//                                 {appDetails.credentials.map(
//                                   (credential, index) => (
//                                     <div
//                                       className="fieldset-wrapper"
//                                       style={{ border: "1px solid green" }}
//                                     >

//                                       <div
//                                         className="wrapper--primary app-details-wrapper"

//                                         style={{ border: "1px solid yellow" }}
//                                       >
//                                         <div className="item-property"  key={index}>
//                                           <label>Consumer Key</label>
//                                           {/* Assuming you want to display the consumerKey */}
//                                           <div className="secret field__item">
//                                             {credential.consumerKey}
//                                           </div>
//                                         </div>
//                                         <div className="item-property">
//                                           <label>Consumer Secret</label>
//                                           {/* Assuming you want to display the consumerSecret */}
//                                           <div className="secret field__item">
//                                             {credential.consumerSecret}
//                                           </div>
//                                         </div>
//                                         <div className="item-property">
//                                           <label>Issued</label>
//                                           {/* Assuming you want to display the issued date */}
//                                           {credential.issuedAt}
//                                         </div>
//                                         <div className="item-property">
//                                           <label>Expires</label>
//                                           {/* Assuming you want to display the expiration date */}
//                                           {credential.expiresAt}
//                                         </div>
//                                         <div className="item-property">
//                                           <label>Key Status</label>
//                                           <span className="badge badge-success">
//                                             {/* Assuming you want to display the key status */}
//                                             Active
//                                           </span>
//                                         </div>

//                                         {credential.apiProducts.length > 0 ? (
//                                           <div
//                                             className="wrapper--secondary"
//                                             style={{ border: "1px solid blue" }}
//                                           >
//                                             <label>Products</label>
//                                             {credential.apiProducts.map(
//                                               (product, productIndex) => (
//                                                 <div
//                                                   className="api-product-list-row clearfix"
//                                                   key={productIndex}
//                                                 >
//                                                   <span className="api-product-name">
//                                                     {product.apiproduct}
//                                                   </span>
//                                                   <span className="badge badge-info">
//                                                     {product.status}
//                                                   </span>
//                                                 </div>
//                                               )
//                                             )}
//                                           </div>
//                                         ) : (
//                                           <div
//                                             className="wrapper--secondary"
//                                             style={{ border: "1px solid blue" }}
//                                           >
//                                             <p>
//                                               No API products found for this
//                                               credential.
//                                             </p>
//                                           </div>
//                                         )}
//                                       </div>
//                                     </div>
//                                   )
//                                 )}
//                               </fieldset>
//                             ) : (
//                               <p>No credentials found.</p>
//                             )}
//                           </div>
//                         </div>

//                         <div className="apigee-entity--app__credentials">
//                           <details className="js-form-wrapper form-wrapper card bg-lighter mb-3">
//                             <summary
//                               role="button"
//                               aria-expanded="false"
//                               aria-pressed="false"
//                               className="card-header bg-lighter"
//                             >
//                               Revoked keys (1)
//                             </summary>
//                             <div className="card-body">
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={2}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/YD4XgKQAHA22DMwKAEsz1Z4JF2fvVEPs/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-929673007"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-929673007"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-248762249"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-248762249"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 28 2023
//                                       02:54:18 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 28 2024
//                                       07:00:00 AM (UTC) in 10 months 3 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>

//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                             </div>
//                           </details>
//                         </div>

//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">
//                             Custom Attributes
//                           </h4>
//                           <div className="card-body">
//                             <fieldset className="app-custom-attribute">
//                               <div className="fieldset-wrapper" />
//                             </fieldset>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
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

// export default ViewApp;

// import { Link } from "gatsby";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const ViewApp = ({ appName, teamName }) => {
//   const [showSecret, setShowSecret] = useState(false);
//   const [showKey, setshowKey] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const toggleVisibility1 = () => {
//     setShowSecret((prevShowSecret) => !prevShowSecret);
//   };

//   const toggleVisibility2 = () => {
//     setshowKey((prevShowSecret) => !prevShowSecret);
//   };

//   const hideKey = (key) => {
//     return "•".repeat(key.length);
//   };
//   const appDetails = useSelector((state) => state.app.appDetails);
//   console.log("asf", appDetails);

//   // const copyToClipboard = () => {
//   //   const textArea = document.createElement("textarea");
//   //   textArea.value = credential.consumerKey;
//   //   document.body.appendChild(textArea);
//   //   textArea.select();
//   //   document.execCommand("copy");
//   //   document.body.removeChild(textArea);

//   //   setCopied(true);
//   //   setTimeout(() => {
//   //     setCopied(false);
//   //   }, 2000); // Remove "Copied" badge after 2 seconds
//   // };

//   return (
//     <div>
//       <div
//         className="dialog-off-canvas-main-canvas"

//       >
//         <div className="page">
//           <header className="page__header"></header>
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div />
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     {appDetails.name} team app
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
//                       <div className="tab-pane show active">
//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">Details</h4>
//                           <div className="card-body">
//                             <div className="field field--inline d-sm-flex align-items-sm-center team-app__status">
//                               <div className="field__label">
//                                 Team App status
//                               </div>
//                               <div className="field__item">
//                                 <span className="badge badge-success">
//                                   {appDetails.status}
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="field field--inline d-sm-flex align-items-sm-center team-app__createdat">
//                               <div className="field__label">Created</div>
//                               <div className="field__item">
//                                 {new Date(appDetails.createdAt).toString()}
//                               </div>
//                             </div>
//                             <div className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat">
//                               <div className="field__label">Last updated</div>
//                               <div className="field__item">
//                                 {new Date(appDetails.lastModifiedAt).toString()}
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="card apigee-entity--app__credentials">
//                           <h4 className="card-header bg-white">
//                             Credentials
//                             <Link className="use-ajax button btn btn-primary btn-sm">
//                               Add key
//                             </Link>
//                           </h4>
//                           <div className="card-body pb-0">
//                           {appDetails.credentials.map(
//                                   (credential, index) => (
//                             <fieldset className="items--inline app-credential">
//                               <legend>Credential</legend>

//                               <div className="fieldset-wrapper">
// //                                   <div className="dropbutton-wrapper">
// //                                     <div className="dropbutton-widget">
// //                                       <ul className="dropbutton">
// //                                         <li>
// //                                           <Link to="/">Revoke</Link>
// //                                         </li>
// //                                         <li>
// //                                           <Link to="/">Delete</Link>
// //                                         </li>
// //                                       </ul>
// //                                     </div>
// //                                   </div>

//                                     <div
//                                       className="wrapper--primary app-details-wrapper"

//                                     >

//                                       <div
//                                         className="item-property"
//                                         key={index}

//                                       >
//                                         <label>Consumer Key</label>
//                                         <div className="secret field__item">
//                                           {showSecret ? (
//                                             <div className="secret__value">
//                                               {credential.consumerKey}
//                                             </div>
//                                           ) : (
//                                             <div className="secret__value__hidden">
//                                               {hideKey(credential.consumerKey)}
//                                             </div>
//                                           )}
//                                           <br />
//                                           <button
//                                             className="secret__toggle"
//                                             onClick={toggleVisibility1}
//                                           >
//                                             {showSecret ? (
//                                               <Link className="secret__toggle__hide">
//                                                 <i className="fas fa-eye-slash secret__toggle__hide" />
//                                               </Link>
//                                             ) : (
//                                               <Link className="secret__toggle__show">
//                                                 <i className="fas fa-eye secret__toggle__show" />
//                                               </Link>
//                                             )}
//                                           </button>
//                                           <div className="secret__copy">
//                                             {/* <span className="badge badge-light">
//                                               Copied
//                                             </span> */}
//                                             <button
//                                               className="secret__copy"
//                                               data-value=""
//                                               title="Click to copy"
//                                             >
//                                               <i className="fas fa-paste" />
//                                             </button>
//                                           </div>
//                                         </div>
//                                       </div>

//                                       <div
//                                         className="item-property"
//                                         key={index}
//                                       >
//                                         <label>Consumer Secret</label>
//                                         <div className="secret field__item">
//                                           {showKey ? (
//                                             <div className="secret__value">
//                                               {credential.consumerSecret}
//                                             </div>
//                                           ) : (
//                                             <div className="secret__value__hidden">
//                                               {hideKey(
//                                                 credential.consumerSecret
//                                               )}
//                                             </div>
//                                           )}
//                                           <br />
//                                           <button
//                                             className="secret__toggle"
//                                             onClick={toggleVisibility2}
//                                           >
//                                             {showKey ? (
//                                               <Link className="secret__toggle__hide">
//                                                 <i className="fas fa-eye-slash secret__toggle__hide" />
//                                               </Link>
//                                             ) : (
//                                               <Link className="secret__toggle__show">
//                                                 <i className="fas fa-eye secret__toggle__show" />
//                                               </Link>
//                                             )}
//                                           </button>

//                                           {/* <div className="secret__copy">
//                                             <span className="badge badge-light">
//                                               Copied
//                                             </span>
//                                             <button
//                                               className="secret__copy"
//                                               data-value=""
//                                               title="Click to copy"
//                                             >
//                                               <i className="fas fa-paste" />
//                                             </button>
//                                           </div>
//                                           <div className="secret__copy"> */}
//                                           {/* {copied ? (
//                                           <span className="badge badge-light">
//                                             Copied
//                                            </span>
//                                          ) : null}
//                                              <button
//                                             className="secret__copy"
//                                               data-value={credential.consumerKey}
//                                               title="Click to copy"
//                                               onClick={copyToClipboard}
//                                                     >
//                                                 <i className="fas fa-paste" />
//                                                  </button>
//                                                   </div> */}
//                                         </div>
//                                       </div>

//                                       <div className="item-property">
//                                         <label> Issued </label>
//                                         {new Date(
//                                           credential.issuedAt
//                                         ).toString()}
//                                       </div>
//                                       <div className="item-property">
//                                         <label> Expires </label>{" "}
//                                         {new Date(
//                                           credential.expiresAt
//                                         ).toString()}
//                                       </div>
//                                       <div className="item-property">
//                                         <label> Key Status </label>
//                                         <span className="badge badge-success">
//                                           {credential.status}
//                                         </span>
//                                       </div>
//                                       </div>

//                                       <div className="item-property">
//                                       {credential.apiProducts.length > 0 ? (
//                                               <div
//                                                 className="wrapper--secondary"
//                                                 key={index}
//                                               >
//                                                 <label> Products </label>
//                                                 <div>
//                                                   {credential.apiProducts.map(
//                                                     (product, productIndex) => (
//                                                       <div
//                                                         className="api-product-list-row clearfix"
//                                                         key={productIndex}
//                                                       >
//                                                         <span className="api-product-name">
//                                                           {product.apiproduct}
//                                                         </span>
//                                                         <span className="badge badge-info">
//                                                           {product.status}
//                                                         </span>
//                                                       </div>
//                                                     )
//                                                   )}
//                                                 </div>
//                                               </div>
//                                             ) : null
//                                         )}
//                                       </div>
//                                     </div>

//                                   )
//                                 )}

//                             </fieldset>
//                           </div>
//                         </div>
//                         <div className="apigee-entity--app__credentials"></div>
//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">
//                             Custom Attributes
//                           </h4>
//                           <div className="card-body">
//                             <fieldset className="app-custom-attribute">
//                               <div className="fieldset-wrapper" />
//                             </fieldset>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
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

// export default ViewApp;

// import { Link } from "gatsby";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const ViewApp = () => {
//   const [showSecret, setShowSecret] = useState(false);
//   const [showKey, setShowKey] = useState(false);

//   const toggleVisibility1 = () => {
//     setShowSecret((prevShowSecret) => !prevShowSecret);
//   };

//   const toggleVisibility2 = () => {
//     setShowKey((prevShowKey) => !prevShowKey);
//   };

//   const hideKey = (key) => "•".repeat(key.length);

//   const appDetails = useSelector((state) => state.app.appDetails);

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
//                     {appDetails.name} team app
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
//                       <div className="tab-pane show active">
//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">Details</h4>
//                           <div className="card-body">
//                             {/* Team App status */}
//                             <div className="field field--inline d-sm-flex align-items-sm-center team-app__status">
//                               <div className="field__label">
//                                 Team App status
//                               </div>
//                               <div className="field__item">
//                                 <span className="badge badge-success">
//                                   {appDetails.status}
//                                 </span>
//                               </div>
//                             </div>
//                             {/* Created */}
//                             <div className="field field--inline d-sm-flex align-items-sm-center team-app__createdat">
//                               <div className="field__label">Created</div>
//                               <div className="field__item">
//                                 {new Date(appDetails.createdAt).toString()}
//                               </div>
//                             </div>
//                             {/* Last Updated */}
//                             <div className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat">
//                               <div className="field__label">Last updated</div>
//                               <div className="field__item">
//                                 {new Date(appDetails.lastModifiedAt).toString()}
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Credentials */}
//                         <div className="card apigee-entity--app__credentials">
//                           <h4 className="card-header bg-white">
//                             Credentials
//                             <Link className="use-ajax button btn btn-primary btn-sm">
//                               Add key
//                             </Link>
//                           </h4>

//                           <div className="card-body pb-0">

//                                 {appDetails.credentials.map(
//                                   (credential, index) => (
//                                     <fieldset className="items--inline app-credential"
//                                     key={index}
//                                        style={{ border: "1px solid red" }}>

//                                       <div className="dropbutton-wrapper">
//                                         <div className="dropbutton-widget">
//                                           <ul className="dropbutton">
//                                             <li>
//                                               <Link to="/">Revoke</Link>
//                                             </li>
//                                             <li>
//                                               <Link to="/">Delete</Link>
//                                             </li>
//                                           </ul>
//                                         </div>
//                                       </div>

//                                       {/* Consumer Key */}
//                                       <div
//                                       className="wrapper--primary app-details-wrapper"

//                                     >
//                                       <div className="item-property">
//                                         <label>Consumer Key</label>
//                                         <div className="secret field__item">
//                                           {showSecret ? (
//                                             <div className="secret__value">
//                                               {credential.consumerKey}
//                                             </div>
//                                           ) : (
//                                             <div className="secret__value__hidden">
//                                               {hideKey(credential.consumerKey)}
//                                             </div>
//                                           )}
//                                           <br />
//                                           <button
//                                             className="secret__toggle"
//                                             onClick={toggleVisibility1}
//                                           >
//                                             {showSecret ? (
//                                               <Link className="secret__toggle__hide">
//                                                 <i className="fas fa-eye-slash secret__toggle__hide" />
//                                               </Link>
//                                             ) : (
//                                               <Link className="secret__toggle__show">
//                                                 <i className="fas fa-eye secret__toggle__show" />
//                                               </Link>
//                                             )}
//                                           </button>
//                                           <div className="secret__copy">
//                                             <button
//                                               className="secret__copy"
//                                               data-value=""
//                                               title="Click to copy"
//                                             >
//                                               <i className="fas fa-paste" />
//                                             </button>
//                                           </div>
//                                         </div>
//                                       </div>
//                                       </div>

//                                       {/* Consumer Secret */}
//                                       <div className="item-property">
//                                         <label>Consumer Secret</label>
//                                         <div className="secret field__item">
//                                           {showKey ? (
//                                             <div className="secret__value">
//                                               {credential.consumerSecret}
//                                             </div>
//                                           ) : (
//                                             <div className="secret__value__hidden">
//                                               {hideKey(
//                                                 credential.consumerSecret
//                                               )}
//                                             </div>
//                                           )}
//                                           <br />
//                                           <button
//                                             className="secret__toggle"
//                                             onClick={toggleVisibility2}
//                                           >
//                                             {showKey ? (
//                                               <Link className="secret__toggle__hide">
//                                                 <i className="fas fa-eye-slash secret__toggle__hide" />
//                                               </Link>
//                                             ) : (
//                                               <Link className="secret__toggle__show">
//                                                 <i className="fas fa-eye secret__toggle__show" />
//                                               </Link>
//                                             )}
//                                           </button>
//                                         </div>
//                                       </div>

//                                       {/* Other credential properties */}
//                                       <div className="item-property">
//                                         <label> Issued </label>
//                                         {new Date(
//                                           credential.issuedAt
//                                         ).toString()}
//                                       </div>
//                                       <div className="item-property">
//                                         <label> Expires </label>{" "}
//                                         {new Date(
//                                           credential.expiresAt
//                                         ).toString()}
//                                       </div>
//                                       <div className="item-property">
//                                         <label> Key Status </label>
//                                         <span className="badge badge-success">
//                                           {credential.status}
//                                         </span>
//                                       </div>

//                                       {/* API Products */}
//                                       {credential.apiProducts.length > 0 && (
//                                         <div
//                                           className="item-property"
//                                           style={{ border: "1px solid green" }}
//                                         >
//                                           <div className="wrapper--secondary">
//                                             <label> Products </label>
//                                             <div>
//                                               {credential.apiProducts.map(
//                                                 (product, productIndex) => (
//                                                   <div
//                                                     className="api-product-list-row clearfix"
//                                                     key={productIndex}
//                                                   >
//                                                     <span className="api-product-name">
//                                                       {product.apiproduct}
//                                                     </span>
//                                                     <span className="badge badge-info">
//                                                       {product.status}
//                                                     </span>
//                                                   </div>
//                                                 )
//                                               )}
//                                             </div>
//                                           </div>
//                                         </div>
//                                       )}
//                                       </fieldset>

//                                   )
//                                 )}

//                           </div>
//                         </div>

//                         {/* Custom Attributes */}
//                         <div className="apigee-entity--app__credentials">
//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">
//                             Custom Attributes
//                           </h4>
//                           <div className="card-body">
//                             <fieldset className="app-custom-attribute">
//                               <div className="fieldset-wrapper" />
//                             </fieldset>
//                           </div>
//                         </div>
//                         </div>
//                       </div>
//                     </div>
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

// export default ViewApp;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import AppsButton from "./AppsButton";
// import {
//   fetchTeamDetails,
//   fetchAppDetails,
//   updateAppDetails,
//   appDetails,
// } from "../../redux/store";

// import "../../styles/popup.css";
// import { Link } from "gatsby";

// const ViewApp = () => {
//   const dispatch = useDispatch();
//   const appDetails = useSelector((state) => state.app.appDetails);
//   console.log("appDetails", appDetails);

//    const teamDetails = useSelector((state) => state.teamDetails);

//   // const { appDetailsData, error } = useSelector((state) => state.appDetails);

//   const teamName = appDetails.companyName;
//   console.log("teamName", teamName);
//   const appName = appDetails.name;
//   // console.log("appData",appData)

//   console.log("appName", appName);

//   const [showSecret, setShowSecret] = useState(false);
//   const [showKey, setShowKey] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [refresh, setRefresh] = useState(false);

//   const generateRandomSecret = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let key = "";
//     for (let i = 0; i < 16; i++) {
//       key += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return key;
//   };

//   const generateRandomKey = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let secret = "";
//     for (let i = 0; i < 32; i++) {
//       secret += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return secret;
//   };

//   const togglePopup = async () => {
//     setShowPopup(!showPopup);
//   };

//   const handleConfirmClick = async () => {
//     try {
//       const randomKey = generateRandomKey();
//       const randomSecret = generateRandomSecret();

//       const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/create`;
//       const bearerToken = process.env.BEARER_TOKEN;

//       const response = await axios.post(
//         apiUrl,
//         {
//           consumerKey: randomKey,
//           consumerSecret: randomSecret,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${bearerToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       alert("API key created successfully");
//       setShowPopup(false);
//     } catch (error) {
//       alert("Error creating API key: " + error.message);
//     }
//   };

//   const toggleVisibility1 = () => {
//     setShowSecret((prevShowSecret) => !prevShowSecret);
//   };

//   const toggleVisibility2 = () => {
//     setShowKey((prevShowKey) => !prevShowKey);
//   };

//   const hideKey = (key) => {
//     return "•".repeat(key.length);
//   };

//   const handleRemovekey = async (teamName, appName, consumerKey) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}`;
//     const bearerToken = process.env.BEARER_TOKEN;

//     try {
//       await axios.delete(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       alert("Key removed successfully");
//     } catch (error) {
//       alert("Error removing key: " + error);
//     }
//   };

//   const handleRevokeKey = async (teamName, appName, consumerKey) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
//     const bearerToken = process.env.BEARER_TOKEN;

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 204) {
//         // Key revoked successfully
//         alert("Key revoked successfully");
//       } else {
//         alert("Key revocation was not successful");
//       }
//     } catch (error) {
//       alert("Error revoking key: " + error.message);
//     }
//   };

//   useEffect(() => {
//     // Fetch app details using the appId
//     // ...

//     // After fetching the app details, you might want to update them
//     const updatedDetails = {
//       ...appDetails,
//       // Update properties as needed
//     };

//     // Dispatch the updateAppDetails action to update the store
//     dispatch(updateAppDetails(updatedDetails));

//     // Toggle the refresh state to trigger a component refresh
//     setRefresh((prevRefresh) => !prevRefresh);
//   }, [dispatch, appName]);

//   return (
//     <Layout>
//       <AppsButton />
//       <div>
//         <div
//           className="dialog-off-canvas-main-canvas"
//           data-off-canvas-main-canvas=""
//         >
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div
//                     data-contextual-id="block:block=pagetitle:langcode=en"
//                     data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                   />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       {appDetails.name} team app
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
//                       <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
//                         <div
//                           className="tab-pane show active"
//                           style={{ border: "1px solid red" }}
//                         >
//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">Details</h4>
//                             <div className="card-body">
//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__status">
//                                 <div className="field__label">
//                                   Team App status
//                                 </div>
//                                 <div className="field__item">
//                                   <span className="badge badge-success">
//                                     {appDetails.status}
//                                   </span>
//                                 </div>
//                               </div>

//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__createdat">
//                                 <div className="field__label">Created</div>
//                                 <div className="field__item">
//                                   {new Date(appDetails.createdAt).toString()}
//                                 </div>
//                               </div>

//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat">
//                                 <div className="field__label">Last updated</div>
//                                 <div className="field__item">
//                                   {new Date(
//                                     appDetails.lastModifiedAt
//                                   ).toString()}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="card apigee-entity--app__credentials">
//                             <h4 className="card-header bg-white">
//                               Credentials
//                               <button
//                                 className="use-ajax button btn btn-primary btn-sm"
//                                 onClick={togglePopup}
//                               >
//                                 Add key
//                               </button>
//                             </h4>

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
//                                       <button
//                                         className="popup-button confirm-button"
//                                         onClick={handleConfirmClick}
//                                       >
//                                         Confirm
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )}

//                             <div
//                               className="card-body pb-0"
//                               style={{ border: "7px solid green" }}
//                             >
//                               {/* Iterate over credentials */}
//                               {appDetails.credentials.map(
//                                 (credential, index) => (
//                                   <fieldset
//                                     className="items--inline app-credential"
//                                     key={index}
//                                     style={{ border: "1px solid red" }}
//                                   >
//                                     <legend>Credential</legend>
//                                     <div className="fieldset-wrapper">
//                                       <div
//                                         className="wrapper--primary app-details-wrapper"
//                                         style={{ border: "8px solid yellow" }}
//                                       >
//                                         <div className="item-property">
//                                           <label>Consumer Key</label>
//                                           <div className="secret field__item">
//                                             {showSecret ? (
//                                               <div className="secret__value">
//                                                 {credential.consumerKey}
//                                               </div>
//                                             ) : (
//                                               <div className="secret__value__hidden">
//                                                 {hideKey(
//                                                   credential.consumerKey
//                                                 )}
//                                               </div>
//                                             )}
//                                             <br />
//                                             <button
//                                               className="secret__toggle"
//                                               onClick={toggleVisibility1}
//                                             >
//                                               {showSecret ? (
//                                                 <Link className="secret__toggle__hide">
//                                                   <i className="fas fa-eye-slash secret__toggle__hide" />
//                                                 </Link>
//                                               ) : (
//                                                 <Link className="secret__toggle__show">
//                                                   <i className="fas fa-eye secret__toggle__show" />
//                                                 </Link>
//                                               )}
//                                             </button>
//                                             <div className="secret__copy">
//                                               <button
//                                                 className="secret__copy"
//                                                 data-value=""
//                                                 title="Click to copy"
//                                               >
//                                                 <i className="fas fa-paste" />
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>

//                                         <div className="item-property">
//                                           <label>Consumer Secret</label>
//                                           <div className="secret field__item">
//                                             {showKey ? (
//                                               <div className="secret__value">
//                                                 {credential.consumerSecret}
//                                               </div>
//                                             ) : (
//                                               <div className="secret__value__hidden">
//                                                 {hideKey(
//                                                   credential.consumerSecret
//                                                 )}
//                                               </div>
//                                             )}
//                                             <br />
//                                             <button
//                                               className="secret__toggle"
//                                               onClick={toggleVisibility2}
//                                             >
//                                               {showKey ? (
//                                                 <Link className="secret__toggle__hide">
//                                                   <i className="fas fa-eye-slash secret__toggle__hide" />
//                                                 </Link>
//                                               ) : (
//                                                 <Link className="secret__toggle__show">
//                                                   <i className="fas fa-eye secret__toggle__show" />
//                                                 </Link>
//                                               )}
//                                             </button>
//                                           </div>
//                                         </div>

//                                         <div className="item-property">
//                                           <label> Issued </label>
//                                           {new Date(
//                                             credential.issuedAt
//                                           ).toString()}
//                                         </div>
//                                         <div className="item-property">
//                                           <label> Expires </label>{" "}
//                                           {new Date(
//                                             credential.expiresAt
//                                           ).toString()}
//                                         </div>
//                                         <div className="item-property">
//                                           <label> Key Status </label>
//                                           <span className="badge badge-success">
//                                             {credential.status}
//                                           </span>
//                                         </div>
//                                       </div>
//                                       {/* API Products */}

//                                       <div
//                                         className="item-property"
//                                         style={
//                                           credential.apiProducts.length > 0
//                                             ? { border: "8px solid pink" }
//                                             : {}
//                                         }
//                                       >
//                                         <div className="wrapper--secondary">
//                                           <label>Products</label>
//                                           {credential.apiProducts.length > 0 ? (
//                                             <div>
//                                               {credential.apiProducts.map(
//                                                 (product, productIndex) => (
//                                                   <div
//                                                     className="api-product-list-row clearfix"
//                                                     key={productIndex}
//                                                   >
//                                                     <div className="api-product-list-row clearfix">
//                                                       <span className="api-product-name">
//                                                         {product.apiproduct}
//                                                       </span>
//                                                       <span className="badge badge-info">
//                                                         {product.status}
//                                                       </span>
//                                                     </div>
//                                                   </div>
//                                                 )
//                                               )}
//                                             </div>
//                                           ) : (
//                                             <p>
//                                               No API products found for this
//                                               credential.
//                                             </p>
//                                           )}
//                                         </div>
//                                       </div>
//                                       <div
//                                         className="dropbutton-wrapper"
//                                         style={{ border: "8px solid blue" }}
//                                       >
//                                         <div className="dropbutton-widget">
//                                           <div className="dropbutton">
//                                             <div>
//                                               <button
//                                                 onClick={() =>
//                                                   handleRevokeKey(
//                                                     teamName,
//                                                     appDetails.name,
//                                                     credential.consumerKey
//                                                   )
//                                                 }
//                                               >
//                                                 Revoke
//                                               </button>
//                                             </div>
//                                             <div>
//                                               <button
//                                                 onClick={() =>
//                                                   handleRemovekey(
//                                                     teamName,
//                                                     appDetails.name,
//                                                     credential.consumerKey
//                                                   )
//                                                 }
//                                               >
//                                                 Delete
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </fieldset>
//                                 )
//                               )}
//                             </div>
//                           </div>

//                           <hr></hr>
//                           <hr></hr>
//                           <hr></hr>
//                           <hr></hr>

//                           <div className="abcd"></div>

//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">
//                               Custom Attributes
//                             </h4>
//                             <div className="card-body">
//                               <fieldset className="app-custom-attribute">
//                                 <div className="fieldset-wrapper" />
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

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import AppsButton from "./AppsButton";
// import {
//   fetchTeamDetails,
//   fetchAppDetails,
//   updateAppDetails,
//   appDetails,
// } from "../../redux/store";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import "../../styles/popup.css";
// import { Link } from "gatsby";

// const ViewApp = () => {
//   const dispatch = useDispatch();
//   // const appDetails = useSelector((state) => state.app.appDetails);
//   // console.log("appDetails", appDetails);

//   const teamDetails = useSelector((state) => state.teamDetails);

//   // const { appDetailsData, error } = useSelector((state) => state.appDetails);

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const teamName = appDetailsData.companyName;
//   console.log("teamName", teamName);
//   const appName = appDetailsData.name;
//   // console.log("appData",appData)

//   console.log("appName", appName);

//   // useEffect(() => {
//   //   // Fetch updated app details after the component mounts
//   //   dispatch(fetchAppDetails(teamName, appName));
//   // }, [dispatch, teamName, appName]);

//   const [showSecret, setShowSecret] = useState(false);
//   const [showKey, setShowKey] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const generateRandomSecret = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let key = "";
//     for (let i = 0; i < 16; i++) {
//       key += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return key;
//   };

//   const generateRandomKey = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let secret = "";
//     for (let i = 0; i < 32; i++) {
//       secret += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return secret;
//   };

//   const togglePopup = async () => {
//     setShowPopup(!showPopup);
//   };

//   const handleConfirmClick = async () => {
//     try {
//       const randomKey = generateRandomKey();
//       const randomSecret = generateRandomSecret();

//       const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/create`;
//       const bearerToken = process.env.BEARER_TOKEN;

//       const response = await axios.post(
//         apiUrl,
//         {
//           consumerKey: randomKey,
//           consumerSecret: randomSecret,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${bearerToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       dispatch(fetchAppDetails(teamName, appName));
//       alert("API key created successfully");
//       setShowPopup(false);
//     } catch (error) {
//       alert("Error creating API key: " + error.message);
//     }
//   };

//   const toggleVisibility1 = () => {
//     setShowSecret((prevShowSecret) => !prevShowSecret);
//   };

//   const toggleVisibility2 = () => {
//     setShowKey((prevShowKey) => !prevShowKey);
//   };

//   const hideKey = (key) => {
//     return "•".repeat(key.length);
//   };

//   const handleRemovekey = async (teamName, appName, consumerKey) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}`;
//     const bearerToken = process.env.BEARER_TOKEN;

//     try {
//       await axios.delete(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });
//       dispatch(fetchAppDetails(teamName, appName));
//       alert("Key removed successfully");
//     } catch (error) {
//       alert("Error removing key: " + error);
//     }
//   };

//   const handleRevokeKey = async (teamName, appName, consumerKey) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
//     const bearerToken = process.env.BEARER_TOKEN;

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
//         alert("Key revoked successfully");
//       } else {
//         alert("Key revocation was not successful");
//       }
//     } catch (error) {
//       alert("Error revoking key: " + error.message);
//     }
//   };

//   return (
//     <Layout>
//       <AppsButton />
//       <div>
//         <div
//           className="dialog-off-canvas-main-canvas"
//           data-off-canvas-main-canvas=""
//         >
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div
//                     data-contextual-id="block:block=pagetitle:langcode=en"
//                     data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                   />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       {appDetailsData.name} team app
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
//                       <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
//                         <div
//                           className="tab-pane show active"
//                           style={{ border: "1px solid red" }}
//                         >
//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">Details</h4>
//                             <div className="card-body">
//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__status">
//                                 <div className="field__label">
//                                   Team App status
//                                 </div>
//                                 <div className="field__item">
//                                   <span className="badge badge-success">
//                                     {appDetailsData.status}
//                                   </span>
//                                 </div>
//                               </div>

//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__createdat">
//                                 <div className="field__label">Created</div>
//                                 <div className="field__item">
//                                   {new Date(
//                                     appDetailsData.createdAt
//                                   ).toString()}
//                                 </div>
//                               </div>

//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat">
//                                 <div className="field__label">Last updated</div>
//                                 <div className="field__item">
//                                   {new Date(
//                                     appDetailsData.lastModifiedAt
//                                   ).toString()}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="card apigee-entity--app__credentials">
//                             <h4 className="card-header bg-white">
//                               Credentials
//                               <button
//                                 className="use-ajax button btn btn-primary btn-sm"
//                                 onClick={togglePopup}
//                               >
//                                 Add key
//                               </button>
//                             </h4>

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
//                                       <button
//                                         className="popup-button confirm-button"
//                                         onClick={handleConfirmClick}
//                                       >
//                                         Confirm
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )}

//                             <div
//                               className="card-body pb-0"
//                               style={{ border: "7px solid green" }}
//                             >
//                               {/* Iterate over credentials */}
//                               {appDetailsData.credentials.map(
//                                 (credential, index) => (
//                                   <fieldset
//                                     className="items--inline app-credential"
//                                     key={index}
//                                     style={{ border: "1px solid red" }}
//                                   >
//                                     <legend>Credential</legend>
//                                     <div className="fieldset-wrapper">
//                                       <div
//                                         className="wrapper--primary app-details-wrapper"
//                                         style={{ border: "8px solid yellow" }}
//                                       >
//                                         <div className="item-property">
//                                           <label>Consumer Key</label>
//                                           <div className="secret field__item">
//                                             {showSecret ? (
//                                               <div className="secret__value">
//                                                 {credential.consumerKey}
//                                               </div>
//                                             ) : (
//                                               <div className="secret__value__hidden">
//                                                 {hideKey(
//                                                   credential.consumerKey
//                                                 )}
//                                               </div>
//                                             )}
//                                             <br />
//                                             <button
//                                               className="secret__toggle"
//                                               onClick={toggleVisibility1}
//                                             >
//                                               {showSecret ? (
//                                                 <Link className="secret__toggle__hide">
//                                                   <i className="fas fa-eye-slash secret__toggle__hide" />
//                                                 </Link>
//                                               ) : (
//                                                 <Link className="secret__toggle__show">
//                                                   <i className="fas fa-eye secret__toggle__show" />
//                                                 </Link>
//                                               )}
//                                             </button>
//                                             <div className="secret__copy">
//                                               <button
//                                                 className="secret__copy"
//                                                 data-value=""
//                                                 title="Click to copy"
//                                               >
//                                                 <i className="fas fa-paste" />
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>

//                                         <div className="item-property">
//                                           <label>Consumer Secret</label>
//                                           <div className="secret field__item">
//                                             {showKey ? (
//                                               <div className="secret__value">
//                                                 {credential.consumerSecret}
//                                               </div>
//                                             ) : (
//                                               <div className="secret__value__hidden">
//                                                 {hideKey(
//                                                   credential.consumerSecret
//                                                 )}
//                                               </div>
//                                             )}
//                                             <br />
//                                             <button
//                                               className="secret__toggle"
//                                               onClick={toggleVisibility2}
//                                             >
//                                               {showKey ? (
//                                                 <Link className="secret__toggle__hide">

//                                                   <i className="fas fa-eye-slash secret__toggle__hide" />
//                                                 </Link>
//                                               ) : (
//                                                 <Link className="secret__toggle__show">
//                                                   <i className="fas fa-eye secret__toggle__show" />
//                                                 </Link>
//                                               )}
//                                             </button>
//                                           </div>
//                                         </div>

//                                         <div className="item-property">
//                                           <label> Issued </label>
//                                           {new Date(
//                                             credential.issuedAt
//                                           ).toString()}
//                                         </div>
//                                         <div className="item-property">
//                                           <label> Expires </label>{" "}
//                                           {new Date(
//                                             credential.expiresAt
//                                           ).toString()}
//                                         </div>
//                                         <div className="item-property">
//                                           <label> Key Status </label>
//                                           <span className="badge badge-success">
//                                             {credential.status}
//                                           </span>
//                                         </div>
//                                       </div>
//                                       {/* API Products */}

//                                       <div
//                                         className="item-property"
//                                         style={
//                                           credential.apiProducts.length > 0
//                                             ? { border: "8px solid pink" }
//                                             : {}
//                                         }
//                                       >
//                                         <div className="wrapper--secondary">
//                                           <label>Products</label>
//                                           {credential.apiProducts.length > 0 ? (
//                                             <div>
//                                               {credential.apiProducts.map(
//                                                 (product, productIndex) => (
//                                                   <div
//                                                     className="api-product-list-row clearfix"
//                                                     key={productIndex}
//                                                   >
//                                                     <div className="api-product-list-row clearfix">
//                                                       <span className="api-product-name">
//                                                         {product.apiproduct}
//                                                       </span>
//                                                       <span className="badge badge-info">
//                                                         {product.status}
//                                                       </span>
//                                                     </div>
//                                                   </div>
//                                                 )
//                                               )}
//                                             </div>
//                                           ) : (
//                                             <p>
//                                               No API products found for this
//                                               credential.
//                                             </p>
//                                           )}
//                                         </div>
//                                       </div>
//                                       <div
//                                         className="dropbutton-wrapper"
//                                         style={{ border: "8px solid blue" }}
//                                       >
//                                         <div className="dropbutton-widget">
//                                           <div className="dropbutton">
//                                             <div>
//                                               <button
//                                                 onClick={() =>
//                                                   handleRevokeKey(
//                                                     teamName,
//                                                     appDetailsData.name,
//                                                     credential.consumerKey
//                                                   )
//                                                 }
//                                               >
//                                                 Revoke
//                                               </button>
//                                             </div>
//                                             <div>
//                                               <button
//                                                 onClick={() =>
//                                                   handleRemovekey(
//                                                     teamName,
//                                                     appDetailsData.name,
//                                                     credential.consumerKey
//                                                   )
//                                                 }
//                                               >
//                                                 Delete
//                                               </button>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </fieldset>
//                                 )
//                               )}
//                             </div>
//                           </div>

//                           <hr></hr>
//                           <hr></hr>
//                           <hr></hr>
//                           <hr></hr>

//                           <div className="abcd"></div>

//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">
//                               Custom Attributes
//                             </h4>
//                             <div className="card-body">
//                               <fieldset className="app-custom-attribute">
//                                 <div className="fieldset-wrapper" />
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

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import AppsButton from "./AppsButton";
// import {
//   fetchTeamDetails,
//   fetchAppDetails,
//   updateAppDetails,
//   appDetails,
// } from "../../redux/store";

// import "../../styles/popup.css";
// import { Link } from "gatsby";
// import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

// const ViewApp = () => {
//   const dispatch = useDispatch();
//   // const appDetails = useSelector((state) => state.app.appDetails);
//   // console.log("appDetails", appDetails);

//   const teamDetails = useSelector((state) => state.teamDetails);

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const teamName = appDetailsData.companyName;
//   console.log("teamName", teamName);
//   const appName = appDetailsData.name;
//   // console.log("appData",appData)

//   console.log("appName", appName);

//   // useEffect(() => {
//   //   // Fetch updated app details after the component mounts
//   //   dispatch(fetchAppDetails(teamName, appName));
//   // }, [dispatch, teamName, appName]);

//   const [showSecret, setShowSecret] = useState(false);
//   const [showKey, setShowKey] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [copyMessage, setCopyMessage] = useState("");
//   const [copiedIndexes, setCopiedIndexes] = useState([]);

//   const copyToClipboard = (text, index) => {
//     navigator.clipboard.writeText(text);
//     setCopyMessage("Copied!");
//     setCopiedIndexes([...copiedIndexes, index]);
//     setTimeout(() => {
//       setCopyMessage("");
//     }, 2000);
//   };

//   const generateRandomSecret = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let key = "";
//     for (let i = 0; i < 16; i++) {
//       key += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return key;
//   };

//   const generateRandomKey = () => {
//     const characters =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let secret = "";
//     for (let i = 0; i < 32; i++) {
//       secret += characters[Math.floor(Math.random() * characters.length)];
//     }
//     return secret;
//   };

//   const togglePopup = async () => {
//     setShowPopup(!showPopup);
//   };

//   const handleConfirmClick = async () => {
//     try {
//       const randomKey = generateRandomKey();
//       const randomSecret = generateRandomSecret();

//       const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/create`;
//       const bearerToken = process.env.BEARER_TOKEN;

//       const response = await axios.post(
//         apiUrl,
//         {
//           consumerKey: randomKey,
//           consumerSecret: randomSecret,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${bearerToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       dispatch(fetchAppDetails(teamName, appName));
//       alert("API key created successfully");
//       setShowPopup(false);
//     } catch (error) {
//       alert("Error creating API key: " + error.message);
//     }
//   };

//   const toggleVisibility1 = () => {
//     setShowSecret((prevShowSecret) => !prevShowSecret);
//   };

//   const toggleVisibility2 = () => {
//     setShowKey((prevShowKey) => !prevShowKey);
//   };

//   const hideKey = (key) => {
//     return "•".repeat(key.length);
//   };

//   const handleRemovekey = async (teamName, appName, consumerKey) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}`;
//     const bearerToken = process.env.BEARER_TOKEN;

//     try {
//       await axios.delete(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });
//       dispatch(fetchAppDetails(teamName, appName));
//       alert("Key removed successfully");
//     } catch (error) {
//       alert("Error removing key: " + error);
//     }
//   };

//   const handleRevokeKey = async (teamName, appName, consumerKey) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
//     const bearerToken = process.env.BEARER_TOKEN;

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
//         alert("Key revoked successfully");
//       } else {
//         alert("Key revocation was not successful");
//       }
//     } catch (error) {
//       alert("Error revoking key: " + error.message);
//     }
//   };

//   return (
//     <Layout>
//       <AppsButton />
//       <div>
//         <div
//           className="dialog-off-canvas-main-canvas"
//           data-off-canvas-main-canvas=""
//         >
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div
//                     data-contextual-id="block:block=pagetitle:langcode=en"
//                     data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                   />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       {appDetailsData.name} team app
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
//                       <div className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full">
//                         <div
//                           className="tab-pane show active"
//                           // style={{ border: "1px solid red" }}
//                         >
//                           <div className="card apigee-entity--app__details">
//                             <h4 className="card-header bg-white">Details</h4>
//                             <div className="card-body">
//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__status">
//                                 <div className="field__label">
//                                   Team App status
//                                 </div>
//                                 <div className="field__item">
//                                   <span className="badge badge-success">
//                                     {appDetailsData.status}
//                                   </span>
//                                 </div>
//                               </div>

//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__createdat">
//                                 <div className="field__label">Created</div>
//                                 <div className="field__item">
//                                   {new Date(
//                                     appDetailsData.createdAt
//                                   ).toString()}
//                                 </div>
//                               </div>

//                               <div className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat">
//                                 <div className="field__label">Last updated</div>
//                                 <div className="field__item">
//                                   {new Date(
//                                     appDetailsData.lastModifiedAt
//                                   ).toString()}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card apigee-entity--app__credentials">
//                             <h4 className="card-header bg-white">
//                               Credentials
//                               <button
//                                 className="use-ajax button btn btn-primary btn-sm"
//                                 onClick={togglePopup}
//                               >
//                                 Add key
//                               </button>
//                             </h4>

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
//                                       <button
//                                         className="popup-button confirm-button"
//                                         onClick={handleConfirmClick}
//                                       >
//                                         Confirm
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )}

//                             <div
//                               className="card-body pb-0"
//                               // style={{ border: "7px solid green" }}
//                             >
//                               {appDetailsData.credentials.map(
//                                 (credential, index) => {
//                                   if (credential.status === "approved") {
//                                     return (
//                                       <fieldset
//                                         className="items--inline app-credential"
//                                         key={index}
//                                         // style={{ border: "1px solid red" }}
//                                       >
//                                         <legend>Credential</legend>

//                                         <div className="fieldset-wrapper">
//                                           <div
//                                             className="wrapper--primary app-details-wrapper"
//                                             // style={{
//                                             //   border: "8px solid yellow",
//                                             // }}
//                                           >
//                                             <div className="item-property">
//                                               <label>Consumer Key</label>
//                                               <div className="secret field__item">
//                                                 {showSecret ? (
//                                                   <div className="secret__value">
//                                                     {credential.consumerKey}
//                                                   </div>
//                                                 ) : (
//                                                   <div className="secret__value__hidden">
//                                                     {hideKey(
//                                                       credential.consumerKey
//                                                     )}
//                                                   </div>
//                                                 )}
//                                                 <br />
//                                                 <button
//                                                   className="secret__toggle"
//                                                   onClick={toggleVisibility1}
//                                                 >
//                                                   {showSecret ? (
//                                                     <Link className="secret__toggle__hide">
//                                                       {/* <i className="fas fa-eye-slash secret__toggle__hide" /> */}

//                                                       <VisibilityOffOutlinedIcon />
//                                                     </Link>
//                                                   ) : (
//                                                     <Link className="secret__toggle__show">
//                                                       {/* <i className="fas fa-eye secret__toggle__show" /> */}
//                                                       <RemoveRedEyeOutlinedIcon />
//                                                     </Link>
//                                                   )}
//                                                 </button>
//                                                 <div className="secret__copy">
//                                                   <button
//                                                     className="secret__copy"
//                                                     onClick={() =>
//                                                       copyToClipboard(
//                                                         credential.consumerKey
//                                                       )
//                                                     }
//                                                     title="Click to copy"
//                                                   >
//                                                     {/* <i className="fas fa-paste" /> */}
//                                                     <ContentCopyOutlinedIcon />
//                                                   </button>
//                                                   <span className="copy-message">
//                                                     {copyMessage}
//                                                   </span>
//                                                 </div>
//                                               </div>
//                                             </div>

//                                             <div className="item-property">
//                                               <label>Consumer Secret</label>
//                                               <div className="secret field__item">
//                                                 {showKey ? (
//                                                   <div className="secret__value">
//                                                     {credential.consumerSecret}
//                                                   </div>
//                                                 ) : (
//                                                   <div className="secret__value__hidden">
//                                                     {hideKey(
//                                                       credential.consumerSecret
//                                                     )}
//                                                   </div>
//                                                 )}
//                                                 <br />
//                                                 <button
//                                                   className="secret__toggle"
//                                                   onClick={toggleVisibility2}
//                                                   // style={{
//                                                   //   color: "green",
//                                                   //   height: "20px",
//                                                   //   width: "20px",
//                                                   // }}
//                                                 >
//                                                   {showKey ? (
//                                                     <Link className="secret__toggle__hide">
//                                                       <VisibilityOffOutlinedIcon />
//                                                     </Link>
//                                                   ) : (
//                                                     <Link className="secret__toggle__show">
//                                                       <RemoveRedEyeOutlinedIcon />
//                                                     </Link>
//                                                   )}
//                                                 </button>
//                                                 <div className="secret__copy">
//                                                   <button
//                                                     className="secret__copy"
//                                                     onClick={() =>
//                                                       copyToClipboard(
//                                                         credential.consumerSecret
//                                                       )
//                                                     }
//                                                     title="Click to copy"
//                                                   >
//                                                     <ContentCopyOutlinedIcon />
//                                                   </button>
//                                                   <span className="copy-message">
//                                                     {copyMessage}
//                                                   </span>
//                                                 </div>
//                                               </div>
//                                             </div>

//                                             <div className="item-property">
//                                               <label> Issued </label>
//                                               {new Date(
//                                                 credential.issuedAt
//                                               ).toString()}
//                                             </div>
//                                             <div className="item-property">
//                                               <label> Expires </label>{" "}
//                                               {new Date(
//                                                 credential.expiresAt
//                                               ).toString()}
//                                             </div>
//                                             <div className="item-property">
//                                               <label> Key Status </label>
//                                               <span className="badge badge-success">
//                                                 {credential.status}
//                                               </span>
//                                             </div>
//                                           </div>
//                                           {/* API Products */}

//                                           <div
//                                             className="item-property"
//                                             // style={
//                                             //   credential.apiProducts.length > 0
//                                             //     ? { border: "8px solid pink" }
//                                             //     : {}
//                                             // }
//                                           >
//                                             <div className="wrapper--secondary">
//                                               <label>Products</label>
//                                               {credential.apiProducts.length >
//                                               0 ? (
//                                                 <div>
//                                                   {credential.apiProducts.map(
//                                                     (product, productIndex) => (
//                                                       <div
//                                                         className="api-product-list-row clearfix"
//                                                         key={productIndex}
//                                                       >
//                                                         <div className="api-product-list-row clearfix">
//                                                           <span className="api-product-name">
//                                                             {product.apiproduct}
//                                                           </span>
//                                                           <span className="badge badge-success">
//                                                             {product.status}
//                                                           </span>
//                                                         </div>
//                                                       </div>
//                                                     )
//                                                   )}
//                                                 </div>
//                                               ) : (
//                                                 <p>
//                                                   No API products found for this
//                                                   credential.
//                                                 </p>
//                                               )}
//                                             </div>
//                                           </div>

//                                           <div
//                                             className="dropbutton-wrapper"
//                                             // style={{ border: "8px solid blue" }}
//                                           >
//                                             <div className="dropbutton-widget">
//                                               <div className="dropbutton">
//                                                 <div>
//                                                   <button
//                                                     className="button btn btn-primary "
//                                                     style={{
//                                                       padding: "5px 10px",
//                                                       fontSize: "12px",
//                                                     }}
//                                                     onClick={() =>
//                                                       handleRevokeKey(
//                                                         teamName,
//                                                         appDetailsData.name,
//                                                         credential.consumerKey
//                                                       )
//                                                     }
//                                                   >
//                                                     Revoke
//                                                   </button>
//                                                 </div>
//                                                 <div>
//                                                   <button
//                                                     className="button btn btn-primary"
//                                                     style={{
//                                                       padding: "5px 10px",
//                                                       width: "10px",
//                                                       fontSize: "12px",
//                                                       marginTop: "10px",
//                                                       marginRight: "20px",
//                                                     }}
//                                                     onClick={() =>
//                                                       handleRemovekey(
//                                                         teamName,
//                                                         appDetailsData.name,
//                                                         credential.consumerKey
//                                                       )
//                                                     }
//                                                   >
//                                                     Delete
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </fieldset>
//                                     );
//                                   } else {
//                                     return null;
//                                   }
//                                 }
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
//                               >
//                                 {/* Iterate over revoked credentials */}
//                                 {appDetailsData.credentials.map(
//                                   (credential, index) => {
//                                     if (credential.status === "revoked") {
//                                       return (
//                                         <fieldset
//                                           className="items--inline app-credential"
//                                           key={index}
//                                           // style={{ border: "1px solid red" }}
//                                         >
//                                           <legend>Credential</legend>

//                                           <div className="fieldset-wrapper">
//                                             <div
//                                               className="wrapper--primary app-details-wrapper"
//                                               // style={{
//                                               //   border: "8px solid yellow",
//                                               // }}
//                                             >
//                                               <div className="item-property">
//                                                 <label>Consumer Key</label>
//                                                 <div className="secret field__item">
//                                                   {showSecret ? (
//                                                     <div className="secret__value">
//                                                       {credential.consumerKey}
//                                                     </div>
//                                                   ) : (
//                                                     <div className="secret__value__hidden">
//                                                       {hideKey(
//                                                         credential.consumerKey
//                                                       )}
//                                                     </div>
//                                                   )}
//                                                   <br />
//                                                   <button
//                                                     className="secret__toggle"
//                                                     onClick={toggleVisibility1}
//                                                   >
//                                                     {showSecret ? (
//                                                       <Link className="secret__toggle__hide">
//                                                         {/* <i className="fas fa-eye-slash secret__toggle__hide" /> */}

//                                                         <VisibilityOffOutlinedIcon />
//                                                       </Link>
//                                                     ) : (
//                                                       <Link className="secret__toggle__show">
//                                                         {/* <i className="fas fa-eye secret__toggle__show" /> */}
//                                                         <RemoveRedEyeOutlinedIcon />
//                                                       </Link>
//                                                     )}
//                                                   </button>
//                                                   <div className="secret__copy">
//                                                     <button
//                                                       className="secret__copy"
//                                                       onClick={() =>
//                                                         copyToClipboard(
//                                                           credential.consumerKey
//                                                         )
//                                                       }
//                                                       title="Click to copy"
//                                                     >
//                                                       {/* <i className="fas fa-paste" /> */}
//                                                       <ContentCopyOutlinedIcon />
//                                                     </button>
//                                                     <span className="copy-message">
//                                                       {copyMessage}
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                               </div>

//                                               <div className="item-property">
//                                                 <label>Consumer Secret</label>
//                                                 <div className="secret field__item">
//                                                   {showKey ? (
//                                                     <div className="secret__value">
//                                                       {
//                                                         credential.consumerSecret
//                                                       }
//                                                     </div>
//                                                   ) : (
//                                                     <div className="secret__value__hidden">
//                                                       {hideKey(
//                                                         credential.consumerSecret
//                                                       )}
//                                                     </div>
//                                                   )}
//                                                   <br />
//                                                   <button
//                                                     className="secret__toggle"
//                                                     onClick={toggleVisibility2}
//                                                     // style={{
//                                                     //   color: "green",
//                                                     //   height: "20px",
//                                                     //   width: "20px",
//                                                     // }}
//                                                   >
//                                                     {showKey ? (
//                                                       <Link className="secret__toggle__hide">
//                                                         <VisibilityOffOutlinedIcon />
//                                                       </Link>
//                                                     ) : (
//                                                       <Link className="secret__toggle__show">
//                                                         <RemoveRedEyeOutlinedIcon />
//                                                       </Link>
//                                                     )}
//                                                   </button>
//                                                   <div className="secret__copy">
//                                                     <button
//                                                       className="secret__copy"
//                                                       onClick={() =>
//                                                         copyToClipboard(
//                                                           credential.consumerSecret
//                                                         )
//                                                       }
//                                                       title="Click to copy"
//                                                     >
//                                                       <ContentCopyOutlinedIcon />
//                                                     </button>
//                                                     <span className="copy-message">
//                                                       {copyMessage}
//                                                     </span>
//                                                   </div>
//                                                 </div>
//                                               </div>

//                                               <div className="item-property">
//                                                 <label> Issued </label>
//                                                 {new Date(
//                                                   credential.issuedAt
//                                                 ).toString()}
//                                               </div>
//                                               <div className="item-property">
//                                                 <label> Expires </label>{" "}
//                                                 {new Date(
//                                                   credential.expiresAt
//                                                 ).toString()}
//                                               </div>
//                                               <div className="item-property">
//                                                 <label> Key Status </label>
//                                                 <span className="badge badge-success">
//                                                   {credential.status}
//                                                 </span>
//                                               </div>
//                                             </div>
//                                             {/* API Products */}

//                                             <div
//                                               className="item-property"
//                                               // style={
//                                               //   credential.apiProducts.length >
//                                               //   0
//                                               //     ? { border: "8px solid pink" }
//                                               //     : {}
//                                               // }
//                                             >
//                                               <div className="wrapper--secondary">
//                                                 <label>Products</label>
//                                                 {credential.apiProducts.length >
//                                                 0 ? (
//                                                   <div>
//                                                     {credential.apiProducts.map(
//                                                       (
//                                                         product,
//                                                         productIndex
//                                                       ) => (
//                                                         <div
//                                                           className="api-product-list-row clearfix"
//                                                           key={productIndex}
//                                                         >
//                                                           <div className="api-product-list-row clearfix">
//                                                             <span className="api-product-name">
//                                                               {
//                                                                 product.apiproduct
//                                                               }
//                                                             </span>
//                                                             <span className="badge badge-success">
//                                                               {product.status}
//                                                             </span>
//                                                           </div>
//                                                         </div>
//                                                       )
//                                                     )}
//                                                   </div>
//                                                 ) : (
//                                                   <p>
//                                                     No API products found for
//                                                     this credential.
//                                                   </p>
//                                                 )}
//                                               </div>
//                                             </div>

//                                             <div
//                                               className="dropbutton-wrapper"
//                                               // style={{
//                                               //   border: "8px solid blue",
//                                               // }}
//                                             >
//                                               <div className="dropbutton-widget">
//                                                 <div className="dropbutton">
//                                                   <div>
//                                                     <button
//                                                       className="button btn btn-primary"
//                                                       style={{
//                                                         padding: "5px 10px",
//                                                         width: "10px",
//                                                         fontSize: "12px",
//                                                         marginTop: "10px",
//                                                         marginRight: "20px",
//                                                       }}
//                                                       onClick={() =>
//                                                         handleRemovekey(
//                                                           teamName,
//                                                           appDetailsData.name,
//                                                           credential.consumerKey
//                                                         )
//                                                       }
//                                                     >
//                                                       Delete
//                                                     </button>
//                                                   </div>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </fieldset>
//                                       );
//                                     } else {
//                                       return null; // Don't render credentials with status other than "revoked"
//                                     }
//                                   }
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

// import { Link } from "gatsby";
// import React from "react";
// import { useSelector } from "react-redux";

// const ViewApp = ({appName,teamName}) => {

//   const appDetails = useSelector((state) => state.app.appDetails);
//   console.log("asf",appDetails)

//   function getRelativeTimeFromNow(createdAtTimestamp) {
//     const now = new Date();
//     const createdAt = new Date(createdAtTimestamp);
//     const diffInMilliseconds = now - createdAt;

//     // Define the number of milliseconds in each unit of time
//     const oneDay = 24 * 60 * 60 * 1000;
//     const oneWeek = 7 * oneDay;

//     // Calculate the difference in days and weeks
//     const diffInDays = Math.floor(diffInMilliseconds / oneDay);
//     const diffInWeeks = Math.floor(diffInMilliseconds / oneWeek);

//     // Calculate the remaining days after considering the weeks
//     const remainingDays = diffInDays - diffInWeeks * 7;

//     // Construct the output string
//     let output = "";
//     if (diffInWeeks > 0) {
//       output += `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} `;
//     }
//     if (remainingDays > 0) {
//       output += `${remainingDays} day${remainingDays > 1 ? "s" : ""} `;
//     }
//     output += "ago";

//     return output;
//   }

//   const createdAtTimestamp = appDetails.createdAt; // Replace this with your actual timestamp
//   const relativeTime = getRelativeTimeFromNow(createdAtTimestamp);
//   console.log(relativeTime); // Output will be something like "3 weeks 6 days ago"

//   const asjg=appDetails.credentials.consumerKey
//   console.log("ksufs",asjg)

//   function getRelativeTimeFromNow(lastModifiedAtTimestamp) {
//     const now = new Date();
//     const lastModifiedAt = new Date(lastModifiedAtTimestamp);
//     const diffInMilliseconds = now - lastModifiedAt;

//     // Define the number of milliseconds in each unit of time
//     const oneDay = 24 * 60 * 60 * 1000;
//     const oneWeek = 7 * oneDay;

//     // Calculate the difference in days and weeks
//     const diffInDays = Math.floor(diffInMilliseconds / oneDay);
//     const diffInWeeks = Math.floor(diffInMilliseconds / oneWeek);

//     // Calculate the remaining days after considering the weeks
//     const remainingDays = diffInDays - diffInWeeks * 7;

//     // Construct the output string
//     let output = "";
//     if (diffInWeeks > 0) {
//       output += `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} `;
//     }
//     if (remainingDays > 0) {
//       output += `${remainingDays} day${remainingDays > 1 ? "s" : ""} `;
//     }
//     output += "ago";

//     return output;
//   }

//   const lastModifiedAtTimestamp = appDetails.lastModifiedAt; // Replace this with your actual timestamp
//   const lastmodify = getRelativeTimeFromNow(lastModifiedAtTimestamp);
//   console.log(lastmodify); // Output will be something like "3 weeks 6 days ago"

//   // Retrieve the selected app from the teamDetails.apps array
//   // const selectedApp = teamDetails.apps[selectedAppIndex] || {};
//   // console.log("Selected App Index:", selectedAppIndex);

//   // Retrieve the name of the selected app
//   // const selectedAppName = selectedApp.name || "";
//   // console.log("jdbjsd",selectedAppName);

//   // const serializedData = teamDetails.attributes;

//   // const unserializeData = (serializedData) => {
//   //   const regex = /s:\d+:\\\"(.*?)\\\"/g;
//   //   let match;
//   //   const unserializedArray = [];

//   //   while ((match = regex.exec(serializedData[0].value)) !== null) {
//   //     const value = match[1].replace(/\\\\/g, "\\"); // The serialized value
//   //     if (!unserializedArray.includes(value)) {
//   //       unserializedArray.push(value);
//   //     }
//   //   }

//   //   return unserializedArray;
//   // };

//   // const unserializedData = unserializeData(serializedData);
//   return (

//     <div>
//       <div>
//         <div>
//           {/* <h1>{teamName}</h1>
//           <p>Display Name: {teamDetails.displayName}</p>
//           <p>Organization: {teamDetails.organization}</p>
//           <p>Status: {teamDetails.status}</p>
//           <p>Created By: {teamDetails.createdBy}</p>
//           <p>Last Modified By: {teamDetails.lastModifiedBy}</p>
//           <p>Created At: {new Date(teamDetails.createdAt).toString()}</p>
//           <p>
//             Last Modified At: {new Date(teamDetails.lastModifiedAt).toString()}
//           </p>

//           <h2>Apps:</h2>
//           <ul>
//             {teamDetails.apps.map((app, index) => (
//               <li key={index}>{app}</li>
//             ))}
//           </ul> */}

//           {/* <h2>Attributes:</h2>

//           {teamDetails.attributes.map((attribute, index) => {

//             return (
//               <div>
//                 <li key={index}>
//                   {attribute.name}:
//                   <h2>Unserialized Data (without duplicates):</h2>
//                   <ul>
//                     {unserializedData.map((value, index) => (
//                       <li key={index}>{value}</li>
//                     ))}
//                   </ul>
//                 </li>
//               </div>
//             );
//           })} */}
//         </div>
//       </div>

//       <div
//         className="dialog-off-canvas-main-canvas"
//         data-off-canvas-main-canvas=""
//       >
//         <div className="page">
//           <header className="page__header">
//             <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=starbucks_tabs&args%5B1%5D=full&args%5B2%5D&token=MEkI12DtyJlNIxuOGvgD3VFvH_cZWONfyjuDDe873eY" />
//           </header>
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div
//                   data-contextual-id="block:block=pagetitle:langcode=en"
//                   data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                 />
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                      {appDetails.name} team app
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <main className="main" role="main">
//             <Link id="main-content" tabIndex={-1} />
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <div data-drupal-messages-fallback="" className="hidden" />
//                     <span data-big-pipe-placeholder-id="callback=Drupal%5CCore%5CRender%5CElement%5CStatusMessages%3A%3ArenderMessages&args%5B0%5D&token=_HAdUpwWmet0TOTe2PSiJuMntExoshbm1kh2wQzzzAA" />
//                     <div
//                       data-quickedit-entity-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9"
//                       className="contextual-region apigee-entity--app apigee-entity--app--view-mode-full"
//                     >
//                       <div className="tab-pane show active" id="credentials-">
//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">Details</h4>
//                           <div className="card-body">
//                             <div
//                               data-quickedit-field-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9/status/und/full"
//                               className="field field--inline d-sm-flex align-items-sm-center team-app__status"
//                             >
//                               <div className="field__label">
//                                 Team App status
//                               </div>
//                               <div className="field__item">
//                                 <span className="badge badge-success">
//                                 {appDetails.status}
//                                 </span>
//                               </div>
//                             </div>
//                             <div
//                               data-quickedit-field-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9/createdAt/und/full"
//                               className="field field--inline d-sm-flex align-items-sm-center team-app__createdat"
//                             >
//                               <div className="field__label">Created</div>
//                               <div className="field__item">
//                               {new Date(appDetails.createdAt).toString()}
//                               </div>
//                             </div>
//                             <div
//                               data-quickedit-field-id="team_app/0e334a31-a3ca-421f-bbfd-256ff1f9c9e9/lastModifiedAt/und/full"
//                               className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat"
//                             >
//                               <div className="field__label">Last updated</div>
//                               <div className="field__item">
//                               {new Date(appDetails.lastModifiedAt).toString()}
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* <div className="card apigee-entity--app__credentials">
//                           <h4 className="card-header bg-white">

//                           {appDetails.credentials.consumerKey}
//                             <Link
//                               href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/add"
//                               data-dialog-type="modal"
//                               data-dialog-options='{"width":500,"height":450,"draggable":false,"autoResize":false}'
//                               className="use-ajax button btn btn-primary btn-sm"
//                               hrefLang="und"
//                             >
//                               Add key
//                             </Link>
//                           </h4>

//                           <div className="card-body pb-0">
//                             <fieldset
//                               className="items--inline app-credential"
//                               data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                               data-app-container-index={0}
//                             >
//                               <legend>Credential</legend>
//                               <div className="fieldset-wrapper">
//                                 <div className="dropbutton-wrapper">
//                                   <div className="dropbutton-widget">
//                                     <ul className="dropbutton">
//                                       <li>
//                                         <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/9U72W8pPohXcA0WFzAl9fahAcopbYUKp/revoke">
//                                           Revoke
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/9U72W8pPohXcA0WFzAl9fahAcopbYUKp/delete">
//                                           Delete
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>

//                                 <div className="wrapper--primary app-details-wrapper">
//                                   <div className="item-property">
//                                     <label> Consumer Key </label>
//                                     <div
//                                       className="secret field__item"
//                                       id="secret-id-93728541"
//                                     >
//                                       <div className="secret__value" />
//                                       <div
//                                         className="secret__value__hidden"
//                                         aria-hidden="true"
//                                       >
//                                         ••••••••••••••••
//                                       </div>
//                                       <br />
//                                       <button
//                                         className="secret__toggle"
//                                         title="Toggle key visibility"
//                                         aria-controls="secret-id-93728541"
//                                       >
//                                         <Link
//                                           className="secret__toggle__show"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye secret__toggle__show" />
//                                         </Link>
//                                         <Link
//                                           className="secret__toggle__hide"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye-slash secret__toggle__hide" />
//                                         </Link>
//                                       </button>
//                                       <div className="secret__copy">
//                                         <span className="badge badge-light">
//                                           Copied
//                                         </span>
//                                         <button
//                                           className="secret__copy"
//                                           data-value=""
//                                           title="Click to copy"
//                                         >
//                                           <i className="fas fa-paste" />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Consumer Secret </label>
//                                     <div
//                                       className="secret field__item"
//                                       id="secret-id-467744045"
//                                     >
//                                       <div className="secret__value" />
//                                       <div
//                                         className="secret__value__hidden"
//                                         aria-hidden="true"
//                                       >
//                                         ••••••••••••••••
//                                       </div>
//                                       <br />
//                                       <button
//                                         className="secret__toggle"
//                                         title="Toggle key visibility"
//                                         aria-controls="secret-id-467744045"
//                                       >
//                                         <Link
//                                           className="secret__toggle__show"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye secret__toggle__show" />
//                                         </Link>
//                                         <Link
//                                           className="secret__toggle__hide"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye-slash secret__toggle__hide" />
//                                         </Link>
//                                       </button>
//                                       <div className="secret__copy">
//                                         <span className="badge badge-light">
//                                           Copied
//                                         </span>
//                                         <button
//                                           className="secret__copy"
//                                           data-value=""
//                                           title="Click to copy"
//                                         >
//                                           <i className="fas fa-paste" />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Issued </label>Jul 4 2023 11:12:49
//                                     AM (UTC)
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Expires </label>Jul 4 2024 07:00:00
//                                     AM (UTC) in 11 months
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Key Status </label>
//                                     <span className="badge badge-success">
//                                       Approved
//                                     </span>
//                                   </div>
//                                 </div>
//                                 <div className="wrapper--secondary">
//                                   <label> Products </label>
//                                   <div>
//                                     <div className="api-product-list-row clearfix">
//                                       <span className="api-product-name">
//                                         test-mock-api-jwt
//                                       </span>
//                                       <span className="badge badge-info">
//                                         Enabled
//                                       </span>
//                                     </div>
//                                     <div className="api-product-list-row clearfix">
//                                       <span className="api-product-name">
//                                         dpi-tp-dhl
//                                       </span>
//                                       <span className="badge badge-info">
//                                         Enabled
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </fieldset>

//                             <fieldset
//                               className="items--inline app-credential"
//                               data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                               data-app-container-index={1}
//                             >
//                               <legend>Credential</legend>
//                               <div className="fieldset-wrapper">
//                                 <div className="dropbutton-wrapper">
//                                   <div className="dropbutton-widget">
//                                     <ul className="dropbutton">
//                                       <li>
//                                         <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/RADvNxsPEUmi5GGld3kPoUtCgw0DgGmm/revoke">
//                                           Revoke
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/RADvNxsPEUmi5GGld3kPoUtCgw0DgGmm/delete">
//                                           Delete
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="wrapper--primary app-details-wrapper">
//                                   <div className="item-property">
//                                     <label> Consumer Key </label>
//                                     <div
//                                       className="secret field__item"
//                                       id="secret-id-180353021"
//                                     >
//                                       <div className="secret__value" />
//                                       <div
//                                         className="secret__value__hidden"
//                                         aria-hidden="true"
//                                       >
//                                         ••••••••••••••••
//                                       </div>
//                                       <br />
//                                       <button
//                                         className="secret__toggle"
//                                         title="Toggle key visibility"
//                                         aria-controls="secret-id-180353021"
//                                       >
//                                         <Link
//                                           className="secret__toggle__show"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye secret__toggle__show" />
//                                         </Link>
//                                         <Link
//                                           className="secret__toggle__hide"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye-slash secret__toggle__hide" />
//                                         </Link>
//                                       </button>
//                                       <div className="secret__copy">
//                                         <span className="badge badge-light">
//                                           Copied
//                                         </span>
//                                         <button
//                                           className="secret__copy"
//                                           data-value=""
//                                           title="Click to copy"
//                                         >
//                                           <i className="fas fa-paste" />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Consumer Secret </label>
//                                     <div
//                                       className="secret field__item"
//                                       id="secret-id-1274131505"
//                                     >
//                                       <div className="secret__value" />
//                                       <div
//                                         className="secret__value__hidden"
//                                         aria-hidden="true"
//                                       >
//                                         ••••••••••••••••
//                                       </div>
//                                       <br />
//                                       <button
//                                         className="secret__toggle"
//                                         title="Toggle key visibility"
//                                         aria-controls="secret-id-1274131505"
//                                       >
//                                         <Link
//                                           className="secret__toggle__show"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye secret__toggle__show" />
//                                         </Link>
//                                         <Link
//                                           className="secret__toggle__hide"
//                                           href="#"
//                                         >
//                                           <i className="fas fa-eye-slash secret__toggle__hide" />
//                                         </Link>
//                                       </button>
//                                       <div className="secret__copy">
//                                         <span className="badge badge-light">
//                                           Copied
//                                         </span>
//                                         <button
//                                           className="secret__copy"
//                                           data-value=""
//                                           title="Click to copy"
//                                         >
//                                           <i className="fas fa-paste" />
//                                         </button>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Issued </label>Jun 28 2023 12:00:14
//                                     PM (UTC)
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Expires </label>Jun 28 2024 07:00:01
//                                     AM (UTC) in 10 months 3 weeks
//                                   </div>
//                                   <div className="item-property">
//                                     <label> Key Status </label>
//                                     <span className="badge badge-success">
//                                       Approved
//                                     </span>
//                                   </div>
//                                 </div>

//                                 <div className="wrapper--secondary">
//                                   <label> Products </label>
//                                   <div>
//                                     <div className="api-product-list-row clearfix">
//                                       <span className="api-product-name">
//                                         test-mock-api-jwt
//                                       </span>
//                                       <span className="badge badge-info">
//                                         Enabled
//                                       </span>
//                                     </div>
//                                     <div className="api-product-list-row clearfix">
//                                       <span className="api-product-name">
//                                         dpi-tp-dhl
//                                       </span>
//                                       <span className="badge badge-info">
//                                         Enabled
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </fieldset>
//                           </div>
//                         </div> */}

//                         <div className="apigee-entity--app__credentials">
//                           <details className="js-form-wrapper form-wrapper card bg-lighter mb-3">
//                             <summary
//                               role="button"
//                               aria-expanded="false"
//                               aria-pressed="false"
//                               className="card-header bg-lighter"
//                             >
//                               Revoked keys (6)
//                             </summary>
//                             <div className="card-body">
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={2}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/YD4XgKQAHA22DMwKAEsz1Z4JF2fvVEPs/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-929673007"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-929673007"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-248762249"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-248762249"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 28 2023
//                                       02:54:18 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 28 2024
//                                       07:00:00 AM (UTC) in 10 months 3 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={3}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/dTfIWugmUytAKTGIgY6nHiUNAybvC2rs/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-1376371395"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-1376371395"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-1941223916"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-1941223916"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 28 2023
//                                       04:32:12 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 28 2024
//                                       07:00:00 AM (UTC) in 10 months 3 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={4}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/famPX8A9JcmDmfmCXgxcABBDcOBGBIVE/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-2038699731"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-2038699731"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-215484231"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-215484231"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 15 2023
//                                       03:42:09 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 15 2024
//                                       07:00:00 AM (UTC) in 10 months 2 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={5}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/fs7a7sg9A3S1GVjDH7x67pJmYcrIfVUz/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-372907635"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-372907635"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-242908324"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-242908324"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 29 2023
//                                       01:50:10 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 29 2024
//                                       07:00:00 AM (UTC) in 10 months 4 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={6}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/gyPAyGlXxcv5Ko37Z3AVs2e39GFgKGQn/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-1887081793"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-1887081793"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-1635102717"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-1635102717"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 15 2023
//                                       03:40:53 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 15 2024
//                                       07:00:00 AM (UTC) in 10 months 2 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>
//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                               <fieldset
//                                 className="items--inline app-credential"
//                                 data-app-keys-url="https://custom-attr-sbux-d9-portal-migration.pantheonsite.io/teams/ken-june15-1/apps/usgss-test31-app/api-keys"
//                                 data-app-container-index={7}
//                               >
//                                 <legend>Credential</legend>
//                                 <div className="fieldset-wrapper">
//                                   <div className="dropbutton-wrapper">
//                                     <div className="dropbutton-widget">
//                                       <ul className="dropbutton">
//                                         <li>
//                                           <Link href="/teams/ken-june15-1/apps/usgss-test31-app/api-keys/tCqYRWlvP0orqoBK4d2RU62J6HrTIDck/delete">
//                                             Delete
//                                           </Link>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </div>

//                                   <div className="wrapper--primary app-details-wrapper">
//                                     <div className="item-property">
//                                       <label> Consumer Key </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-788186071"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-788186071"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Consumer Secret </label>
//                                       <div
//                                         className="secret field__item"
//                                         id="secret-id-1723931224"
//                                       >
//                                         <div className="secret__value" />
//                                         <div
//                                           className="secret__value__hidden"
//                                           aria-hidden="true"
//                                         >
//                                           ••••••••••••••••
//                                         </div>
//                                         <br />
//                                         <button
//                                           className="secret__toggle"
//                                           title="Toggle key visibility"
//                                           aria-controls="secret-id-1723931224"
//                                         >
//                                           <Link
//                                             className="secret__toggle__show"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye secret__toggle__show" />
//                                           </Link>
//                                           <Link
//                                             className="secret__toggle__hide"
//                                             href="#"
//                                           >
//                                             <i className="fas fa-eye-slash secret__toggle__hide" />
//                                           </Link>
//                                         </button>
//                                         <div className="secret__copy">
//                                           <span className="badge badge-light">
//                                             Copied
//                                           </span>
//                                           <button
//                                             className="secret__copy"
//                                             data-value=""
//                                             title="Click to copy"
//                                           >
//                                             <i className="fas fa-paste" />
//                                           </button>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Issued </label>Jun 28 2023
//                                       03:11:31 PM (UTC)
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Expires </label>Jun 28 2024
//                                       07:00:00 AM (UTC) in 10 months 3 weeks
//                                     </div>
//                                     <div className="item-property">
//                                       <label> Key Status </label>
//                                       <span className="badge badge-danger">
//                                         Revoked
//                                       </span>
//                                     </div>
//                                   </div>

//                                   <div className="wrapper--secondary">
//                                     <label> Products </label>
//                                     <div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           test-mock-api-jwt
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                       <div className="api-product-list-row clearfix">
//                                         <span className="api-product-name">
//                                           dpi-tp-dhl
//                                         </span>
//                                         <span className="badge badge-info">
//                                           Enabled
//                                         </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </fieldset>
//                             </div>
//                           </details>
//                         </div>

//                         <div className="card apigee-entity--app__details">
//                           <h4 className="card-header bg-white">
//                             Custom Attributes
//                           </h4>
//                           <div className="card-body">
//                             <fieldset className="app-custom-attribute">
//                               <div className="fieldset-wrapper" />
//                             </fieldset>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
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

// export default ViewApp;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import AppsButton from "./AppsButton";
import {
  fetchTeamDetails,
  fetchAppDetails,
  updateAppDetails,
  appDetails,
} from "../../redux/store";

import "../../styles/popup.css";
import { Link } from "gatsby";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const ViewApp = () => {
  const dispatch = useDispatch();

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

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage("");

      setTimeout(() => {
        setCopyMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      // Handle the error here if needed
    }
  };

  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const dateObject = new Date(parseInt(timestamp));
    if (!isNaN(dateObject)) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      };

      return new Intl.DateTimeFormat("en-US", options).format(dateObject);
    } else {
      return "Invalid Date";
    }
  }

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
    }, 1000);
  };

  const handleConfirmClick = async () => {
    try {
      const oneYearInMilliseconds = 365 * 24 * 60 * 60; ;
      const randomKey = generateRandomKey();
      const randomSecret = generateRandomSecret();

      const apiUrl = `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${teamName}/apps/${appName}/keys`;
      const bearerToken = process.env.BEARER_TOKEN;

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
      //alert("API key created successfully");
    } catch (error) {
      alert("Error creating API key: " + error.message);
    }
  };

  useEffect(() => {
    const credentialsWithNoApiProducts = appDetailsData?.credentials?.filter(
      (credential) =>
        !credential.apiProducts ? true : credential.apiProducts.length === 0
    );
    
  

    // Sort credentials by their createdAt timestamp in descending order
    

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
  

  // Sort credentials by their createdAt timestamp in descending order
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
    break; // Stop the loop if apiProducts are found
  }
}

console.log(
  "API Products from First Credential with apiProducts:",
  apiProducts
);


  const handleAddAPIProduct = async () => {
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${teamName}/apps/${appName}/keys/${latestConsumerKey}`;
    const bearerToken = process.env.BEARER_TOKEN;

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
      alert("API key and product added successfully");
      setShowPopup(false);
    } catch (error) {
      alert("Error adding API product: " + error);
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
    return "•".repeat(30);
  };

  const handleRemovekey = async (teamName, appName, consumerKey) => {
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}`;
    const bearerToken = process.env.BEARER_TOKEN;

    try {
      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      dispatch(fetchAppDetails(teamName, appName));
      alert("Key removed successfully");
    } catch (error) {
      alert("Error removing key: " + error);
    }
  };

  const handleRevokeKey = async (teamName, appName, consumerKey) => {
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}?action=revoke`;
    const bearerToken = process.env.BEARER_TOKEN;

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
        alert("Key revoked successfully");
      } else {
        alert("Key revocation was not successful");
      }
    } catch (error) {
      alert("Error revoking key: " + error.message);
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
      <AppsButton />
      <div>
        <div
          className="dialog-off-canvas-main-canvas"
          data-off-canvas-main-canvas=""
        >
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div
                    data-contextual-id="block:block=pagetitle:langcode=en"
                    data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
                  />
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      {appDetailsData.name} team app
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <main className="main" role="main">
              <div className="page-layout-sidebar-default">
                <div className="container py-5">
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
                              <div className="field field--inline d-sm-flex align-items-sm-center team-app__status">
                                <div className="field__label">
                                  Team App status
                                </div>
                                <div className="field__item">
                                  <span className="badge badge-success">
                                    {appDetailsData.status}
                                  </span>
                                </div>
                              </div>

                              <div className="field field--inline d-sm-flex align-items-sm-center team-app__createdat">
                                <div className="field__label">Created</div>
                                <div className="field__item">
                                  {appDetailsData.createdAt
                                    ? formatTimestamp(appDetailsData.createdAt)
                                    : "N/A"}
                                </div>
                              </div>

                              <div className="field field--inline d-sm-flex align-items-sm-center team-app__lastmodifiedat">
                                <div className="field__label">Last updated</div>
                                <div className="field__item">
                                  {appDetailsData.lastModifiedAt
                                    ? formatTimestamp(
                                        appDetailsData.lastModifiedAt
                                      )
                                    : "N/A"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card apigee-entity--app__credentials">
                            <h4 className="card-header bg-white">
                              Credentials
                              <button
                                className="use-ajax button btn btn-primary btn-sm"
                                onClick={() => {
                                  togglePopup();
                                  handleConfirmClick();
                                }}
                              >
                                Add key
                              </button>
                            </h4>

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
                                          className="popup-button confirm-button"
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
                              className="card-body pb-0"
                              // style={{ border: "7px solid green" }}
                            >
                              {appDetailsData.credentials?.length > 0 ? (
                                appDetailsData.credentials.map(
                                  (credential, index) => {
                                    if (credential.status === "approved") {
                                      return (
                                        <fieldset
                                          className="items--inline app-credential"
                                          key={index}
                                          // style={{ border: "1px solid red" }}
                                        >
                                          <legend>Credential</legend>

                                          <div className="fieldset-wrapper">
                                            <div
                                              className="wrapper--primary app-details-wrapper"
                                              // style={{
                                              //   border: "8px solid blue",
                                              //   width: "600px",
                                              // }}
                                            >
                                              <div className="item-property">
                                                <label>Consumer Key</label>
                                                <div className="secret field__item">
                                                  {showconsumerkey[
                                                    credential.consumerKey
                                                  ] ? (
                                                    <div
                                                      className="secret__value"
                                                      style={{
                                                        fontSize: "12px",
                                                        overflow: "scroll",
                                                        width: "220px", // or "scroll"
                                                        // Adjust the height according to your design
                                                      }}
                                                    >
                                                      {credential.consumerKey}
                                                    </div>
                                                  ) : (
                                                    <div className="secret__value__hidden">
                                                      {hideKey(
                                                        credential.consumerKey
                                                      )}
                                                    </div>
                                                  )}
                                                  <br />
                                                  <button
                                                    className="secret__toggle"
                                                    onClick={() =>
                                                      toggleVisibility2(
                                                        credential.consumerKey
                                                      )
                                                    }
                                                  >
                                                    {showKey1 ? (
                                                      <Link className="secret__toggle__hide">
                                                        {/* <i className="fas fa-eye-slash secret__toggle__hide" /> */}

                                                        <VisibilityOffOutlinedIcon />
                                                      </Link>
                                                    ) : (
                                                      <Link className="secret__toggle__show">
                                                        {/* <i className="fas fa-eye secret__toggle__show" /> */}
                                                        <RemoveRedEyeOutlinedIcon />
                                                      </Link>
                                                    )}
                                                  </button>
                                                  <div className="secret__copy">
                                                    <button
                                                      className="secret__copy"
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerKey
                                                        )
                                                      }
                                                      title="Click to copy"
                                                    >
                                                      {/* <i className="fas fa-paste" /> */}
                                                      <ContentCopyOutlinedIcon />
                                                    </button>
                                                    <span className="copy-message">
                                                      {copyMessage}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="item-property">
                                                <label>Consumer Secret</label>
                                                <div className="secret field__item">
                                                  {showSecrets[
                                                    credential.consumerSecret
                                                  ] ? (
                                                    <div
                                                      className="secret__value"
                                                      style={{
                                                        fontSize: "12px",
                                                        overflow: "scroll",
                                                        width: "220px", // or "scroll"
                                                        // Adjust the height according to your design
                                                      }}
                                                    >
                                                      {
                                                        credential.consumerSecret
                                                      }
                                                    </div>
                                                  ) : (
                                                    <div className="secret__value__hidden">
                                                      {hideKey(
                                                        credential.consumerSecret
                                                      )}
                                                    </div>
                                                  )}
                                                  <br />
                                                  <button
                                                    className="secret__toggle"
                                                    onClick={() =>
                                                      toggleVisibility(
                                                        credential.consumerSecret
                                                      )
                                                    }
                                                    // style={{
                                                    //   color: "green",
                                                    //   height: "20px",
                                                    //   width: "20px",
                                                    // }}
                                                  >
                                                    {showKey ? (
                                                      <Link className="secret__toggle__hide">
                                                        <VisibilityOffOutlinedIcon />
                                                      </Link>
                                                    ) : (
                                                      <Link className="secret__toggle__show">
                                                        <RemoveRedEyeOutlinedIcon />
                                                      </Link>
                                                    )}
                                                  </button>
                                                  <div className="secret__copy">
                                                    <button
                                                      className="secret__copy"
                                                      onClick={() =>
                                                        copyToClipboard(
                                                          credential.consumerSecret
                                                        )
                                                      }
                                                      title="Click to copy"
                                                    >
                                                      <ContentCopyOutlinedIcon />
                                                    </button>

                                                    <span className="copy-message">
                                                      {copyMessage}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="item-property">
                                                <label> Issued </label>

                                                {credential.issuedAt
                                                  ? formatTimestamp(
                                                      credential.issuedAt
                                                    )
                                                  : "N/A"}
                                              </div>
                                              <div className="item-property">
                                                <label> Expires </label>{" "}
                                                {credential.expiresAt
                                                  ? formatTimestamp(
                                                      credential.expiresAt
                                                    )
                                                  : "N/A"}
                                              </div>
                                              <div className="item-property">
                                                <label> Key Status </label>
                                                <span className="badge badge-success">
                                                  {credential.status}
                                                </span>
                                              </div>
                                            </div>
                                            {/* API Products */}

                                            <div
                                              className="item-property"
                                              style={{ marginLeft: "45px" }}
                                            >
                                              <div className="wrapper--secondary">
                                                <label
                                                  style={{ marginLeft: "32px" }}
                                                >
                                                  Products
                                                </label>
                                                {credential &&
                                                credential.apiProducts &&
                                                credential.apiProducts.length >
                                                  0 ? (
                                                  <div>
                                                    {credential.apiProducts.map(
                                                      (
                                                        product,
                                                        productIndex
                                                      ) => (
                                                        <div
                                                          className="api-product-list-row clearfix"
                                                          key={productIndex}
                                                        >
                                                          <div className="api-product-list-row clearfix">
                                                            <span className="api-product-name">
                                                              {
                                                                product.apiproduct
                                                              }
                                                            </span>
                                                            <span className="badge badge-success">
                                                              {product.status}
                                                            </span>
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
                                                    No API products found for
                                                    this credential.
                                                  </p>
                                                )}
                                              </div>
                                            </div>

                                            <div
                                              className="dropbutton-wrapper"
                                              // style={{ border: "8px solid blue" }}
                                            >
                                              <div className="dropbutton-widget">
                                                <div className="dropbutton">
                                                  <div>
                                                    <button
                                                      className="button btn btn-primary "
                                                      style={{
                                                        padding: "5px 10px",
                                                        fontSize: "12px",
                                                      }}
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
                                                  </div>
                                                  <div>
                                                    <button
                                                      className="button btn btn-primary"
                                                      style={{
                                                        padding: "5px 10px",
                                                        width: "10px",
                                                        fontSize: "12px",
                                                        marginTop: "10px",
                                                        marginRight: "20px",
                                                      }}
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
                              >
                                {/* Iterate over revoked credentials */}
                                {appDetailsData.credentials?.length > 0 ? (
                                  appDetailsData.credentials.map(
                                    (credential, index) => {
                                      if (credential.status === "revoked") {
                                        return (
                                          <fieldset
                                            className="items--inline app-credential"
                                            key={index}
                                            // style={{ border: "1px solid red" }}
                                          >
                                            <legend>Credential</legend>

                                            <div className="fieldset-wrapper">
                                              <div
                                                className="wrapper--primary app-details-wrapper"
                                                // style={{
                                                //   border: "8px solid yellow",
                                                // }}
                                              >
                                                <div className="item-property">
                                                  <label>Consumer Key</label>
                                                  <div className="secret field__item">
                                                    {showconsumerkey[
                                                      credential.consumerKey
                                                    ] ? (
                                                      <div
                                                        className="secret__value"
                                                        style={{
                                                          fontSize: "12px",
                                                          overflow: "scroll",
                                                          width: "220px", // or "scroll"
                                                          // Adjust the height according to your design
                                                        }}
                                                      >
                                                        {credential.consumerKey}
                                                      </div>
                                                    ) : (
                                                      <div className="secret__value__hidden">
                                                        {hideKey(
                                                          credential.consumerKey
                                                        )}
                                                      </div>
                                                    )}

                                                    <br />
                                                    <button
                                                      className="secret__toggle"
                                                      onClick={() =>
                                                        toggleVisibility2(
                                                          credential.consumerKey
                                                        )
                                                      }
                                                    >
                                                      {showKey1 ? (
                                                        <Link className="secret__toggle__hide">
                                                          {/* <i className="fas fa-eye-slash secret__toggle__hide" /> */}

                                                          <VisibilityOffOutlinedIcon />
                                                        </Link>
                                                      ) : (
                                                        <Link className="secret__toggle__show">
                                                          {/* <i className="fas fa-eye secret__toggle__show" /> */}
                                                          <RemoveRedEyeOutlinedIcon />
                                                        </Link>
                                                      )}
                                                    </button>
                                                    <div className="secret__copy">
                                                      <button
                                                        className="secret__copy"
                                                        onClick={() =>
                                                          copyToClipboard(
                                                            credential.consumerKey
                                                          )
                                                        }
                                                        title="Click to copy"
                                                      >
                                                        {/* <i className="fas fa-paste" /> */}
                                                        <ContentCopyOutlinedIcon />
                                                      </button>
                                                      <span className="copy-message">
                                                        {copyMessage}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="item-property">
                                                  <label>Consumer Secret</label>
                                                  <div className="secret field__item">
                                                    {showSecrets[
                                                      credential.consumerSecret
                                                    ] ? (
                                                      <div
                                                        className="secret__value"
                                                        style={{
                                                          fontSize: "12px",
                                                          overflow: "scroll",
                                                          width: "220px", // or "scroll"
                                                          // Adjust the height according to your design
                                                        }}
                                                      >
                                                        {
                                                          credential.consumerSecret
                                                        }
                                                      </div>
                                                    ) : (
                                                      <div className="secret__value__hidden">
                                                        {hideKey(
                                                          credential.consumerSecret
                                                        )}
                                                      </div>
                                                    )}

                                                    <br />
                                                    <button
                                                      className="secret__toggle"
                                                      onClick={() =>
                                                        toggleVisibility(
                                                          credential.consumerSecret
                                                        )
                                                      }
                                                      // style={{
                                                      //   color: "green",
                                                      //   height: "20px",
                                                      //   width: "20px",
                                                      // }}
                                                    >
                                                      {showKey ? (
                                                        <Link className="secret__toggle__hide">
                                                          <VisibilityOffOutlinedIcon />
                                                        </Link>
                                                      ) : (
                                                        <Link className="secret__toggle__show">
                                                          <RemoveRedEyeOutlinedIcon />
                                                        </Link>
                                                      )}
                                                    </button>
                                                    <div className="secret__copy">
                                                      <button
                                                        className="secret__copy"
                                                        onClick={() =>
                                                          copyToClipboard(
                                                            credential.consumerSecret
                                                          )
                                                        }
                                                        title="Click to copy"
                                                      >
                                                        <ContentCopyOutlinedIcon />
                                                      </button>
                                                      <span className="copy-message">
                                                        {copyMessage}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="item-property">
                                                  <label> Issued </label>

                                                  {credential.issuedAt
                                                    ? formatTimestamp(
                                                        credential.issuedAt
                                                      )
                                                    : "N/A"}
                                                </div>
                                                <div className="item-property">
                                                  <label> Expires </label>{" "}
                                                  {credential.expiresAt
                                                    ? formatTimestamp(
                                                        credential.expiresAt
                                                      )
                                                    : "N/A"}
                                                </div>
                                                <div className="item-property">
                                                  <label> Key Status </label>
                                                  <span className="badge badge-success">
                                                    {credential.status}
                                                  </span>
                                                </div>
                                              </div>
                                              {/* API Products */}

                                              <div
                                                className="item-property"
                                                // style={{
                                                //   border: "1px solid blue",
                                                // }}
                                              >
                                                <div
                                                  className="wrapper--secondary"
                                                  style={{
                                                    // border: "1px solid red",
                                                    marginLeft: "45px",
                                                  }}
                                                >
                                                  <label
                                                    style={{
                                                      marginLeft: "32px",
                                                    }}
                                                  >
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
                                                            className="api-product-list-row clearfix"
                                                            key={productIndex}
                                                          >
                                                            <div className="api-product-list-row clearfix">
                                                              <span className="api-product-name">
                                                                {
                                                                  product.apiproduct
                                                                }
                                                              </span>
                                                              <span className="badge badge-success">
                                                                {product.status}
                                                              </span>
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
                                                      No API products found for
                                                      this credential.
                                                    </p>
                                                  )}
                                                </div>
                                              </div>

                                              <div
                                                className="dropbutton-wrapper"
                                                // style={{
                                                //   border: "8px solid blue",
                                                // }}
                                              >
                                                <div className="dropbutton-widget">
                                                  <div className="dropbutton">
                                                    <div>
                                                      <button
                                                        className="button btn btn-primary"
                                                        style={{
                                                          padding: "5px 10px",
                                                          width: "10px",
                                                          fontSize: "12px",
                                                          marginTop: "10px",
                                                          marginRight: "20px",
                                                        }}
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
