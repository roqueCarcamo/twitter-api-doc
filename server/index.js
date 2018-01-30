"use strict";

const express = require("express");
const morgan = require("morgan");
const logger = require("winston");
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const config = require('./../config');

const cors = require('cors');

mongoose.connect(config.db.url);

const api = require("./api/v1");

const app = express();

app.use('/', express.static('public/api'))

// parse middleware
app.use(morgan("common"));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

app.use(cors());
 app.use(cors({
     origin: config.cors.origin,
     credentials: Boolean(config.cors.credentials)
 }));

// Configurar router and routes
app.use("/api", api);
app.use("/api/v1", api);

app.use( (req, res, next) => {
  logger.info("Error. Service not found");
  res.status(404);
  res.json({
    "error": "Error. Service not found"
  });
});

app.use( (err, req, res, next) => {
  logger.error("Error");
  res.status(500);
  res.json({
    "error": `${err}`
  });
});

module.exports = app;