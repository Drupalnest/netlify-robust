// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { navigate } from "gatsby";

// const EditApps = () => {
//   const [selectedApiProduct, setSelectedApiProduct] = useState("");
//   const appDetails = useSelector((state) => state.app.appDetails);
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails.name;

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleRemoveAPIProduct = async (
//     teamName,
//     appName,
//     consumerKey,
//     apiProductName
//   ) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}/apiproducts/${apiProductName}`;
//     const bearerToken = bearerToken; // Replace with your bearer token

//     try {
//       await axios.delete(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       // Perform any additional actions after successful removal
//       alert("API product removed successfully");
//       navigate("/");
//     } catch (error) {
//       alert("Error removing API product:", error);
//       // Handle error, show a message to the user, etc.
//     }
//   };

//   const handleAddAPIProduct = async (
//     appName,
//     consumerKey,
//     selectedApiProduct
//   ) => {
//     if (!selectedApiProduct) {
//       alert("Please select an API product.");
//       return;
//     }

//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}/apiproducts/${selectedApiProduct}`;
//     const bearerToken = bearerToken; // Replace with your bearer token

//     try {
//       await axios.post(apiUrl, null, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       // Perform any additional actions after successful addition
//       alert("API product added successfully");
//       navigate("/");
//     } catch (error) {
//       alert("Error adding API product:", error);
//     }
//   };

//   const teamNameData = teamName;

//   // Retrieving data from localStorage for the specific team
//   const storedData = localStorage.getItem(`selectedAttributes_${teamNameData}`);
//   const selectedAttributes_All = JSON.parse(storedData) || [];
//   return (
//     <div>
//       <div
//         className="dialog-off-canvas-main-canvas"
//         data-off-canvas-main-canvas=""
//       >
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div />
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     Edit <em  >{appDetails.name}</em> team
//                     app
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <main className="main" role="main">
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <form className="team-app-edit-form team-app-form apigee-edge--form">
//                       <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                         <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                           <label className="js-form-required form-required">
//                             Team App name
//                             <i className="fas fa-asterisk text-danger form-required__indicator" />
//                           </label>
//                           <input
//                             className="js-text-full text-full required form-control"
//                             type="text"
//                             name="displayName[0][value]"
//                             defaultValue={appDetails.name}
//                             size={60}
//                             maxLength={255}
//                             placeholder=""
//                             required="required"
//                             aria-required="true"
//                           />
//                           <small
//                             id="edit-displayname-0-value--description"
//                             className="description form-text text-muted"
//                           >
//                             Only lowercase alphanumeric and dashes are allowed.
//                           </small>
//                         </div>
//                       </div>

//                       <div className="field--type-app-callback-url field--name-callbackurl field--widget-app-callback-url js-form-wrapper form-wrapper">
//                         <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-callbackurl-0-value js-form-item-callbackurl-0-value form-group">
//                           <label htmlFor="edit-callbackurl-0-value">
//                             Callback URL
//                           </label>
//                           <input
//                             readOnly="readonly"
//                             pattern="^([0-9a-zA-Z])+(:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
//                             type="text"
//                             defaultValue=""
//                             size={60}
//                             maxLength={2048}
//                             placeholder=""
//                             className="form-control"
//                           />
//                           <small
//                             id="edit-callbackurl-0-value--description"
//                             className="description form-text text-muted"
//                           >
//                             External site to which a consumer of this app is
//                             redirected to log in when using three-legged OAuth.
//                           </small>
//                         </div>
//                       </div>
//                       <div className="field--type-string-long field--name-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                         <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-description-0-value js-form-item-description-0-value form-group">
//                           <label>Description</label>
//                           <textarea
//                             className="js-text-full text-full form-textarea form-control"
//                             name="description[0][value]"
//                             rows={5}
//                             cols={60}
//                             placeholder=""
//                             defaultValue={appDetails.name}
//                           />
//                         </div>
//                       </div>
//                       {appDetails.credentials.map(
//                         (credential, credentialIndex) => (
//                           <table
//                             className="responsive-enabled table"
//                             key={credentialIndex}
//                           >
//                             <thead>
//                               <tr>
//                                 <th>Issued*</th>
//                                 <th>Credentials</th>
//                                 <th>Expires*</th>
//                                 <th>API Product</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                               </tr>
//                             </thead>
//                             {/* <tbody>
//                               {credential.apiProducts.map(
//                                 (product, productIndex) => (
//                                   <tr className="odd" key={productIndex}>
//                                     <td>
//                                       {productIndex === 0
//                                         ? formatDate(credential.issuedAt)
//                                         : ""}
//                                     </td>
//                                     <td>
//                                       {productIndex === 0
//                                         ? credential.consumerKey
//                                         : ""}
//                                     </td>
//                                     <td>
//                                       {productIndex === 0
//                                         ? formatDate(credential.expiresAt)
//                                         : ""}
//                                     </td>
//                                     <td>{product.apiproduct}</td>

//                                     <td>{product.status} </td>
//                                     <td>
//                                       <button
//                                         className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//                                         type="button"
//                                         onClick={() =>
//                                           handleRemoveAPIProduct(
//                                             teamName,
//                                             appDetails.name,
//                                             credential.consumerKey,
//                                             product.apiproduct
//                                           )
//                                         }
//                                       >
//                                         Remove
//                                       </button>
//                                     </td>

//                                   </tr>

//                                 )
//                               )}
//                             </tbody> */}

//                             <tbody>
//                               {credential.apiProducts.map(
//                                 (product, productIndex) => (
//                                   <tr className="odd" key={productIndex}>
//                                     <td>
//                                       {productIndex === 0
//                                         ? formatDate(credential.issuedAt)
//                                         : ""}
//                                     </td>
//                                     <td>
//                                       {productIndex === 0
//                                         ? credential.consumerKey
//                                         : ""}
//                                     </td>
//                                     <td>
//                                       {productIndex === 0
//                                         ? formatDate(credential.expiresAt)
//                                         : ""}
//                                     </td>
//                                     <td>{product.apiproduct}</td>
//                                     <td>{product.status}</td>
//                                     <td>
//                                       <button
//                                         className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//                                         type="button"
//                                         onClick={() =>
//                                           handleRemoveAPIProduct(
//                                             teamName,
//                                             appDetails.name,
//                                             credential.consumerKey,
//                                             product.apiproduct
//                                           )
//                                         }
//                                       >
//                                         Remove
//                                       </button>
//                                     </td>
//                                   </tr>
//                                 )
//                               )}

//                               <tr className="empty-row">
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>

//                                 <td>
//                                   <select className="form-select view-user-management-user-"  value={selectedApiProduct}
//         onChange={(e) => setSelectedApiProduct(e.target.value)}>
//                                     <option value="" selected="selected">
//                                       - Select -
//                                     </option>
//                                     {selectedAttributes_All.map(
//                                       (attribute, index) => (
//                                         <option key={index} value={attribute}>
//                                           {attribute}
//                                         </option>
//                                       )
//                                     )}
//                                   </select>
//                                 </td>
//                                 <td></td>
//                                 <td>
//                                   <button
//                                     className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//                                     type="button"
//                                     // onClick={handleAddAPIProduct}
//                                     onClick={() =>
//                       handleAddAPIProduct(
//                         appDetails.name,
//                         credential.consumerKey,
//                         selectedApiProduct
//                       )
//                     }
//                                   >
//                                     Add
//                                   </button>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         )
//                       )}
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

// export default EditApps;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { navigate } from "gatsby";
// import Layout from "../Layout";
// import AppsButton from "./AppsButton";
// import { fetchAppDetails } from "../../redux/store";

// const EditApps = () => {
//   const dispatch = useDispatch();
//   const [selectedApiProduct, setSelectedApiProduct] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState("");
//   // const appDetails = useSelector((state) => state.app.appDetails);
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails.name;

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleRemoveAPIProduct = async (
//     teamName,
//     appName,
//     consumerKey,
//     apiProductName
//   ) => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}/apiproducts/${apiProductName}`;
//     const bearerToken = bearerToken; // Replace with your bearer token

//     try {
//       await axios.delete(apiUrl, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       // Perform any additional actions after successful removal
//       dispatch(fetchAppDetails(teamName, appName));
//       alert("API product removed successfully");
//     } catch (error) {
//       alert("Error removing API product:", error);
//       // Handle error, show a message to the user, etc.
//     }
//   };

//   const handleAddAPIProduct = async (
//     appName,
//     consumerKey,
//     selectedApiProduct
//   ) => {
//     if (!selectedApiProduct) {
//       alert("Please select an API product.");
//       return;
//     }

//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}/keys/${consumerKey}`;
//     const bearerToken = bearerToken; // Replace with your bearer token
//     //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/asd/apps/aaaaaa/keys/h4yzMy90Rh3QI05yg1RvueSXfqf6dUGy?action=approve

//     const requestBody = {
//       apiProducts: [selectedApiProduct],
//     };

//     try {
//       await axios.post(apiUrl, requestBody, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       // Perform any additional actions after successful addition
//       dispatch(fetchAppDetails(teamName, appName));
//       alert("API product added successfully");
//     } catch (error) {
//       alert("Error adding API product:", error);
//     }
//   };

//   const teamNameData = teamName;
//   console.log("selectedApiProduct",selectedApiProduct)

//   // Retrieving data from localStorage for the specific team
//   // const storedData = localStorage.getItem(`selectedAttributes_${teamNameData}`);
//   // const selectedAttributes_All = JSON.parse(storedData) || [];

//   const selectedDescription = appDetailsData.attributes.find(
//     (attr) => attr.name === "description"
//   )?.value;
//   console.log("selected", selectedDescription);

//   const selectedProducts = teamDetails.attributes.find(
//     (attr) => attr.name === "api_product"
//   )?.value;
//   console.log("selected", selectedProducts);
//   // const selectedAttributes_All = JSON.parse(selectedProducts) || [];
//   // console.log("selectedProducts", selectedAttributes_All);

//   const api_product = ["api_product", selectedProducts];
//   console.log("api_product", api_product);

//   const array1 = [{ selectedProducts }];
//   console.log("array1", array1);

//   // const unserializedData = array1
//   //   .map((item) => {
//   //     const regex = /s:\d+:\\\"(.*?)\\\"/g;
//   //     const matches = item.selectedProducts.match(regex);
//   //     if (matches) {
//   //       return matches.map((match) =>
//   //         match.replace(/\\\\/g, "\\").replace(/s:\d+:\\\"(.*?)\\\"/, "$1")
//   //       );
//   //     }
//   //     return [];
//   //   })
//   //   .flat();
//   // console.log("unserializedData", unserializedData);

//   const unserializedData = array1
//     .map((item) => {
//       if (item && item.selectedProducts) {
//         const regex = /s:\d+:\\\"(.*?)\\\"/g;
//         const matches = item.selectedProducts.match(regex);
//         if (matches) {
//           return matches.map((match) =>
//             match.replace(/\\\\/g, "\\").replace(/s:\d+:\\\"(.*?)\\\"/, "$1")
//           );
//         }
//       }
//       return [];
//     })
//     .flat();
//   console.log("unserializedData", unserializedData);

//   const uniqueAttributes = Array.from(new Set(unserializedData));
//   console.log("uniqueAttributes", uniqueAttributes);

//   const findDuplicates = (unserializedData) => {
//     const duplicates = {};
//     const duplicateItems = [];

//     unserializedData.forEach((item) => {
//       if (!duplicates[item]) {
//         duplicates[item] = 1;
//       } else {
//         duplicates[item]++;
//         if (duplicates[item] === 2) {
//           duplicateItems.push(item);
//         }
//       }
//     });

//     return duplicateItems;
//   };

//   const duplicateValues = findDuplicates(unserializedData);
//   const filteredData = duplicateValues.filter((attr) => attr !== "0");
//   console.log("filteredData:", filteredData);

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
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Edit{" "}
//                       <em  >{appDetailsData.name}</em>{" "}
//                       team app
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
//                       <form className="team-app-edit-form team-app-form apigee-edge--form">
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Team App name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               name="displayName[0][value]"
//                               defaultValue={appDetailsData.name}
//                               size={60}
//                               maxLength={255}
//                               placeholder=""
//                               required="required"
//                               aria-required="true"
//                             />
//                             <small
//                               id="edit-displayname-0-value--description"
//                               className="description form-text text-muted"
//                             >
//                               Only lowercase alphanumeric and dashes are
//                               allowed.
//                             </small>
//                           </div>
//                         </div>

//                         <div className="field--type-app-callback-url field--name-callbackurl field--widget-app-callback-url js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-callbackurl-0-value js-form-item-callbackurl-0-value form-group">
//                             <label htmlFor="edit-callbackurl-0-value">
//                               Callback URL
//                             </label>
//                             <input
//                               readOnly="readonly"
//                               pattern="^([0-9a-zA-Z])+(:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
//                               type="text"
//                               defaultValue=""
//                               size={60}
//                               maxLength={2048}
//                               placeholder=""
//                               className="form-control"
//                             />
//                             <small
//                               id="edit-callbackurl-0-value--description"
//                               className="description form-text text-muted"
//                             >
//                               External site to which a consumer of this app is
//                               redirected to log in when using three-legged
//                               OAuth.
//                             </small>
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-description-0-value js-form-item-description-0-value form-group">
//                             <label>Description</label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               name="description[0][value]"
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                               defaultValue={selectedDescription}
//                             />
//                           </div>
//                         </div>
//                         {appDetailsData.credentials.map(
//                           (credential, credentialIndex) => (
//                             <table
//                               className="responsive-enabled table"
//                               key={credentialIndex}
//                             >
//                               <thead>
//                                 <tr>
//                                   <th>Issued*</th>
//                                   <th>Credentials</th>
//                                   <th>Expires*</th>
//                                   <th>API Product</th>
//                                   <th>Status</th>
//                                   <th>Actions</th>
//                                 </tr>
//                               </thead>

//                               <tbody>
//                                 {credential.apiProducts.map(
//                                   (product, productIndex) => (
//                                     <tr className="odd" key={productIndex}>
//                                       <td>
//                                         {productIndex === 0
//                                           ? formatDate(credential.issuedAt)
//                                           : ""}
//                                       </td>
//                                       <td>
//                                         {productIndex === 0
//                                           ? credential.consumerKey
//                                           : ""}
//                                       </td>
//                                       <td>
//                                         {productIndex === 0
//                                           ? formatDate(credential.expiresAt)
//                                           : ""}
//                                       </td>
//                                       <td>{product.apiproduct}</td>
//                                       <td>{product.status}</td>
//                                       <td>
//                                         <button
//                                           className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//                                           type="button"
//                                           onClick={() =>
//                                             handleRemoveAPIProduct(
//                                               teamName,
//                                               appDetailsData.name,
//                                               credential.consumerKey,
//                                               product.apiproduct
//                                             )
//                                           }
//                                         >
//                                           Remove
//                                         </button>
//                                       </td>
//                                     </tr>
//                                   )
//                                 )}

//                                 <tr className="empty-row">

//                                   <td></td>
//                                   <td></td>
//                                   <td></td>

//                                   <td>
//                                     <select
//                                       value={selectedApiProduct}
//                                       onChange={(e) =>
//                                         setSelectedApiProduct(e.target.value)
//                                       }
//                                     >
//                                       <option value="">- Select -</option>
//                                       {filteredData.map((attribute, index) => (
//                                         <option key={index} value={attribute}>
//                                           {attribute}
//                                         </option>
//                                       ))}
//                                     </select>
//                                   </td>
//                                   <td></td>
//                                   <td>
//                                     <button
//                                       className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//                                       type="button"
//                                       onClick={() =>
//                                         handleAddAPIProduct(
//                                           appDetailsData.name,
//                                           credential.consumerKey,
//                                           selectedApiProduct
//                                         )
//                                       }
//                                     >
//                                       Add
//                                     </button>
//                                   </td>
//                                 </tr>

//                               </tbody>
//                             </table>
//                           )
//                         )}
//                       </form>
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

// export default EditApps;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { navigate } from "gatsby";
import Layout from "../../../../components/Layout";
import AppsButton from "../AppsButton";
import { fetchAppDetails } from "../../../../redux/store";
import { toast } from "react-toastify";
import Modal from "react-modal";
import "./edit.css";


const EditApps = () => {
  const dispatch = useDispatch();
  const [selectedApiProduct, setSelectedApiProduct] = useState("");
  const [selectedAttributes, setSelectedAttributes] = useState("");
  const [selectedApiProducts, setSelectedApiProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);


  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("editApps", teamDetails);
  const teamName = teamDetails ? teamDetails.name : "";
  console.log("teamName", teamName);

  const appDetailsData = useSelector(
    (state) => state.appDetailsData.appDetailsData
  );
  console.log("appDetailsData", appDetailsData);

  const isFetching = appDetailsData ? appDetailsData.loading : true; // Handle null value

  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return "N/A";
    }

    const dateObject = new Date(parseInt(timestamp));
    if (!isNaN(dateObject)) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC",
        //timeZoneName: "short",
      };

      return new Intl.DateTimeFormat("en-US", options).format(dateObject);
    } else {
      return "Invalid Date";
    }
  }

  const timestamp = 1674551460000; // Example timestamp (Aug 21 2023 12:11:00 PM UTC)
  const formattedTimestamp = formatTimestamp(timestamp);

  console.log(formattedTimestamp); // Output: "08/21/2023, 12:11 PM UTC"

  // const handleRemoveAPIProduct = async (
  //   teamName,
  //   appName,
  //   consumerKey,
  //   apiProductName
  // ) => {
  //   const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}/apiproducts/${apiProductName}`;
  //   const bearerToken = bearerToken; // Replace with your bearer token

  //   try {
  //     await axios.delete(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer ${bearerToken}`,
  //       },
  //     });

  //     // Perform any additional actions after successful removal
  //     dispatch(fetchAppDetails(teamName, appName));
  //     alert("API product removed successfully");
  //   } catch (error) {
  //     alert("Error removing API product:", error);
  //     // Handle error, show a message to the user, etc.
  //   }
  // };

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const handleRemoveConfirmation = async () => {
    if (
      !productToRemove ||
      !productToRemove.apiproduct ||
      !productToRemove.consumerKey ||
      !productToRemove.teamName ||
      !productToRemove.appName
    ) {
      // Handle error, e.g., show a message to the user
      return;
    }

    try {
      const { apiproduct, consumerKey, teamName, appName } = productToRemove;
      const tokenResponse = await fetch('https://imaginative-sprite-320f1b.netlify.app/.netlify/functions/retrieveToken');
      const { accessToken } = await tokenResponse.json();
      const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}/apiproducts/${apiproduct}`;
      // Replace with your bearer token

      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Perform any additional actions after successful removal
      dispatch(fetchAppDetails(teamName, appName));
      alert("API product removed successfully");
    } catch (error) {
      alert("Error removing API product:", error);
      // Handle error, show a message to the user, etc.
    }

    // Close the modal after the action is performed
    setIsRemoveModalOpen(false);
  };

  // const handleRemoveConfirmation = (productToRemove) => {
  //   // Execute the handleRemoveAPIProduct function here using the productToRemove
  //   handleRemoveAPIProduct(
  //     teamName,
  //     appDetailsData.name,
  //     productToRemove.consumerKey,
  //     productToRemove.apiproduct
  //   );

  //   // Close the modal after the action is performed
  //   setIsRemoveModalOpen(false);
  // };

  // const handleRemoveAPIProduct = async (
  //   teamName,
  //   appName,
  //   consumerKey,
  //   apiProductName
  // ) => {
  //   const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}/apiproducts/${apiProductName}`;
  //   const bearerToken = bearerToken; // Replace with your bearer token

  //   try {
  //     await axios.delete(apiUrl, {
  //       headers: {
  //         Authorization: `Bearer ${bearerToken}`,
  //       },
  //     });

  //     // Perform any additional actions after successful removal
  //     dispatch(fetchAppDetails(teamName, appName));
  //     alert("API product removed successfully");
  //   } catch (error) {
  //     alert("Error removing API product:", error);
  //     // Handle error, show a message to the user, etc.
  //   }
  // };

  const handleAddAPIProduct = async (
    appName,
    consumerKey,
    selectedApiProduct
  ) => {
    console.log("selectedApiProduct:", selectedApiProduct);
    if (!selectedApiProduct || selectedApiProduct.length === 0) {
      alert("Please select API product.");
      return;
    }
    const tokenResponse = await fetch('https://imaginative-sprite-320f1b.netlify.app/.netlify/functions/retrieveToken');
    const { accessToken } = await tokenResponse.json();
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}`;
    const bearerToken = accessToken; // Replace with your bearer token
    //https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/asd/apps/aaaaaa/keys/h4yzMy90Rh3QI05yg1RvueSXfqf6dUGy?action=approve

    const requestBody = {
      apiProducts: [selectedApiProduct],
    };

    try {
      await axios.post(apiUrl, requestBody, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      // Perform any additional actions after successful addition
      dispatch(fetchAppDetails(teamName, appName));
      alert("API product added successfully");
      setSelectedApiProducts([]);
    } catch (error) {
      alert("Error adding API product:", error);
    }
  };

  const teamNameData = teamName;
  console.log("selectedApiProduct", selectedApiProduct);

  // Retrieving data from localStorage for the specific team
  // const storedData = localStorage.getItem(`selectedAttributes_${teamNameData}`);
  // const selectedAttributes_All = JSON.parse(storedData) || [];

  const selectedDescription =
    appDetailsData?.attributes.find((attr) => attr.name === "description")
      ?.value || "";
  console.log("selected", selectedDescription);

  const selectedProducts = teamDetails.attributes.find(
    (attr) => attr.name === "api_product"
  )?.value;
  console.log("selected", selectedProducts);
  // const selectedAttributes_All = JSON.parse(selectedProducts) || [];
  // console.log("selectedProducts", selectedAttributes_All);

  const api_product = ["api_product", selectedProducts];
  console.log("api_product", api_product);

  const array1 = [{ selectedProducts }];
  console.log("array1", array1);

  const unserializedData = array1
    .map((item) => {
      if (item && item.selectedProducts) {
        const regex = /s:\d+:\\\"(.*?)\\\"/g;
        const matches = item.selectedProducts.match(regex);
        if (matches) {
          return matches.map((match) =>
            match.replace(/\\\\/g, "\\").replace(/s:\d+:\\\"(.*?)\\\"/, "$1")
          );
        }
      }
      return [];
    })
    .flat();
  console.log("unserializedData", unserializedData);

  const uniqueAttributes = Array.from(new Set(unserializedData));
  console.log("uniqueAttributes", uniqueAttributes);

  const findDuplicates = (unserializedData) => {
    const duplicates = {};
    const duplicateItems = [];

    unserializedData.forEach((item) => {
      if (!duplicates[item]) {
        duplicates[item] = 1;
      } else {
        duplicates[item]++;
        if (duplicates[item] === 2) {
          duplicateItems.push(item);
        }
      }
    });

    return duplicateItems;
  };

  const duplicateValues = findDuplicates(unserializedData);

  const filteredData = duplicateValues.filter((attr) => attr !== "0");
  console.log("filteredData:", filteredData);

  const handleApiProductSelect = (e, credentialIndex) => {
    const newValue = e.target.value;
    setSelectedApiProducts((prevSelected) => {
      const updatedSelected = [...prevSelected];
      updatedSelected[credentialIndex] = newValue;
      return updatedSelected;
    });
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

        <div
          className="dialog-off-canvas-main-canvas"
          data-off-canvas-main-canvas=""
        >
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div />
                  <div className="container">
                    <h3 className="js-quickedit-page-title page__title mb-0">
                      Edit &nbsp;{appDetailsData.name}&nbsp; team app
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <main className="main" role="main">
              <div className="page-layout-sidebar-default">
                <div className="container py-5">
                  <div className="row">
                    <div className="page__content col-md">
                      <form className="team-app-edit-form team-app-form apigee-edge--form">
                        <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
                          <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
                            <label className="js-form-required form-required">
                              Team App name
                              <sup>
                                <i
                                  className="fas fa-asterisk text-danger form-required__indicator"
                                  style={{ fontSize: "0.7em" }}
                                />
                              </sup>
                            </label>
                            <input
                              className="js-text-full text-full required form-control"
                              type="text"
                              name="displayName[0][value]"
                              defaultValue={appDetailsData.name}
                              size={60}
                              maxLength={255}
                              placeholder=""
                              required="required"
                              aria-required="true"
                            />
                            <small
                              id="edit-displayname-0-value--description"
                              className="description form-text text-muted"
                            >
                              Only lowercase alphanumeric and dashes are
                              allowed.
                            </small>
                          </div>
                        </div>

                        <div className="field--type-app-callback-url field--name-callbackurl field--widget-app-callback-url js-form-wrapper form-wrapper">
                          <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-callbackurl-0-value js-form-item-callbackurl-0-value form-group">
                            <label htmlFor="edit-callbackurl-0-value">
                              Callback URL
                            </label>
                            <input
                              readOnly="readonly"
                              pattern="^([0-9a-zA-Z])+(:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
                              type="text"
                              defaultValue=""
                              size={60}
                              maxLength={2048}
                              placeholder=""
                              className="form-control"
                            />
                            <small
                              id="edit-callbackurl-0-value--description"
                              className="description form-text text-muted"
                            >
                              External site to which a consumer of this app is
                              redirected to log in when using three-legged
                              OAuth.
                            </small>
                          </div>
                        </div>
                        <div className="field--type-string-long field--name-description field--widget-string-textarea js-form-wrapper form-wrapper">
                          <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-description-0-value js-form-item-description-0-value form-group">
                            <label>Description</label>
                            <textarea
                              className="js-text-full text-full form-textarea form-control"
                              name="description[0][value]"
                              rows={5}
                              cols={60}
                              placeholder=""
                              defaultValue={selectedDescription}
                            />
                          </div>
                        </div>
                        {appDetailsData.credentials.map(
                          (credential, credentialIndex) => (
                            <table
                              className="responsive-enabled table"
                              key={credentialIndex}
                            >
                              <thead>
                                <tr>
                                  <th>Issued*</th>
                                  <th>Credentials</th>
                                  <th>Expires*</th>
                                  <th>API Product</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>

                              <tbody>
                                {appDetailsData.credentials &&
                                  credential &&
                                  credential.apiProducts &&
                                  credential.apiProducts.map(
                                    (product, productIndex) => (
                                      <tr className="odd" key={productIndex}>
                                        <td>
                                          {productIndex === 0
                                            ? credential.issuedAt
                                              ? formatTimestamp(
                                                  credential.issuedAt
                                                )
                                              : "N/A"
                                            : ""}
                                        </td>

                                        <td>
                                          {productIndex === 0
                                            ? credential.consumerKey
                                            : ""}
                                        </td>

                                        <td>
                                          {productIndex === 0
                                            ? credential.expiresAt
                                              ? formatTimestamp(
                                                  credential.expiresAt
                                                )
                                              : "N/A"
                                            : ""}
                                        </td>

                                        <td>{product.apiproduct}</td>
                                        <td>{product.status}</td>
                                        <td>
                                          {/* <button
                                            className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
                                            type="button"
                                            onClick={() =>
                                              handleRemoveAPIProduct(
                                                teamName,
                                                appDetailsData.name,
                                                credential.consumerKey,
                                                product.apiproduct
                                              )
                                            }
                                          >
                                            Remove
                                          </button> */}
                                          <button
                                            className="all-buttons-color text-white js-form-submit-remove button js-form-submit form-submit btn btn-md"
                                            type="button"
                                            onClick={() => {
                                              setProductToRemove({
                                                apiproduct: product.apiproduct,
                                                consumerKey:
                                                  credential.consumerKey,
                                                teamName,
                                                appName: appDetailsData.name,
                                              });
                                              setIsRemoveModalOpen(true);
                                            }}
                                          >
                                            Remove
                                          </button>
                                        </td>
                                      </tr>
                                    )
                                  )}

                                {/* <Modal
                                  isOpen={isRemoveModalOpen}
                                  onRequestClose={() =>
                                    setIsRemoveModalOpen(false)
                                  }
                                  style={{
                                    content: {
                                      top: "50%",
                                      left: "50%",
                                      right: "auto",
                                      bottom: "auto",
                                      marginRight: "-50%",
                                      transform: "translate(-50%, -50%)",
                                    },
                                  }}
                                >
                                  <div className="modal-content">
                                    <p>
                                      Are you sure you want to remove this API
                                      product?
                                    </p>
                                    <button onClick={handleRemoveConfirmation}>
                                      Remove
                                    </button>
                                    <button
                                      onClick={() =>
                                        setIsRemoveModalOpen(false)
                                      }
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Modal> */}

                                {/* <Modal
                                  isOpen={isRemoveModalOpen}
                                  onRequestClose={() =>
                                    setIsRemoveModalOpen(false)
                                  }
                                >
                                  <div className="ui-front">
                                    <div
                                      className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-dialog-buttons ui-draggable"
                                      style={{
                                        position: "fixed",
                                        height: "auto",
                                        width: "50%",
                                        top: "369.25px",
                                        left: "419.572px",
                                      }}
                                    >
                                      <div className="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix ui-draggable-handle">
                                        <span className="ui-dialog-title">
                                          Confirmation
                                        </span>
                                        <button
                                          type="button"
                                          className="ui-button ui-corner-all ui-widget  ui-dialog-titlebar-close"
                                          title="Close"
                                          onClick={() =>
                                            setIsRemoveModalOpen(false)
                                          }
                                        >
                                          &times;
                                          <span className="ui-icon ui-icon-closethick"></span>
                                        </button>
                                      </div>
                                      <div
                                        className="ui-dialog-content ui-widget-content"
                                        style={{
                                          width: "auto",
                                          minHeight: "22px",
                                          maxHeight: "none",
                                          height: "auto",
                                        }}
                                      >
                                        Are you sure you would like to remove
                                        this API product?
                                      </div>
                                      <div className="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                                        <div className="ui-dialog-buttonset">
                                          <button
                                            type="button"
                                            onClick={handleRemoveConfirmation}
                                            className="js-form-submit form-submit btn btn-primary ui-button ui-corner-all ui-widget button"
                                          >
                                            Confirm
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              setIsRemoveModalOpen(false)
                                            }
                                            className="custom-button-cancel ui-button ui-corner-all ui-widget button"
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="ui-widget-overlay ui-front"
                                      style={{ zIndex: "9998" }}
                                    ></div>
                                  </div>
                                </Modal> */}

                                <Modal
                                  isOpen={isRemoveModalOpen}
                                  onRequestClose={() =>
                                    setIsRemoveModalOpen(false)
                                  }
                                  style={{
                                    content: {
                                      top: "50%",
                                      left: "50%",
                                      right: "auto",
                                      bottom: "auto",
                                      marginRight: "-50%",
                                      transform: "translate(-50%, -50%)",
                                      border: "none",
                                    },
                                  }}
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5 className="modal-title">
                                          Confirmation
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                          onClick={() =>
                                            setIsRemoveModalOpen(false)
                                          }
                                        >
                                          <span aria-hidden="true">
                                            &times;
                                          </span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        Are you sure you would like to remove
                                        this API product?
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="all-buttons-color text-white btn btn-md"
                                          onClick={handleRemoveConfirmation}
                                        >
                                          Confirm
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-md  btn-outline-primary "
                                          onClick={() =>
                                            setIsRemoveModalOpen(false)
                                          }
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </Modal>

                                {/* {showPopup && (
                                  <div className="popup">
                                    <div className="popup-content">
                                      <span
                                        className="popup-close"
                                        onClick={closePopup}
                                      >
                                        &times;
                                      </span>
                                      <p>
                                        Are you sure you want to remove this API
                                        product?
                                      </p>
                                      <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                          handleConfirmRemove(
                                            teamName,
                                            appDetailsData.name,
                                            credential.consumerKey,
                                            product.apiproduct
                                          )
                                        }
                                      >
                                        Confirm
                                      </button>
                                      <button
                                        className="btn btn-secondary"
                                        onClick={closePopup}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                )}
                                 */}

                                {/* 
                                       {appDetailsData.credentials ? (
                                  appDetailsData.credentials.map(
                                    (credential, credentialIndex) => {
                                      const hasApiProducts =
                                        credential?.apiProducts?.length === 0;

                                      if (!hasApiProducts) {
                                        return (
                                          <tr key={credentialIndex}>
                                            <td>{credential.consumerKey}</td>
                                            <td>{credential.consumerSecret}</td>
                                            <td>{credential.consumerType}</td>
                                            <td colSpan="3">
                                              <select
                                                value={
                                                  selectedApiProducts[
                                                    credentialIndex
                                                  ] || ""
                                                }
                                                onChange={(e) =>
                                                  handleApiProductSelect(
                                                    e,
                                                    credentialIndex
                                                  )
                                                }
                                              >
                                                <option value="">
                                                  - Select -
                                                </option>
                                                {filteredData.map(
                                                  (attribute, index) => (
                                                    <option
                                                      key={index}
                                                      value={attribute}
                                                    >
                                                      {attribute}
                                                    </option>
                                                  )
                                                )}
                                              </select>
                                              <button
                                                className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
                                                type="button"
                                                onClick={() =>
                                                  handleAddAPIProduct(
                                                    appDetailsData.name,
                                                    credential.consumerKey,
                                                    selectedApiProducts
                                                  )
                                                }
                                              >
                                                Add
                                              </button>
                                            </td>
                                          </tr>
                                        );
                                      } else {
                                        return null;
                                      }
                                    }
                                  )
                                ) : (
                                  <tr>
                                    <td colSpan="6">
                                      No credentials available
                                    </td>
                                  </tr>
                                )} */}

                                <tr className="empty-row">
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    <select
                                      value={
                                        selectedApiProducts[credentialIndex] ||
                                        ""
                                      }
                                      onChange={(e) =>
                                        handleApiProductSelect(
                                          e,
                                          credentialIndex
                                        )
                                      }
                                    >
                                      <option value="">- Select -</option>
                                      {filteredData.map(
                                        (attribute, index) =>
                                          // Check if the attribute is already added to the credential
                                          !appDetailsData.credentials[
                                            credentialIndex
                                          ]?.apiProducts?.some(
                                            (product) =>
                                              product.apiproduct === attribute
                                          ) && (
                                            <option
                                              key={index}
                                              value={attribute}
                                            >
                                              {attribute}
                                            </option>
                                          )
                                      )}
                                    </select>
                                  </td>
                                  <td></td>
                                  <td>
                                    <button
                                      className="all-buttons-color text-white js-form-submit-remove button js-form-submit form-submit btn btn-md"
                                      type="button"
                                      onClick={() =>
                                        handleAddAPIProduct(
                                          appDetailsData.name,
                                          credential.consumerKey,
                                          selectedApiProducts
                                        )
                                      }
                                    >
                                      Add
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )
                        )}
                      </form>
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

export default EditApps;

// <table className="responsive-enabled table">
// <thead>
//   <tr>
//     <th>Issued*</th>
//     <th>Credentials</th>
//     <th>Expires*</th>
//     <th>API Product</th>
//     <th>Status</th>
//     <th>Actions</th>
//   </tr>
// </thead>
// <tbody>
//   {appDetailsData.credentials.map(
//     (credential, credentialIndex) => (
//       <React.Fragment key={credentialIndex}>
//         <tr className="odd">
//           <td>
//             {formatTimestamp(credential.issuedAt)}
//           </td>
//           <td>{credential.consumerKey}</td>
//           <td>
//             {formatTimestamp(credential.expiresAt)}
//           </td>
//           {credential.apiProducts ? (
//             credential.apiProducts.map(
//               (product, productIndex) => (
//                 <tr
//                   className="odd"
//                   key={`${credentialIndex}-${productIndex}`}
//                 >
//                   <td></td>
//                   <td></td>
//                   <td></td>
//                   <tr> <td>{product.apiproduct}</td></tr>
//                   <tr> <td>{product.status}</td></tr>

//                   <td>
//                     <button
//                       className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//                       type="button"
//                       onClick={() =>
//                         handleRemoveAPIProduct(
//                           teamName,
//                           appDetailsData.name,
//                           credential.consumerKey,
//                           product.apiproduct
//                         )
//                       }
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )
//           ) : (
//             <tr
//               className="odd"
//               key={`${credentialIndex}-no-products`}
//             >
//               <td colSpan="3">No API Products</td>
//             </tr>
//           )}
//           <tr className="empty-row">
//     <td></td>
//     <td></td>
//     <td></td>
//     <td>
//       <select
//         value={selectedApiProduct}
//         onChange={(e) =>
//           setSelectedApiProduct(e.target.value)
//         }
//       >
//         <option value="">- Select -</option>
//         {filteredData.map((attribute, index) => (
//           <option key={index} value={attribute}>
//             {attribute}
//           </option>
//         ))}
//       </select>
//     </td>
//     <td></td>
//     <td>
//       <button
//         className="js-form-submit-remove button js-form-submit form-submit btn btn-primary"
//         type="button"
//         onClick={() =>
//           handleAddAPIProduct(
//             appDetailsData.name,
//             appDetailsData.consumerKey,
//             selectedApiProduct
//           )
//         }
//       >
//         Add
//       </button>
//     </td>
//   </tr>
//         </tr>

//       </React.Fragment>
//     )
//   )}

//   {/* Empty row for adding new API products */}

// </tbody>
// </table>
