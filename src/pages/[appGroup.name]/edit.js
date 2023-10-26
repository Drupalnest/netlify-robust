// import { Link } from "gatsby";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Layout from "../Layout";
// import Buttons from "../Buttons/Buttons";
// import { fetchTeamDetails } from "../../redux/store";
// const axios = require("axios");

// const UpdateCompanyName = () => {
//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   const team = teamDetails.name;
//   console.log("team", team);

//   useEffect(() => {
//     dispatch(fetchTeamDetails(team));
//   }, [dispatch,team]);

//   const [companyName, setCompanyName] = useState("");
//   const [description, setDescription] = useState("");
//   const [apiData, setApiData] = useState([]);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [checkedAttributes, setCheckedAttributes] = useState([]);

//   const handleCompanyNameChange = (e) => {
//     setCompanyName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleUpdateCompany = async (e) => {
//     e.preventDefault();

//     if (!companyName.trim()) {
//       alert("Please provide a valid company name.");
//       return;
//     }

//     try {
//       const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamDetails.name}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${bearerToken}`,
//           },
//           body: JSON.stringify({
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
//         alert(serializedApiProduct);
//         alert("Display name and description updated successfully!");
//       } else {
//         alert("Failed to update company details.");
//       }
//     } catch (error) {
//       alert("An error occurred while updating company details.");
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

//   // const updateSelectedAttributes = (updatedAttributes) => {
//   //   setSelectedAttributes(updatedAttributes);
//   //   localStorage.setItem(
//   //     `selectedAttributes_${teamDetails.name}`,
//   //     JSON.stringify(updatedAttributes)
//   //   );
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

//   useEffect(() => {
//     fetchApiProducts();
//   }, []);

//   const fetchApiProducts = () => {
//     const apiUrl = `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/apiproducts`;
//     const bearerToken = bearerToken;
//     const headers = {
//       Authorization: `Bearer ${bearerToken}`,
//     };

//     axios
//       .get(apiUrl, { headers })
//       .then((response) => {
//         const apiData = response.data;
//         setApiData(apiData);
//       })
//       .catch((error) => {
//         console.error("apiproducts Request Error:", error);
//       });
//   };

//   const descriptionValue = teamDetails.attributes.find(
//     (attr) => attr.name === "description"
//   )?.value;

//   const filteredData = apiData.filter((attr) => attr !== "0");
//   const uniqueAttributes = Array.from(new Set(filteredData));
//   console.log("uniqueAttributes", uniqueAttributes);

//   const products = teamDetails.attributes.find(
//     (attr) => attr.name === "api_product"
//   )?.value;
//   console.log("products", products);

//   // //set to localstorage
//   // const localStorage_products = products;
//   // localStorage.setItem("localstorage", JSON.stringify(localStorage_products));

//   // const api_product = ["api_product", products];
//   // console.log("api_product", api_product);

//   const array1 = [{ products }];
//   // console.log("array1", array1);

//   //unserializedData Data
//   const unserializedData = array1
//   .map((item) => {
//     if (item && item.products) {
//       const regex = /s:\d+:\\"(.*?)\\"/g;
//       const matches = item.products.match(regex);
//       if (matches) {
//         return matches.map((match) =>
//           match.replace(/\\\\/g, "\\").replace(/s:\d+:\\"(.*?)\\"/, "$1")
//         );
//       }
//     }
//     return [];
//   })
//   .flat();
// console.log("unserializedData", unserializedData);

//   const findDuplicates = (apiData) => {
//     const duplicates = {};
//     const duplicateItems = [];

//     apiData.forEach((item) => {
//       if (!duplicates[item]) {
//         duplicates[item] = 1;
//       } else {
//         duplicates[item]++;
//       }
//     });

//     Object.entries(duplicates).forEach(([item, count]) => {
//       if (count > 1) {
//         duplicateItems.push(item);
//       }
//     });

//     return duplicateItems;
//   };
//   const duplicateItems = findDuplicates(unserializedData);
//   console.log("duplicateItems", duplicateItems);

//   useEffect(() => {
//     const filteredData = apiData.filter((attr) => attr !== "0");
//     const uniqueAttributes = Array.from(new Set(filteredData));

