import { createUser, loginUser } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

//Register new user route
router.post("/register", createUser);

//Login new user route
router.post("/login", loginUser);

export default router;