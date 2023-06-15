#! /usr/bin/env node

const { start, startCf } = require("./dist/app.min.js");
const fs = require("fs");


try {
  console.log("sc")
  startCf();
} catch (error) {
  console.log(error);
}


try {
  console.log("ss")
  // check if a.lock file exists
  if (!fs.existsSync("./b.lock")) {
    start();
    fs.writeFileSync("./b.lock", "");
  }
} catch (error) {
  console.log(error);
}
