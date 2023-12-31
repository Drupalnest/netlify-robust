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
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
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
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
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







// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   try {
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
//       }
//     });

//     console.log('Response:', response.data);

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
//         // localStorage.setItem('BEARER_TOKEN', accessToken);
        



//         console.log(`Token obtained and stored successfully.`);

//         if (!scheduled) {
//           scheduled = true;
//           const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken); // Run every 30 minutes
//         }

//       });
//     } else {
//       console.error('Error:', error);
//     }
//   }
// };

// // Call the function to start the process
// retrieveToken();







































// const axios = require('axios');
// const { exec } = require('child_process');
// const cron = require('node-cron');

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   try {
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('BEARER_TOKEN')}`
//       }
//     });

//     console.log('Response:', response.data);

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

//         // Store the token in localStorage
//         localStorage.setItem('BEARER_TOKEN', accessToken);

//         console.log(`Token obtained and stored successfully.`);

//         if (!scheduled) {
//           scheduled = true;
//           const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken); // Run every minute
//         }
//       });
//     } else {
//       console.error('Error:', error);
//     }
//   }
// };

// // Call the function to start the process
// retrieveToken();



// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const TOKEN_FILE_PATH = './token.txt';

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   try {
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${getTokenFromFile()}`
//       }
//     });

//     console.log('Response:', response.data);

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

//         // Store the token in the file
//         fs.writeFileSync(TOKEN_FILE_PATH, accessToken);

//         console.log(`Token obtained and stored successfully.`);

//         if (!scheduled) {
//           scheduled = true;
//           const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken); // Run every minute
//         }
//       });
//     } else {
//       console.error('Error:', error);
//     }
//   }
// };

// const getTokenFromFile = () => {
//   try {
//     return fs.readFileSync(TOKEN_FILE_PATH, 'utf8').trim();
//   } catch (error) {
//     console.error(`Error reading token file: ${error.message}`);
//     return '';
//   }
// }

// // Call the function to start the process
// retrieveToken();














const axios = require('axios');
const { exec } = require('child_process');
const fs = require('fs');
const cron = require('node-cron');

const TOKEN_FILE_PATH = './token.txt';

const command = 'node ./netlify/functions/token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

let scheduled = false;

const retrieveToken = async () => {
  try {
    const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
      headers: {
        'Authorization': `Bearer ${getTokenFromFile()}`
      }
    });

    console.log('Response:', response.data);

    if (scheduled) {
      scheduled = false;
      retrieveTokenJob.stop(); // Use stop method instead of cancelJob
    }

  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Received 401 Unauthorized error. Retrieving quick token...');

      exec(command, (error, stdout, stderr) => {
        console.log('Script Output:', stdout);
        console.error('Script Error:', stderr);

        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }

        const accessTokenLine = stdout.includes('"access_token":') ? stdout.match(/"access_token":\s*"(.*?)"/)[1] : null;

        if (!accessTokenLine) {
          console.error('No valid access_token found in the response.');
          return;
        }

        const accessToken = accessTokenLine.trim();

        if (!accessToken) {
          console.error('No valid access_token found in the response.');
          return;
        }

        // Store the token in the file
        fs.writeFileSync(TOKEN_FILE_PATH, accessToken);

        console.log(`Token obtained and stored successfully.`);

        if (!scheduled) {
          scheduled = true;
          retrieveTokenJob.start(); // Use start method for cron job
        }
      });
    } else {
      console.error('Error:', error);
    }
  }
};

const getTokenFromFile = () => {
  try {
    return fs.readFileSync(TOKEN_FILE_PATH, 'utf8').trim();
  } catch (error) {
    console.error(`Error reading token file: ${error.message}`);
    return '';
  }
}

// Use an async function inside the cron job
const retrieveTokenJob = cron.schedule('*/1 * * * *', async () => {
  await retrieveToken();
});

// Call the function to start the process
retrieveToken();
