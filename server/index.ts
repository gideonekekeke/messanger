import express from "express";
import cors from "cors";
import "./Utils/db";
import userRouter from "./Routes/userRoute";
import friendRouter from "./Routes/AddFriendRoute";
import chatRoute from "./Routes/ChatRoute";
const port: number = 7000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/friend", friendRouter);
app.use("/api/chat", chatRoute);

app.listen(port, () => {
	console.log("listening on port", port);
});
