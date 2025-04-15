import express from "express";
import {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:userid", getUser);
router.post("/users", addUser);
router.patch("/users/:userid", updateUser);
router.delete("users/:userid", deleteUser);

export default router;
