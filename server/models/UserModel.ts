import mongoose from "mongoose";
import { User } from "../AllInterface";

interface MainUser extends User, mongoose.Document {}

const userSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},

		Friends: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "friends",
			},
		],
		pendingRequest: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "friends",
			},
		],
		notification: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "notifications",
			},
		],
	},
	{ timestamps: true },
);

export default mongoose.model<MainUser>("users", userSchema);
