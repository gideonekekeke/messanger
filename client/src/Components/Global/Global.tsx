import React, { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

interface User {
	userName: string;
	email: string;
	_id: string;
	Friends?: any[];
	pendingRequest?: any[];
}
interface ContextData {
	currentUser: User;
	setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

export const GlobalContext = createContext<ContextData>({
	currentUser: {
		userName: "",
		email: "",
		_id: "",
		Friends: [],
		pendingRequest: [],
	},
	setCurrentUser: (currentUser: {}) => {},
});

export const MainContext: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<User>({} as User);

	React.useEffect(() => {
		if (window.localStorage.getItem("MessangerUser")) {
			const myData = JSON.parse(
				window.localStorage.getItem("MessangerUser") || "",
			);

			const decodeData: any = jwtDecode(myData);

			axios
				.get(`http://localhost:7000/api/user/getUser/${decodeData?._id}`)
				.then((res) => {
					setCurrentUser(res?.data?.data);
				});

			// console.log("this is decode", decodeData);
			// setCurrentUser();
		}

		return;
	}, []);
	return (
		<GlobalContext.Provider
			value={{
				currentUser,
				setCurrentUser,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
