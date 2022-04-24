const router = require("express").Router();
const AuthController = require("../controllers/auth.controller");
const Auth = new AuthController();

router.route("/register").post(Auth.register);
router.route("/login").post(Auth.login);

module.exports = router;
