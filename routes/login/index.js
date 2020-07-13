const router = require("express").Router();
const loginController = require("../../controllers/loginControllers");

// matches with "/login/createUser"
router.route("/createUser").post(loginController.createUser);

// matches with "/login/login"
router.route("/login").post(loginController.userLogin);

// matches with "/login/checkUser"

module.exports = router;
