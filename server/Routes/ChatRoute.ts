import express from "express";
import { createMessage } from "../Controller/ChatController";

const router = express.Router();

router.post("/sendMessage/:id/:friendID", createMessage);

export default router;
