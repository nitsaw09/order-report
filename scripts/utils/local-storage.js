const { LocalStorage } = require("node-localstorage");
global.localStorage = new LocalStorage('./scratch');

module.exports = global.localStorage;