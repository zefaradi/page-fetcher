const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  fs.writeFile(path, body, error => {
    if (error) {
      console.log(error);
      return;
    }
    fs.stat(path, (error, stats) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    });
  });
});