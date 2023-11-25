


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




// // netlifyFunction.js
// const { GoogleToken } = require('gtoken');

// exports.handler = async function (event, context) {
//   // Create a GoogleToken instance
//   const gtoken = new GoogleToken({
//     keyFile: 'netlify/functions/inspiring-bonus-405815-b81c6343d863.json',
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
//       body: JSON.stringify({ success: true, accessToken: initialToken.access_token }),
//     };
//   } catch (error) {
//     console.error('Error:', error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
//     };
//   }
// };



// // netlifyFunction.js
// const { GoogleToken } = require('gtoken');
// const fs = require('fs-extra');


// // Get the absolute path to the JSON key file



// const filePath = {
//   "type": "service_account",
//   "project_id": "inspiring-bonus-405815",
//   "private_key_id": "b81c6343d8631ab79268ef07f17ee4b55fd4cab0",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCzcVNeaREvR4Tf\nnrt1Aqdpbk/58NX5iFUkEAW/E/0+vjiSOqBUkC4ijkal7q0hlt3FknEusIKVrkiQ\nhJJTjhool3yjgHSLq+W1rpnY9i9MmDCfjdstNI7OdAMPczmB5oPKX+G/4HsnCuZ/\nEOA+psT+/JCT2Yo/WCEKL2qwTQgA8V3AAiFgV+wDB0KpKNkJSa5QMKskrSbsBOjM\n6gIj8LMTGn9t6eKk7oedLV+mxG5yoPaTTCkews7zE6Qzu7RY1Duhy7rC5hy4t1TK\nc21Zvhqccqra863e5+Loy//zKz+L22RA2t5LDRqbM81zaJChTlbRwPAmnrSRS0DX\nqmFvn/7pAgMBAAECggEAPO5OtkCr/qdk1X/zPES17wVvr7mZFr2112R/ZwYVGHCE\nChdRKNW6bK5uC9sTO9QcIwHaX9W8ybGf3z685xVaCY2C24v7RxAMFJigkfzqS7Jj\n1FHZaiyuDylyfpUMInFRL+9F2x8RAk1fvibPVkbPnpvJRgL4wBCfS3OVYR8PCC5b\nq3biI++oshF1Sx6KoRCpk+EzzPcxAB+sLGkdOAeLr1CWJ19UxjWiCr3zmEetWEJg\noZxpkbAtV4ZLCgOVuYLmKKkRZMsaJYBrdYRI12h+OlFlndcj9lEpYosjfa2Rr3f2\nVGhPOw7xWycu1wcdRuTz7Bd5wePhZE6U+wwLXW5XLwKBgQDY77iQGzXqrM4ZbqII\n96OnZN/AgW+PrCygQO3PDIxEKbROVqq4/sPbJTsHODfBW704D2/TQ8dNRJaDXVoF\nk4ZBvhvEMJQUHBw0FqSnQ6IJzD83p/cevNx2Ubhg1nK0X2pT1BcEKfFYQAA8vmHk\nJTUAe+AAfw37XqXu9lMk+ksBPwKBgQDTwTpwUciYmoCbZyy/INvl0QbS/tKPTWlf\nKwiTgM3upVbruqQon/G3KDJTY/f4gNwy7wqJ0SNa/Hi3QH89Lla0n9FqZjWKFf5O\n6257l1tYuFLJgPZQl9A9klwcxTjjMFWA29yJo4IDBJ+RoADd2PX4jNba1BVe35+D\nSxnKIj5N1wKBgQCR9rn4PFbKz/rcodPktLsopnbm0DCAOxjLuuRHq+m081qeWzID\nx2eAzEwrT2g0ccWfMsPLIo+3La8YNHedyOVM1t1X5Fe+MCvJ4HJpGNiuPv9KM3nS\n9MBh3BpzDdegBZNFVC8oXhBFkMqYFIFJQL+o07CkpNiDieucHaFUABT3gQKBgQDT\nqhFlForh54ZoUGCNCCZmeWNN40PL1IBgjZ57+sNeKc1RwnW22fH+t+JeMs46i2wQ\nSZsKGZAysa1k18aX/ErVL+9fYJ1h0wwqDPGZ/rhjXZP7MbqE4stX0IXciFON3NGL\nBbpTpqodpDBwmzRijS2JbhaSFG7sL7G9xoMX5tTKbwKBgQCzhioBO/tFrgYmdNCq\ncu1lOvZzv6As6RLXHLbI4aKuCeP7iNIEjhnNENqQhGUfRvV7X6Qi0dIO3PPmEm/e\nlYcOkPlYczThhvAZL86Qb2QZliMrb95Wycb9K1MpJxEEoPIx6k0xSkr1DaAWFBXM\nS2OJ3CqyWM/YsMnS/QUIZSgh8w==\n-----END PRIVATE KEY-----\n",
//   "client_email": "apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com",
//   "client_id": "108162846277303501037",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/apigee-acess%40inspiring-bonus-405815.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }








