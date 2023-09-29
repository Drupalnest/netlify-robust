// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import { Link, navigate } from "gatsby";
// import Layout from "../Layout";
// import { useDispatch, useSelector } from "react-redux";

// const AddTeam = () => {
//   const dispatch = useDispatch();
//   const apiproducts = useSelector((state) => state.apiProducts);
//   console.log("apiproducts", apiproducts);
//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!bearerToken) {
//       console.error(
//         "Bearer token not found. Make sure to set bearerToken."
//       );
//       return;
//     }

//     const apiUrl =
//       "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";

//     const requestBody = {
//       name: companyName,
//       displayName:displayName,

//     };

//     try {
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 201) {
//         alert("Team created successfully!");
//         navigate("/");
//       } else {
//         console.error(
//           "Failed to create company. Response status:",
//           response.status
//         );
//       }
//     } catch (error) {
//       console.error("An error occurred while creating the company:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add team
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <main className="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <form
//                         className="team-add-form team-form"
//                         method="post"
//                         onSubmit={handleSubmit}
//                         acceptCharset="UTF-8"
//                       >
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Team name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               defaultValue=""
//                               size={60}
//                               maxLength={255}
//                               placeholder=""
//                               required="required"
//                               aria-required="true"
//                               id="companyName"
//                               value={companyName}
//                               onChange={(e) => setCompanyName(e.target.value)}
//                             />
//                             <span className="field-suffix">
//                               <small>&nbsp;</small>
//                             </span>
//                             <small className="description form-text text-muted">
//                               Only lowercase alphanumeric and dashes are
//                               allowed.
//                             </small>
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                             <label>Description</label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                             />
//                           </div>
//                         </div>

//                         <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                           <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                             <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                               <span className="fieldset-legend">
//                                 Team product
//                               </span>
//                               <button className="btn-link">
//                                 <i className="fas fa-chevron-down d-md-none" />
//                               </button>
//                             </legend>

//                             <div className="p-4 fieldset-wrapper">
//                               <div className="form-checkboxes">
//                                 {apiproducts && apiproducts.length > 0 ? (
//                                   <ul style={{ padding: 0, margin: 0 }}>
//                                     {apiproducts.map((product, index) => (
//                                       <li
//                                         key={index}
//                                         style={{ listStyle: "none" }}
//                                       >
//                                         <label>
//                                           <input
//                                             type="checkbox"
//                                             value={product.name}
//                                             style={{ marginRight: "0.5em" }}
//                                           />
//                                           {product}
//                                         </label>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 ) : (
//                                   <p>No API products available.</p>
//                                 )}
//                               </div>
//                             </div>
//                           </fieldset>
//                         </div>
//                         <div className="form-actions js-form-wrapper form-wrapper">
//                           <button
//                             className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                             type="submit"
//                           >
//                             Add team
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
//         {/* {isSuccessAlert && alert("Display name updated successfully!")} */}
//       </div>
//     </Layout>
//   );
// };

// export default AddTeam;

// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import { Link, navigate } from "gatsby";

// const AddTeam = () => {
//   const [companyName, setCompanyName] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!bearerToken) {
//       console.error(
//         "Bearer token not found. Make sure to set bearerToken."
//       );
//       return;
//     }

//     const apiUrl =
//       "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";

//     const requestBody = {
//       name: companyName,
//     };

//     try {
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 201) {
//         alert("Team created successfully!");

//         // Dispatch your Redux action here to update the teamDetails state

//         navigate("/");
//       } else {
//         console.error(
//           "Failed to create company. Response status:",
//           response.status
//         );
//       }
//     } catch (error) {
//       console.error("An error occurred while creating the company:", error);
//     }
//   };

//   const storedSerializedData =
//     JSON.parse(localStorage.getItem("serializedData")) || [];

//   const unserializedData = storedSerializedData
//     .map((item) => {
//       const regex = /s:\d+:\\\"(.*?)\\\"/g;
//       const matches = item.value.match(regex);
//       if (matches) {
//         return matches.map((match) =>
//           match.replace(/\\\\/g, "\\").replace(/s:\d+:\\\"(.*?)\\\"/, "$1")
//         );
//       }
//       return [];
//     })
//     .flat();

//   const uniqueAttributes = Array.from(new Set(unserializedData));

//   return (
//     <div>
//       <Header />

//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div />
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     Add team
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <main className="main">
//             <a id="main-content" tabIndex={-1} />
//             <div className="page-layout-sidebar-default">
//               <div className="container py-5">
//                 <div className="row">
//                   <div className="page__content col-md">
//                     <form
//                       className="team-add-form team-form"
//                       method="post"
//                       onSubmit={handleSubmit}
//                       acceptCharset="UTF-8"
//                     >
//                       <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                         <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                           <label className="js-form-required form-required">
//                             Team name
//                             <i className="fas fa-asterisk text-danger form-required__indicator" />
//                           </label>
//                           <input
//                             className="js-text-full text-full required form-control"
//                             type="text"
//                             defaultValue=""
//                             size={60}
//                             maxLength={255}
//                             placeholder=""
//                             required="required"
//                             aria-required="true"
//                             id="companyName"
//                             value={companyName}
//                             onChange={(e) => setCompanyName(e.target.value)}
//                           />
//                           <span className="field-suffix">
//                             <small>&nbsp;</small>
//                           </span>
//                           <small className="description form-text text-muted">
//                             Only lowercase alphanumeric and dashes are allowed.
//                           </small>
//                         </div>
//                       </div>
//                       <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                         <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                           <label>Description</label>
//                           <textarea
//                             className="js-text-full text-full form-textarea form-control"
//                             rows={5}
//                             cols={60}
//                             placeholder=""
//                           />
//                         </div>
//                       </div>

//                       <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                         <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                           <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                             <span className="fieldset-legend">
//                               Team product
//                             </span>
//                             <button className="btn-link">
//                               <i className="fas fa-chevron-down d-md-none" />
//                             </button>
//                           </legend>

//                           {storedSerializedData &&
//                             storedSerializedData.length > 0 && ( // Check if serializedData is not empty
//                               <div className="p-4 fieldset-wrapper">
//                                 <div className="form-checkboxes">

//                                       return (
//                                         <div

//                                           className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                         >
//                                           <ul style={{ padding: 0, margin: 0 }}>
//                                             {uniqueAttributes.map(
//                                               (val, valIndex) => (
//                                                 <li
//                                                   key={valIndex}
//                                                   style={{ listStyle: "none" }}
//                                                 >
//                                                   <input
//                                                     type="checkbox"
//                                                     value={val}
//                                                     style={{
//                                                       marginRight: "0.5em",
//                                                     }}
//                                                   />
//                                                   {val}
//                                                 </li>
//                                               )
//                                             )}
//                                           </ul>
//                                         </div>
//                                       );

//                                 </div>
//                               </div>
//                             )}
//                         </fieldset>
//                       </div>
//                       <div class="form-actions js-form-wrapper form-wrapper">
//                         <button
//                           class="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                           type="submit"
//                         >
//                           Add team
//                         </button>

//                         <Link to="/" className="btn btn-outline-primary">
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
//       {/* {isSuccessAlert && alert("Display name updated successfully!")} */}
//     </div>
//   );
// };

// export default AddTeam;

// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../Header/Header";
// import { Link, navigate } from "gatsby";
// import Layout from "../Layout";
// import { useDispatch, useSelector } from "react-redux";

// const AddTeam = () => {
//   const dispatch = useDispatch();
//   const apiproducts = useSelector((state) => state.apiProducts);
//   console.log("apiproducts", apiproducts);
//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!bearerToken) {
//       console.error(
//         "Bearer token not found. Make sure to set bearerToken."
//       );
//       return;
//     }

//     const apiUrl =
//       "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";

//     const requestBody = {
//       name: companyName,
//       displayName:displayName,
//       attributes: [
//         {
//           name: "api_product",
//           value: serializedApiProduct,
//         },

//         {
//           name: "description",
//           value: description,
//         },
//       ],
//     };

//     try {
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 201) {
//         alert("Team created successfully!");
//         navigate("/");
//       } else {
//         console.error(
//           "Failed to create company. Response status:",
//           response.status
//         );
//       }
//     } catch (error) {
//       console.error("An error occurred while creating the company:", error);
//     }
//   };
//   const updateSelectedAttributes = (updatedAttributes) => {
//     setSelectedAttributes(updatedAttributes);
//     localStorage.setItem(
//       `selectedAttributes_${teamDetails.name}`,
//       JSON.stringify(updatedAttributes)
//     );
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
// console.log("serializeData",serializeData)
//   const serializedApiProduct22 = serializeData.join(",");
//   console.log("serializedApiProduct22",serializedApiProduct22)

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add team
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <main className="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <form
//                         className="team-add-form team-form"
//                         method="post"
//                         onSubmit={handleSubmit}
//                         acceptCharset="UTF-8"
//                       >
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Team name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               defaultValue=""
//                               size={60}
//                               maxLength={255}
//                               placeholder=""
//                               required="required"
//                               aria-required="true"
//                               id="companyName"
//                               value={companyName}
//                               onChange={(e) => setCompanyName(e.target.value)}
//                             />
//                             <span className="field-suffix">
//                               <small>&nbsp;</small>
//                             </span>
//                             <small className="description form-text text-muted">
//                               Only lowercase alphanumeric and dashes are
//                               allowed.
//                             </small>
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                             <label>Description</label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                             />
//                           </div>
//                         </div>

//                         <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                           <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                             <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                               <span className="fieldset-legend">
//                                 Team product
//                               </span>
//                               <button className="btn-link">
//                                 <i className="fas fa-chevron-down d-md-none" />
//                               </button>
//                             </legend>

//                             <div className="p-4 fieldset-wrapper">
//                               <div className="form-checkboxes">
//                                 {apiproducts && apiproducts.length > 0 ? (
//                                   <ul style={{ padding: 0, margin: 0 }}>
//                                     {apiproducts.map((product, index) => (
//                                       <li
//                                         key={index}
//                                         style={{ listStyle: "none" }}
//                                       >
//                                         <label>
//                                           <input
//                                             type="checkbox"
//                                             value={product.name}
//                                             style={{ marginRight: "0.5em" }}
//                                           />
//                                           {product}
//                                         </label>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 ) : (
//                                   <p>No API products available.</p>
//                                 )}
//                               </div>
//                             </div>
//                           </fieldset>
//                         </div>
//                         <div className="form-actions js-form-wrapper form-wrapper">
//                           <button
//                             className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                             type="submit"
//                           >
//                             Add team
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
//         {/* {isSuccessAlert && alert("Display name updated successfully!")} */}
//       </div>
//     </Layout>
//   );
// };

// export default AddTeam;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import { Link } from "gatsby";
// // import { fetchApiProducts } from "../../redux/store"; // Import your fetchApiProducts action

// const AddTeam = () => {
//   const dispatch = useDispatch();
//   const apiproducts = useSelector((state) => state.apiProducts);
//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [checkedAttributes, setCheckedAttributes] = useState([]);

//   const handleCompanyNameChange = (e) => {
//     setCompanyName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleAttributeChange = (attributeValue) => {
//     setSelectedAttributes((prevAttributes) => {
//       if (prevAttributes.includes(attributeValue)) {
//         return prevAttributes.filter((attr) => attr !== attributeValue);
//       } else {
//         return [...prevAttributes, attributeValue];
//       }
//     });
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

//   const unselected_attributes = apiproducts.filter(
//     (attr) => !selectedAttributes.includes(attr)
//   );

//   console.log("Selected Attributes:", selectedAttributes);
//   console.log("Unselected Attributes:", unselected_attributes);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!bearerToken) {
//       console.error(
//         "Bearer token not found. Make sure to set bearerToken."
//       );
//       return;
//     }

//     const apiUrl =
//       "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";

//     const attributes = [
//       {
//         name: "api_product",
//         value: selectedAttributes.join(","),
//       },
//       {
//         name: "description",
//         value: description,
//       },
//     ];

//     const requestBody = {
//       name: companyName,
//       displayName: displayName,
//       attributes: attributes,
//     };

//     try {
//       alert(requestBody)
//       const response = await axios.post(apiUrl, requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 201) {
//         alert("Team created successfully!");
//         // You might want to navigate to a different page after successful creation
//       } else {
//         console.error(
//           "Failed to create company. Response status:",
//           response.status
//         );
//       }
//     } catch (error) {
//       console.error("An error occurred while creating the company:", error);
//     }
//   };

//   // const handleAttributeChange = (attributeValue) => {
//   //   setSelectedAttributes((prevAttributes) => {
//   //     if (prevAttributes.includes(attributeValue)) {
//   //       return prevAttributes.filter((attr) => attr !== attributeValue);
//   //     } else {
//   //       return [...prevAttributes, attributeValue];
//   //     }
//   //   });
//   // };

//   // const handleCheckboxChange = (attribute) => {
//   //   setCheckedAttributes((prevChecked) => {
//   //     if (prevChecked.includes(attribute)) {
//   //       return prevChecked.filter((attr) => attr !== attribute);
//   //     } else {
//   //       return [...prevChecked, attribute];
//   //     }
//   //   });
//   // };

//   // const mergedArray = [...selectedAttributes];
//   // const selected_attribute = Array.from(new Set(mergedArray));

//   // const unselected_attributes = apiproducts.filter(
//   //   (attr) => !selected_attribute.includes(attr)
//   // );
//   // console.log("unselected_attributes", unselected_attributes);

// //   const formatted_selected_attribute = selected_attribute.map((attr) => ({
// //     [attr]: attr,
// //   }));
// //   console.log("formatted_selected_attribute", formatted_selected_attribute);
// //   const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
// //     [attr]: "0",
// //   }));

// //   console.log("formatted_unselected_attribute", formatted_unselected_attribute);
// //   const final_Output = [
// //     ...formatted_selected_attribute,
// //     ...formatted_unselected_attribute,
// //   ];

// //   const parsed_Final_Output1 = JSON.parse(
// //     JSON.stringify(final_Output, null, 2)
// //   );

// //   const serializeData = parsed_Final_Output1.map((item) => {
// //     const key = Object.keys(item)[0];
// //     const value = item[key];
// //     const serializedKey = `s:${key.length}:\\"${key}\\"`;
// //     const serializedValue = `s:${value.length}:\\"${value}\\"`;
// //     return `${serializedKey}:${serializedValue}`;
// //   });
// // console.log("serializeData",serializeData)
// //   const serializedApiProduct22 = serializeData.join(",");
// //   console.log("serializedApiProduct22",serializedApiProduct22)

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add team
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <main className="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <form
//                         className="team-add-form team-form"
//                         method="post"
//                         onSubmit={handleSubmit}
//                         acceptCharset="UTF-8"
//                       >
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Team name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               defaultValue=""
//                               size={60}
//                               maxLength={255}
//                               placeholder=""
//                               required="required"
//                               aria-required="true"
//                               id="companyName"
//                               value={companyName}
//                               onChange={(e) => setCompanyName(e.target.value)}
//                             />
//                             <span className="field-suffix">
//                               <small>&nbsp;</small>
//                             </span>
//                             <small className="description form-text text-muted">
//                               Only lowercase alphanumeric and dashes are
//                               allowed.
//                             </small>
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                             <label>Description</label>

//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                               value={description}
//                               onChange={(e) => setDescription(e.target.value)}
//                             />
//                           </div>
//                         </div>

//                         <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                           <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                             <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                               <span className="fieldset-legend">
//                                 Team product
//                               </span>
//                               <button className="btn-link">
//                                 <i className="fas fa-chevron-down d-md-none" />
//                               </button>
//                             </legend>

//                             <div className="p-4 fieldset-wrapper">
//                               <div className="form-checkboxes">
//                                 {apiproducts && apiproducts.length > 0 && (
//                               <div className="p-4 fieldset-wrapper">
//                                 <div className="form-checkboxes">
//                                   {/* {apiproducts.map((val, valIndex) => (
//                                     <div
//                                       key={valIndex}
//                                       className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                     >
//                                       <ul style={{ padding: 0, margin: 0 }}>
//                                         <li
//                                           key={valIndex}
//                                           style={{ listStyle: "none" }}
//                                         >
//                                           <input
//                                             type="checkbox"
//                                             value={val}
//                                             style={{ marginRight: "0.5em" }}
//                                             checked={checkedAttributes.includes(
//                                               val
//                                             )}
//                                             onChange={() =>
//                                               handleCheckboxChange(val)
//                                             }
//                                           />
//                                           {val}
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   ))} */}

