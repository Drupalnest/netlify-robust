// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addApp } from "../../redux/store";
// import axios from "axios";
// import { Link, navigate } from "gatsby";
// import Header from "../Header/Header";

// const AddApps = () => {
//   const [appName, setAppName] = useState("");
//   const [description, setDescription] = useState("");
//   const [checkedAttributes, setCheckedAttributes] = useState([]);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const teamName = teamDetails?.name || "";

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const handleCompanyNameChange = (e) => {
//     setAppName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleAddApp = async (e) => {
//     e.preventDefault();

//     if (!appName.trim()) {
//       alert("Please provide a valid company name.");
//       return;
//     }

//     try {
//       const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//           },
//           body: JSON.stringify({
//             name: appName,

//             attributes: [
//               {
//                 name: "api_product",
//                 value: serializedApiProduct,
//               },

//               {
//                 name: "description",
//                 value: description,
//               },
//             ],
//           }),
//         }
//       );

//       if (response.ok) {
//         alert(appName);
//         alert(description);
//         // alert(serializedApiProduct);
//         alert("Team Created successfully!");
//         navigate("/apps");
//       } else {
//         alert("Failed to create team");
//       }
//     } catch (error) {
//       alert("An error occurred while creating team ");
//     }
//   };

//   // console.log("team name", companyName);

//   // console.log("description", description);

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

//   // console.log("description", description);
//   const handleAttributeChange = (attributeValue) => {
//     setSelectedAttributes((prevAttributes) => {
//       if (prevAttributes.includes(attributeValue)) {
//         return prevAttributes.filter((attr) => attr !== attributeValue);
//       } else {
//         return [...prevAttributes, attributeValue];
//       }
//     });
//   };

//   const updateSelectedAttributes = (updatedAttributes) => {
//     setSelectedAttributes(updatedAttributes);
//   };

//   const handleCheckboxChange = (attribute) => {
//     setCheckedAttributes((prevChecked) => {
//       if (prevChecked.includes(attribute)) {
//         return prevChecked.filter((attr) => attr !== attribute);
//       } else {
//         return [...prevChecked, attribute];
//       }
//     });
//   };

//   const mergedArray = [...selectedAttributes, ...checkedAttributes];
//   const selected_attribute = Array.from(new Set(mergedArray));

//   const unselected_attributes = filteredData.filter(
//     (attr) => !selected_attribute.includes(attr)
//   );
//   console.log("unselected_attributes", unselected_attributes);

//   const formatted_selected_attribute = selected_attribute.map((attr) => ({
//     [attr]: attr,
//   }));
//   console.log("formatted_selected_attribute", formatted_selected_attribute);
//   const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
//     [attr]: "0",
//   }));

//   console.log("formatted_unselected_attribute", formatted_unselected_attribute);
//   const final_Output = [
//     ...formatted_selected_attribute,
//     ...formatted_unselected_attribute,
//   ];

//   const parsed_Final_Output1 = JSON.parse(
//     JSON.stringify(final_Output, null, 2)
//   );

//   const serializeData = parsed_Final_Output1.map((item) => {
//     const key = Object.keys(item)[0];
//     const value = item[key];
//     const serializedKey = `s:${key.length}:\\"${key}\\"`;
//     const serializedValue = `s:${value.length}:\\"${value}\\"`;
//     return `${serializedKey}:${serializedValue}`;
//   });
//   // console.log("serializeData", serializeData);
//   // const serializedApiProduct22 = serializeData.join(",");
//   // console.log("serializedApiProduct22", serializedApiProduct22);

//   return (
//     <div>
//       <Header />
//       <>
//         <div
//           className="dialog-off-canvas-main-canvas"
//           data-off-canvas-main-canvas=""
//         >
//           <div className="page">
//             <header className="page__header">
//               <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=starbucks_tabs&args%5B1%5D=full&args%5B2%5D&token=MEkI12DtyJlNIxuOGvgD3VFvH_cZWONfyjuDDe873eY" />
//             </header>
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div
//                     data-contextual-id="block:block=pagetitle:langcode=en"
//                     data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                   />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add team app
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
//                       <div
//                         data-drupal-messages-fallback=""
//                         className="hidden"
//                       />

//                       <form
//                         className="team-app-add-for-team-form team-app-form apigee-edge--form"
//                         onSubmit={handleAddApp}
//                       >
//                         <div
//                           className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper"
//                           data-drupal-selector="edit-displayname-wrapper"
//                           id="edit-displayname-wrapper"
//                         >
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label
//                               htmlFor="edit-displayname-0-value"
//                               className="js-form-required form-required"
//                             >
//                               Team App name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               id="appName"
//                               value={appName}
//                               onChange={handleCompanyNameChange}
//                               size={60}
//                               maxLength={255}
//                               placeholder=""
//                               required="required"
//                               aria-required="true"
//                             />
//                             <span className="field-suffix">
//                               <small id="edit-displayname-0-value-machine-name-suffix">
//                                 &nbsp;
//                               </small>
//                             </span>
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
//                               title="The Callback URL must start with http:// or https://"
//                               readOnly="readonly"
//                               pattern="^([0-9a-zA-Z])+(:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
//                               type="text"
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
//                         <div
//                           className="field--type-string-long field--name-description field--widget-string-textarea js-form-wrapper form-wrapper"
//                           id="edit-description-wrapper"
//                         >
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-description-0-value js-form-item-description-0-value form-group">
//                             <label htmlFor="edit-description-0-value">
//                               Description
//                             </label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               name="description[0][value]"
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                               defaultValue={""}
//                               value={description}
//                               onChange={handleDescriptionChange}
//                             />
//                           </div>
//                         </div>
//                         <fieldset className="fieldgroup form-composite required js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                           <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                             <span className="fieldset-legend js-form-required form-required">
//                               APIs
//                             </span>
//                             <button className="btn-link">
//                               <i className="fas fa-chevron-down d-md-none" />
//                             </button>
//                           </legend>
//                           <div className="p-4 fieldset-wrapper">
//                             <div
//                               id="edit-api-products"
//                               className="form-checkboxes"
//                             >
//                               <div className="js-form-item form-item js-form-type-checkbox form-item-api-products-ucp-master js-form-item-api-products-ucp-master form-check">
//                                 <input
//                                   data-drupal-selector="edit-api-products-ucp-master"
//                                   type="checkbox"
//                                   id="edit-api-products-ucp-master"
//                                   name="api_products[ucp-master]"
//                                   defaultValue="ucp-master"
//                                   className="form-checkbox form-check-input"
//                                 />

//                                 {filteredData && filteredData.length > 0 && (
//                                   <div className="p-4 fieldset-wrapper">
//                                     <div className="form-checkboxes">
//                                       {filteredData.map((val, valIndex) => (
//                                         <div
//                                           key={valIndex}
//                                           className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                         >
//                                           <ul style={{ padding: 0, margin: 0 }}>
//                                             <li
//                                               key={valIndex}
//                                               style={{ listStyle: "none" }}
//                                             >
//                                               <input
//                                                 type="checkbox"
//                                                 value={val}
//                                                 style={{ marginRight: "0.5em" }}
//                                                 checked={checkedAttributes.includes(
//                                                   val
//                                                 )}
//                                                 onChange={() =>
//                                                   handleCheckboxChange(val)
//                                                 }
//                                               />
//                                               {val}
//                                             </li>
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </fieldset>
//                         <div className="form-actions js-form-wrapper form-wrapper">
//                           <button
//                             type="submit"
//                             className="button button--primary js-form-submit form-submit btn btn-primary"
//                           >
//                             Add team app
//                           </button>

//                           <Link to="/" className="btn btn-outline-primary">
//                             Cancel
//                           </Link>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default AddApps;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { Link, navigate } from "gatsby";
// import Header from "../Header/Header";
// import { fetchApps, fetchAppDetails } from "../../redux/store";

// const AddApps = () => {
//   const dispatch = useDispatch();
//   const [appName, setAppName] = useState("");
//   const [description, setDescription] = useState("");
//   const [checkedAttributes, setCheckedAttributes] = useState([]);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [consumerKey, setConsumerKey] = useState(null);
//   const [selected_apiProduct, setSelectedApiProduct] = useState([]);
//   // const dispatch = useDispatch();
//   // const teamDetails = useSelector((state) => state.teamDetails);
//   // const teamName = teamDetails?.name || "";

//   const appDetailsData = useSelector(
//     (state) => state.appDetailsData.appDetailsData
//   );
//   console.log("appDetailsData", appDetailsData);

//   const teamDetails = useSelector((state) => state.teamDetails);
//   console.log("addapps", teamDetails);

//   const appgroupName = teamDetails ? teamDetails.name : "";
//   console.log("appgroupName", appgroupName);

//   const teamName = appDetailsData ? appDetailsData.appGroup : "";
//   console.log("teamName", teamName);

//   // const appNamee = appDetailsData ? appDetailsData.name : "";

//   // console.log("appNamee", appNamee);

//   const handleCompanyNameChange = (e) => {
//     setAppName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   let fetchedConsumerKey = null;
//   const handleAddApp = async () => {
//     if (!appName.trim()) {
//       alert("Please provide a valid company name.");
//       return;
//     }

//     try {
//       // const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//           },
//           body: JSON.stringify({
//             name: appName,

//             attributes: [
//               {
//                 name: "description",
//                 value: description,
//               },
//             ],
//           }),
//         }
//       );

//       if (response.ok) {
//         //  alert(appName);

//         // alert(description);
//         // alert(serializedApiProduct);
//         dispatch(fetchApps(appgroupName));
//         alert("Appgroup app Created successfully!");
//         //navigate("/apps");
//       } else {
//         alert("Failed to create app");
//       }
//     } catch (error) {
//       alert("An error occurred while creating app ");
//     }
//   };

//   const newAppName = appName;
//   console.log("newAppName", newAppName);

//   const url = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps/${newAppName}`;

//   const headers = {
//     Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//   };

//   async function fetchData() {
//     try {
//       const response = await fetch(url, { headers });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("NewAppData:", responseData);
//         fetchedConsumerKey = responseData.credentials[0].consumerKey; // Assign value here
//         setConsumerKey(fetchedConsumerKey);
//         console.log(fetchedConsumerKey);
//       } else {
//         console.error("Error:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   const handleAddAPIProduct = async (newAppName, selected_apiProduct) => {
//     if (!selected_apiProduct) {
//       alert("Please select an API product.");
//       return;
//     }

//     const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps/${newAppName}/keys/${fetchedConsumerKey}`;
//     const bearerToken = process.env.BEARER_TOKEN;

//     const requestBody = {
//       apiProducts: selected_apiProduct,
//     };

//     try {
//       await axios.post(apiUrl, requestBody, {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       console.log(selected_apiProduct);
//       console.log("API product added successfully");
//       navigate("/apps");
//     } catch (error) {
//       alert("Error adding API product: " + error);
//     }
//   };

//   const handleCombinedSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await handleAddApp();

//       setTimeout(async () => {
//         await fetchData();
//       }, 2000);

//       setTimeout(async () => {
//         if (fetchedConsumerKey !== null) {
//           await handleAddAPIProduct(newAppName, selected_apiProduct);
//         } else {
//           console.log("Consumer key is not available");
//         }
//       }, 3000);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   console.log("selected_apiProduct", selected_apiProduct);

//   const selectedProducts = teamDetails.attributes.find(
//     (attr) => attr.name === "api_product"
//   )?.value;
//   console.log("selected", selectedProducts);
//   // // const selectedAttributes_All = JSON.parse(selectedProducts) || [];
//   // // console.log("selectedProducts", selectedAttributes_All);

//   const api_product = ["api_product", selectedProducts];
//   console.log("api_product", api_product);

//   const array1 = [{ selectedProducts }];
//   console.log("array1", array1);

//   const unserializedData = array1
//     .map((item) => {
//       const regex = /s:\d+:\\\"(.*?)\\\"/g;
//       const matches = item.selectedProducts.match(regex);
//       if (matches) {
//         return matches.map((match) =>
//           match.replace(/\\\\/g, "\\").replace(/s:\d+:\\\"(.*?)\\\"/, "$1")
//         );
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

//   const mergedArray = [...selectedAttributes, ...checkedAttributes];
//   const selected_attribute = Array.from(new Set(mergedArray));

//   const unselected_attributes = filteredData.filter(
//     (attr) => !selected_attribute.includes(attr)
//   );
//   console.log("unselected_attributes", unselected_attributes);

//   // const selected_apiProduct = Array.from(new Set(mergedArray));

//   // console.log("selected_apiProduct", selected_apiProduct);

//   const handleCheckboxChange = (val) => {
//     const updatedSelection = selected_apiProduct.includes(val)
//       ? selected_apiProduct.filter((item) => item !== val)
//       : [...selected_apiProduct, val];
//     setSelectedApiProduct(updatedSelection);
//   };

//   // const formatted_selected_attribute = selected_attribute.map((attr) => ({
//   //   [attr]: attr,
//   // }));
//   // console.log("formatted_selected_attribute", formatted_selected_attribute);
//   // const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
//   //   [attr]: "0",
//   // }));

//   // console.log("formatted_unselected_attribute", formatted_unselected_attribute);
//   // const final_Output = [
//   //   ...formatted_selected_attribute,
//   //   ...formatted_unselected_attribute,
//   // ];

//   // const parsed_Final_Output1 = JSON.parse(
//   //   JSON.stringify(final_Output, null, 2)
//   // );

//   // const serializeData = parsed_Final_Output1.map((item) => {
//   //   const key = Object.keys(item)[0];
//   //   const value = item[key];
//   //   const serializedKey = `s:${key.length}:\\"${key}\\"`;
//   //   const serializedValue = `s:${value.length}:\\"${value}\\"`;
//   //   return `${serializedKey}:${serializedValue}`;
//   // });
//   // console.log("serializeData", serializeData);
//   // const serializedApiProduct22 = serializeData.join(",");
//   // console.log("serializedApiProduct22", serializedApiProduct22);

//   return (
//     <div>
//       <Header />
//       <>
//         <div
//           className="dialog-off-canvas-main-canvas"
//           data-off-canvas-main-canvas=""
//         >
//           <div className="page">
//             <header className="page__header">
//               <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=starbucks_tabs&args%5B1%5D=full&args%5B2%5D&token=MEkI12DtyJlNIxuOGvgD3VFvH_cZWONfyjuDDe873eY" />
//             </header>
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div
//                     data-contextual-id="block:block=pagetitle:langcode=en"
//                     data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
//                   />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add appgroups app
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
//                       <div
//                         data-drupal-messages-fallback=""
//                         className="hidden"
//                       />

//                       <form
//                         className="team-app-add-for-team-form team-app-form apigee-edge--form"
//                         //onSubmit={{handleAddApp,handleAddAPIProduct}}
//                         // onSubmit={handleAddApp,handleConfirmClick}
//                         //onSubmit={handleAddApp}
//                         onSubmit={handleCombinedSubmit}
//                       >
//                         <div
//                           className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper"
//                           data-drupal-selector="edit-displayname-wrapper"
//                           id="edit-displayname-wrapper"
//                         >
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label
//                               htmlFor="edit-displayname-0-value"
//                               className="js-form-required form-required"
//                             >
//                               Appgroups App name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               id="appName"
//                               value={appName}
//                               onChange={handleCompanyNameChange}
//                               size={60}
//                               maxLength={255}
//                               placeholder=""
//                               required="required"
//                               aria-required="true"
//                             />
//                             <span className="field-suffix">
//                               <small id="edit-displayname-0-value-machine-name-suffix">
//                                 &nbsp;
//                               </small>
//                             </span>
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
//                               title=""
//                               readOnly="readonly"
//                               pattern="^([0-9a-zA-Z])+(:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
//                               type="text"
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
//                         <div
//                           className="field--type-string-long field--name-description field--widget-string-textarea js-form-wrapper form-wrapper"
//                           id="edit-description-wrapper"
//                         >
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-description-0-value js-form-item-description-0-value form-group">
//                             <label htmlFor="edit-description-0-value">
//                               Description
//                             </label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               name=""
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                               defaultValue={""}
//                               value={description}
//                               required="required"
//                               onChange={handleDescriptionChange}
//                             />
//                           </div>
//                         </div>
//                         <fieldset className="fieldgroup form-composite required js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                           <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                             <span className="fieldset-legend js-form-required form-required">
//                               APIs
//                             </span>
//                             <button className="btn-link">
//                               <i className="fas fa-chevron-down d-md-none" />
//                             </button>
//                           </legend>
//                           <div className="p-4 fieldset-wrapper">
//                             <div
//                               id="edit-api-products"
//                               className="form-checkboxes"
//                             >
//                               <div className="js-form-item form-item js-form-type-checkbox form-item-api-products-ucp-master js-form-item-api-products-ucp-master form-check">
//                                 <input
//                                   data-drupal-selector="edit-api-products-ucp-master"
//                                   type="checkbox"
//                                   id="edit-api-products-ucp-master"
//                                   name="api_products[ucp-master]"
//                                   defaultValue="ucp-master"
//                                   className="form-checkbox form-check-input"
//                                 />

//                                 {filteredData && filteredData.length > 0 && (
//                                   <div className="p-4 fieldset-wrapper">
//                                     <div className="form-checkboxes">
//                                       {filteredData.map((val, valIndex) => (
//                                         <div
//                                           key={valIndex}
//                                           className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                         >
//                                           <ul style={{ padding: 0, margin: 0 }}>
//                                             <li
//                                               key={valIndex}
//                                               style={{ listStyle: "none" }}
//                                             >
//                                               <input
//                                                 type="checkbox"
//                                                 value={val}
//                                                 style={{ marginRight: "0.5em" }}
//                                                 checked={selected_apiProduct.includes(
//                                                   val
//                                                 )}
//                                                 onChange={() =>
//                                                   handleCheckboxChange(val)
//                                                 }
//                                               />
//                                               {val}
//                                             </li>
//                                           </ul>
//                                         </div>
//                                       ))}
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </fieldset>
//                         <div className="form-actions js-form-wrapper form-wrapper">
//                           <button
//                             type="submit"
//                             className="button button--primary js-form-submit form-submit btn btn-primary"
//                           >
//                             Add appgroup app
//                           </button>

//                           <Link to="/apps" className="btn btn-outline-primary">
//                             Cancel
//                           </Link>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default AddApps;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, navigate } from "gatsby";
import Header from "../../../components/Header/Header";
import { fetchApps, fetchAppDetails } from "../../../redux/store";

const AddApps = () => {
  const dispatch = useDispatch();
  const [appName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [checkedAttributes, setCheckedAttributes] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [consumerKey, setConsumerKey] = useState(null);
  const [selected_apiProduct, setSelectedApiProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const dispatch = useDispatch();
  // const teamDetails = useSelector((state) => state.teamDetails);
  // const teamName = teamDetails?.name || "";

  const appDetailsData = useSelector(
    (state) => state.appDetailsData.appDetailsData
  );
  console.log("appDetailsData", appDetailsData);

  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("addapps", teamDetails);

  const appgroupName = teamDetails ? teamDetails.name : "";
  console.log("appgroupName", appgroupName);

  const teamName = appDetailsData ? appDetailsData.appGroup : "";
  console.log("teamName", teamName);

  // const appNamee = appDetailsData ? appDetailsData.name : "";

  // console.log("appNamee", appNamee);

  // const handleCompanyNameChange = (e) => {
  //   setAppName(e.target.value);
  // };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const [error, setError] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState("");

  // const handleCompanyNameChange = (e) => {
  //   const inputAppName = e.target.value;

  //   // Define a regular expression pattern for validation
  //   //const pattern = /^[a-z0-9]+-[a-z0-9]+-app$/;

  //   const pattern = new RegExp(`^${teamName}-[a-z0-9]+-[a-z0-9]+-app$`);

  //   if (!pattern.test(inputAppName)) {
  //     setError(
  //       'Use the "<companyname or groupname>-<appname>-app" format. Examples: ' +
  //         'For Starbucks use group name: "ucpc-digitalorder-app". ' +
  //         'For Non Starbucks use company name: "yourcompanyname-helpdesk-app". ' +
  //         "Only lowercase alphanumeric and dashes are allowed."
  //     );
  //   } else {
  //     setError("");
  //   }

  //   setAppName(inputAppName);
  // };

  const pattern = new RegExp(`^${appgroupName}+-[a-z0-9]+-app$`);
  const handleCompanyNameChange = (e) => {
    const inputAppName = e.target.value;
    console.log("handleCompanyNameChange", inputAppName);

    // Define a regular expression pattern for validation

    const appgroupName = teamDetails ? teamDetails.name : "";
    console.log("teamName", appgroupName);
    const pattern = new RegExp(`^${appgroupName}+-[a-z0-9]+-app$`);

    if (!pattern.test(inputAppName)) {
      setError(
        'Use the "<companyname or groupname>-<appname>-app" format. Examples: ' +
          'For Starbucks use group name: "ucpc-digitalorder-app". ' +
          'For Non Starbucks use company name: "yourcompanyname-helpdesk-app". ' +
          "Only lowercase alphanumeric and dashes are allowed."
      );
      setIsErrorVisible(true); // Show the error message
    } else {
      setError("");
      setIsErrorVisible(false); // Hide the error message
    }
    setAppName(inputAppName);
  };

  const clearError = () => {
    setError("");
  };

  let fetchedConsumerKey = null;
  // const handleAddApp = async () => {
  //   if (!appName.trim()) {
  //     alert("Please provide a valid company name.");
  //     return;
  //   }

  //   try {
  //     // const serializedApiProduct = serializeData.join(",");
  //     const response = await fetch(
  //       `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  //         },
  //         body: JSON.stringify({
  //           name: appName,

  //           attributes: [
  //             {
  //               name: "description",
  //               value: description,
  //             },
  //           ],
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       //  alert(appName);

  //       // alert(description);
  //       // alert(serializedApiProduct);
  //       dispatch(fetchApps(appgroupName));

  //       alert("Appgroup app Created successfully!");
  //       //navigate("/apps");
  //     } else {
  //       alert("Failed to create app");
  //     }
  //   } catch (error) {
  //     alert("An error occurred while creating app ");
  //   }
  // };

  const handleAddApp = async () => {
    if (!appName.trim() || error) {
      alert("Please provide a valid company name.");
      return;
    }

    try {
      // Convert the given timestamp (1693575820130) to Date objects
      const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
      const response = await fetch(
        `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
          body: JSON.stringify({
            name: appName,
            attributes: [
              {
                name: "description",
                value: description,
              },
            ],
            keyExpiresIn: oneYearInMilliseconds,
          }),
        }
      );

      if (response.ok) {
        dispatch(fetchApps(appgroupName));
        alert("Appgroup app created successfully!");
      } else {
        alert("Failed to create app");
      }
    } catch (error) {
      alert("An error occurred while creating app");
    }
  };

  const newAppName = appName;
  console.log("newAppName", newAppName);

  const url = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps/${newAppName}`;

  const headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };

  async function fetchData() {
    try {
      const response = await fetch(url, { headers });

      if (response.ok) {
        const responseData = await response.json();
        console.log("NewAppData:", responseData);
        fetchedConsumerKey = responseData.credentials[0].consumerKey; // Assign value here
        setConsumerKey(fetchedConsumerKey);
        console.log(fetchedConsumerKey);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleAddAPIProduct = async (newAppName, selected_apiProduct) => {
    if (!selected_apiProduct) {
      alert("Please select an API product.");
      return;
    }

    const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${appgroupName}/apps/${newAppName}/keys/${fetchedConsumerKey}`;
    const bearerToken = process.env.BEARER_TOKEN;

    const requestBody = {
      apiProducts: selected_apiProduct,
    };

    try {
      await axios.post(apiUrl, requestBody, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      console.log(selected_apiProduct);
      console.log("API product added successfully");
      navigate(`/${appgroupName}/apps`);
    } catch (error) {
      alert("Error adding API product: " + error);
    }
  };

  const handleCombinedSubmit = async (event) => {
    event.preventDefault();

    try {
      await handleAddApp();

      setTimeout(async () => {
        setIsLoading(true);
        await fetchData();
      }, 2000);

      setTimeout(async () => {
        if (fetchedConsumerKey !== null) {
          await handleAddAPIProduct(newAppName, selected_apiProduct);
        } else {
          console.log("Consumer key is not available");
        }
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  console.log("selected_apiProduct", selected_apiProduct);

  const selectedProducts = teamDetails.attributes.find(
    (attr) => attr.name === "api_product"
  )?.value;
  console.log("selected", selectedProducts);
  // // const selectedAttributes_All = JSON.parse(selectedProducts) || [];
  // // console.log("selectedProducts", selectedAttributes_All);

  const api_product = ["api_product", selectedProducts];
  console.log("api_product", api_product);

  const array1 = [{ selectedProducts }];
  console.log("array1", array1);

  const unserializedData = array1
    .map((item) => {
      const regex = /s:\d+:\\\"(.*?)\\\"/g;
      const matches = item.selectedProducts.match(regex);
      if (matches) {
        return matches.map((match) =>
          match.replace(/\\\\/g, "\\").replace(/s:\d+:\\\"(.*?)\\\"/, "$1")
        );
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

  const mergedArray = [...selectedAttributes, ...checkedAttributes];
  const selected_attribute = Array.from(new Set(mergedArray));

  const unselected_attributes = filteredData.filter(
    (attr) => !selected_attribute.includes(attr)
  );
  console.log("unselected_attributes", unselected_attributes);

  // const selected_apiProduct = Array.from(new Set(mergedArray));

  // console.log("selected_apiProduct", selected_apiProduct);

  const handleCheckboxChange = (val) => {
    const updatedSelection = selected_apiProduct.includes(val)
      ? selected_apiProduct.filter((item) => item !== val)
      : [...selected_apiProduct, val];
    setSelectedApiProduct(updatedSelection);
  };

  // const formatted_selected_attribute = selected_attribute.map((attr) => ({
  //   [attr]: attr,
  // }));
  // console.log("formatted_selected_attribute", formatted_selected_attribute);
  // const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
  //   [attr]: "0",
  // }));

  // console.log("formatted_unselected_attribute", formatted_unselected_attribute);
  // const final_Output = [
  //   ...formatted_selected_attribute,
  //   ...formatted_unselected_attribute,
  // ];

  // const parsed_Final_Output1 = JSON.parse(
  //   JSON.stringify(final_Output, null, 2)
  // );

  // const serializeData = parsed_Final_Output1.map((item) => {
  //   const key = Object.keys(item)[0];
  //   const value = item[key];
  //   const serializedKey = `s:${key.length}:\\"${key}\\"`;
  //   const serializedValue = `s:${value.length}:\\"${value}\\"`;
  //   return `${serializedKey}:${serializedValue}`;
  // });
  // console.log("serializeData", serializeData);
  // const serializedApiProduct22 = serializeData.join(",");
  // console.log("serializedApiProduct22", serializedApiProduct22);

  return (
    <div style={{ marginTop: "120px" }}>
      <Header />
      <>
        <div
          className="dialog-off-canvas-main-canvas"
          data-off-canvas-main-canvas=""
        >
          <div className="page">
            <header className="page__header">
              <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=starbucks_tabs&args%5B1%5D=full&args%5B2%5D&token=MEkI12DtyJlNIxuOGvgD3VFvH_cZWONfyjuDDe873eY" />
            </header>

            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h3 className="js-quickedit-page-title page__title mb-0">
                      Add appgroups app
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="page__content-above">
  <div className="container-fluid px-0">
    <div className="container">
      {isErrorVisible && (
        <div className="error-message alert alert-danger d-flex justify-content-between align-items-center">
          <span>{error}</span>
          <button
            className="close-button btn btn-link"
            onClick={() => setIsErrorVisible(false)}
            style={{ position: 'absolute', top: '0', right: '0' }}
          >
            &#x2716;
          </button>
        </div>
      )}
    </div>
  </div>
</div>

            <main className="main" role="main">
              <div className="page-layout-sidebar-default">
                <div className="container py-2">
                  <div className="row">
                    <div className="page__content col-md">
                      <div
                        data-drupal-messages-fallback=""
                        className="hidden"
                      />
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        <form
                          className="team-app-add-for-team-form team-app-form apigee-edge--form"
                          //onSubmit={{handleAddApp,handleAddAPIProduct}}
                          // onSubmit={handleAddApp,handleConfirmClick}
                          //onSubmit={handleAddApp}
                          onSubmit={handleCombinedSubmit}
                        >
                          <div
                            className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper"
                            data-drupal-selector="edit-displayname-wrapper"
                            id="edit-displayname-wrapper"
                          >
                            <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
                              <label
                                htmlFor="edit-displayname-0-value"
                                className="js-form-required form-required"
                              >
                                Appgroups App name
                                <sup>
                                  <i
                                    className="fas fa-asterisk text-danger form-required__indicator"
                                    style={{ fontSize: "0.7em" }}
                                  />
                                </sup>
                              </label>
                              <input
                                className={`js-text-full text-full required form-control ${
                                  error ? "is-invalid" : ""
                                }`}
                                type="text"
                                id="appName"
                                value={appName}
                                onChange={handleCompanyNameChange}
                                size={60}
                                maxLength={255}
                                placeholder=""
                                required="required"
                                aria-required="true"
                              />
                              {error && (
                                <div className="invalid-feedback">{error}</div>
                              )}
                              <span className="field-suffix">
                                <small id="edit-displayname-0-value-machine-name-suffix">
                                  &nbsp;
                                </small>
                              </span>
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
                                title=""
                                readOnly="readonly"
                                pattern="^([0-9a-zA-Z])+(:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
                                type="text"
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
                          <div
                            className="field--type-string-long field--name-description field--widget-string-textarea js-form-wrapper form-wrapper"
                            id="edit-description-wrapper"
                          >
                            <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-description-0-value js-form-item-description-0-value form-group">
                              <label htmlFor="edit-description-0-value">
                                Description
                              </label>
                              <textarea
                                className="js-text-full text-full form-textarea form-control"
                                name=""
                                rows={5}
                                cols={60}
                                placeholder=""
                                defaultValue={""}
                                value={description}
                                required="required"
                                onChange={handleDescriptionChange}
                              />
                            </div>
                          </div>
                          <fieldset className="fieldgroup form-composite required js-form-item form-item js-form-wrapper form-wrapper border mb-3">
                            <legend className="float-left py-2 px-4 mb-0 border-bottom">
                              <h5 className="fieldset-legend js-form-required form-required">
                                Api Products
                              </h5>
                              {/* <button className="btn-link">
                                <i className="fas fa-chevron-down d-md-none" />
                              </button> */}
                            </legend>
                            <div className="p-4 fieldset-wrapper">
                              <div className="form-checkboxes">
                                <div className="js-form-item form-item js-form-type-checkbox form-item-api-products-ucp-master js-form-item-api-products-ucp-master form-check p-0 ">
                                  <input
                                    style={{ marginRight: "0.5em" }}
                                    type="checkbox"
                                    id="edit-api-products-ucp-master"
                                    name="api_products[ucp-master]"
                                    defaultValue="ucp-master"
                                    className="form-checkbox form-check-input"
                                  />

                                  {filteredData && filteredData.length > 0 && (
                                    <div className="p-4 fieldset-wrapper">
                                      <div className="form-checkboxes">
                                        {filteredData.map((val, valIndex) => (
                                          <div
                                            key={valIndex}
                                            className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
                                          >
                                            <ul
                                              style={{ padding: 0, margin: 0 }}
                                            >
                                              <li
                                                key={valIndex}
                                                style={{ listStyle: "none" }}
                                              >
                                                <input
                                                  type="checkbox"
                                                  value={val}
                                                  style={{
                                                    marginRight: "0.5em",
                                                  }}
                                                  checked={selected_apiProduct.includes(
                                                    val
                                                  )}
                                                  onChange={() =>
                                                    handleCheckboxChange(val)
                                                  }
                                                />
                                                {val}
                                              </li>
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </fieldset>
                          <div className="form-actions js-form-wrapper form-wrapper">
                            <button
                              type="submit"
                              className="all-buttons-color text-white js-form-submit form-submit btn btn-md"
                            >
                              Add appgroup app
                            </button>

                            <Link
                              to="/apps"
                              className="btn btn-outline-primary btn-md"
                            >
                              Cancel
                            </Link>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddApps;