// // Check if the file exists
// // if (!fs.existsSync(filePath)) {
// //   console.error(`Error: File not found - ${filePath}`);
// //   process.exit(1); // Exit the process with an error code
// // }

// // Create a GoogleToken instance
// const gtoken = new GoogleToken({
//   keyFile: filePath,
//   email: 'apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com',
//   scope: ['https://www.googleapis.com/auth/cloud-platform'],
//   eagerRefreshThresholdMillis: 5 * 60 * 1000,
// });

// // Function to get a token
// const getToken = () =>
//   new Promise((resolve, reject) => {
//     gtoken.getToken((err, tokens) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(tokens);
//     });
//   });

// exports.handler = async function (event, context) {
//   try {
//     // Get the initial token
//     const initialToken = await getToken();
//     console.log('Initial Token:', initialToken);

//     // Your logic using the initial token

//     // Check if token needs refreshing based on expires_in
//     const expirationTime = initialToken.expires_in * 1000; // Convert seconds to milliseconds
//     const currentTime = Date.now();

//     if (currentTime + expirationTime < gtoken.eagerRefreshThresholdMillis) {
//       // Refresh the token
//       const refreshedToken = await getToken();
//       console.log('Refreshed Token:', refreshedToken);

//       // Your logic using the refreshed token
//     }

//     // Continue with your application logic

//     return {
//       statusCode: 200,
//       body: JSON.stringify({  accessToken: initialToken.access_token }),
//     };
//   } catch (error) {
//     console.error('Error:', error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ success: false, error: 'Internal Server Error' }),
//     };
//   }
// };



// // netlifyFunction.js
// const { GoogleToken } = require('gtoken');
// const fs = require('fs-extra');

// // Provide the private key directly as a string
// const privateKey = `-----BEGIN PRIVATE KEY-----
// MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCzcVNeaREvR4Tf
// nrt1Aqdpbk/58NX5iFUkEAW/E/0+vjiSOqBUkC4ijkal7q0hlt3FknEusIKVrkiQ
// hJJTjhool3yjgHSLq+W1rpnY9i9MmDCfjdstNI7OdAMPczmB5oPKX+G/4HsnCuZ/
// EOA+psT+/JCT2Yo/WCEKL2qwTQgA8V3AAiFgV+wDB0KpKNkJSa5QMKskrSbsBOjM
// 6gIj8LMTGn9t6eKk7oedLV+mxG5yoPaTTCkews7zE6Qzu7RY1Duhy7rC5hy4t1TK
// c21Zvhqccqra863e5+Loy//zKz+L22RA2t5LDRqbM81zaJChTlbRwPAmnrSRS0DX
// qmFvn/7pAgMBAAECggEAPO5OtkCr/qdk1X/zPES17wVvr7mZFr2112R/ZwYVGHCE
// ChdRKNW6bK5uC9sTO9QcIwHaX9W8ybGf3z685xVaCY2C24v7RxAMFJigkfzqS7Jj
// 1FHZaiyuDylyfpUMInFRL+9F2x8RAk1fvibPVkbPnpvJRgL4wBCfS3OVYR8PCC5b
// q3biI++oshF1Sx6KoRCpk+EzzPcxAB+sLGkdOAeLr1CWJ19UxjWiCr3zmEetWEJg
// oZxpkbAtV4ZLCgOVuYLmKKkRZMsaJYBrdYRI12h+OlFlndcj9lEpYosjfa2Rr3f2
// VGhPOw7xWycu1wcdRuTz7Bd5wePhZE6U+wwLXW5XLwKBgQDY77iQGzXqrM4ZbqII
// 96OnZN/AgW+PrCygQO3PDIxEKbROVqq4/sPbJTsHODfBW704D2/TQ8dNRJaDXVoF
// k4ZBvhvEMJQUHBw0FqSnQ6IJzD83p/cevNx2Ubhg1nK0X2pT1BcEKfFYQAA8vmHk
// JTUAe+AAfw37XqXu9lMk+ksBPwKBgQDTwTpwUciYmoCbZyy/INvl0QbS/tKPTWlf
// KwiTgM3upVbruqQon/G3KDJTY/f4gNwy7wqJ0SNa/Hi3QH89Lla0n9FqZjWKFf5O
// 6257l1tYuFLJgPZQl9A9klwcxTjjMFWA29yJo4IDBJ+RoADd2PX4jNba1BVe35+D
// SxnKIj5N1wKBgQCR9rn4PFbKz/rcodPktLsopnbm0DCAOxjLuuRHq+m081qeWzID
// x2eAzEwrT2g0ccWfMsPLIo+3La8YNHedyOVM1t1X5Fe+MCvJ4HJpGNiuPv9KM3nS
// 9MBh3BpzDdegBZNFVC8oXhBFkMqYFIFJQL+o07CkpNiDieucHaFUABT3gQKBgQDT
// qhFlForh54ZoUGCNCCZmeWNN40PL1IBgjZ57+sNeKc1RwnW22fH+t+JeMs46i2wQ
// SZsKGZAysa1k18aX/ErVL+9fYJ1h0wwqDPGZ/rhjXZP7MbqE4stX0IXciFON3NGL
// BbpTpqodpDBwmzRijS2JbhaSFG7sL7G9xoMX5tTKbwKBgQCzhioBO/tFrgYmdNCq
// cu1lOvZzv6As6RLXHLbI4aKuCeP7iNIEjhnNENqQhGUfRvV7X6Qi0dIO3PPmEm/e
// lYcOkPlYczThhvAZL86Qb2QZliMrb95Wycb9K1MpJxEEoPIx6k0xSkr1DaAWFBXM
// S2OJ3CqyWM/YsMnS/QUIZSgh8w==
// -----END PRIVATE KEY-----`;

