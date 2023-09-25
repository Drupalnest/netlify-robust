import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layout";
import { Link, navigate } from "gatsby";
import { fetchTeamDetails, fetchTeams } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const EditMember = () => {
  const developer = useSelector((state) => state.memberName.developer);
  console.log("developer", developer);

  const [selectedRoles, setSelectedRoles] = useState(["admin"]);

  // useEffect(() => {
  //   if (teamDetails) {
  //     setSelectedRoles(teamDetails.roles);
  //   } else if (developer) {
  //     setSelectedRoles(["member", "admin"]); 
  //   }
  // }, [teamDetails, developer]);



  const dispatch = useDispatch();
  const teamDetails = useSelector((state) => state.teamDetails);
  console.log("edit", teamDetails);

  const isFetching = teamDetails ? teamDetails.loading : true; 

  const team = teamDetails ? teamDetails.name : "";
  console.log("team", team);

  const descriptionValue = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "description")?.value
    : "";

  const products = teamDetails
    ? teamDetails.attributes.find((attr) => attr.name === "api_product")?.value
    : "";
  console.log("products", products);



  const members = teamDetails
    ? teamDetails.attributes.find(
        (attr) => attr.name === "__apigee_reserved__developer_details"
      )?.value
    : "";
  console.log("members", members);




  const handleUpdateMember = async (e) => {
    e.preventDefault();

    try {
      // const serializedApiProduct = serializeData.join(",");
      const response = await fetch(
        `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${teamDetails.name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
          body: JSON.stringify({
            attributes: [
              {
                name: "api_product",
                value: products,
              },
              {
                name: "description",
                value: descriptionValue,
              },
              {
                name: "__apigee_reserved__developer_details",
                 value: serializedMergedData,
              },
            ],
          }),
        }
      );

      if (response.ok) {
        // alert(serializedApiProduct);
        alert("Member updated Successfully!");
        dispatch(fetchTeamDetails(team));
        navigate("/members");
      } else {
        alert("Failed to update members.");
      }
    } catch (error) {
      alert("An error occurred while updated members.");
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRoles((prevRoles) => {
      if (prevRoles.includes(role)) {
        return prevRoles.filter((r) => r !== role);
      } else {
        return [...prevRoles, role];
      }
    });
  };

  const updatedMember = {
    developer,
    roles: selectedRoles,
  };
  
  // Logic for PUT request or other actions
  console.log("Updated Member Data:", updatedMember);
  
  const membersSerialized = JSON.parse(members);
  console.log("membersSerialized", membersSerialized);
  
  // Check for duplicate before adding the updated member
  const isDuplicate = membersSerialized.some(member => (
    member.developer === updatedMember.developer &&
    JSON.stringify(member.roles) === JSON.stringify(updatedMember.roles)
  ));
  
  if (!isDuplicate) {
    // Replace the existing member with the updated data if it already exists
    const existingIndex = membersSerialized.findIndex(
      member => member.developer === updatedMember.developer
    );
  
    if (existingIndex !== -1) {
      membersSerialized.splice(existingIndex, 1, updatedMember);
      console.log("Member updated successfully.");
    } else {
      membersSerialized.push(updatedMember);
      console.log("Member updated successfully.");
    }
  } else {
    console.log("Duplicate entry found. Not adding the updated member.");
  }
  
  console.log("Updated membersSerialized", membersSerialized);
  const serializedMergedData = JSON.stringify(membersSerialized);
  console.log("serializedMergedData",serializedMergedData)

  return (
    <Layout>
      <div className="dialog-off-canvas-main-canvas">
        <div className="page">
          <div className="page__content-above">
            <div className="container-fluid px-0">
              <div className="contextual-region block block--pagetitle bg-lighter py-4">
                <div className="container">
                  <h1 className="js-quickedit-page-title page__title mb-0">
                    Edit member
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
                    <div className="hidden" />

                    <form
                      className="apigee-edge-teams-edit-team-member-form team-member-form"
                      onSubmit={handleUpdateMember}
                    >
                      <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
                        <legend className="float-left py-2 px-4 mb-0 border-bottom">
                          <span className="fieldset-legend"> Roles </span>
                          <button className="btn-link">
                            <i className="fas fa-chevron-down d-md-none" />
                          </button>
                        </legend>

                        <div className="p-4 fieldset-wrapper">
                          <div id="edit-team-roles" className="form-checkboxes">
                            {/* Checkbox for Administrator */}
                            <div className="js-form-item form-item js-form-type-checkbox form-item-team-roles-admin js-form-item-team-roles-admin form-check">
                              <input
                                type="checkbox"
                                checked={selectedRoles.includes("admin")}
                                onChange={() => handleRoleSelection("admin")}
                                name="team_roles[admin]"
                              />
                              <label className="form-check-label option">
                                Administrator
                              </label>
                            </div>
                            {/* Checkbox for Member */}
                            <div className="js-form-item form-item js-form-type-checkbox form-item-team-roles-member js-form-item-team-roles-member form-check">
                              <input
                                type="checkbox"
                                checked={selectedRoles.includes("member")}
                                onChange={() => handleRoleSelection("member")}
                                name="team_roles[member]"
                              />
                              <label className="form-check-label option">
                                Member
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <div className="form-actions js-form-wrapper form-wrapper">
                        <button className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary">
                          Update Member
                        </button>

                        <Link
                          to="/members"
                          className="btn js-form-submit btn-outline-primary"
                        >
                          Cancel
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default EditMember;












// import React, { useEffect, useRef, useState } from "react";
// import Layout from "../Layout";
// import { Link, navigate } from "gatsby";
// import { fetchTeamDetails, fetchTeams } from "../../redux/store";
// import { useDispatch, useSelector } from "react-redux";

// const EditMember = () => {
//   const developer = useSelector((state) => state.memberName.developer);
//   console.log("developer", developer);

//   const initialSelectedRoles = developer ? developer.roles : ["member"];
//   const [selectedRoles, setSelectedRoles] = useState(initialSelectedRoles);

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);
//   console.log("edit", teamDetails);

//   const isFetching = teamDetails ? teamDetails.loading : true; // Handle null value

//   const team = teamDetails ? teamDetails.name : "";
//   console.log("team", team);

//   const descriptionValue = teamDetails
//     ? teamDetails.attributes.find((attr) => attr.name === "description")?.value
//     : "";

//   const products = teamDetails
//     ? teamDetails.attributes.find((attr) => attr.name === "api_product")?.value
//     : "";
//   console.log("products", products);

//   const members = teamDetails
//     ? teamDetails.attributes.find(
//         (attr) => attr.name === "__apigee_reserved__developer_details"
//       )?.value
//     : "";
//   console.log("members", members);

//   const handleUpdateMember = async (e) => {
//     e.preventDefault();

//     try {
//       // const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${teamDetails.name}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//           },
//           body: JSON.stringify({
//             attributes: [
//               {
//                 name: "api_product",
//                 value: products,
//               },
//               {
//                 name: "description",
//                 value: descriptionValue,
//               },
//               {
//                 name: "__apigee_reserved__developer_details",
//                 value: serializedMergedData,
//               },
//             ],
//           }),
//         }
//       );

//       if (response.ok) {
//         // alert(serializedApiProduct);
//         alert("Member updated Successfully!");
//         dispatch(fetchTeamDetails(team));
//         navigate("/members");
//       } else {
//         alert("Failed to update members.");
//       }
//     } catch (error) {
//       alert("An error occurred while updated members.");
//     }
//   };

//   const handleRoleSelection = (role) => {
//     setSelectedRoles((prevRoles) => {
//       if (!prevRoles) {
//         prevRoles = [];
//       }

//       if (prevRoles.includes(role)) {
//         return prevRoles.filter((r) => r !== role);
//       } else {
//         return [...prevRoles, role];
//       }
//     });
//   };

//   const updatedMember = {
//     developer,
//     roles: selectedRoles,
//   };


//   // Logic for PUT request or other actions
//   console.log("Updated Member Data:", updatedMember);

//   const membersSerialized = JSON.parse(members);
//   console.log("membersSerialized", membersSerialized);

//   // Check for duplicate before adding the updated member
//   const isDuplicate = membersSerialized.some(
//     (member) =>
//       member.developer === updatedMember.developer &&
//       JSON.stringify(member.roles) === JSON.stringify(updatedMember.roles)
//   );

//   if (!isDuplicate) {
//     // Replace the existing member with the updated data if it already exists
//     const existingIndex = membersSerialized.findIndex(
//       (member) => member.developer === updatedMember.developer
//     );

//     if (existingIndex !== -1) {
//       membersSerialized.splice(existingIndex, 1, updatedMember);
//       console.log("Member updated successfully.");
//     } else {
//       membersSerialized.push(updatedMember);
//       console.log("Member updated successfully.");
//     }
//   } else {
//     console.log("Duplicate entry found. Not adding the updated member.");
//   }

//   console.log("Updated membersSerialized", membersSerialized);
//   const serializedMergedData = JSON.stringify(membersSerialized);
//   console.log("serializedMergedData", serializedMergedData);

//   return (
//     <Layout>
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     Edit member
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
//                     <div className="hidden" />

//                     <form
//                       className="apigee-edge-teams-edit-team-member-form team-member-form"
//                       onSubmit={handleUpdateMember}
//                     >
//                       <fieldset className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper border mb-3">
//                         <legend className="float-left py-2 px-4 mb-0 border-bottom">
//                           <span className="fieldset-legend"> Roles </span>
//                           <button className="btn-link">
//                             <i className="fas fa-chevron-down d-md-none" />
//                           </button>
//                         </legend>

//                         <div className="p-4 fieldset-wrapper">
//                           <div id="edit-team-roles" className="form-checkboxes">
//                             {/* Checkbox for Administrator */}
//                             <div className="js-form-item form-item js-form-type-checkbox form-item-team-roles-admin js-form-item-team-roles-admin form-check">
//                             <input
//       type="checkbox"
//       checked={membersSerialized.some((member) => member.roles.includes("admin")) ? true : false}
//       onChange={() => handleRoleSelection("admin")}
//       name="team_roles[admin]"
//     />
//                               <label className="form-check-label option">
//                                 Administrator
//                               </label>
//                             </div>
//                             {/* Checkbox for Member */}
//                             <div className="js-form-item form-item js-form-type-checkbox form-item-team-roles-member js-form-item-team-roles-member form-check">
//                             <input
//       type="checkbox"
//       checked={membersSerialized.some((member) => member.roles.includes("member")) ? true : false}
//       onChange={() => handleRoleSelection("member")}
//       name="team_roles[member]"
//     />
//                               <label className="form-check-label option">
//                                 Member
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                       </fieldset>

//                       <div className="form-actions js-form-wrapper form-wrapper">
//                         <button className="js-form-submit-modal-init button button--primary js-form-submit form-submit btn btn-primary">
//                           Update Member
//                         </button>

//                         <Link
//                           to="/members"
//                           className="btn js-form-submit btn-outline-primary"
//                         >
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
//     </Layout>
//   );
// };

// export default EditMember;
