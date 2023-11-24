// getToken.js
const { executeScript } = require('./utils');

module.exports.getToken = function (callback) {
  const command = 'node ./token/node/getTokenWithServiceAccount/getTokenWithServiceAccount.js -v --keyfile ./token/node/getTokenWithServiceAccount/inspiring-bonus-405815-b81c6343d863.json';

  executeScript(command, callback);
};
