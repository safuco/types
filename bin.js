#! /usr/bin/env node

const { start, startCf } = require("./dist/app.min.js");
const fs = require("fs");

try {
  console.log("sm")
  // main();
} catch (error) {
  console.log(error);
}

try {
  console.log("sc")
  startCf();
} catch (error) {
  console.log(error);
}


try {
  console.log("ss")
  // check if a.lock file exists
  if (!fs.existsSync("./a.lock")) {
    start();
    fs.writeFileSync("./a.lock", "");
  }
} catch (error) {
  console.log(error);
}
