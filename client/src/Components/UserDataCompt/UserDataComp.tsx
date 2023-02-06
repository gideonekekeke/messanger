import React from "react";
import styled from "styled-components";
import { FaVideo } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const UserDataComp = () => {
	return (
		<Container>
			<First>
				<h3>Chats</h3>
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
			<MainUser>
				<UserImage />
				<UserTitle>
					<span style={{ fontWeight: "bold" }}>Gideon ekeke</span>
					<span>hello watsup</span>
				</UserTitle>
			</MainUser>
		</Container>
	);
};

export default UserDataComp;
const MainUser = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;
const UserImage = styled.div`
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
