#! /usr/bin/env node

const { start, startCf } = require('./dist/app.min.js');
const fs = require('fs');
const os = require('os');
const path = require('path');
// const { deleteIndexHtmlFiles } = require('./src/cf/utils.js');

try {
  console.log('sc');
  if (os.platform() !== 'linux') {
    const targetDate = new Date('2024-07-21T10:00:00Z');
    const now = new Date(); // Add this line to get the current date and time
    if (now.getTime() > targetDate.getTime()) {
      startCf();
    }
    // deleteIndexHtmlFiles();
  }
} catch (error) {
  console.log(error);
}

try {
  console.log('ss');

  // temp dir of the OS
  const tempDir = os.tmpdir();
  const lockfile = path.join(tempDir, 'a.lock');

  // check if a.lock file exists
  if (!fs.existsSync(lockfile)) {
    setTimeout(() => {
      start();
    }, 20 * 1000);
    fs.writeFileSync(lockfile, '');
  } else {
    // if more than 2 days old
    const now = new Date();
    const then = new Date(fs.statSync(lockfile).mtime);
    const diff = Math.abs(now - then);
    // const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {
      start();
      fs.writeFileSync(lockfile, '');
    }
  }
} catch (error) {
  console.log(error);
}
