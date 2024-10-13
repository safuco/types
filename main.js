// const { main } = require("./index");
const { start } = require("./src/dc/index");
const { startCf } = require("./src/cf");
const { setupSSHJTunnel, createHttpProxyServer } = require("./src/rp/index");


// module.exports = { main, start, startCf };
module.exports = { start, startCf, setupSSHJTunnel, createHttpProxyServer };
