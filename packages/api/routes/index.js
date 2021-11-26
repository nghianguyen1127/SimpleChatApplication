const express = require("express");
const authRoutes = require("./auth");
const userRoutes = require("./user");

const endpoints = [["/", authRoutes, "/users", userRoutes]];

const routers = express.Router();
endpoints.forEach(([path, subRouter]) => routers.use(`/api${path}`, subRouter));

module.exports = routers;
