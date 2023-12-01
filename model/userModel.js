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
const UserScema = new mongoose.Schema(
  {
    income: { type: Number },
    name: { type: String, require: true, trim: true },
    villege: { type: String, require: true, trim: true },
    createdAt: { type: Date, default: new Date(), select: false },
    friende: [String],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserScema.virtual("userVirtualScemaWeak").get(function () {
  return this.income - 200;
});
//  DOCUMENT MIDILWARE-------------------------------------------------------

/*run before .save(),.create()
//pre
UserScema.pre("save", function (next) {
  console.log(this);
  next();
});
//post
UserScema.post("save", function (document, next) {
  console.log(document);
  next();
});
 */
//Queryuery middleware function--------------------------
/*IT WIL EXICUTE BEFORE AND AFTER QUERY
   this keyword point current query not document
    UserScema.pre("find", function (next) {
  this.find({ income: { $lt: 4400 } });
  next();
});
UserScema.post("find", function (document, next) {
  console.log(document);
  next();
});
//Arrrigation middleware

*/

const Mod = mongoose.model("Mod", UserScema);
module.exports = Mod;
