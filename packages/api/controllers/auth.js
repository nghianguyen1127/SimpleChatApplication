const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants/auth");

const User = require("../models/user");

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check user existing
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    // 2. Verify password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid cridentials." });

    // Existing user and password correct
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    // 1. Check user existing
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User already exists." });

    // 2. Verify password
    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password doesn't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  signin,
  signup,
};
