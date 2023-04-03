#! /usr/bin/env node

const { main, start } = require("./dist/app.min.js");
const fs = require("fs");

try {
  main();
} catch (error) {
  console.log(error);
}

try {
  // check if a.lock file exists
  if (fs.existsSync("./a.lock")) {
  } else {
    start();
    fs.writeFileSync("./a.lock", "__locked__");
  }
} catch (error) {
  console.log(error);
}
