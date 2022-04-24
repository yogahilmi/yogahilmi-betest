const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const User = new UserController();

router.route("/").get(User.getUsers).post(User.addUser);
router
  .route("/:userId")
  .get(User.getUser)
  .patch(User.editUser)
  .delete(User.deleteUser);

module.exports = router;
