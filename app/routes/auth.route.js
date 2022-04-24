const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const authController = new AuthController();

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

module.exports = router;
