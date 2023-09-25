// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Buttons from "../Buttons/Buttons";
// import Layout from "../Layout";

// const TeamDetails = ({ team }) => {
//   const teamDetails = useSelector((state) => state.teamDetails);
//   console.log("asdfg", team);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>Loading... No team selected</div>;
//   }

//   return (
//     <Layout>
//       <div>
//         <h1>{teamDetails.name}</h1>
//         <p>Display Name: {teamDetails.displayName}</p>
//         <p>Organization: {teamDetails.organization}</p>
//         <p>Status: {teamDetails.status}</p>
//         <p>Created By: {teamDetails.createdBy}</p>
//         <p>Last Modified By: {teamDetails.lastModifiedBy}</p>

//         <h2>Apps:</h2>
//         <ul>
//           {teamDetails.apps.map((app, index) => (
//             <li key={index}>{app}</li>
//           ))}
//         </ul>
//       </div>
//       <Buttons />
//     </Layout>
//   );
// };

// export default TeamDetails;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Buttons from "../Buttons/Buttons";
// import Layout from "../Layout";

// const TeamDetails = () => {
//   const teamDetails = useSelector((state) => state.teamDetails);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>Loading... No team selected</div>;
//   }

//   // Function to extract the attribute values as an array
//   const extractAttributeValues = (value) => {
//     // Remove square brackets and split the values by commas
//     return value.substring(1, value.length - 1).split(",");
//   };

//   return (
//     <Layout>
//       <div>
//         <h1>{teamDetails.name}</h1>
//         <p>Display Name: {teamDetails.displayName}</p>
//         <p>Organization: {teamDetails.organization}</p>
//         <p>Status: {teamDetails.status}</p>
//         <p>Created By: {teamDetails.createdBy}</p>
//         <p>Last Modified By: {teamDetails.lastModifiedBy}</p>
//         <p>Created At: {new Date(teamDetails.createdAt).toString()}</p>
//         <p>Last Modified At: {new Date(teamDetails.lastModifiedAt).toString()}</p>

//         <h2>Apps:</h2>
//         <ul>
//           {teamDetails.apps.map((app, index) => (
//             <li key={index}>{app}</li>
//           ))}
//         </ul>

//         <h2>Attributes:</h2>
//         <ul>
//           {teamDetails.attributes.map((attribute, index) => {
//             // Extract the attribute values as an array
//             const attributeValues = extractAttributeValues(attribute.value);

//             return (
//               <li key={index}>
//                 {attribute.name}:
//                 <ul>
//                   {attributeValues.map((val, valIndex) => (
//                     <li key={valIndex}>{val.trim()}</li>
//                   ))}
//                 </ul>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <Buttons />
//     </Layout>
//   );
// };

// export default TeamDetails;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Buttons from "../Buttons/Buttons";
// import Layout from "../Layout";

// const TeamDetails = () => {
//   const teamDetails = useSelector((state) => state.teamDetails);

//   // Function to extract the attribute values as an array (trimmed values only)
//   const extractAttributeValues = (value) => {
//     // Remove square brackets and split the values by commas
//     const valuesArray = value.substring(1, value.length - 1).split(",");
//     // Trim the whitespace from each value and return the array
//     return valuesArray.map((val) => val.trim());
//   };

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>Loading OR No team selected</div>;
//   }

//   return (
//     <Layout>
//     <div>

//       {/* <div>
//         <h1>{teamDetails.name}</h1>
//         <p>Display Name: {teamDetails.displayName}</p>
//         <p>Organization: {teamDetails.organization}</p>
//         <p>Status: {teamDetails.status}</p>
//         <p>Created By: {teamDetails.createdBy}</p>
//         <p>Last Modified By: {teamDetails.lastModifiedBy}</p>
//         <p>Created At: {new Date(teamDetails.createdAt).toString()}</p>
//         <p>Last Modified At: {new Date(teamDetails.lastModifiedAt).toString()}</p>