//                                   {apiproducts.map((val, valIndex) => (
//                             <div
//                               key={valIndex}
//                               className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                             >
//                               <ul style={{ padding: 0, margin: 0 }}>
//                                 <li key={valIndex} style={{ listStyle: "none" }}>
//                                   <input
//                                     type="checkbox"
//                                     value={val}
//                                     style={{ marginRight: "0.5em" }}
//                                     checked={checkedAttributes.includes(val)}
//                                     onChange={() => handleCheckboxChange(val)}
//                                   />
//                                   {val}
//                                 </li>
//                               </ul>
//                             </div>
//                           ))}
//                                 </div>
//                               </div>
//                             )}
//                               </div>
//                             </div>
//                           </fieldset>
//                         </div>
//                         <div className="form-actions js-form-wrapper form-wrapper">
//                           <button
//                             className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                             type="submit"
//                           >
//                             Add team
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
//         {/* {isSuccessAlert && alert("Display name updated successfully!")} */}
//       </div>
//     </Layout>
//   );
// };

// export default AddTeam;

// import React, { useState } from "react";
// import axios from "axios";
// import Layout from "../Layout";
// import { Link } from "gatsby";

// const AddTeam = () => {
//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [checkedAttributes, setCheckedAttributes] = useState([]);
//   const [selectedProductArray, setSelectedProductArray] = useState([]);
//   const [unselectedProductArray, setUnselectedProductArray] = useState([]);

