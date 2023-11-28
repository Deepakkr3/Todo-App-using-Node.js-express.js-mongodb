const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(function () {
    console.log("connection established");
  })
  .catch((err) => console.error(err + " 122222222222222222"));
const UserScema = new mongoose.Schema({
  income: { type: Number },
  name: { type: String, require: true },
  villege: { type: String, require: true },
});
const Mod = mongoose.model("Mod", UserScema);
module.exports = Mod;