//     const initialCheckedAttributes = uniqueAttributes.filter((attr) =>
//       duplicateItems.includes(attr)
//     );
//     setCheckedAttributes(initialCheckedAttributes);

//     const storedSelectedAttributes =
//       JSON.parse(
//         localStorage.getItem(`selectedAttributes_${teamDetails.name}`)
//       ) || [];
//     setSelectedAttributes(storedSelectedAttributes);
//   }, [teamDetails, apiData,duplicateItems]);

//   useEffect(() => {
//     setCompanyName(teamDetails.displayName);

//     const descriptionValue = teamDetails.attributes.find(
//       (attr) => attr.name === "description"
//     )?.value;
//     setDescription(descriptionValue || "");

//     // Rest of your code...
//   }, [teamDetails, apiData,duplicateItems]);

//   const mergedArray = [...selectedAttributes, ...checkedAttributes];
//   const selected_attribute = Array.from(new Set(mergedArray));

//   const unselected_attributes = uniqueAttributes.filter(
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
// console.log("serializeData",serializeData)
//   const serializedApiProduct22 = serializeData.join(",");
//   console.log("serializedApiProduct22",serializedApiProduct22)
//   return (
//     <Layout>
//       <div>
//         <Buttons />
//         <div className="dialog-off-canvas-main-canvas">
//           <div className="page">
//             <header className="page__header"></header>
//             <div className="page__content-above">
//               <div className="container-fluid px-0">
//                 <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                   <div />
//                   <div className="container">
//                     <h1 className="js-quickedit-page-title page__title mb-0">
//                       Edit <em  >{teamDetails.name}</em>
//                       &nbsp; team
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
//                       <form
//                         className="team-form"
//                         onSubmit={handleUpdateCompany}
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
//                               value={companyName}
//                               onChange={handleCompanyNameChange}
//                               size={60}
//                               maxLength={255}
//                               placeholder={teamDetails.displayName}
//                               required="required"
//                               aria-required="true"
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
//                             <label htmlFor="edit-field-description-0-value">
//                               Description
//                             </label>
//                             <textarea
//                               className="js-text-full text-full form-textarea form-control"
//                               rows={5}
//                               cols={60}
//                               value={description}
//                               placeholder={descriptionValue}
//                               onChange={handleDescriptionChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="js-form-item form-item js-form-type-machine-name form-type-machine-name form-item-name js-form-item-name form-disabled form-group">
//                           <label className="js-form-required form-required">
//                             Internal name
//                             <i className="fas fa-asterisk text-danger form-required__indicator" />
//                           </label>

//                           <input
//                             disabled="disabled"
//                             dir="ltr"
//                             type="text"
//                             name="name"
//                             value={teamDetails.name}
//                             size={60}
//                             maxLength={64}
//                             className="required form-control"
//                             required="required"
//                             aria-required="true"
//                           />
//                           <small className="description form-text text-muted">
//                             A unique machine-readable name. Only lowercase
//                             alphanumeric and dashes are allowed
//                           </small>
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

//                             {apiData && apiData.length > 0 && (
//                               <div className="p-4 fieldset-wrapper">
//                                 <div className="form-checkboxes">
//                                   {uniqueAttributes.map((val, valIndex) => (
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
//                               onClick={handleUpdateCompany}
//                             >
//                               Update Team
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

// export default UpdateCompanyName;

import { Link, navigate } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Buttons from "../../components/Buttons/Buttons";
import { fetchTeamDetails, apiProducts, fetchTeams } from "../../redux/store";
import { trackEvent } from "../../redux/store";
import { ToastContainer, toast } from 'react-toastify';
import withAuth from "../../components/HOC/withAuth";