//         <h2>Apps:</h2>
//         <ul>
//           {teamDetails.apps.map((app, index) => (
//             <li key={index}>{app}</li>
//           ))}
//         </ul>

//         <h2>Attributes:</h2>
//         <ul>
//           {teamDetails.attributes.map((attribute, index) => {
//             // Extract the attribute values as an array (trimmed values only)
//             const attributeValues = extractAttributeValues(attribute.value);

//             return (
//               <li key={index}>
//                 {attribute.name}:
//                 <ul>
//                   {attributeValues.map((val, valIndex) => (
//                     <li key={valIndex}>{val}</li>
//                   ))}
//                 </ul>
//               </li>
//             );
//           })}
//         </ul>
//       </div> */}
//       <Buttons />
//     </div>
//     </Layout>
//   );
// };

// export default TeamDetails;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Buttons from "../Buttons/Buttons";
// import Layout from "../Layout";
// import { fetchTeams, fetchTeamDetails } from "../../redux/store";

// const TeamDetails = () => {
//   const teamDetails = useSelector((state) => state.teamDetails);
//   // console.log("asd", teamDetails);
//   const dispatch = useDispatch();
//   console.log("teamDetails", teamDetails);
//   const teamName=teamDetails.name
//   console.log("teamName",teamName)

//   useEffect((teamName) => {
//     dispatch(fetchTeamDetails(teamName));
//   }, [teamDetails]);

//   // const serializedData = teamDetails.attributes;

//   // useEffect(() => {
//   //   // Reset the teamName state when the component mounts or when the teamDetails change
//   //   const { name } = teamDetails;
//   //   if (teamName !== name) {
//   //     setTeamName(name);
//   //   }
//   // }, [teamDetails, teamName]);

//   // const unserializeData = (serializedData) => {

//   //   if (!serializedData || serializedData.length === 0) {
//   //     return [];
//   //   }

//   //   const regex = /s:\d+:\\\"(.*?)\\\"/g;
//   //   let match;
//   //   const unserializedArray = [];

//   //   while ((match = regex.exec(serializedData[0].value)) !== null) {
//   //     const value = match[1].replace(/\\\\/g, "\\");
//   //     if (!unserializedArray.includes(value)) {
//   //       unserializedArray.push(value);
//   //     }
//   //   }

//   //   return unserializedArray;
//   // };

//   // const unserializedData = unserializeData(serializedData);

//   // Check if teamDetails is null or empty object
//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available.</div>;
//   }

//   return (
//     <Layout>
//       <div>
//         {/* <div>
//           <h1>{teamName}</h1>
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
//           </ul>

//           {serializedData && serializedData.length > 0 && (
//             <div className="p-4 fieldset-wrapper">
//               <div className="form-checkboxes">
//                 {teamDetails.attributes.map((attribute, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="js-form-item form-item js-form-type-checkbox form-item-field-api-product-0-value-corp-iag-code-token js-form-item-field-api-product-0-value-corp-iag-code-token form-check"
//                     >
//                       <ul style={{ padding: 0, margin: 0 }}>
//                         {unserializedData.map((val, valIndex) => (
//                           <li key={valIndex} style={{ listStyle: "none" }}>
//                             <input
//                               type="checkbox"
//                               value={val}
//                               style={{
//                                 marginRight: "0.5em",
//                               }}
//                             />
//                             {val}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </div> */}
//       </div>
//       <Buttons />
//     </Layout>
//   );
// };

// export default TeamDetails;

// import React from "react";
// import { useSelector } from "react-redux";
// import View from "../Teams/View";

// const TeamDetails = () => {
//   const appDetails = useSelector((state) => state.teams);
//   // console.log("view",teamDetails)
//   // const dispatch = useDispatch();
//   // const teams = useSelector((state) => state.teams);
//   // const teamname=teamDetails.name

