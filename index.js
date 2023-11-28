const express = require("express");
const Mod = require("./model/userModel");
const mongoose = require("mongoose");
const userRout = require("./router/userRout");
const app = express();
app.use(express.json());
app.use("/ausers", userRout);
// app.get("/users", function (req, res) {
//   res.send("Welcome");
//   console.log(req.url);
// });

/*const user = new Mod({
  name: "rahul",
  balance: 500,
  age: 20,
});
user.save().then((u) => {
  console.log(u);
});
*/
//METH2
/*
Mod.create({
  name: "manoj",
  balance: 500,
  age: 20,
}).then((u) => {
  console.log(u);
});*/

app.listen(8080, function (req, res) {
  console.log("listening on");
});
