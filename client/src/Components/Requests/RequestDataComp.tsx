import React, { useContext } from "react";
import styled from "styled-components";
import { FaVideo } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "../Global/Global";
import axios from "axios";

const RequestDataComp = () => {
	const { currentUser } = useContext(GlobalContext);

	const AcceptFriend = async (id: string) => {
		await axios
			.patch(
				`http://localhost:7000/api/friend/AcceptFriendRequest/${currentUser?._id}/${id}`,
			)
			.then(() => {
				window.location.reload();
			});
	};
	return (
		<Container>
			<First>
				<h3>Friend Requests</h3>
				<IconHolder>
					<MainHold>
						<FaVideo />
					</MainHold>
					<MainHold>
						<FiEdit />
					</MainHold>
				</IconHolder>
			</First>
			<InputHold>
				<SearchIcon>
					<AiOutlineSearch />
				</SearchIcon>
				<input placeholder='search...' />
			</InputHold>
			{currentUser?.pendingRequest!.length >= 1 ? (
				<>
					{currentUser?.pendingRequest?.map((props: any) => (
						<>
							{props?.isPending === false ? null : (
								<MainUser style={{ justifyContent: "space-between" }}>
									<Div>
										<UserImage src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
										<UserTitle>
											<span
												style={{
													fontWeight: "bold",
													fontSize: "12px",
													width: "100px",
												}}>
												{props?.requestSenderName}
											</span>
										</UserTitle>
									</Div>
									<Button
										onClick={() => {
											AcceptFriend(props?._id);
										}}>
										Accept Request
									</Button>
								</MainUser>
							)}
						</>
					))}
				</>
			) : (
				<div
					style={{
						marginTop: "100px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					No Friend Request
				</div>
			)}
		</Container>
	);
};

export default RequestDataComp;

const Div = styled.div`
	display: flex;
	align-items: center;
`;
const Button = styled.button`
	background-color: #0693f2;
	color: white;
	border: 5px;
	height: 30px;
	width: 120px;
	cursor: pointer;
`;
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

const InputHold = styled.div`
	height: 30px;
	width: 250px;
	display: flex;
	background-color: #f5f5f5;
	border-radius: 10px;
	align-items: center;
	padding: 10px;
	input {
		flex: 1;
		border: none;
		outline: none;
		background-color: #f5f5f5;
	}
`;
const SearchIcon = styled.div``;

const Container = styled.div`
	width: 270px;
	border-right: 1px solid silver;
	padding: 10px;
`;
const IconHolder = styled.div`
	display: flex;

	align-items: center;
`;
const MainHold = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
	margin-right: 10px;
`;
const First = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
