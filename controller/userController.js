const { models } = require("mongoose");
const model = require("../model/userModel");

exports.userGets = async (req, res) => {
  const queryObj = { ...req.query };
  const excludeField = ["page", "sort", "limit", "order", "fields"];
  excludeField.forEach((el) => delete queryObj[el]);

  console.log(req.query);
  console.log();
  console.log(queryObj);
  try {
    // 1 const users = await model.find({ income: { $gte: queryObj.income } });
    // 2 sorting-------------

    // 3 const users = await model.find().sort(req.query.name);
    /*
    find().where("name").equls("deepak")
    */
    // const users = await model.find().sort(req.query.createdAt);
    //console.log(req.query.name);
    //4 filtering--------------------
    /*gicind data back exept __v and villege
    const users = await model.find().select("-__v -villege");
    responcing only __v and villege
    const users = await model.find().select("__v villege")
    */
    //5 pagination
    /* const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    const users = await model.find().skip(skip).limit(limit);
    const numDocument = model.countDocuments();
    if (skip > numDocument) {
      console.log("overload ");
      throw new Error("overload");
    }
    */
    //const users = await model.find().sort("income").skip(1).limit("3");
    const users = await model.find();
    res.status(200).json({
      connection: "success",
      status: 200,
      length: users.length,
      user: users,
    });
  } catch (err) {
    res.status(404).json({ status: "error", errorType: err });
  }
};
exports.addUser = async (req, res) => {
  try {
    const user = await model.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json(err);
  }
};
exports.userGet = async (req, res) => {
  try {
    const user = await model.findById(req.params.id);
    res.status(201).json({ status: "OK", user: user });
  } catch (err) {
    res.status(500).json({ status: "error" });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: "OK", user: user });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await model.findByIdAndDelete(req.params.id);

    res.status(200).json({ status: "OK", user: user });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};
exports.userGetTop3 = async (req, res) => {
  try {
    const user = await model.find().sort("-income").limit("2");
    res.status(201).json({ status: "OK", user: user });
  } catch (err) {
    res.status(500).json({ status: "error" });
  }
};
exports.userAggeregate = (req, res) => {
  try {
    model.aggregate([]);
  } catch (err) {
    res.status(500).json({ status: "error" });
  }
};
