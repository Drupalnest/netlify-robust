 //require("dotenv").config();

// const axios = require("axios");

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode, createTypes } = actions;

//   // Define custom schema for the Company type to include the "name" field and "i" field
//   const typeDefs = `
//     type Company implements Node {
//       id: ID!
//       name: String
//       i: Int
//       # ... Include other fields from your API response here
//     }
//   `;

//   // Create custom types
//   createTypes(typeDefs);

//   // Fetch the bearer token from process.env
//   const apiToken = process.env.BEARER_TOKEN;
//   if (!apiToken) {
//     console.error("No API_TOKEN found in environment variables.");
//     return;
//   }

//   // Fetch data from the API with the bearer token
//   const apiBaseUrl =
//     "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";
//   try {
//     const response = await axios.get(apiBaseUrl, {
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//       },
//     });
//     const companies = response.data;
//     console.log(companies);

//     // Create GraphQL nodes for each company
//     companies.forEach((company, i) => {
//       const nodeId = createNodeId(`company-${i}`);

//       const nodeData = {
//         id: nodeId,
//         parent: null,
//         children: [],
//         internal: {
//           type: "Company",
//           content: JSON.stringify(company),
//           contentDigest: createContentDigest(company),
//         },
//         name: company, // Assuming the company name is available in the API response
//         i: i + 1,
//         company: {}, // Assuming you want the index (i) to start from 1
//         // Add other fields from the API response to the nodeData object as needed
//       };

//       createNode(nodeData);
//     });
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }
// };

// const slugify = require("slugify");

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;

//   // Fetch the bearer token from process.env
//   const apiToken = process.env.BEARER_TOKEN;
//   if (!apiToken) {
//     console.error("No BEARER_TOKEN found in environment variables.");
//     return;
//   }

//   try {
//     // Fetch the data for all companies from the API with the bearer token
//     const apiBaseUrl =
//       "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";
//     const response = await axios.get(apiBaseUrl, {
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//       },
//     });
//     const companies = response.data;

//     // Create the team details page for each company
//     companies.forEach((company) => {
//       const teamNameSlug = slugify(company.name, { lower: true });

//       createPage({
//         path: `/team/${teamNameSlug}`,
//         component: path.resolve("./src/templates/teamDetails.js"),
//         context: {
//           teamNameSlug,
//         },
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }
// };

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;

//   try {
//     const apiEndpoint = 'https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies/{company_name}';
//     const config = {
//       headers: {
//         Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//       },
//     };
//     const response = await axios.get(apiEndpoint, config);

//     // Assuming the API response data is an array of teams
//     const teamDataArray = response.data;
//     console.log("Team Data",teamDataArray)

//     teamDataArray.forEach((team) => {
//       createPage({
//         path: `/team/${team.name}`,
//         component: path.resolve('./src/pages/team.js'),
//         context: { teamName: team.name },
//       });
//     });
//   } catch (error) {
//     console.error('Error fetching team data:', error);
//   }
// };

// gatsby-node.js

//const path = require("path");
// const axios = require("axios");

// gatsby-node.js

// const axios = require("axios");

// gatsby-node.js

// require("dotenv").config(); // Add this line at the top of gatsby-node.js

// const axios = require("axios");
// const path = require("path");

// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const bearerToken = process.env.BEARER_TOKEN;

//   try {
//     const response = await axios.get(
//       "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies",
//       {
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//         },
//       }
//     );
//     const teams = response.data;

//     // Create a page for each team
//     teams.forEach((team) => {
//       createPage({
//         path: `/team/${team}`, // Assuming each team has a `name` property
//         component: path.resolve("./src/templates/teamdetails.js"),
//         context: {
//           teamName: team,
//         },
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching teams:", error);
//   }
// };

// gatsby-node.js


// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   const bearerToken = process.env.BEARER_TOKEN;

//   // Fetch data from the API
//   const response = await axios.get(
//     "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies",
//     {
//       headers: {
//         Authorization: `Bearer ${bearerToken}`,
//       },
//     }
//   );
//   const teamsData = response.data;

//   // Create individual pages for each team
//   teamsData.forEach((team) => {
//     createPage({
//       path: `/team/${team}`,
//       component: require.resolve("./src/components/TeamDetails.js"),
//       context: {
//         teamData: team, // Pass the team data as page context
//       },
//     });
//   });
// };



// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // Match only the team details page template
//   if (page.path.match(/^\/team-details\/.+/)) {
//     createPage({
//       path: page.path,
//       component: require.resolve('./src/pages/[teamName].js'),
//       context: {
//         // Extract the team name from the page path
//         teamName: page.path.split('/').pop(),
//       },
//     });
//   }
// };

// gatsby-node.js

