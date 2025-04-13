import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: mongoose.Schema.Types.ObjectId },
});

const User = mongoose.model("user", userSchema);

export default User;
