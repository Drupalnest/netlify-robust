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


const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/getAccessToken', (req, res) => {
  const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/apt-subset-398000-ff6b648af86a.json';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const lines = stdout.split('\n');
    const accessTokenLine = lines.find(line => line.startsWith('  "access_token":'));
    
    if (!accessTokenLine) {
      console.error('No valid access_token found in the response.');
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const accessToken = accessTokenLine.split('"')[3];

    if (!accessToken) {
      console.error('No valid access_token found in the response.');
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    return res.json({ accessToken });
  });
});

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
