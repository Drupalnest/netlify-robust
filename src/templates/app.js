

// // src/templates/team-app.js
// import React from "react";
// import { connect } from "react-redux";
// import { fetchAppDetailsasd } from "../redux/store"; // Make sure to import your action

// const TeamAppTemplate = ({ appDetails }) => {
//   return (
//     <div>
//       <h1>Team App Details</h1>
//       {appDetails && (
//         <div>
//           <h2>{appDetails.name}</h2>
//           <p>Description: {appDetails.description}</p>
//           {/* Display other app details here */}
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   appDetails: state.app.appDetailsData, // Update this based on your Redux state structure
// });

// export default connect(mapStateToProps)(TeamAppTemplate);
