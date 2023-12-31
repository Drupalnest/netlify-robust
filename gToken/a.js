


// const { GoogleToken } = require('gtoken');

// // Create a GoogleToken instance
// const gtoken = new GoogleToken({
//    keyFile: './inspiring-bonus-405815-b81c6343d863.json', 
//    email: 'apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com',
//   scope: ['https://www.googleapis.com/auth/cloud-platform'], // Replace with your desired scope
//   eagerRefreshThresholdMillis: 5 * 60 * 1000,
// });

// // Function to get a token
// async function getToken() {
//   return new Promise((resolve, reject) => {
//     gtoken.getToken((err, tokens) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(tokens);
//     });
//   });
// }

// // Example usage
// async function main() {
//   try {
//     // Get the initial token
//     const initialToken = await getToken();
//     console.log('Initial Token:', initialToken);

//     // Your logic using the initial token

//     // Check if token needs refreshing
//     const isTokenExpired = gtoken.isExpired();
//     if (isTokenExpired) {
//       // Refresh the token
//       const refreshedToken = await getToken();
//       console.log('Refreshed Token:', refreshedToken);

//       // Your logic using the refreshed token
//     }

//     // Continue with your application logic
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Call the main function
// main();




// // netlifyFunction.js
// const { GoogleToken } = require('gtoken');

// exports.handler = async function (event, context) {
//   // Create a GoogleToken instance
//   const gtoken = new GoogleToken({
//     keyFile: './inspiring-bonus-405815-b81c6343d863.json',
//     email: 'apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com',
//     scope: ['https://www.googleapis.com/auth/cloud-platform'],
//     eagerRefreshThresholdMillis: 5 * 60 * 1000,
//   });

//   // Function to get a token
//   const getToken = () =>
//     new Promise((resolve, reject) => {
//       gtoken.getToken((err, tokens) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(tokens);
//       });
//     });

//   try {
//     // Get the initial token
//     const initialToken = await getToken();
//     console.log('Initial Token:', initialToken);

//     // Your logic using the initial token

//     // Check if token needs refreshing
//     const isTokenExpired = gtoken.isExpired();
//     if (isTokenExpired) {
//       // Refresh the token
//       const refreshedToken = await getToken();
//       console.log('Refreshed Token:', refreshedToken);

//       // Your logic using the refreshed token
//     }

//     // Continue with your application logic

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ success: true, message: 'Token retrieved successfully' }),
//     };
//   } catch (error) {
//     console.error('Error:', error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
//     };
//   }
// };




// netlifyFunction.js
const { GoogleToken } = require('gtoken');

exports.handler = async function (event, context) {
  // Create a GoogleToken instance
  const gtoken = new GoogleToken({
    keyFile: './inspiring-bonus-405815-b81c6343d863.json',
    email: 'apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com',
    scope: ['https://www.googleapis.com/auth/cloud-platform'],
    eagerRefreshThresholdMillis: 5 * 60 * 1000,
  });

  // Function to get a token
  const getToken = () =>
    new Promise((resolve, reject) => {
      gtoken.getToken((err, tokens) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens);
      });
    });

  try {
    // Get the initial token
    const initialToken = await getToken();
    console.log('Initial Token:', initialToken);

    // Your logic using the initial token

    // Check if token needs refreshing
    const isTokenExpired = gtoken.isExpired();
    if (isTokenExpired) {
      // Refresh the token
      const refreshedToken = await getToken();
      console.log('Refreshed Token:', refreshedToken);

      // Your logic using the refreshed token
    }

    // Continue with your application logic

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, accessToken: initialToken.access_token }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
    };
  }
};
