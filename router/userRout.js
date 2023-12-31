const express = require("express");
const controll = require("../controller/userController");
const app = express();
const userRout = express.Router();

userRout.route("/").get(controll.userGets).post(controll.addUser);
userRout
  .route("/:id")
  .get(controll.userGet)
  .patch(controll.updateUser)
  .delete(controll.deleteUser);
userRout.route("/top3/saleryUser").get(controll.userGetTop3);
module.exports = userRout;