//   // useEffect(() => {
//   //   dispatch(fetchTeams());
//   // }, [dispatch]);

//   // useEffect((teamname)=>{
//   //   dispatch(fetchTeamDetails(teamname));
//   // },[])

//   if (!appDetails || Object.keys(appDetails).length === 0) {
//     return <div>No team details available.</div>;
//   }

//   return (

//       <div>

//       {/* <Buttons /> */}
//       <View/>
//       </div>

//   );
// };

// export default TeamDetails;

// import React from "react";
// import { useSelector } from "react-redux";
// import View from "../Teams/view";

// const TeamDetails = () => {

//   const teamDetails = useSelector((state) => state.teamDetails);
//    console.log("teamDetails", teamDetails);

//   // useEffect(() => {
//   //   dispatch(fetchTeams());
//   // }, [dispatch]);
//   // const teamname=teamDetails.name
//   // console.log("teamName",teamname)

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available.</div>;
//   }

//   return (

//       <div>

//       {/* <Buttons /> */}
//       <View/>
//       </div>

//   );
// };

// export default TeamDetails;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchTeamDetails } from "../../redux/store";
// import View from "../Teams/view";

// const TeamDetails = () => {
//   const { slug } = useParams();
//   console.log("Slug:", slug);

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);

//   useEffect(() => {
//     // Fetch team details using the slug
//     dispatch(fetchTeamDetails(slug));
//   }, [dispatch, slug]);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available for {slug}.</div>;
//   }

//   return (
//     <div>
//       {/* <h1>Team Name: {teamDetails.name}</h1> */}
//       {/* Display other team details here */}
//       <View />
//     </div>
//   );
// };

// export default TeamDetails;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { fetchTeamDetails } from "../../redux/store";
// import View from "../../pages/[appGroup.name]/view";

// const TeamDetails = () => {

// const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);

//   // Use the useLocation hook to access query parameters
//   // const location = useLocation();
//   // const searchParams = new URLSearchParams(location.search);
//   // const queryParamValue = searchParams.get("queryParamName"); // Replace with your query parameter name

//   useEffect(() => {
//     // Fetch team details using the slug
//     dispatch(fetchTeamDetails());
//   }, [dispatch]);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available for .</div>;
//   }

//   return (
//     <div>
//       {/* <h1>Team Name: {teamDetails.name}</h1> */}
//       {/* Display other team details here */}
//       {/* <p>Query Parameter Value: {queryParamValue}</p>
//       Use the query parameter value */}
//       <View />
//     </div>
//   );
// };

// export default TeamDetails;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { fetchTeamDetails } from "../../redux/store";
// import View from "../../pages/[appGroup.name]/view";

// const TeamDetails = () => {
//   const appDetails = useSelector((state) => state.teams);
//   // console.log("view",teamDetails)
//    const dispatch = useDispatch();
//   // const teams = useSelector((state) => state.teams);

//   const teamDetails = useSelector((state) => state.teamDetails);
//   console.log("teamDetails",teamDetails)
//   const teamname=teamDetails.name
//   console.log("teamname",teamname)

//   useEffect((teamname)=>{
//     dispatch(fetchTeamDetails(teamname));
//   },[])

//   if (!appDetails || Object.keys(appDetails).length === 0) {
//     return <div>No team details available.</div>;
//   }

//   return (

//       <div>

//       {/* <Buttons /> */}
//       <View/>
//       </div>

//   );
// };

// export default TeamDetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "@reach/router";
import { fetchTeamDetails } from "../../redux/store";
import View from "../../pages/[appGroup.name]/view";