//   const apiproducts = [
//     "Product A",
//     "Product B",
//     "Product C",
//     "Product D",
//     "Product E",
//     // ... other products
//   ];

//   const handleCompanyNameChange = (e) => {
//     setCompanyName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleAttributeChange = (attributeValue) => {
//     setSelectedAttributes((prevAttributes) => {
//       if (prevAttributes.includes(attributeValue)) {
//         return prevAttributes.filter((attr) => attr !== attributeValue);
//       } else {
//         return [...prevAttributes, attributeValue];
//       }
//     });
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

//   const handleProductSelection = (product) => {
//     if (selectedProductArray.includes(product)) {
//       setSelectedProductArray(selectedProductArray.filter((p) => p !== product));
//       setUnselectedProductArray([...unselectedProductArray, product]);
//     } else {
//       setSelectedProductArray([...selectedProductArray, product]);
//       setUnselectedProductArray(unselectedProductArray.filter((p) => p !== product));
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // ... your API URL and token setup

//     const attributes = [
//       {
//         name: "api_product",
//         value: selectedAttributes.join(","),
//       },
//       {
//         name: "description",
//         value: description,
//       },
//     ];

//     const requestBody = {
//       name: companyName,
//       displayName: displayName,
//       attributes: attributes,
//     };

//     try {
//       const response = await axios.post( requestBody, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       });

