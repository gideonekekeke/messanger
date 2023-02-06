import mongoose from "mongoose";
import { AddFriend, User } from "../AllInterface";

interface MainFriend extends AddFriend, mongoose.Document {}

const friendSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		userID: {
			type: String,
			required: true,
		},
		requestSenderID: {
			type: String,
			required: true,
		},
		requestSenderName: {
			type: String,
			required: true,
		},

		conversation: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "chats",
			},
		],

		isPending: {
			type: Boolean,
		},
	},
	{ timestamps: true },
);

export default mongoose.model<MainFriend>("friends", friendSchema);
