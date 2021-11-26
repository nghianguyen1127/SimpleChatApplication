const express = require("express");
const controllers = require("../controllers/user.js");
const middlewares = require("../middlewares/auth.js");

const router = express.Router();

router.get("/", middlewares.auth, controllers.getUsers);
router.get("/:id", middlewares.auth, controllers.getUser);
router.post("/", middlewares.auth, controllers.createUser);
router.put("/:id", middlewares.auth, controllers.updateUser);
router.delete("/:id", middlewares.auth, controllers.deleteUser);

module.exports = router;