// const path = require('path');
// const axios = require('axios');

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   const teamDetailsTemplate = path.resolve('src/templates/teamdetails.js');

//   // Fetch team names from the API endpoint
//   try {
//     const response = await axios.get('https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies');
//     const teamsData = response.data;

//     // Create a page for each team
//     teamsData.forEach(({ teamname }) => {
//       createPage({
//         path: `/src/templates/teamdetails/${teamname}`,
//         component: teamDetailsTemplate,
//         context: {
//           teamname,
//         },
//       });
//     });
//   } catch (error) {
//     console.error('Error fetching teams from API:', error.message);
//   }
// };



const axios = require('axios');
// const { createStore } = require("./src/redux/store"); // Import your Redux store configuration
// const { fetchTeams } = require("./src/redux/store"); // Import your fetchTeams action



// gatsby-node.js
const path = require("path");
//const { createPage } = actions;
//const store = require('./src/redux/store').store; // Make sure to adjust the path to your Redux store

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  // const state = store.getState(); 
  // const teamDetails = state.teamDetails; 

  // const teamNames = Object.keys(teamDetails);
  // teamNames.forEach((teamName) => {
  //   createPage({
  //     path: `/${teamName}`,
  //     component: require.resolve('./src/templates/appgroups.js'),
  //     context: {
  //       teamName,
  //     },
  //   });
  // });




  
  console.log("Creating pages...");
  // createPage({
  //   path: "/add-team",
  //   component: path.resolve("./src/components/Teams/AddTeam.js"),
  // });

  // createPage({
  //   path: "/edit",
  //   component: path.resolve("./src/components/Teams/EditTeam.js"),
  // });
  // createPage({
  //   path: "/team-details/delete",
  //   component: path.resolve("./src/components/Teams/DeleteTeam.js"),
  // });

  // createPage({
  //   path: "/view",
  //   component: path.resolve("./src/components/Teams/View.js"),
  // });

  // createPage({
  //   path: "/apps",
  //   component: path.resolve("./src/components/TeamApps/TeamApps.js"),
  // });
 
  // createPage({
  //   path: "/add-apps",
  //   component: path.resolve("./src/components/TeamApps/AddApps.js"),
  // });
  // createPage({
  //   path: "/edit-app",
  //   component: path.resolve("./src/components/TeamApps/EditApps.js"),
  // });
  // createPage({
  //   path: "/delete-app",
  //   component: path.resolve("./src/components/TeamApps/DeleteApps.js"),
  // });
  // createPage({
  //   path: "/view-app",
  //   component: path.resolve("./src/components/TeamApps/ViewApp.js"),
  // });
  // createPage({
  //   path: "/app-buttons",
  //   component: path.resolve("./src/components/TeamApps/AppsButton.js"),
  // });
  
  // createPage({
  //   path: "/members",
  //   component: path.resolve("./src/components/Members/Members.js"),
  // });
  // createPage({
  //   path: "/add-member",
  //   component: path.resolve("./src/components/Members/AddMember.js"),
  // });
  // createPage({
  //   path: "/edit-member",
  //   component: path.resolve("./src/components/Members/EditMember.js"),
  // });

  // createPage({
  //   path: "/delete-member",
  //   component: path.resolve("./src/components/Members/DeleteMember.js"),
  // });

  // createPage({
  //   path: "/profile",
  //   component: path.resolve("./src/components/Members/Profile.js"),
  // });
  // createPage({
  //   path: "/edit-profile",
  //   component: path.resolve("./src/components/Members/EditProfile.js"),
  // });

 

  // try {
  //   const response = await axios.get("https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups");
  //   const teams = response.data.teams; // Adjust the data structure based on your API response

  //   // Iterate through the teams and create pages
  //   for (const team of teams) {
  //     const slug = team.slug; // Assuming you have a slug property in your team data
  //     const apiUrl = `https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups/${slug}`;

  //     // Fetch data from the API
  //     try {
  //       const teamResponse = await axios.get(apiUrl);
  //       const teamData = teamResponse.data; // Use this data to render the page

  //       createPage({
  //         path: `/teams/${slug}`,
  //         component: path.resolve("./src/templates/team-details.js"),
  //         context: {
  //           teamData: teamData,
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Error fetching team data:", error);
  //     }
  //   }
  // } catch (error) {
  //   console.error("Error fetching teams:", error);
  // }

  // const store = createStore(); // Create your Redux store

  // // Fetch teams data using Redux action
  //  store.dispatch(fetchTeams());

  // // Get the fetched teams data from the store's state
  // const teamsData = store.getState().teams.data;

  // // Create pages with context
  // createPage({
  //   path: "/teams",
  //   component: path.resolve("src/components/Teams.js"),
  //   context: {
  //     teamsData, // Pass your Redux data as context
  //   },
  // });
  
  // try {
  //   // Fetch data for appgroups from the API
  //   const response =  axios.get(
  //     'https://apigee.googleapis.com/v1/organizations/sbux-portal-dev/appgroups',
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );

  //   const appgroupsData = response.data.appGroups;
  //   console.log("appgroupsData",appgroupsData)

  //   // Create dynamic pages for each appgroup
  //   appgroupsData.forEach(appgroup => {
  //     createPage({
  //       path: `/appgroups/${appgroup.name}`,
  //       component: path.resolve('./src/components/Teams/View.js'),
  //       context: {
  //         slug: appgroup.name,
  //       },
  //     });
  //   });

  //   console.log('Dynamic pages for appgroups created!');
  // } catch (error) {
  //   console.error('Error fetching appgroups data:', error);
  // }

  console.log("Pages created!");
};






