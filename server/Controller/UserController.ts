import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret =
	"dggjahj-dgthnnsdml030fnf50fn5dkeajeofkjn-f75464nfgjhfgbsd_jgjst94jd";

const registerUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { userName, email, password } = req.body;

		const salt = await bcrypt.genSalt(10);
		const hashP = await bcrypt.hash(password, salt);

		const createUser = await UserModel.create({
			userName,
			email,
			password: hashP,
		});

		// const encodeUser = ;

		return res.status(200).json({
			message: "user registration Successfull",
			data: jwt.sign({ _id: createUser?.id }, jwtSecret),
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
			err,
		});
	}
};
const loginUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { email } = req.body;

		const checkUser = await UserModel.findOne({ email: email });

		if (checkUser) {
			return res.status(200).json({
				message: `welcome Back ${checkUser?.userName}`,
				data: jwt.sign({ _id: checkUser?.id }, jwtSecret),
			});
		} else {
			return res.status(404).json({
				message: "Access Denied",
			});
		}

		// const encodeUser = ;
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
			err,
		});
	}
};
const retrieveUser = async (req: Request, res: Response): Promise<Response> => {
	try {
		const getUser = await UserModel.findById(req.params.id)
			.populate({
				path: "Friends",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			})
			.populate({
				path: "pendingRequest",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			})
			.populate({
				path: "notification",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			});

		return res.status(200).json({
			message: "user found",
			data: getUser,
		});

		// const encodeUser = ;
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
			err,
		});
	}
};
const retrieveAllUser = async (
	req: Request,
	res: Response,
): Promise<Response> => {
	try {
		const getUser = await UserModel.find()
			.populate({
				path: "Friends",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			})
			.populate({
				path: "pendingRequest",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			})
			.populate({
				path: "notification",
				options: {
					sort: {
						createdAt: -1,
					},
				},
			});

		return res.status(200).json({
			message: "user found",
			data: getUser,
		});

		// const encodeUser = ;
	} catch (err) {
		return res.status(404).json({
			message: "an error occurred",
			err,
		});
	}
};

export { registerUser, loginUser, retrieveUser, retrieveAllUser };
