
const express = require('express');
const app = express()
const router = express.Router()

app.use("", router);
require("./src/routes")(router);





















module.exports = app;
