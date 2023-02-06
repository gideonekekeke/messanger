import mongoose from "mongoose";
const url: string = "mongodb://localhost/RealMessangerDB";
mongoose
	.connect(url)
	.then(() => {
		console.log("Database connection is Established...");
	})
	.catch(() => {
		console.log("an error occured");
	});
