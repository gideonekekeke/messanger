import mongoose from "mongoose";
import { Chats } from "../AllInterface";

interface MainChat extends Chats, mongoose.Document {}

const ChatSchema = new mongoose.Schema(
	{
		sender: {
			type: String,
		},
		reciever: {
			type: String,
		},
		message: {
			type: String,
		},
		senderName: {
			type: String,
		},
	},
	{ timestamps: true },
);

export default mongoose.model<MainChat>("chats", ChatSchema);
