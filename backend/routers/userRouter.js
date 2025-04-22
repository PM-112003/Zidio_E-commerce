import express from "express";
import {
  signup,
  signin,
  signout,
} from "../controllers/userController.js";

const router = express.Router();
// Auth routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);

export default router;