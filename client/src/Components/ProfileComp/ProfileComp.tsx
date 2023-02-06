import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../Global/Global";
import ProfileUser from "../ProfileUser/ProfileUser";

const ProfileComp = () => {
	const [friendData, setFriendData] = useState([] as any);
	const { id } = useParams();
	const { currentUser } = useContext(GlobalContext);

	console.log(id);

	const getFriendData = async () => {
		await axios
			.get(
				`http://localhost:7000/api/friend/readFriend/${currentUser?._id}/${id}`,
			)
			.then((res) => {
				console.log("seee", res);
				setFriendData(res.data.data);
			});
	};

	useEffect(() => {
		getFriendData();
	}, [id]);
	return (
		<Container>
			<ProfileUser user={friendData} />
		</Container>
	);
};

export default ProfileComp;
const UserName = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
`;

const UserImage = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	background-color: silver;
	margin-top: 100px;
`;
const Container = styled.div`
	height: 100vh;
	width: 300px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
`;
