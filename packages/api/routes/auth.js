const express = require("express");
const controllers = require("../controllers/auth.js");

const router = express.Router();

router.post("/signin", controllers.signin);
router.post("/signup", controllers.signup);

module.exports = router;
