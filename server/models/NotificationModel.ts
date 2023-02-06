import mongoose from "mongoose";
import { Notifications } from "../AllInterface";

interface MainNotifi extends Notifications, mongoose.Document {}

const NotificationSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		Whorecieved: {
			type: String,
		},
		WhoSend: {
			type: String,
		},
	},
	{ timestamps: true },
);

export default mongoose.model<MainNotifi>("notifications", NotificationSchema);
