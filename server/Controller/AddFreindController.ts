import UserModel from "../models/UserModel";
import FriendsModel from "../models/FriendsModel";
import { Request, Response } from "express";
import NotificationModel from "../models/NotificationModel";
import mongoose from "mongoose";

const CreateFriendRequest = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		const getUser = await UserModel.findById(req.params.id);
		const friendUser = await UserModel.findById(req.params.friendID);
		if (getUser) {
			const createFriend = await FriendsModel.create({
				name: friendUser?.userName,
				userID: friendUser?._id,
				isPending: true,
				requestSenderID: getUser?._id,
				requestSenderName: getUser?.userName,
			});

			//friend reciever notification
			const RecieverNotification = await NotificationModel.create({
				title: `${getUser?.userName} sent you a friend request`,
				whosend: getUser?.id,
				Whorecieved: friendUser?._id,
			});

			friendUser?.notification.push(RecieverNotification?._id);

			// friend sender notification
			const senderNotification = await NotificationModel.create({
				title: `you sent ${friendUser?.userName} a friend request`,
				whosend: getUser?.id,
				Whorecieved: friendUser?._id,
			});

			getUser?.notification.push(senderNotification?._id);

			getUser.Friends?.push(createFriend?._id);
			getUser?.save();
			friendUser?.pendingRequest?.push(createFriend?._id);
			friendUser?.save();

			return res.status(200).json({
				message: `Request sent to ${friendUser?.userName}`,
			});
		} else {
			return res.status(404).json({
				message: "Access Denied",
			});
		}
	} catch (err) {
		return res.status(404).json({ message: "an error occurred", err });
	}
};

const AcceptFriendRequest = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		const getUser = await UserModel.findById(req.params.id);

		if (getUser) {
			await FriendsModel.findByIdAndUpdate(
				req.params.friendID,
				{
					isPending: false,
				},
				{ new: true },
			);

			//adding to your friend list
			await UserModel.findByIdAndUpdate(
				req.params.id,
				{
					$push: {
						Friends: req.params.friendID,
					},
				},
				{ new: true },
			);

			// removing from pending request
			await UserModel.findByIdAndUpdate(getUser?._id, {
				$pull: { pendingRequest: req.params.friendID },
			});

			// getUser?.save();
			// getUser?.pendingRequest!.pull(new mongoose.Types.ObjectId(getFriend?._id));

			return res.status(404).json({
				message: "Done",
			});
		} else {
			return res.status(404).json({
				message: "Access Denied",
			});
		}
	} catch (err) {
		return res.status(404).json({ message: "an error occurred", err });
	}
};

const retrieveFriend = async (req: Request, res: Response) => {
	try {
		const getUser = await UserModel.findById(req.params.id);

		if (getUser) {
			const getFriend = await FriendsModel.findById(
				req.params.friendID,
			).populate("conversation");

			return res.status(200).json({
				message: "successfully retrieved",
				data: getFriend,
			});
		}
	} catch (err) {
		return res.status(404).json({ message: "an error occurred", err });
	}
};

export { CreateFriendRequest, AcceptFriendRequest, retrieveFriend };