//       if (response.status === 201) {
//         alert("Team created successfully!");
//         // Redirect to another page or handle success scenario
//       } else {
//         console.error(
//           "Failed to create company. Response status:",
//           response.status
//         );
//       }
//     } catch (error) {
//       console.error("An error occurred while creating the company:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div>
//         {/* ... your layout and HTML structure ... */}
//         <form
//           className="team-add-form team-form"
//           method="post"
//           onSubmit={handleSubmit}
//           acceptCharset="UTF-8"
//         >
//           {/* ... other form fields ... */}
//           <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//             <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//               <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                 <span className="fieldset-legend">Team product</span>
//                 <button className="btn-link">
//                   <i className="fas fa-chevron-down d-md-none" />
//                 </button>
//               </legend>

//               <div className="p-4 fieldset-wrapper">
//                 <div className="form-checkboxes">
//                   {apiproducts.map((val, valIndex) => (
//                     <div
//                       key={valIndex}
//                       className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                     >
//                       <ul style={{ padding: 0, margin: 0 }}>
//                         <li key={valIndex} style={{ listStyle: "none" }}>
//                           <input
//                             type="checkbox"
//                             value={val}
//                             style={{ marginRight: "0.5em" }}
//                             checked={selectedProductArray.includes(val)}
//                             onChange={() => handleProductSelection(val)}
//                           />
//                           {val}
//                         </li>
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//           {/* ... form actions ... */}
//           <div>
//             <p>Selected Products: {selectedProductArray.length}</p>
//             <p>Unselected Products: {unselectedProductArray.length}</p>
//           </div>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default AddTeam;

// import { Link, navigate } from "gatsby";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import {  apiProducts } from "../../redux/store";

// const AddTeam = () => {
//   const dispatch = useDispatch();

//   const apiproducts = useSelector((state) => state.apiProducts);
//   console.log("apiproducts", apiproducts);

//   useEffect(() => {
//     dispatch(apiProducts());
//   }, [dispatch]);

