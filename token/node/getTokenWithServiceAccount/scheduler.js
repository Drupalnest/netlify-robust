// const cron = require('node-cron');
// const { exec } = require('child_process');
// const dotenv = require('dotenv');
// const fs = require('fs');

// // Load environment variables
// dotenv.config();

// // Define the command to run your script
// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// // Schedule the script to run every minute
// cron.schedule('*/45 * * * *', () => {
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return;
//     }

//     // Extract the access_token from the response
//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return;
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return;
//     }

//     // Update the .env file with the new token
//     fs.writeFileSync('.env', `BEARER_TOKEN=${accessToken}\n`, { flag: 'w' });

//     console.log(`Token obtained and stored successfully.`);
//   });
// });





// const cron = require('node-cron');
// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');

// // Define the command to run your script
// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// const retrieveToken = async () => {
//   try {
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
//       }
//     });

//     // Process the response as needed
//     console.log('Response:', response.data);
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.log('Received 401 Unauthorized error. Retrieving quick token...');

//       exec(command, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`Error: ${error.message}`);
//           return;
//         }
//         if (stderr) {
//           console.error(`Script stderr: ${stderr}`);
//           return;
//         }

//         const lines = stdout.split('\n');
//         const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
        
//         if (!accessTokenLine) {
//           console.error('No valid access_token found in the response.');
//           return;
//         }

//         const accessToken = accessTokenLine.split('"')[3];

//         if (!accessToken) {
//           console.error('No valid access_token found in the response.');
//           return;
//         }

//         fs.writeFileSync('.env', `BEARER_TOKEN=${accessToken}\n`, { flag: 'w' });

//         console.log(`Token obtained and stored successfully.`);
//       });
//     } else {
//       console.error('Error:', error);
//     }
//   }
// };

// // Call the function to start the process
// retrieveToken();
// cron.schedule('* * * * *', retrieveToken);



























































// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// // Define the command to run your script
// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   try {
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
//       }
//     });

//     // Process the response as needed
//     console.log('Response:', response.data);

//     // If successful, cancel the scheduled task
//     if (scheduled) {
//       scheduled = false;
//       cron.cancelJob(retrieveTokenJob);
//     }

//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.log('Received 401 Unauthorized error. Retrieving quick token...');

//       exec(command, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`Error: ${error.message}`);
//           return;
//         }
//         if (stderr) {
//           console.error(`Script stderr: ${stderr}`);
//           return;
//         }

//         const lines = stdout.split('\n');
//         const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
        
//         if (!accessTokenLine) {
//           console.error('No valid access_token found in the response.');
//           return;
//         }

//         const accessToken = accessTokenLine.split('"')[3];

//         if (!accessToken) {
//           console.error('No valid access_token found in the response.');
//           return;
//         }

//         fs.writeFileSync('.env', `BEARER_TOKEN=${accessToken}\n`, { flag: 'w' });

//         console.log(`Token obtained and stored successfully.`);

//         // If token is successfully obtained, schedule the retrieveToken function
//         if (!scheduled) {
//           scheduled = true;
//           const retrieveTokenJob = cron.schedule('* * * * *', retrieveToken);
//         }

//       });
//     } else {
//       console.error('Error:', error);
//     }
//   }
// };

// // Call the function to start the process
// retrieveToken();


const axios = require('axios');
const { exec } = require('child_process');
const fs = require('fs');
const cron = require('node-cron');

const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

let scheduled = false;

const retrieveToken = async () => {
  try {
    const response = await axios.get('https://apigee.googleapis.com/v1/organizations/apt-subset-398000/appgroups', {
      headers: {
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
      }
    });

    console.log('Response:', response.data);

    if (scheduled) {
      scheduled = false;
      cron.cancelJob(retrieveTokenJob);
    }

  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Received 401 Unauthorized error. Retrieving quick token...');

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Script stderr: ${stderr}`);
          return;
        }

        const lines = stdout.split('\n');
        const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
        
        if (!accessTokenLine) {
          console.error('No valid access_token found in the response.');
          return;
        }

        const accessToken = accessTokenLine.split('"')[3];

        if (!accessToken) {
          console.error('No valid access_token found in the response.');
          return;
        }

        fs.writeFileSync('.env', `BEARER_TOKEN=${accessToken}\n`, { flag: 'w' });
        // localStorage.setItem('BEARER_TOKEN', accessToken);
        



        console.log(`Token obtained and stored successfully.`);

        if (!scheduled) {
          scheduled = true;
          const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken); // Run every 30 minutes
        }

      });
    } else {
      console.error('Error:', error);
    }
  }
};

// Call the function to start the process
retrieveToken();







// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const tokenFilePath = './token/node/getTokenWithServiceAccount/token.txt';

// const storeToken = (token) => {
//   fs.writeFileSync(tokenFilePath, token, 'utf8');
// };

// const retrieveToken = async () => {
//   try {
//     const token = fs.readFileSync(tokenFilePath, 'utf8').trim();

//     console.log('Token:', token);

//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error: ${error.message}`);
//         return;
//       }
//       if (stderr) {
//         console.error(`Script stderr: ${stderr}`);
//         return;
//       }

//       const lines = stdout.split('\n');
//       const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//       if (!accessTokenLine) {
//         console.error('No valid access_token found in the response.');
//         return;
//       }

//       const accessToken = accessTokenLine.split('"')[3];

//       if (!accessToken) {
//         console.error('No valid access_token found in the response.');
//         return;
//       }

//       storeToken(accessToken);

//       console.log(`Token obtained and stored successfully.`);

//       // Schedule the retrieveToken function after one minute
//       setTimeout(retrieveToken, 60000);
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;
// let retrieveTokenJob = null;

// const startScheduledTask = () => {
//   if (!scheduled) {
//     scheduled = true;
//     retrieveTokenJob = cron.schedule('* * * * *', retrieveToken);
//   }
// };

// const token = fs.existsSync(tokenFilePath) ? fs.readFileSync(tokenFilePath, 'utf8').trim() : null;

// if (!token) {
//   console.log('No token found. Retrieving...');
//   retrieveToken();
// } else {
//   console.log('Token already exists. Starting scheduled task...');
//   startScheduledTask();
// }






// const fs = require('fs');
// const { exec } = require('child_process');
// const cron = require('node-cron');

// let bearerToken = '';

// const getBearerToken = () => {
//   return bearerToken;
// };

// const updateBearerToken = (token) => {
//   bearerToken = token;
//   console.log("Bearer Token:", getBearerToken());
// };

// const executeCommand = (callback) => {
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return;
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return;
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return;
//     }

//     updateBearerToken(accessToken);

//     if (callback) {
//       callback();
//     }
//   });
// };

// const retrieveToken = async () => {
//   try {
//     executeCommand(() => {
//       // Schedule the retrieveToken function after 1 minute for immediate retrieval
//       setTimeout(retrieveToken, 60000); // 60 seconds = 1 minute
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;
// let retrieveTokenJob = null;

// const startScheduledTask = () => {
//   if (!scheduled) {
//     scheduled = true;
//     retrieveTokenJob = cron.schedule('* * * * *', retrieveToken);
//   }
// };

// console.log('No token stored. Retrieving...');
// executeCommand(() => {
//   startScheduledTask(); // Schedule the task
// });
// module.exports = { getBearerToken, updateBearerToken };