import express from "express";
import {
	loginUser,
	registerUser,
	retrieveAllUser,
	retrieveUser,
} from "../Controller/UserController";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser/:id", retrieveUser);
router.get("/getUser", retrieveAllUser);

export default router;
