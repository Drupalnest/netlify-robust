// // api.js
// import axios from "axios";
// import { updateAppDetails } from "../../redux/store"; // Adjust the import path accordingly

// export const handleAppClick = async (teamName, appName, dispatch, setAppDetails) => {
//   try {
//     const token = process.env.BEARER_TOKEN; // Replace with your actual bearer token
//     const response = await axios.get(
//       `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/${teamName}/apps/${appName}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = response.data;

//     // Dispatch the action to update the Redux store with the app details
//     dispatch(updateAppDetails(data));

//     // Update the local state with the fetched app details
//     setAppDetails(data);
//   } catch (error) {
//     console.error("Error fetching app details:", error);
//     // Handle the error here
//   }
// };
