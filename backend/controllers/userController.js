import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

// get all users
const getAllUsers = () => {};

// add user
const addUser = async (req, res) => {
  try {
    const { username, email, password, confirm_password } = req.body;
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const matching_email = await User.findOne({ email });
    const errors = {};

    if (username.trim().length === 0)
      errors.username = "username cannot be empty";
    if (email.trim().length === 0) errors.email = "email cannot be empty";
    if (!email_regex.test(email)) errors.email = "invalid email format";
    if (matching_email) errors.email = "email already taken";
    if (password.trim().length === 0)
      errors.password = "password cannot be empty";
    if (confirm_password.trim().length === 0)
      errors.confirm_password = "field cannot be empty";
    if (password !== confirm_password)
      errors.confirm_password = "password not matching";
    if (Object.keys(errors).length)
      return res.json({ success: false, message: "signup failed", errors });

    const salt = 10;
    const hashed_pass = await bcrypt.hash(password, salt);

    const new_user = new User({
      username,
      email,
      password: hashed_pass,
    });

    const user = await new_user.save();
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });
    res.json({ success: true, message: "user created", user });
  } catch (error) {
    res.json({ success: "false", message: error.message });
  }
};

// get user
const getUser = async () => {};

// update user
const updateUser = async () => {};

// delete user
const deleteUser = async () => {};

export { getAllUsers, addUser, getUser, updateUser, deleteUser };