// // gatsby-node.js
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query {
//       allTeamsJson {
//         nodes {
//           name
//           apps {
//             name
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     throw result.errors;
//   }

//   const teams = result.data.allTeamsJson.nodes;

//   teams.forEach((team) => {
//     team.apps.forEach((app) => {
//       createPage({
//         path: `/teams/${team.name}/apps/${app.name}`,
//         component: require.resolve("./src/templates/team-app.js"),
//         context: {
//           teamName: team.name,
//           appName: app.name,
//         },
//       });
//     });
//   });
// };


// const path = require("path");

// exports.createPages = ({ actions }) => {
//   const { createPage } = actions;

//   const templates = {
//     Teams: path.resolve("./src/components/Teams"),
//     TeamApps: path.resolve("./src/components/TeamApps"),
//   };

//   const pages = [
//     { path: "/add-team", template: "AddTeam.js" },
//     { path: "/edit", template: "EditTeam.js" },
//     { path: "/delete", template: "DeleteTeam.js" },
//     { path: "/apps", template: "TeamApps.js" },
//     { path: "/view", template: "View.js" },
//     { path: "/add-apps", template: "AddApps.js" },
//     { path: "/edit-app", template: "EditApps.js" },
//     { path: "/delete-app", template: "DeleteApps.js" },
//     { path: "/view-app", template: "ViewApp.js" },
//     { path: "/app-buttons", template: "AppsButton.js" },
//   ];

//   console.log("Creating pages...");

//   pages.forEach(({ path, template }) => {
//     createPage({
//       path,
//       component: path.join(templates.Teams, template),
//       context: {}, // You can provide context data here if needed
//     });
//   });

//   console.log("Pages created!");
// };


// require("dotenv").config();

// const axios = require("axios");

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode, createTypes } = actions;

//   // Define custom schema for the Company type to include the "name" field and "i" field
//   const typeDefs = `
//     type Company implements Node {
//       id: ID!
//       name: String
//       i: Int
//       # ... Include other fields from your API response here
//     }
//   `;

//   // Create custom types
//   createTypes(typeDefs);

//   // Fetch the bearer token from process.env
//   const apiToken = process.env.BEARER_TOKEN;
//   if (!apiToken) {
//     console.error("No API_TOKEN found in environment variables.");
//     return;
//   }

//   // Fetch data from the API with the bearer token
//   const apiBaseUrl =
//     "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";
//   try {
//     const response = await axios.get(apiBaseUrl, {
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//       },
//     });
//     const companies = response.data;
//     console.log(companies);

//     // Create GraphQL nodes for each company
//     companies.forEach((company, i) => {
//       const nodeId = createNodeId(`company-${i}`);

//       const nodeData = {
//         id: nodeId,
//         parent: null,
//         children: [],
//         internal: {
//           type: "Company",
//           content: JSON.stringify(company),
//           contentDigest: createContentDigest(company),
//         },
//         name: company, // Assuming the company name is available in the API response
//         i: i + 1, // Assuming you want the index (i) to start from 1
//         // Add other fields from the API response to the nodeData object as needed
//       };

//       createNode(nodeData);
//     });

//     // Perform POST, PUT, DELETE operations as needed
//     await handlePost(apiBaseUrl, apiToken);
//     await handlePut(apiBaseUrl, apiToken, companies);
//     await handleDelete(apiBaseUrl, apiToken, companies);
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }
// };

// // Function to handle POST request
// const handlePost = async (apiBaseUrl, apiToken) => {
//   try {
//     const postData = {
//       name: "New Company",
//       // Add other data you want to send in the POST request
//     };

//     const postResponse = await axios.post(apiBaseUrl, postData, {
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//       },
//     });

//     // Handle the response from the POST request
//     console.log("POST response:", postResponse.data);
//   } catch (error) {
//     console.error("Error adding company:", error);
//   }
// };

