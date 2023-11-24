// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const cron = require('node-cron');

// dotenv.config();

// const app = express();

// app.use(cors());

// app.get('/getAccessToken', (req, res) => {
//   const accessToken = process.env.BEARER_TOKEN;
//   res.json({ accessToken });
// });

// // Schedule a task to run every minute
// cron.schedule('* * * * *', () => {
//   console.log('Running task every minute');
//   // Add your code here to perform the task
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });






// const express = require('express');
// const { exec } = require('child_process');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.get('/getAccessToken', (req, res) => {
//   const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     return res.json({ accessToken });
//   });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const TOKEN_FILE_PATH = './token.js';

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   try {
//  const token = getTokenFromFile();  // Move this line here
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${token}`
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
//         const tokenContent = `const token = "${accessToken}";\n\nmodule.exports = token;`;
//         fs.writeFile(TOKEN_FILE_PATH, tokenContent, { flag: 'w' }, (err) => {
//           if (err) {
//             console.error(`Error writing token to file: ${err}`);
//           } else {
//             console.log(`Token obtained and stored successfully.`);
//           }
//         });

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




// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const TOKEN_FILE_PATH = './token.js';

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   const token = getTokenFromFile();  // Move this line here
  
//   try {
//     const response = await axios.get('https://apigee.googleapis.com/v1/organizations/inspiring-bonus-405815/appgroups', {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     console.log('Response:', response.data);

//     if (scheduled) {
//       scheduled = false;
//       cron.cancelJob(retrieveTokenJob);
//     }

//   } catch (error) {
//     // ...
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





// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const cron = require('node-cron');

// const TOKEN_FILE_PATH = './token.js';

// const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

// let scheduled = false;

// const retrieveToken = async () => {
//   try {
//     if (scheduled) {
//       scheduled = false;
//       cron.cancelJob(retrieveTokenJob);
//     }

//     const token = await getTokenFromCommand(); // Modified this line

//     // Rest of your code remains the same

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

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
//           resolve(accessToken); // Resolve with the token
//         }
//       });
//     });
//   });
// }

// // Call the function to start the process
// retrieveToken();







// //token
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

//     if (scheduled) {
//       scheduled = false;
//       cron.cancelJob('retrieveTokenJob');
//     }

//     const retrieveTokenJob = cron.schedule('*/1 * * * *', retrieveToken, { scheduled: 'retrieveTokenJob' });

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// retrieveToken();

// exports.handler = async function(event, context) {
//   try {
//     const accessToken = await getTokenFromCommand();
    
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ accessToken })
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// }



const express = require(`express`);
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, `./dist`)));

app.listen(80);
