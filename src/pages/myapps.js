// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "gatsby";
// import Layout from "../components/Layout";
// import { fetchTeams } from "../redux/store";

// const MyApps = () => {
//   const dispatch = useDispatch();
//   const teams = useSelector((state) => state.teams.data);
//   console.log("teams",teams)

//   const [filteredTeams, setFilteredTeams] = useState([]);

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );

//   useEffect(() => {
//     const adminName = loginResponse?.current_user?.name;

//     console.log("adminName",adminName)

//     if (Array.isArray(teams)) {
//       const updatedFilteredTeams = teams
//         .map((team) => {
//           if (team.attributes) {
//             const developerDetailsAttr = team.attributes.find(
//               (attr) => attr.name === "__apigee_reserved__developer_details"
//             );
//             if (developerDetailsAttr) {
//               const developerDetails = JSON.parse(developerDetailsAttr.value);
//               return developerDetails.some(
//                 (detail) => detail.developer === adminName
//               )
//                 ? team
//                 : null;
//             }
//           }
//           return null;
//         })
//         .filter(Boolean);

//       setFilteredTeams(updatedFilteredTeams);
//       console.log("updatedFilteredTeams", updatedFilteredTeams);
//     }
//   }, [loginResponse, teams]);

//   return (
//     <Layout>
//       <div className="container table-responsive">
//         <div id="datatable" />
//         <div className="container table-responsive ">
//           {filteredTeams.length > 0 ? (
//             <table className="table">
//               <tbody className="border-bottom">
//                 {filteredTeams.map((appGroup, index) => (
//                   <tr key={appGroup.name ?? index} className="border-bottom">
//                     <td className="text-center align-middle border-bottom">
//                       <button
//                         className="fw-bold rounded-3"
//                         style={{
//                           background: "none",
//                           border: "none",
//                           cursor: "pointer",
//                           fontSize: "20px",
//                         }}
//                       >
//                         <Link to={`/${appGroup.name}`}>{appGroup.displayName}</Link>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No appgroups found</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default MyApps;

































// //contact No 1809842929

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "gatsby";
// import Layout from "../components/Layout";
// import { fetchTeams, fetchApps } from "../redux/store";

// const MyApps = () => {
//   const dispatch = useDispatch();
//   const [filteredTeams, setFilteredTeams] = useState([]);
//   const [allApps, setAllApps] = useState([]);
//   const teams = useSelector((state) => state.teams.data);
//   const loginResponse = useSelector(
//     (state) => state.loginReducer.loginResponse
//   );

//   useEffect(() => {
//     dispatch(fetchTeams());
//   }, [dispatch]);

//   useEffect(() => {
//     const adminName = loginResponse?.current_user?.name;

//     if (Array.isArray(teams?.appGroups)) {
//       const updatedFilteredTeams = teams.appGroups.filter((team) => {
//         if (team.attributes) {
//           const developerDetailsAttr = team.attributes.find(
//             (attr) => attr.name === "__apigee_reserved__developer_details"
//           );
//           if (developerDetailsAttr) {
//             const developerDetails = JSON.parse(developerDetailsAttr.value);
//             return developerDetails.some(
//               (detail) => detail.developer === adminName
//             );
//           }
//         }
//         return false;
//       });

//       setFilteredTeams(updatedFilteredTeams);
//       console.log("Updated Filtered Teams:", updatedFilteredTeams);

//       // Fetch apps for each app group
//       updatedFilteredTeams.forEach((team) => {
//         dispatch(fetchApps(team.name)); // Assuming you pass the app group name as an argument
//       });
//     }
//   }, [loginResponse, teams, dispatch]);

//   const appsData = useSelector((state) => state.appsData);
//   const appResponses = appsData.appsData; 

//   useEffect(() => {
//     if (Array.isArray(appResponses)) {
//       const allAppData = appResponses.flatMap(appResponse => appResponse.appGroupApps);
//       setAllApps(allAppData);
//     }
//   }, [appResponses]);


//   console.log("allApps",allApps)

//   return (
//     <Layout>
//       <div className="container table-responsive" style={{ marginTop: "120px" }}>
//         <div id="datatable" />
//         <div className="container table-responsive ">
//           {allApps?.length > 0 ? (
//             <table className="table">
//               <tbody className="border-bottom">
//                 {allApps.map((app, index) => (
//                   <tr key={index} className="border-bottom">
//                     <td className="text-center align-middle border-bottom">
//                       <button
//                         className="fw-bold rounded-3"
//                         style={{
//                           background: "none",
//                           border: "none",
//                           cursor: "pointer",
//                           fontSize: "20px",
//                         }}
//                       >
//                         <Link to={`/${app.name}`}>
//                           {app.name}
//                         </Link>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No appgroups found</p>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default MyApps;













import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { fetchTeams, fetchApps } from "../redux/store";

const MyApps = () => {
  const dispatch = useDispatch();
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [allApps, setAllApps] = useState([]);
  const teams = useSelector((state) => state.teams.data);
  const loginResponse = useSelector(
    (state) => state.loginReducer.loginResponse
  );

  const selectedTeamName = "newapp-55"; // Replace with the actual selected team name

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    const adminName = loginResponse?.current_user?.name;

    if (Array.isArray(teams?.appGroups)) {
      const updatedFilteredTeams = teams.appGroups.filter((team) => {
        if (team.attributes) {
          const developerDetailsAttr = team.attributes.find(
            (attr) => attr.name === "__apigee_reserved__developer_details"
          );
          if (developerDetailsAttr) {
            const developerDetails = JSON.parse(developerDetailsAttr.value);
            return developerDetails.some(
              (detail) => detail.developer === adminName
            );
          }
        }
        return false;
      });

      setFilteredTeams(updatedFilteredTeams);
      console.log("Updated Filtered Teams:", updatedFilteredTeams);

      // Fetch apps for each app group
      updatedFilteredTeams.forEach((team) => {
        dispatch(fetchApps(team.name)); // Assuming you pass the app group name as an argument
      });
    }
  }, [loginResponse, teams, dispatch]);

  const appsData = useSelector((state) => state.appsData);
  const appResponses = appsData.appsData;

  useEffect(() => {
    if (Array.isArray(appResponses)) {
      // Flatten the array of app responses
      const allAppData = appResponses.flatMap(appResponse => appResponse.appGroupApps);
      console.log("allAppData",allAppData)

      // Filter apps for the selected team
      const appsForSelectedTeam = allAppData.filter(app => app.appGroup === selectedTeamName);

      setAllApps(appsForSelectedTeam);
    }
  }, [appResponses, selectedTeamName]);

  return (
    <Layout>
      <div className="container table-responsive" style={{ marginTop: "120px" }}>
        <div id="datatable" />
        <div className="container table-responsive ">
          {allApps?.length > 0 ? (
            <table className="table">
              <tbody className="border-bottom">
                {allApps.map((app, index) => (
                  <tr key={index} className="border-bottom">
                    <td className="text-center align-middle border-bottom">
                      <button
                        className="fw-bold rounded-3"
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "20px",
                        }}
                      >
                        <Link to={`/${app.name}`}>
                          {app.name}
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No appgroups found</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyApps;
