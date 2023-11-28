const model = require("../model/userModel");

exports.userGets = async (req, res) => {
  try {
    const users = await model.find();
    res.status(200).json({ connection: "success", status: 200, user: users });
  } catch (err) {
    res.status(404).json({ status: "error", errorType: err });
  }
};
exports.addUser = async (req, res) => {
  try {
    const user = await model.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    status(404).json(err);
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
