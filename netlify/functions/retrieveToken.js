




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









// const util = require('util');
// const { exec } = require('child_process');
// const path = require('path');

// exports.handler = async (event, context) => {
//   try {
//     const scriptPath = path.join(__dirname, 'token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//     const keyFilePath = path.join(__dirname, 'token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');

//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
//     const { stdout, stderr } = await util.promisify(exec)(command);

//     // console.log('Script stdout:', stdout);
//     // console.log('Script stderr:', stderr);

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
//     console.error(error.stack); // Log the full stack trace
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };





































// const util = require('util');
// const { exec } = require('child_process');
// const path = require('path');

// const executeCommand = async (command, options) => {
//   const { stdout, stderr } = await util.promisify(exec)(command, options);

//   if (stderr) {
//     console.error(`Script stderr: ${stderr}`);
//     throw new Error('Internal Server Error');
//   }

//   return stdout;
// };

// exports.handler = async () => {
//   try {
//     const scriptPath = require.resolve('./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
//     const keyFilePath = require.resolve('./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');
    
//     console.log('Script Path:', scriptPath);
//     console.log('Key File Path:', keyFilePath);

//     const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
//     const scriptStdout = await executeCommand(command);

//     const lines = scriptStdout.split('\n');
//     const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

//     if (!accessTokenLine) {
//       console.error('No valid access_token found in the response.');
//       throw new Error('Internal Server Error');
//     }

//     const accessToken = accessTokenLine.split('"')[3];

//     if (!accessToken) {
//       console.error('No valid access_token found in the response.');
//       throw new Error('Internal Server Error');
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
//     console.error(error.stack); // Log the full stack trace
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };




const util = require('util');
const { execFile } = require('child_process');
const path = require('path');

const executeCommand = async (file, args) => {
  const { stdout, stderr } = await util.promisify(execFile)(file, args);

  if (stderr) {
    console.error(`Script stderr: ${stderr}`);
    throw new Error('Internal Server Error');
  }

  return stdout;
};

exports.handler = async (event, context) => {
  try {
    const currentDirectory = process.cwd();
        const scriptPath = require.resolve('./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js');
     const keyFilePath = require.resolve('./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json');
    console.log('Script Path:', scriptPath);
    console.log('Key File Path:', keyFilePath);

    const command = `node ${scriptPath} -v --keyfile ${keyFilePath}`;
    const scriptStdout = await executeCommand('node', [scriptPath, '-v', '--keyfile', keyFilePath]);

    const lines = scriptStdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));

    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      throw new Error('Internal Server Error');
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      throw new Error('Internal Server Error');
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
    console.error(error.stack); // Log the full stack trace
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
