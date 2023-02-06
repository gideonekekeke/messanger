import UserModel from "../models/UserModel";
import FriendsModel from "../models/FriendsModel";
import ChatModel from "../models/ChatModel";
import { Request, Response } from "express";

const createMessage = async (req: Request, res: Response) => {
	try {
		const getUser = await UserModel.findById(req.params.id);
		const getFreind = await FriendsModel.findById(req.params.friendID);

		if (getUser) {
			const { message } = req.body;

			const messages = await ChatModel.create({
				message,
				sender: getUser?._id,
				senderName: getUser?.userName,
				reciever: "",
			});

			getFreind?.conversation.push(messages?._id);
			getFreind?.save();

			return res.status(200).json({
				message: "messsage sent successfull",
			});
		}
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
			err,
		});
	}
};

export { createMessage };
