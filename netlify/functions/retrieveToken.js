// // netlify/functions/retrieveToken.js

// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const TOKEN_FILE_PATH = './token.js';
// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const getTokenFromCommand = () => {
//   return new Promise((resolve, reject) => {
//     console.log('Before exec command');

//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       if (stderr) {
//         reject(new Error(`Script stderr: ${stderr}`));
//         return;
//       }

//       const lines = stdout.split('\n');
//       const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//       if (!accessTokenLine) {
//         reject(new Error('No valid access_token found in the response.'));
//         return;
//       }

//       const accessToken = accessTokenLine.split('"')[3];

//       if (!accessToken) {
//         reject(new Error('No valid access_token found in the response.'));
//         return;
//       }

//       const tokenContent = `const token = "${accessToken}";\n\nmodule.exports = token;`;
//       fs.writeFile(TOKEN_FILE_PATH, tokenContent, { flag: 'w' }, (err) => {
//         if (err) {
//           reject(err);
//         } else {
//           console.log(`Token obtained and stored successfully.`);
//           resolve(accessToken);
//         }
//       });
//     });
//   });
// }

// const retrieveToken = async () => {
//   try {
//     const token = await getTokenFromCommand();

//     if (scheduled) {
//       scheduled = false;
//       cron.cancelJob('retrieveTokenJob');
//     }

//     const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken, { scheduled: 'retrieveTokenJob' });

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // Add the function for serverless execution
// exports.handler = async function(event, context) {
//   try {
//     const token = await getTokenFromCommand();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Token retrieved successfully' })
//     };
//   } catch (error) {
//     console.error('Error:', error);

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// }









// // netlify/functions/retrieveToken.js

// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const TOKEN_FILE_PATH = './token.js';
// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const getTokenFromCommand = () => {
//   return new Promise((resolve, reject) => {
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       if (stderr) {
//         reject(new Error(`Script stderr: ${stderr}`));
//         return;
//       }

//       const lines = stdout.split('\n');
//       const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//       if (!accessTokenLine) {
//         reject(new Error('No valid access_token found in the response.'));
//         return;
//       }

//       const accessToken = accessTokenLine.split('"')[3];

//       if (!accessToken) {
//         reject(new Error('No valid access_token found in the response.'));
//         return;
//       }

//       const tokenContent = `const token = "${accessToken}";\n\nmodule.exports = token;`;
//       fs.writeFile(TOKEN_FILE_PATH, tokenContent, { flag: 'w' }, (err) => {
//         if (err) {
//           reject(err);
//         } else {
//           console.log(`Token obtained and stored successfully.`);
//           resolve(accessToken);
//         }
//       });
//     });
//   });
// }

// const retrieveToken = async () => {
//   try {
//     const token = await getTokenFromCommand();

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ accessToken: token })
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// };

// // Add the function for serverless execution
// exports.handler = async function(event, context) {
//   try {
//     const response = await retrieveToken();
//     return response;
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// }



// const { exec } = require('child_process');

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// exports.handler = async function(event, context) {
//   try {
//     console.log('Attempting to retrieve token...'); // Add this line for logging
//     const accessToken = await new Promise((resolve, reject) => {
//       exec(command, (error, stdout, stderr) => {
//         if (error) {
//           reject(error);
//           return;
//         }
//         if (stderr) {
//           reject(new Error(`Script stderr: ${stderr}`));
//           return;
//         }

//         const lines = stdout.split('\n');
//         const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//         if (!accessTokenLine) {
//           reject(new Error('No valid access_token found in the response.'));
//           return;
//         }

//         const accessToken = accessTokenLine.split('"')[3];

//         if (!accessToken) {
//           reject(new Error('No valid access_token found in the response.'));
//           return;
//         }

//         resolve(accessToken);
//       });
//     });

//     console.log('Token retrieved successfully:', accessToken); // Add this line for logging

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ accessToken }),
//     };
//   } catch (error) {
//     console.error('Error:', error); // Add this line for logging

//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };


const { exec } = require('child_process');
const path = require('path'); // Add this line

exports.handler = function(event, context, callback) {
  const scriptPath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
  const keyFilePath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json');

  const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }

    const lines = stdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    }

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ accessToken })
    });
  });
};
