const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await User.findById(id);
    res.status(200).json(response);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

const createUser = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const newUser = new User({
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const updatedUser = {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      _id: id,
    };
    await User.findByIdAndUpdate(id, updatedUser, { new: true });
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndRemove(id);
    res.status(200).json({ message: "User removed successfully." });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
