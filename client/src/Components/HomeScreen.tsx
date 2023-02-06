import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ChatBox from "./ChatBox/ChatBox";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./Global/Global";

const HomeScreen = () => {
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
			<Head>
				<MainUser>
					<UserImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
					<UserTitle>
						<span style={{ fontWeight: "bold" }}>
							{currentUser?.userName === friendData?.name ? (
								<>{friendData?.requestSenderName}</>
							) : (
								<>{friendData?.name}</>
							)}
						</span>
					</UserTitle>
				</MainUser>
			</Head>
			<ChatBox friendData={friendData} />
		</Container>
	);
};

export default HomeScreen;
const MainUser = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;
const UserImage = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: silver;
	margin-right: 10px;
`;
const UserTitle = styled.div`
	display: flex;
	flex-direction: column;
`;
const Head = styled.div`
	width: 100%;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	height: 60px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	padding-bottom: 10px;
`;

const Container = styled.div`
	flex: 1;
	border-right: 1px solid silver;
	overflow: hidden;
`;