// const email = 'apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com';

// // Create a GoogleToken instance
// const gtoken = new GoogleToken({
//   key: privateKey, // Set keyFile to null when providing keyData directly
//   email: email,
//   scope: ['https://www.googleapis.com/auth/cloud-platform'],
//   eagerRefreshThresholdMillis: 5 * 60 * 1000,
// });

// // Function to get a token
// const getToken = () =>
//   new Promise((resolve, reject) => {
//     gtoken.getToken((err, tokens) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(tokens);
//     });
//   });

// exports.handler = async function (event, context) {



//   const headers = {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'Content-Type',
//   };

//   if (event.httpMethod === 'OPTIONS') {
//     return {
//       statusCode: 200,
//       headers,
//       body: '',
//     };
//   }
//   try {
//     // Get the initial token
//     const initialToken = await getToken();
//     console.log('Initial Token:', initialToken);

//     // Your logic using the initial token

//     // Check if token needs refreshing based on expires_in
//     const expirationTime = initialToken.expires_in * 1000; // Convert seconds to milliseconds
//     const currentTime = Date.now();

//     if (currentTime + expirationTime < gtoken.eagerRefreshThresholdMillis) {
//       // Refresh the token
//       const refreshedToken = await getToken();
//       console.log('Refreshed Token:', refreshedToken);

//       // Your logic using the refreshed token
//     }

//     // Continue with your application logic

//     return {
//       statusCode: 200,
//       body: JSON.stringify({  accessToken: initialToken.access_token }),
//     };
//   } catch (error) {
//     console.error('Error:', error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ success: false, error: error.message || 'Internal Server Error' }),
//     };
//   }
// };



// netlifyFunction.js
const { GoogleToken } = require('gtoken');

