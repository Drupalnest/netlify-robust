




// const { exec } = require('child_process');
// const path = require('path'); 

// exports.handler = function(event, context, callback) {
//   const scriptPath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//   const keyFilePath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json.json');

//   console.log('Script Path:', scriptPath);
//   console.log('Key File Path:', keyFilePath);

//   const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;

//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       });
//     }
//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       });
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       });
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return callback(null, {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       });
//     }

//     return callback(null, {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*", 
//         "Access-Control-Allow-Headers": "Content-Type",
//       },
//       body: JSON.stringify({ accessToken })
//     });
//   });
// };




// const util = require('util');
// const exec = util.promisify(require('child_process').exec);
// const path = require('path');

// exports.handler = async function(event, context) {
//   try {
//     const scriptPath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
// const keyFilePath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');

//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;

//     const { stdout, stderr } = await exec(command);

//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*", 
//         "Access-Control-Allow-Headers": "Content-Type",
//       },
//       body: JSON.stringify({ accessToken })
//     };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// };


// // handler.mjs
// import { exec } from 'child_process';
// import path from 'path';
// import esm from 'esm';



// const esmRequire = esm(module);

// const handler = async (event, context) => {
//   try {
//     const scriptPath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//     const keyFilePath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');

//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
//     const { stdout, stderr } = await esmRequire('util').promisify(exec)(command);

//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*", 
//         "Access-Control-Allow-Headers": "Content-Type",
//       },
//       body: JSON.stringify({ accessToken })
//     };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// };

// //export { handler };



// const { exec } = require('child_process');
// const path = require('path');
// const esm = require('esm');

// const esmRequire = esm(module);

// exports.handler = async (event, context) => {
//   try {
//     const scriptPath = require.resolve('./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//     const keyFilePath = require.resolve('./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');
    

//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
//     const { stdout, stderr } = await esmRequire('util').promisify(exec)(command);

//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*", 
//         "Access-Control-Allow-Headers": "Content-Type",
//       },
//       body: JSON.stringify({ accessToken })
//     };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// };
// // // export { handler };




// const { exec } = require('child_process');
// const path = require('path');
// const esm = require('esm');

// const esmRequire = esm(module);

// exports.handler = async (event, context) => {
//   try {
//     const scriptPath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//     const keyFilePath = path.resolve(__dirname, './token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');

//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
//     const { stdout, stderr } = await esmRequire('util').promisify(exec)(command);

//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' })
//       };
//     }

//     return {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers": "Content-Type",
//       },
//       body: JSON.stringify({ accessToken })
//     };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' })
//     };
//   }
// };




// const { spawn } = require('child_process');
// const path = require('path');

// exports.handler = async (event, context) => {
//   try {
//     // Determine the absolute path of the current script
//     const currentScriptPath = __filename;

//     // Build paths relative to the current script
//     const scriptPath = path.resolve(__dirname, 'token', 'node', 'getTokenWithServiceAccount', 'getTokenWithServiceAccount.js');
//     const keyFilePath = path.resolve(__dirname, 'token', 'node', 'getTokenWithServiceAccount', 'inspiring-bonus-405815-b81c6343d863.json');

//     console.log('Current working directory:', process.cwd());
//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     // Execute the script as a separate process asynchronously
//     const child = spawn('node', [scriptPath, '-v', '--keyfile', keyFilePath]);

//     let stdout = '';
//     let stderr = '';

//     child.stdout.on('data', (data) => {
//       stdout += data.toString();
//     });

//     child.stderr.on('data', (data) => {
//       stderr += data.toString();
//     });

//     await new Promise((resolve) => {
//       child.on('close', resolve);
//     });

//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       };
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find((line) => line.startsWith('  "access_token":'));

//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       };
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       };
//     }

//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': 'Content-Type',
//       },
//       body: JSON.stringify({ accessToken }),
//     };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };




// const { spawnSync } = require('child_process');
// const path = require('path');

// exports.handler = async (event, context) => {
//   try {
//     const scriptPath = path.resolve(process.cwd(), 'netlify/functions/token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//     const keyFilePath = path.resolve(process.cwd(), 'netlify/functions/token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');

//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const result = spawnSync('node', [scriptPath, '-v', '--keyfile', keyFilePath], {
//       encoding: 'utf-8',
//     });

//     const { stdout, stderr } = result;

//     if (stderr) {
//       console.error(`Script stderr: ${stderr}`);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       };
//     }

//     const lines = stdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       };
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Internal Server Error' }),
//       };
//     }

//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': 'Content-Type',
//       },
//       body: JSON.stringify({ accessToken }),
//     };
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };



const { exec } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const scriptPath = path.resolve(__dirname, 'token', 'node', 'getTokenWithServiceAccount', 'getTokenWithServiceAccount.js');
    const keyFilePath = path.resolve(__dirname, 'token', 'node', 'getTokenWithServiceAccount', 'inspiring-bonus-405815-b81c6343d863.json');

    console.log('Script Path:', scriptPath);
    console.log('Key File Path:', keyFilePath);

    const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
    
    const { stdout, stderr } = await runCommand(command);

    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    const lines = stdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ accessToken }),
    };
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ stdout, stderr });
    });
  });
}