//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [message, setMessage] = useState("");
//   const [checkedAttributes, setCheckedAttributes] = useState([]);

//   const handleCompanyNameChange = (e) => {
//     const inputText = e.target.value;
//     // Convert input text to a suitable company name format
//     const formattedCompanyName = inputText
//       .toLowerCase()
//       .replace(/\s+/g, "-") // Replace spaces with hyphens
//       .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except hyphens

//     setCompanyName(formattedCompanyName);
//   };

//   const handleDisplayNameChange = (e) => {
//     setDisplayName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleAddTeam = async (e) => {
//     e.preventDefault();

//     if (!companyName.trim()) {
//       alert("Please provide a valid company name.");
//       return;
//     }

//     try {
//       const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${bearerToken}`,
//           },
//           body: JSON.stringify({
//             name: companyName,
//             displayName: companyName,
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
//         // alert(companyName);
//         // alert(description);
//         // alert(serializedApiProduct);
//         alert("Team Created successfully!");
//         navigate("/")
//       } else {
//         alert("Failed to create team");
//       }
//     } catch (error) {
//       alert("An error occurred while creating team ");
//     }
//   };

//   // console.log("team name", companyName);

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

//   const unselected_attributes = apiproducts.filter(
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
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <header className="page__header"></header>
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add Team
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <main className="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <div className="hidden" />
//                       <form className="team-form" onSubmit={handleAddTeam}>
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Team name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               value={companyName}
//                               onChange={handleCompanyNameChange}
//                               size={60}
//                               maxLength={255}
//                               required="required"
//                               aria-required="true"
//                             />
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                             <label htmlFor="edit-field-description-0-value">
//                               Description
//                             </label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               value={description}
//                               onChange={handleDescriptionChange}
//                             />
//                           </div>
//                         </div>

//                         <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                           <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                             <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                               <span className="fieldset-legend">
//                                 Team product
//                               </span>
//                               <button className="btn-link">
//                                 <i className="fas fa-chevron-down d-md-none" />
//                               </button>
//                             </legend>

//                             {apiproducts && apiproducts.length > 0 && (
//                               <div className="p-4 fieldset-wrapper">
//                                 <div className="form-checkboxes">
//                                   {apiproducts.map((val, valIndex) => (
//                                     <div
//                                       key={valIndex}
//                                       className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                     >
//                                       <ul style={{ padding: 0, margin: 0 }}>
//                                         <li
//                                           key={valIndex}
//                                           style={{ listStyle: "none" }}
//                                         >
//                                           <input
//                                             type="checkbox"
//                                             value={val}
//                                             style={{ marginRight: "0.5em" }}
//                                             checked={checkedAttributes.includes(
//                                               val
//                                             )}
//                                             onChange={() =>
//                                               handleCheckboxChange(val)
//                                             }
//                                           />
//                                           {val}
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </fieldset>

//                           <div className="form-actions js-form-wrapper form-wrapper">
//                             <button
//                               className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                               onClick={handleAddTeam}
//                             >
//                               Add Team
//                             </button>

//                             <Link to="/" className="btn btn-outline-primary">
//                               Cancel
//                             </Link>
//                           </div>
//                         </div>
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

// export default AddTeam;

// import { Link, navigate } from "gatsby";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import { apiProducts } from "../../redux/store";

// const AddTeam = () => {
//   const dispatch = useDispatch();

//   const apiproducts = useSelector((state) => state.apiProducts);
//   console.log("apiproducts", apiproducts);

//   const apiproduct = apiproducts.apiProduct;
//   console.log("apiproduct", apiproduct);

//   useEffect(() => {
//     dispatch(apiProducts());
//   }, [dispatch]);

//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [message, setMessage] = useState("");
//   const [checkedAttributes, setCheckedAttributes] = useState([]);

//   const handleCompanyNameChange = (e) => {
//     const inputText = e.target.value;
//     // Convert input text to a suitable company name format
//     const formattedCompanyName = inputText
//       .toLowerCase()
//       .replace(/\s+/g, "-") // Replace spaces with hyphens
//       .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except hyphens

//     setCompanyName(formattedCompanyName);
//   };

//   const handleDisplayNameChange = (e) => {
//     setDisplayName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleAddTeam = async (e) => {
//     e.preventDefault();

//     if (!companyName.trim()) {
//       alert("Please provide a valid company name.");
//       return;
//     }

//     try {
//       //const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${bearerToken}`,
//           },
//           body: JSON.stringify({
//             name: companyName,
//             displayName: companyName,
//             attributes: [
//               // {
//               //   name: "api_product",
//               //   value: serializedApiProduct,
//               // },

//               {
//                 name: "description",
//                 value: description,
//               },
//             ],
//           }),
//         }
//       );

//       if (response.ok) {
//         alert(companyName);
//         alert(description);
//         // alert(serializedApiProduct);
//         alert("Appgroup Created successfully!");
//         navigate("/");
//       } else {
//         alert("Failed to create team");
//       }
//     } catch (error) {
//       alert("An error occurred while creating team ");
//     }
//   };

//   console.log("team name", companyName);

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
//   const selected_attribute_names = new Set(mergedArray);

//   const unselected_attributes = apiproduct.filter(
//     (attr) => !selected_attribute_names.has(attr.name)
//   );

//   const formatted_selected_attribute = selected_attribute_names.map(
//     (attrName) => ({
//       [attrName]: attrName,
//     })
//   );

