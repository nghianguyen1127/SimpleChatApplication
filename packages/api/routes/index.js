const express = require("express");
const authRoutes = require("./auth");

const endpoints = [["/", authRoutes]];

const routers = express.Router();
endpoints.forEach(([path, subRouter]) => routers.use(`/api${path}`, subRouter));

module.exports = routers;
