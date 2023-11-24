// gtokenHelper.js
const { GoogleToken } = require('gtoken');

const gtoken = new GoogleToken({
  keyFile: 'path/to/key.pem', // or path to .json key file
  email: 'my_service_account_email@developer.gserviceaccount.com',
  scope: ['https://scope1', 'https://scope2'],
  eagerRefreshThresholdMillis: 5 * 60 * 1000,
});

async function getToken() {
  return new Promise((resolve, reject) => {
    gtoken.getToken((err, tokens) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens);
    });
  });
}

function isTokenExpired() {
  return gtoken.isExpired();
}

module.exports = {
  getToken,
  isTokenExpired,
};