//   const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
//     [attr.name]: "0",
//   }));

//   console.log("formatted_selected_attribute", formatted_selected_attribute);
//   console.log("formatted_unselected_attribute", formatted_unselected_attribute);

//   const final_Output = [
//     ...formatted_unselected_attribute.map((attr) => ({
//       [attr]: attr.toString(),
//     })),
//     ...formatted_unselected_attribute.map((attr) => ({ [attr.name]: "0" })),
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

//   console.log("serializeData", serializeData);

//   // const serializedApiProduct22 = serializeData.join(",");
//   // console.log("serializedApiProduct22", serializedApiProduct22);

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <header className="page__header"></header>
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add Appgroup
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <main className="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <div className="hidden" />
//                       <form className="team-form" onSubmit={handleAddTeam}>
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Appgroup name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               value={companyName}
//                               onChange={handleCompanyNameChange}
//                               size={60}
//                               maxLength={255}
//                               required="required"
//                               aria-required="true"
//                             />
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                             <label htmlFor="edit-field-description-0-value">
//                               Description
//                             </label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               value={description}
//                               onChange={handleDescriptionChange}
//                             />
//                           </div>
//                         </div>

//                         <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                           <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                             <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                               <span className="fieldset-legend">
//                                 Appgroup product
//                               </span>
//                               <button className="btn-link">
//                                 <i className="fas fa-chevron-down d-md-none" />
//                               </button>
//                             </legend>

//                             {apiproduct && apiproduct.length > 0 && (
//                               <div className="p-4 fieldset-wrapper">
//                                 <div className="form-checkboxes">
//                                   {apiproduct.map((item, valIndex) => (
//                                     <div
//                                       key={item.name}
//                                       className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                     >
//                                       <ul style={{ padding: 0, margin: 0 }}>
//                                         <li
//                                           key={item.name}
//                                           style={{ listStyle: "none" }}
//                                         >
//                                           <input
//                                             type="checkbox"
//                                             value={item.name}
//                                             style={{ marginRight: "0.5em" }}
//                                             checked={checkedAttributes.includes(
//                                               item.name
//                                             )}
//                                             onChange={() =>
//                                               handleCheckboxChange(item.name)
//                                             }
//                                           />
//                                           {item.name}
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </fieldset>

//                           <div className="form-actions js-form-wrapper form-wrapper">
//                             <button
//                               className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                               onClick={handleAddTeam}
//                             >
//                               Add Appgroup
//                             </button>

//                             <Link to="/" className="btn btn-outline-primary">
//                               Cancel
//                             </Link>
//                           </div>
//                         </div>
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

// export default AddTeam;

// import { Link, navigate } from "gatsby";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../components/Layout";
// import { apiProducts } from "../redux/store";
// import Cookies from "js-cookie";

// const AddTeam = () => {
//   const dispatch = useDispatch();

//   const myToken = Cookies.get("BEARER_TOKEN");
//   console.log("myToken",myToken)

//   const apiproducts = useSelector((state) => state.apiProducts);
//   const apiproduct = apiproducts.apiProduct;
//   console.log("apiproduct",apiproduct)

//   useEffect(() => {
//     dispatch(apiProducts());
//   }, [dispatch]);

//   const [companyName, setCompanyName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [checkedAttributes, setCheckedAttributes] = useState([]);

//   const admin = JSON.parse(localStorage.getItem("userData"));
//   const adminName = admin.current_user.name;

//   console.log("adminName",adminName)

//   const handleCompanyNameChange = (e) => {
//     const inputText = e.target.value;
//     const formattedCompanyName = inputText
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^a-z0-9-]/g, "");

//     setCompanyName(formattedCompanyName);
//   };

//   const handleDisplayNameChange = (e) => {
//     setDisplayName(e.target.value);
//   };
//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleAddTeam = async (e) => {
//     e.preventDefault();

//     if (!companyName.trim()) {
//       alert("Please provide a valid appgroup name.");
//       return;
//     }

//     if (!description.trim()) {
//       alert("Please provide a description.");
//       return;
//     }

//     try {
//       const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${bearerToken}`,
//           },
//           body: JSON.stringify({
//             name: companyName,
//             displayName: companyName,
//             attributes: [
//               {
//                 name: "api_product",
//                 value: serializedApiProduct,
//               },
//               {
//                 name: "description",
//                 value: description,
//               },
//               {
//                 name: "ADMIN_EMAIL",
//                 value: `${adminName}`,
//               },

//               {
//                 name: "__apigee_reserved__developer_details",
//                 value: `[{\"developer\":\"${adminName}\",\"roles\":[\"admin\"]}]`
//               }

//             ],
//           }),
//         }
//       );

//       if (response.ok) {
//         alert("Appgroup Created successfully!");
//         navigate("/teams");
//       } else {
//         alert("Failed to create appgroup");
//       }
//     } catch (error) {
//       alert("An error occurred while creating appgroup");
//     }
//   };

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

//   // const handleCheckboxChange = (attribute) => {
//   //   setCheckedAttributes((prevChecked) => {
//   //     const newChecked = new Set(prevChecked);
//   //     if (newChecked.has(attribute)) {
//   //       newChecked.delete(attribute);
//   //     } else {
//   //       newChecked.add(attribute);
//   //     }
//   //     return newChecked;
//   //   });
//   // };

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

//   const unselected_attributes = apiproduct
//   ? apiproduct.filter((attr) => !selected_attribute.includes(attr.name))
//   : [];

