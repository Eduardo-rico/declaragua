//cors.js
const express = require(‘express’);
const cors = require(‘cors’);
const app = express();
const allowedOrigins= [`https://ricosotomayor.com`, `https://api.ricosotomayor.com`];
var corsOptionsDelegate = (req, callback) => {
var corsOptions;
console.log(req.header(`Origin`));
if(allowedOrigins.indexOf(req.header(`Origin`)) !== -1) {
corsOptions = { origin: true };
}
else {
corsOptions = { origin: false };
}
callback(null, corsOptions);
};
exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);