// Provide the private key directly as a string
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCzcVNeaREvR4Tf
nrt1Aqdpbk/58NX5iFUkEAW/E/0+vjiSOqBUkC4ijkal7q0hlt3FknEusIKVrkiQ
hJJTjhool3yjgHSLq+W1rpnY9i9MmDCfjdstNI7OdAMPczmB5oPKX+G/4HsnCuZ/
EOA+psT+/JCT2Yo/WCEKL2qwTQgA8V3AAiFgV+wDB0KpKNkJSa5QMKskrSbsBOjM
6gIj8LMTGn9t6eKk7oedLV+mxG5yoPaTTCkews7zE6Qzu7RY1Duhy7rC5hy4t1TK
c21Zvhqccqra863e5+Loy//zKz+L22RA2t5LDRqbM81zaJChTlbRwPAmnrSRS0DX
qmFvn/7pAgMBAAECggEAPO5OtkCr/qdk1X/zPES17wVvr7mZFr2112R/ZwYVGHCE
ChdRKNW6bK5uC9sTO9QcIwHaX9W8ybGf3z685xVaCY2C24v7RxAMFJigkfzqS7Jj
1FHZaiyuDylyfpUMInFRL+9F2x8RAk1fvibPVkbPnpvJRgL4wBCfS3OVYR8PCC5b
q3biI++oshF1Sx6KoRCpk+EzzPcxAB+sLGkdOAeLr1CWJ19UxjWiCr3zmEetWEJg
oZxpkbAtV4ZLCgOVuYLmKKkRZMsaJYBrdYRI12h+OlFlndcj9lEpYosjfa2Rr3f2
VGhPOw7xWycu1wcdRuTz7Bd5wePhZE6U+wwLXW5XLwKBgQDY77iQGzXqrM4ZbqII
96OnZN/AgW+PrCygQO3PDIxEKbROVqq4/sPbJTsHODfBW704D2/TQ8dNRJaDXVoF
k4ZBvhvEMJQUHBw0FqSnQ6IJzD83p/cevNx2Ubhg1nK0X2pT1BcEKfFYQAA8vmHk
JTUAe+AAfw37XqXu9lMk+ksBPwKBgQDTwTpwUciYmoCbZyy/INvl0QbS/tKPTWlf
KwiTgM3upVbruqQon/G3KDJTY/f4gNwy7wqJ0SNa/Hi3QH89Lla0n9FqZjWKFf5O
6257l1tYuFLJgPZQl9A9klwcxTjjMFWA29yJo4IDBJ+RoADd2PX4jNba1BVe35+D
SxnKIj5N1wKBgQCR9rn4PFbKz/rcodPktLsopnbm0DCAOxjLuuRHq+m081qeWzID
x2eAzEwrT2g0ccWfMsPLIo+3La8YNHedyOVM1t1X5Fe+MCvJ4HJpGNiuPv9KM3nS
9MBh3BpzDdegBZNFVC8oXhBFkMqYFIFJQL+o07CkpNiDieucHaFUABT3gQKBgQDT
qhFlForh54ZoUGCNCCZmeWNN40PL1IBgjZ57+sNeKc1RwnW22fH+t+JeMs46i2wQ
SZsKGZAysa1k18aX/ErVL+9fYJ1h0wwqDPGZ/rhjXZP7MbqE4stX0IXciFON3NGL
BbpTpqodpDBwmzRijS2JbhaSFG7sL7G9xoMX5tTKbwKBgQCzhioBO/tFrgYmdNCq
cu1lOvZzv6As6RLXHLbI4aKuCeP7iNIEjhnNENqQhGUfRvV7X6Qi0dIO3PPmEm/e
lYcOkPlYczThhvAZL86Qb2QZliMrb95Wycb9K1MpJxEEoPIx6k0xSkr1DaAWFBXM
S2OJ3CqyWM/YsMnS/QUIZSgh8w==
-----END PRIVATE KEY-----`;

const email = 'apigee-acess@inspiring-bonus-405815.iam.gserviceaccount.com';

// Create a GoogleToken instance
const gtoken = new GoogleToken({
  key: privateKey,
  email: email,
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

exports.handler = async function (event, context) {
  // Add CORS headers to the response
  const headers = {
    'Access-Control-Allow-Origin': '*', // Change this to your specific domain in production
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Get the initial token
    const initialToken = await getToken();
    console.log('Initial Token:', initialToken);

    // Your logic using the initial token

    // Check if token needs refreshing based on expires_in
    const expirationTime = initialToken.expires_in * 1000; // Convert seconds to milliseconds
    const currentTime = Date.now();

    if (currentTime + expirationTime < gtoken.eagerRefreshThresholdMillis) {
      // Refresh the token
      const refreshedToken = await getToken();
      console.log('Refreshed Token:', refreshedToken);

      // Your logic using the refreshed token
    }

    // Continue with your application logic

    return {
      statusCode: 200,
      headers, // Include CORS headers in the response
      body: JSON.stringify({ accessToken: initialToken.access_token }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      headers, // Include CORS headers in the response
      body: JSON.stringify({ success: false, error: error.message || 'Internal Server Error' }),
    };
  }
};