//   const formatted_selected_attribute = selected_attribute.map(
//     (attrName) => ({
//       [attrName]: attrName,
//     })
//   );

//   const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
//     [attr.name]: "0",
//   }));

//   const final_Output = [
//     ...formatted_selected_attribute,
//     ...formatted_unselected_attribute,
//   ];

//   console.log("final_Output", final_Output);

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
//   console.log("serializeData", serializeData);

//    const serializedApiProduct22 = serializeData.join(",");
//    console.log("serializedApiProduct22",serializedApiProduct22)

//   return (
//     <Layout>
//       <div>
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <header className="page__header"></header>
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Add Appgroup
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <main className="main">
//               <div className="page-layout-sidebar-default">
//                 <div className="container py-5">
//                   <div className="row">
//                     <div className="page__content col-md">
//                       <div className="hidden" />
//                       <form className="team-form" onSubmit={handleAddTeam}>
//                         <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
//                             <label className="js-form-required form-required">
//                               Appgroup name
//                               <i className="fas fa-asterisk text-danger form-required__indicator" />
//                             </label>
//                             <input
//                               className="js-text-full text-full required form-control"
//                               type="text"
//                               value={companyName}
//                               onChange={handleCompanyNameChange}
//                               size={60}
//                               maxLength={255}
//                               required="required"
//                               aria-required="true"
//                             />
//                           </div>
//                         </div>
//                         <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
//                           <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
//                             <label htmlFor="edit-field-description-0-value">
//                               Description
//                             </label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               placeholder=""
//                               value={description}
//                               required="required"
//                               aria-required="true"
//                               onChange={handleDescriptionChange}
//                             />
//                           </div>
//                         </div>

//                         <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
//                           <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                             <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                               <span className="fieldset-legend">
//                                 Appgroup product
//                               </span>
//                               <button className="btn-link">
//                                 <i className="fas fa-chevron-down d-md-none" />
//                               </button>
//                             </legend>

//                             {apiproduct && apiproduct.length > 0 && (
//                               <div className="p-4 fieldset-wrapper">
//                                 <div className="form-checkboxes">
//                                   {apiproduct.map((item, valIndex) => (
//                                     <div
//                                       key={item.name}
//                                       className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                                     >
//                                       <ul style={{ padding: 0, margin: 0 }}>
//                                         <li
//                                           key={item.name}
//                                           style={{ listStyle: "none" }}
//                                         >
//                                           <input
//                                             type="checkbox"
//                                             value={item.name}
//                                             style={{ marginRight: "0.5em" }}
//                                             checked={checkedAttributes.includes(
//                                               item.name
//                                             )}
//                                             onChange={() =>
//                                               handleCheckboxChange(item.name)
//                                             }
//                                           />
//                                           {item.name}
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </div>
//                             )}
//                           </fieldset>

//                           <div className="form-actions js-form-wrapper form-wrapper">
//                             <button
//                               className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary"
//                               onClick={handleAddTeam}
//                             >
//                               Add Appgroup
//                             </button>

//                             <Link to="/teams" className="btn btn-outline-primary">
//                               Cancel
//                             </Link>
//                           </div>
//                         </div>
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

// export default AddTeam;

import { Link, navigate } from "gatsby";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { apiProducts } from "../redux/store";
import Cookies from "js-cookie";
import SuccessToast from "../components/Toast/Success";
import ErrorToast from "../components/Toast/Error";
const bearerToken = Cookies.get("accessToken");

