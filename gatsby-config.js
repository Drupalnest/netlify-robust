/**
 * @type {import('gatsby').GatsbyConfig}
 */
// const fetch = require("node-fetch");

require("dotenv").config();


module.exports = {

  // flags: {
  //   DEV_SSR: false
  // },


 // plugins: [`gatsby-plugin-material-ui`],

  siteMetadata: {
    title: `gatsby-starbucks`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-netlify',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },

      
    },

    // {
    //   resolve: 'gatsby-plugin-netlify',
    //   options: {
    //     functionsSrc: `${__dirname}/src/functions`,
    //     functionsOutput: `${__dirname}/functions`,
    //   },
    // },
    

    



    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "ApigeeData",
    //     fieldName: "apigee",
    //     url: "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies",
    //     headers: {
    //       Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    //       "Content-Type": "application/graphql",
    //     },
    //     fetchOptions: {
    //       method: "GET",
    //       mode: "cors",
    //       credentials: "include",
    //     },
    //     schemaName: "ApigeeDataSchema",
    //   },
    // },



    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: "ApigeeData",
    //     fieldName: "apigee",
    //     url: `https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies`,
    //     // The bearer token.
    //     headers: {
    //       Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    //     },

    //     // Your GraphQL query to fetch data
    //     query: `
    //       query ApigeQuery {
    //         allCompany {
    //           edges {
    //             node {
    //               id
    //               name
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   },
    // },

    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: "ApigeeData",
    //     fieldName: "apigee",
    //     url: `https://api.enterprise.apigee.com/v1/graphql`,
    //     // The bearer token (replace 'YOUR_BEARER_TOKEN' with the actual token)
    //     headers: {
    //       Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    //     },
    //     // Your GraphQL query to fetch data
    //     query: `
    //       query ApigeQuery {
    //         allCompany {
    //           edges {
    //             node {
    //               id
    //               name
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     // This will help Gatsby understand how the data returned from the query maps to the schema types
    //     createSchema: ({ createTypes }) => {
    //       createTypes(`
    //         type ApigeeData_Company implements Node {
    //           id: ID!
    //           name: String!
    //         }
    //       `);
    //     },
    //   },
    // },





    
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: ["APIGEE_GRAPHQL_ENDPOINT", "BEARER_TOKEN","REACT_APP_TOKEN_API"],
      },
    },


    
      // {
      //   resolve: `gatsby-source-drupal`,
      //   options: {
      //     baseUrl: `https://live-contentacms.pantheonsite.io/`,
      //     apiBase: `api`
      //   },
      // },




      // {
      //   resolve: `gatsby-source-drupal`,
      //   options: {
      //     baseUrl: `https://dev-starbucks-developer-portal.pantheonsite.io/`,
      //     apiBase: `jsonapi`
      //   },
      // },


        {
        resolve: `gatsby-source-drupal`,
        options: {
          baseUrl: `https://robustapihub.io/`,
          apiBase: `jsonapi`
        },
      },

     
      // {
      //   resolve: `gatsby-source-drupal`,
      //   options: {
      //     baseUrl: `https://live-contentacms.pantheonsite.io/`,
      //     apiBase: jsonapi,
      //     headers: {
      //       Authorization: `Bearer ${process.env.DRUPAL_AUTH_TOKEN}`,
      //     },
      //   },
      // },


    // {
    //   resolve: "gatsby-source-rest-api",
    //   options: {
    //     apiUrl: "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies", // Replace this with your RESTful API endpoint
    //     typeName: "RestApiData", // The type name for the GraphQL nodes created by this plugin
    //     fieldName: "restApiData", // The field name for the GraphQL nodes accessible in your components
    //     // Add the bearer token using process.env
    //     headers: {
    //       Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    //     },
    //   },
    // },
  ],
};

// exports.sourceNodes = async ({ actions }) => {
//   const { createNode } = actions;

//   // Function to fetch companies from the API
//   const fetchCompanies = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.enterprise.apigee.com/v1/organizations/kenpatolia-a7241f81-eval/companies",
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//           },
//         }
//       );

//       return response.data.companies; // Assuming the data structure from the API
//     } catch (error) {
//       console.error("Error fetching companies:", error);
//       return [];
//     }
//   };

//   const companies = await fetchCompanies();

//   // Create nodes for each company
//   companies.forEach((company) => {
//     createNode({
//       ...company,
//       id: company.id, // Ensure unique ID
//       parent: null,
//       children: [],
//       internal: {
//         type: "ApigeeCompany", // Define the node type
//         content: JSON.stringify(company),
//         contentDigest: createContentDigest(company),
//       },
//     });
//   });
//
