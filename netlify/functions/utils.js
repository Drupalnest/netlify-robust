// utils.js
const { exec } = require('child_process');

module.exports.executeScript = function (command, callback) {
  exec(command, (error, stdout, stderr) => {
    callback(error, stdout, stderr);
  });
};