const AddTeam = () => {
  const dispatch = useDispatch();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const myToken = Cookies.get("BEARER_TOKEN");
  console.log("myToken", myToken);

  const apiproducts = useSelector((state) => state.apiProducts);
  const apiproduct = apiproducts.apiProduct;
  console.log("apiproduct", apiproduct);

  useEffect(() => {
    dispatch(apiProducts());
  }, [dispatch]);

  const [companyName, setCompanyName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [checkedAttributes, setCheckedAttributes] = useState([]);

  const admin = JSON.parse(localStorage.getItem("userData"));
  const adminName = admin.current_user.name;

  console.log("adminName", adminName);

  const handleCompanyNameChange = (e) => {
    const inputText = e.target.value;
    const formattedCompanyName = inputText
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    setCompanyName(formattedCompanyName);
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();

    if (!companyName.trim()) {
      alert("Please provide a valid appgroup name.");
      return;
    }

    if (!description.trim()) {
      alert("Please provide a description.");
      return;
    }

    try {
      const serializedApiProduct = serializeData.join(",");
      const response = await fetch(
        "https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerToken}`,
          },
          body: JSON.stringify({
            name: companyName,
            displayName: companyName,
            attributes: [
              {
                name: "api_product",
                value: serializedApiProduct,
              },
              {
                name: "description",
                value: description,
              },
              {
                name: "ADMIN_EMAIL",
                value: `${adminName}`,
              },

              {
                name: "__apigee_reserved__developer_details",
                value: `[{\"developer\":\"${adminName}\",\"roles\":[\"admin\"]}]`,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        console.log("Setting showToast to true");
        //alert("Failed to create appgroup");
        setShowSuccessToast(true);

        navigate("/teams");
      } else {
        setShowErrorToast(true);
        //alert("Failed to create appgroup");
      }
    } catch (error) {
      setShowErrorToast(true);
    }
  };

  const handleAttributeChange = (attributeValue) => {
    setSelectedAttributes((prevAttributes) => {
      if (prevAttributes.includes(attributeValue)) {
        return prevAttributes.filter((attr) => attr !== attributeValue);
      } else {
        return [...prevAttributes, attributeValue];
      }
    });
  };

  const updateSelectedAttributes = (updatedAttributes) => {
    setSelectedAttributes(updatedAttributes);
  };

  // const handleCheckboxChange = (attribute) => {
  //   setCheckedAttributes((prevChecked) => {
  //     const newChecked = new Set(prevChecked);
  //     if (newChecked.has(attribute)) {
  //       newChecked.delete(attribute);
  //     } else {
  //       newChecked.add(attribute);
  //     }
  //     return newChecked;
  //   });
  // };

  const handleCheckboxChange = (attribute) => {
    setCheckedAttributes((prevChecked) => {
      if (prevChecked.includes(attribute)) {
        return prevChecked.filter((attr) => attr !== attribute);
      } else {
        return [...prevChecked, attribute];
      }
    });
  };
  const mergedArray = [...selectedAttributes, ...checkedAttributes];

  const selected_attribute = Array.from(new Set(mergedArray));

  const unselected_attributes = apiproduct
    ? apiproduct.filter((attr) => !selected_attribute.includes(attr.name))
    : [];

  const formatted_selected_attribute = selected_attribute.map((attrName) => ({
    [attrName]: attrName,
  }));

  const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
    [attr.name]: "0",
  }));

  const final_Output = [
    ...formatted_selected_attribute,
    ...formatted_unselected_attribute,
  ];

  console.log("final_Output", final_Output);

  const parsed_Final_Output1 = JSON.parse(
    JSON.stringify(final_Output, null, 2)
  );

  const serializeData = parsed_Final_Output1.map((item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    const serializedKey = `s:${key.length}:\\"${key}\\"`;
    const serializedValue = `s:${value.length}:\\"${value}\\"`;
    return `${serializedKey}:${serializedValue}`;
  });
  console.log("serializeData", serializeData);

  const serializedApiProduct22 = serializeData.join(",");
  console.log("serializedApiProduct22", serializedApiProduct22);

  return (
    <Layout>
      <div style={{ marginTop: "110px" }}>
        <div className="  bg-lighter py-4">
          <div className="container">
            <h3>Add Appgroup</h3>
          </div>
        </div>

        <div>
          <div className="container py-2">
            <div className="row">
              <div className="page__content col-md">
                <form className="team-form" onSubmit={handleAddTeam}>
                  <div className="form-item form-item-displayname-0-value form-group">
                    <label className="js-form-required form-required">
                      Appgroup name
                      <sup>
                        <i
                          className="fas fa-asterisk text-danger form-required__indicator"
                          style={{ fontSize: "0.7em" }}
                        />
                      </sup>
                    </label>
                    <input
                      className="required form-control"
                      type="text"
                      value={companyName}
                      onChange={handleCompanyNameChange}
                      size={60}
                      maxLength={255}
                      required="required"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-item form-item-field-description-0-value form-group">
                    <label htmlFor="edit-field-description-0-value">
                      Description
                    </label>
                    <sup>
                      <i
                        className="fas fa-asterisk text-danger form-required__indicator"
                        style={{ fontSize: "0.7em" }}
                      />
                    </sup>
                    <textarea
                      className="form-textarea form-control"
                      rows={5}
                      cols={60}
                      placeholder=""
                      value={description}
                      required="required"
                      aria-required="true"
                      onChange={handleDescriptionChange}
                    />
                  </div>
                  <fieldset className="form-composite border mb-3">
                    <legend className="float-left py-2 px-4 mb-0 border-bottom">
                      <span className="fieldset-legend small">
                        Appgroup product
                      </span>
                    </legend>
                    {apiproduct && apiproduct.length > 0 && (
                      <div className="p-4 fieldset-wrapper">
                        <div className="form-checkboxes">
                          {apiproduct.map((item, valIndex) => (
                            <div
                              key={item.name}
                              className="form-item form-item-field-api-product-0-value-corp-iag-code-token form-check"
                            >
                              <ul style={{ padding: 0, margin: 0 }}>
                                <li
                                  key={item.name}
                                  style={{ listStyle: "none" }}
                                >
                                  <input
                                    type="checkbox"
                                    value={item.name}
                                    style={{ marginRight: "0.5em" }}
                                    checked={checkedAttributes.includes(
                                      item.name
                                    )}
                                    onChange={() =>
                                      handleCheckboxChange(item.name)
                                    }
                                  />
                                  {item.name}
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </fieldset>
                  <div className="form-wrapper">
                    <button
                      className="all-buttons-color text-white form-submit btn  btn-md"
                      onClick={handleAddTeam}
                    >
                      Add Appgroup
                    </button>
                    <Link
                      to="/teams"
                      className="btn btn-outline-primary btn-md"
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show success toast */}
      {showSuccessToast && (
        <SuccessToast message="Appgroup created successfully!" />
      )}

      {/* Show error toast */}
      {showErrorToast && <ErrorToast message="Failed to create appgroup" />}

      {/* {showErrorToast && <ErrorToast message="An error occurred while creating appgroup" />}*/}

      {showErrorToast && (
        <ErrorToast message="Appgroup already exists. Please try with a different name." />
      )}
    </Layout>
  );
};

export default AddTeam;