// // Function to handle PUT request
// const handlePut = async (apiBaseUrl, apiToken, companies) => {
//   try {
//     const updateData = {
//       name: "Updated Company",
//       // Add other data you want to update in the PUT request
//     };

//     const companyToUpdate = companies[0]; // Assuming you want to update the first company in the list

//     const putResponse = await axios.put(
//       `${apiBaseUrl}/${companyToUpdate.id}`,
//       updateData,
//       {
//         headers: {
//           Authorization: `Bearer ${apiToken}`,
//         },
//       }
//     );

//     // Handle the response from the PUT request
//     console.log("PUT response:", putResponse.data);
//   } catch (error) {
//     console.error("Error updating company:", error);
//   }
// };

// // Function to handle DELETE request
// const handleDelete = async (apiBaseUrl, apiToken, companies) => {
//   try {
//     const companyToDelete = companies[1]; // Assuming you want to delete the second company in the list

//     const deleteResponse = await axios.delete(
//       `${apiBaseUrl}/${companyToDelete.id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${apiToken}`,
//         },
//       }
//     );

//     // Handle the response from the DELETE request
//     console.log("DELETE response:", deleteResponse.data);
//   } catch (error) {
//     console.error("Error deleting company:", error);
//   }
// };

// require("dotenv").config();

// const axios = require("axios");

// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions;

//   // Define custom schema for the Company type to include the "name" field and "i" field

//   // Fetch the bearer token from process.env
//   const apiToken = process.env.BEARER_TOKEN;
//   if (!apiToken) {
//     console.error("No API_TOKEN found in environment variables.");
//     return;
//   }

//   // Fetch data from the API with the bearer token
//   const apiBaseUrl =
//     "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";
//   try {
//     const response = await axios.get(apiBaseUrl, {
//       headers: {
//         Authorization: `Bearer ${apiToken}`,
//       },
//     });
//     const companies = response.data;
//     console.log(companies);

//     // Create GraphQL nodes for each company
//     companies.forEach((company, i) => {
//       const nodeId = createNodeId(`company-${i}`);

//       const nodeData = {
//         id: nodeId,
//         parent: null,
//         children: [],
//         internal: {
//           type: "Company",
//           content: JSON.stringify(company),
//           contentDigest: createContentDigest(company),
//         },
//         name: company, // Assuming the company name is available in the API response
//         i: i + 1, // Assuming you want the index (i) to start from 1
//         // Add other fields from the API response to the nodeData object as needed
//       };

//       createNode(nodeData);
//     });
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }
// };

// // gatsby-node.js
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   const typeDefs = `
//     type ApigeeData implements Node {
//       companies: [Company]
//     }

//     type Company {
//       id: ID!
//       name: String
//     }
//   `;

//   createTypes(typeDefs);
// };

// const axios = require("axios");

// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest, createTypes }) => {
//   const { createNode } = actions;

//   // Define the GraphQL schema for the ApigeeData_Company type
//   createTypes(`
//     type ApigeeData_Company implements Node {
//       id: ID!
//       name: String!
//     }
//   `);

//   // Fetch the bearer token from process.env
//   const apiToken = process.env.BEARER_TOKEN;
//   if (!apiToken) {
//     console.error("No BEARER_TOKEN found in environment variables.");
//     return;
//   }

//   // Fetch data from the GraphQL API with the bearer token
//   const apiBaseUrl = "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies";
//   try {
//     const response = await axios.get(
//       apiBaseUrl,
//       {
//         query: `
//           query ApigeQuery {
//             allCompany {
//               edges {
//                 node {
//                   id
//                   name
//                 }
//               }
//             }
//           }
//         `,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${apiToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const companies = response.data.data.allCompany.edges;
//     console.log(companies);

//     // Create GraphQL nodes for each company
//     companies.forEach(({ node }, i) => {
//       const nodeId = createNodeId(`company-${i}`);

//       const nodeData = {
//         id: nodeId,
//         parent: null,
//         children: [],
//         internal: {
//           type: "ApigeeData_Company",
//           content: JSON.stringify(node),
//           contentDigest: createContentDigest(node),
//         },
//         ...node, // Spread all fields from the API response as nodeData
//       };

//       createNode(nodeData);
//     });
//   } catch (error) {
//     console.error("Error fetching data from API:", error);
//   }
// };


// exports.onPreBootstrap = ({ actions }) => {
//   // Set the environment variable BEARER_TOKEN with your actual token value
//   process.env.BEARER_TOKEN = "YOUR_ACTUAL_TOKEN_VALUE";
// };


// exports.onPreBootstrap = ({ actions }) => {
//   process.env.BEARER_TOKEN = `${process.env.BEARER_TOKEN }`;
// };
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig();
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
    };
    actions.replaceWebpackConfig(config);
  }
};
