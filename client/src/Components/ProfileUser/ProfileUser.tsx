import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../Global/Global";

interface Iprops {
	user: {
		name: string;
		requestSenderName: string;
	};
}

const ProfileUser: React.FC<Iprops> = ({ user }) => {
	const { currentUser } = useContext(GlobalContext);

	useEffect(() => {}, [user]);
	return (
		<>
			{user?.name === currentUser?.userName ? (
				<>
					<UserImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
					<UserName>{user?.requestSenderName}</UserName>
				</>
			) : (
				<>
					<UserImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
					<UserName>{user?.name}</UserName>
				</>
			)}
		</>
	);
};

export default ProfileUser;

const UserName = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
`;

const UserImage = styled.img`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	background-color: silver;
	margin-top: 50px;
`;