const TeamsPage = () => {
  const location = useLocation();
  const teamDetails = useSelector((state) => state.teamDetails);
  const teamname = teamDetails.teamName;
  console.log("teamName", teamname);

  // const searchParams = new URLSearchParams(location.search);
  // const teamname = searchParams.get("teamname");

  const dispatch = useDispatch();

  console.log("teamname", teamname);
  useEffect(() => {
    if (teamname) {
      // Fetch team details using the team name from the query parameter
      dispatch(fetchTeamDetails(teamname));
    }
  }, [dispatch, teamname]);

  if (!teamDetails || Object.keys(teamDetails).length === 0) {
    return <div>No team details available for {teamname}.</div>;
  }

  return (
    <div>
      <View />
    </div>
  );
};

export default TeamsPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "@reach/router";
// import { fetchTeamDetails } from "../../redux/store";
// import View from "../../pages/[appGroup.name]/view";

// const TeamDetails = () => {
//   const { teamname } = useParams();

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);

//   useEffect(() => {
//     if (teamname) {
//       dispatch(fetchTeamDetails(teamname));
//     }
//   }, [dispatch, teamname]);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available for {teamname}.</div>;
//   }

//   return (
//     <div>
//       <View />
//     </div>
//   );
// };

// export default TeamDetails;

// // src/components/TeamsPage.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeamDetails } from "../../redux/store";
// import View from "../../pages/[appGroup.name]/view";
// import { useParams } from "@reach/router";
// import { useLocation } from "react-router-dom";

// const TeamsPage = () => {
//     const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const teamName = searchParams.get("teamname");

//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);

//   useEffect(() => {
//     if (teamName) {
//       dispatch(fetchTeamDetails(teamName)); // Use teamName from useParams
//     }
//   }, [dispatch, teamName]);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available for {teamName}.</div>;
//   }

//   return (
//     <div>
//       {/* Rest of your component */}
//       <View/>
//     </div>
//   );
// };

// export default TeamsPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeamDetails } from "../../redux/store"; // Import the action to fetch team details
// import View from "../Teams/View";

// const TeamDetails = ({location}) => {
//   const dispatch = useDispatch();
//   const teamDetails = useSelector((state) => state.teamDetails);

//   const teamName = teamDetails ? teamDetails.name : "";
//   console.log("teamName", teamName);
//   const teamNames = new URLSearchParams(location.search).get("name");
//   //Fetch team details when the component mounts
//   useEffect(() => {
//     dispatch(fetchTeamDetails()); // Make sure to pass the appropriate parameters if needed
//   }, [dispatch]);

//   useEffect(() => {
//     if (teamNames) {
//       dispatch(fetchTeamDetails(teamNames));
//     }
//   }, [dispatch, teamName]);

//   if (!teamDetails || Object.keys(teamDetails).length === 0) {
//     return <div>No team details available.</div>;
//   }

//   // Render the team details here

//   return (
//     <div>
//       {/* Render team details */}
//       <View/>
//     </div>
//   );
// };

// export default TeamDetails;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeams } from "../../redux/store";
// import { useLocation } from "@reach/router";
// import View from "../Teams/View";

// const TeamDetails = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();

//   // Extract appGroup name from URL
//   const appGroupName = location.pathname.split("/")[1];

//   // Fetch teams using the appGroup name
//   useEffect(() => {
//     dispatch(fetchTeams(appGroupName));
//   }, [dispatch, appGroupName]);

//   // Get teams data from Redux store
//   const teams = useSelector((state) => state.teams.data);
//   const isFetching = teams.isFetching;
//   const appgroups = teams.appGroups;

//   if (!teams || isFetching) {
//     return <div>Loading teams...</div>;
//   }

//   // Find the specific appGroup using the appGroupName
//   const selectedAppGroup = appgroups.find((appGroup) => appGroup.name === appGroupName);

//   if (!selectedAppGroup) {
//     return <div>AppGroup not found.</div>;
//   }

//   return (
//     <div>
//       <h2>{selectedAppGroup.name}</h2>
//       <p>{selectedAppGroup.description}</p>
//       {/* Render other details of the selected appGroup */}
//       <View />
//     </div>
//   );
// };

//export default TeamDetails;
