import express from "express";
import {
	AcceptFriendRequest,
	CreateFriendRequest,
	retrieveFriend,
} from "../Controller/AddFreindController";

const router = express.Router();

router.post("/sendFriendRequest/:id/:friendID", CreateFriendRequest);
router.patch("/AcceptFriendRequest/:id/:friendID", AcceptFriendRequest);
router.get("/readFriend/:id/:friendID", retrieveFriend);

export default router;
