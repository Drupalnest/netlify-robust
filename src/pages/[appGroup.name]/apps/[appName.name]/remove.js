// import React, { useState } from "react";
// import Layout from "../../../../components/Layout";
// import { Link, navigate } from "gatsby";
// import { fetchTeamDetails, fetchTeams } from "../../../../redux/store";
// import { useDispatch, useSelector } from "react-redux";

// const Deletekey = () => {
//   const developer = useSelector((state) => state.memberName.developer);
//   console.log("developer", developer);

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

//   const handleDeleteMember = async (e) => {
//     e.preventDefault();

//     try {
//       // const serializedApiProduct = serializeData.join(",");
//       const response = await fetch(
//         `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamDetails.name}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${bearerToken}`,
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
//         alert("Member remove Successfully!");
//         dispatch(fetchTeamDetails(team));
//         navigate(`/${team}/members`);
//       } else {
//         alert("Failed to remove members.");
//       }
//     } catch (error) {
//       alert("An error occurred while remove member.");
//     }
//   };

//   const membersSerialized = JSON.parse(members);
//   console.log("membersSerialized", membersSerialized);

//   // Find the index of the member to be removed
//   const memberIndexToRemove = membersSerialized.findIndex(
//     (member) => member.developer === developer
//   );

//   if (memberIndexToRemove !== -1) {
//     // Remove the member from the array
//     membersSerialized.splice(memberIndexToRemove, 1);
//     console.log("Member removed successfully.");
//   } else {
//     console.log("Member not found in the list.");
//   }

//   const serializedMergedData = JSON.stringify(membersSerialized);
//   console.log("serializedMergedData", serializedMergedData);

//   return (
//     <Layout>
//       <div className="dialog-off-canvas-main-canvas">
//         <div className="page">
//           <header className="page__header"></header>
//           <div className="page__content-above">
//             <div className="container-fluid px-0">
//               <div className="contextual-region block block--pagetitle bg-lighter py-4">
//                 <div className="container">
//                   <h1 className="js-quickedit-page-title page__title mb-0">
//                     Are you sure that you would like to remove
//                     <em  >{developer}</em> from the team?
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
//                     <form
//                       className="apigee-edge-teams-remove-team-member-form confirmation team-member-form"
//                       onSubmit={handleDeleteMember}
//                     >
//                       This action cannot be undone.
//                       <div className="form-actions js-form-wrapper form-wrapper">
//                         <button
//                           type="submit"
//                           defaultValue="Confirm"
//                           className="button button--primary js-form-submit form-submit btn btn-primary"
//                         >
//                           Remove
//                         </button>
//                         <Link
//                           to="/members"
//                           className="button btn btn-outline-primary"
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

// export default Deletekey;

import React from 'react';
import { useLocation } from '@reach/router';
import Layout from '../../../../components/Layout';
import { Link, navigate } from 'gatsby';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  fetchTeamDetails,
  fetchAppDetails,
  updateAppDetails,
  appDetails,
  trackEvent,
} from '../../../../redux/store';


function RemovePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const teamName = searchParams.get('team');
  console.log("teamName",teamName)
  const appName = searchParams.get('appName');
  console.log("appName",appName)
  const consumerKey = searchParams.get('consumerKey');
  
  // Now you have access to the passed data (teamName, appName, consumerKey)

  // You can also call handleRemovekey with the data
  const handleRemovekey = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const tokenResponse = await fetch('https://imaginative-sprite-320f1b.netlify.app/.netlify/functions/retrieveToken');
    const { accessToken } = await tokenResponse.json();
    const apiUrl = `https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups/${teamName}/apps/${appName}/keys/${consumerKey}`;
    const bearerToken = accessToken;

    try {
      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      dispatch(fetchAppDetails(teamName, appName));
      


      dispatch(
        trackEvent({
          timestamp: new Date(),
          operation: "Appgroup App Consumer Key Deleted",
          appgroupName: teamName,
          appName: appName,
          consumerKey: consumerKey,
        })
      );

      alert('Key removed successfully');
      navigate(`/${teamName}/apps/${appName}`);
    } catch (error) {
      alert('Error removing key: ' + error);
    }
  };

  return (
    <Layout>
     <div style={{marginTop:"110px"}}>
      <div className="dialog-off-canvas-main-canvas">
        <div className="page">
          <header className="page__header"></header>
          <div className="page__content-above">
            <div className="container-fluid px-0">
              <div className="contextual-region block block--pagetitle bg-lighter py-4">
                <div className="container">
                  <h3 className="js-quickedit-page-title page__title mb-0">
                    Are you sure that you would like to remove
                    <em>{consumerKey}</em> from the appgroup?
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
                    <form
                      className="apigee-edge-teams-remove-team-member-form confirmation team-member-form"
                      onSubmit={handleRemovekey}
                    >
                      <p>This action cannot be undone.</p>
                      <div className="form-actions js-form-wrapper form-wrapper">
                        <button
                          type="submit"
                          className="all-buttons-color text-white btn btn-md js-form-submit form-submit "
                        >
                          Remove
                        </button>
                        <Link
                          to={`/${teamName}/apps/${appName}`}
                         
                          className=" btn btn-md"
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
      </div>
    </Layout>
  );
}

export default RemovePage;