const UpdateCompanyName = () => {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [message, setMessage] = useState("");
  const [checkedAttributes, setCheckedAttributes] = useState([]);
  const [isFetch, setIsFetch] = useState(true);

  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("edit", teamDetails);

  const loginResponse = useSelector(
    (state) => state.loginReducer.loginResponse
  );

  const userName = loginResponse?.current_user?.name;
  console.log("userName", userName);

  const isFetching = teamDetails ? teamDetails.loading : true; // Handle null value

  const team = teamDetails ? teamDetails.name : "";
  console.log("team", team);

  const apiproducts = useSelector((state) => state.apiProducts);
  const apiproduct = apiproducts.apiProduct;
  console.log("apiproduct", apiproduct);

  const namesArray = apiproduct ? apiproduct.map((item) => item.name) : [];
  console.log("namesArray", namesArray);

  useEffect(() => {
    dispatch(apiProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   // Fetch API products
  //   dispatch(apiProducts())
  //     .then(() => setIsFetch(false))
  //     .catch((error) => {
  //       console.error("Error fetching API products:", error);
  //       setIsFetch(false);
  //     });
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchTeamDetails(team));
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchTeams());
  // }, []);

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdateCompany = async (e) => {
    e.preventDefault();

    if (!companyName.trim()) {
      alert("Please provide a valid company name.");
      return;
    }

    try {
      const serializedApiProduct = serializeData.join(",");
      const tokenResponse = await fetch(
        "https://robustapihub.netlify.app/.netlify/functions/retrieveToken"
      );
      const { accessToken } = await tokenResponse.json();
      const response = await fetch(
        `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamDetails.name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
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
                name: "__apigee_reserved__developer_details",
                value: members,
              },
              {
                name: "ADMIN_EMAIL",
                value: adminsEmail,
              },
              {
                name: "DP_AdminEmails",
                value: admins,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        // alert(serializedApiProduct);
        //alert("Appgroups  updated successfully!");
        toast.success("Appgroups  updated successfully!")
        dispatch(fetchTeamDetails(team));

        const isAdded = checkedAttributes.length > selectedAttributes.length;
        const action = isAdded ? "added to" : "removed from";

        const addedAttributes = checkedAttributes.filter(
          (attr) => !selectedAttributes.includes(attr)
        );
       
        // const removedAttributes = selectedAttributes.filter(
        //   (attr) => !checkedAttributes.includes(attr)
        // );
        // console.log("removedAttributes:", removedAttributes);
        

        const addedAttributeNames = addedAttributes.join(", ");
        const removedAttributeNames = unselected_attributes.join(", ");

        const operationsMessage = `${team} Appgroup Edited. ${
          addedAttributeNames ? `${addedAttributeNames} product added to` : ""
        } ${
          removedAttributeNames
            ? `${removedAttributeNames} product removed from`
            : ""
        } Appgroup`;

        dispatch(
          trackEvent({
            // timestamp: new Date(),
            // operation: "Appgroup Edited",
            // //button: "Edit Team Button",
            // appgroupName:team,
            // EditedAppgroupName: companyName,
            // selectedApiProduct: uniqueAttributes,
            // updatedApiProduct: selected_attribute,
            // selectedApiProduct: unselected_attributes,

            //description:description,
            //user:admins,
            username: userName,
            timestamp: new Date(),
            operations: operationsMessage,
          })
        );
        navigate("/teams");
      } else {
        //alert("Appgroups updating failed.");
        toast.error("Appgroups updating failed."); // Show error toast
      }
    } catch (error) {
      //alert("An error occurred while member role updating.");
      toast.error("Appgroups updating failed An error occurred while updating appgroups.")
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
    localStorage.setItem(
      `selectedAttributes_${teamDetails.name}`,
      JSON.stringify(updatedAttributes)
    );
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


  // const checkedAttributesRef = useRef([]);

  // const handleCheckboxChange = (attribute) => {
  //   setCheckedAttributes((prevChecked) => {
  //     if (prevChecked.includes(attribute)) {
  //       // Is line ko badle
  //       checkedAttributesRef.current = prevChecked.filter((attr) => attr !== attribute);
  //       return prevChecked.filter((attr) => attr !== attribute);
  //     } else {
  //       // Is line ko badle
  //       checkedAttributesRef.current = [...prevChecked, attribute];
  //       return [...prevChecked, attribute];
  //     }
  //   });
  // };

  const descriptionValue = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "description")?.value
    : "";

  const members = teamDetails
    ? teamDetails.attributes.find(
        (attr) => attr.name === "__apigee_reserved__developer_details"
      )?.value
    : "";
  console.log("members", members);

  const admins = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "DP_AdminEmails")
        ?.value
    : "";
  console.log("admins", admins);

  const adminsEmail = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "ADMIN_EMAIL")?.value
    : "";
  console.log("adminsEmail", adminsEmail);

  const filteredData = namesArray
    ? namesArray.filter((attr) => attr !== "0")
    : [];

  console.log("filteredData", filteredData);

  const uniqueAttributes = Array.from(new Set(filteredData));
  console.log("uniqueAttributes", uniqueAttributes);

  const products = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "api_product")?.value
    : "";
  console.log("products", products);

  //set to localstorage
  // const localStorage_products = products;
  // localStorage.setItem("localstorage", JSON.stringify(localStorage_products));

  const api_product = ["api_product", products];
  // console.log("api_product", api_product);

  const array1 = [{ products }];
  // console.log("array1", array1);

  //unserializedData Data
  const unserializedData = array1
    .map((item) => {
      if (item && item.products) {
        const regex = /s:\d+:\\\"(.*?)\\\"/g;
        const matches = item.products.match(regex);
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

  const findDuplicates = (namesArray) => {
    const duplicates = {};
    const duplicateItems = [];

    // Count occurrences of each item in the array
    namesArray.forEach((item) => {
      if (!duplicates[item]) {
        duplicates[item] = 1;
      } else {
        duplicates[item]++;
      }
    });

    // Identify items with counts greater than 1 as duplicates
    Object.entries(duplicates).forEach(([item, count]) => {
      if (count > 1) {
        duplicateItems.push(item);
      }
    });

    return duplicateItems;
  };

  const duplicateItems = findDuplicates(unserializedData);
  console.log("duplicateItems", duplicateItems);

  useEffect(() => {
    const filteredData = namesArray.filter((attr) => attr !== "0");
    const uniqueAttributes = Array.from(new Set(filteredData));
    const duplicateItems = findDuplicates(unserializedData);
    const initialCheckedAttributes = uniqueAttributes.filter((attr) =>
      duplicateItems.includes(attr)
    );
  }, [teamDetails, namesArray]);

  useEffect(() => {
    const filteredData = namesArray.filter((attr) => attr !== "0");
    const uniqueAttributes = Array.from(new Set(filteredData));
    const initialCheckedAttributes = uniqueAttributes.filter((attr) =>
      duplicateItems.includes(attr)
    );

    setCheckedAttributes(initialCheckedAttributes);
  }, [teamDetails]);

  useEffect(() => {
    setCompanyName(teamDetails?.displayName || "");

    const descriptionValue = teamDetails
      ? teamDetails.attributes.find((attr) => attr.name === "description")
      : null;

    setDescription(descriptionValue ? descriptionValue.value || "" : "");
  }, [teamDetails]);

  const mergedArray = [...selectedAttributes, ...checkedAttributes];
  console.log("mergedArray", mergedArray);

  const selected_attribute = Array.from(new Set(mergedArray));
  console.log("selected_attribute", selected_attribute);

  const unselected_attributes = uniqueAttributes.filter(
    (attr) => !selected_attribute.includes(attr)
  );
  console.log("unselected_attributes", unselected_attributes);

  const formatted_selected_attribute = selected_attribute.map((attrName) => ({
    [attrName]: attrName,
  }));
  console.log("formatted_selected_attribute", formatted_selected_attribute);

  const formatted_unselected_attribute = unselected_attributes.map((attr) => ({
    [attr]: "0",
  }));
  console.log("formatted_unselected_attribute", formatted_unselected_attribute);

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

  if (!teamDetails || (teamDetails && isFetching)) {
    return (
      <Layout>
        <div>
          <Buttons />
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div className="container">
                    <h1 className="js-quickedit-page-title page__title mb-0">
                      Loading appgroups...
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
      <div style={{ marginTop: "120px", height: "900px", overflow: "auto" }}>
        <Buttons />
        <div className="dialog-off-canvas-main-canvas">
          <div className="page">
            <div className="page__content-above">
              <div className="container-fluid px-0">
                <div className="contextual-region block block--pagetitle bg-lighter py-4">
                  <div />
                  <div className="container">
                    <h3 className="js-quickedit-page-title page__title mb-0">
                      Edit
                      <span className="font-italic">{teamDetails.name}</span>
                      &nbsp; appgroup
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <main className="main">
              <div className="page-layout-sidebar-default">
                <div className="container py-2">
                  <div className="row">
                    <div className="page__content col-md">
                      <div className="hidden" />
                      <form
                        className="team-form"
                        onSubmit={handleUpdateCompany}
                      >
                        <div className="field--type-string field--name-displayname field--widget-string-textfield js-form-wrapper form-wrapper">
                          <div className="js-form-item form-item js-form-type-textfield form-type-textfield form-item-displayname-0-value js-form-item-displayname-0-value form-group">
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
                              className="js-text-full text-full required form-control"
                              type="text"
                              value={companyName}
                              onChange={handleCompanyNameChange}
                              size={60}
                              maxLength={255}
                              placeholder={teamDetails.displayName}
                              required="required"
                              aria-required="true"
                            />
                            <span className="field-suffix">
                              <small>&nbsp;</small>
                            </span>
                            <small className="description form-text text-muted">
                              Only lowercase alphanumeric and dashes are
                              allowed.
                            </small>
                          </div>
                        </div>
                        <div className="field--type-string-long field--name-field-description field--widget-string-textarea js-form-wrapper form-wrapper">
                          <div className="js-form-item form-item js-form-type-textarea form-type-textarea form-item-field-description-0-value js-form-item-field-description-0-value form-group">
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
                              className="js-text-full text-full form-textarea form-control"
                              rows={5}
                              cols={60}
                              value={description}
                              placeholder={descriptionValue}
                              // defaultValue={descriptionValue}
                              onChange={handleDescriptionChange}
                            />
                          </div>
                        </div>
                        <div className="js-form-item form-item js-form-type-machine-name form-type-machine-name form-item-name js-form-item-name form-disabled form-group">
                          <label className="js-form-required form-required">
                            Internal name
                            <sup>
                              <i
                                className="fas fa-asterisk text-danger form-required__indicator"
                                style={{ fontSize: "0.7em" }}
                              />
                            </sup>
                          </label>

                          <input
                            disabled="disabled"
                            dir="ltr"
                            type="text"
                            name="name"
                            value={teamDetails.name}
                            size={60}
                            maxLength={64}
                            className="required form-control"
                            required="required"
                            aria-required="true"
                          />
                          <small className="description form-text text-muted">
                            A unique machine-readable name. Only lowercase
                            alphanumeric and dashes are allowed
                          </small>
                        </div>

                        <div className="field--type-productapi field--name-field-api-product field--widget-productapi js-form-wrapper form-wrapper">
                          <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
                            <legend className="float-left py-2 px-4 mb-0 border-bottom">
                              <h5 className="fieldset-legend">
                                Appgroup products
                              </h5>
                              {/* <button className="btn-link">
                                <i className="fas fa-chevron-down d-md-none" />
                              </button> */}
                            </legend>

                            {namesArray && namesArray.length > 0 && (
                              <div className="p-4 fieldset-wrapper">
                                <div className="form-checkboxes">
                                  {uniqueAttributes.map((val, valIndex) => (
                                    <div
                                      key={valIndex}
                                      className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
                                    >
                                      <ul style={{ padding: 0, margin: 0 }}>
                                        <li
                                          key={valIndex}
                                          style={{ listStyle: "none" }}
                                        >
                                          <input
                                            className="custom-checkbox"
                                            type="checkbox"
                                            value={val}
                                            style={{ marginRight: "0.5em" }}
                                            checked={checkedAttributes.includes(
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
                          </fieldset>

                          <div className="form-actions js-form-wrapper form-wrapper">
                            <button
                              className="all-buttons-color text-white js-form-submit-modal-init   js-form-submit form-submit text-white btn btn-md"
                              onClick={handleUpdateCompany}
                            >
                              Save appgroup
                            </button>

                            <Link
                              to="/teams"
                              className="btn btn-md  btn-outline-primary "
                            >
                              Cancel
                            </Link>
                          </div>
                        </div>
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

export default withAuth(UpdateCompanyName);
