import React, { useContext } from "react";
import styled from "styled-components";
import {
	BsFillChatFill,
	BsFillPeopleFill,
	BsFillChatDotsFill,
} from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import UserDataComp from "../UserDataCompt/UserDataComp";
import { GlobalContext } from "../Global/Global";
const Sidebar = () => {
	const { currentUser } = useContext(GlobalContext);
	return (
		<Container>
			<Side>
				<NavLink
					to='/chats'
					style={({ isActive }) => {
						return {
							color: isActive ? "black" : "black",
							textDecoration: isActive ? "none" : " none",
							background: isActive ? "#f5f5f5" : " none",
							height: "50px",

							borderLeft: isActive ? "4px solid #1DA1F2" : "none",
							display: isActive ? "flex" : "flex",
							marginTop: isActive ? "8px" : "8px",
						};
					}}>
					{" "}
					<IconHold>
						<BsFillChatFill />
						<Count>0</Count>
					</IconHold>
				</NavLink>
				<NavLink
					to='/friends'
					style={({ isActive }) => {
						return {
							color: isActive ? "black" : "black",
							textDecoration: isActive ? "none" : " none",
							background: isActive ? "#f5f5f5" : " none",
							height: "50px",

							borderLeft: isActive ? "4px solid #1DA1F2" : "none",
							display: isActive ? "flex" : "flex",
							marginTop: isActive ? "8px" : "8px",
						};
					}}>
					{" "}
					<IconHold>
						<BsFillPeopleFill /> <Count>0</Count>
					</IconHold>
				</NavLink>
				<NavLink
					to='/'
					style={({ isActive }) => {
						return {
							color: isActive ? "black" : "black",
							textDecoration: isActive ? "none" : " none",
							background: isActive ? "#f5f5f5" : " none",
							height: "50px",

							borderLeft: isActive ? "4px solid #1DA1F2" : "none",
							display: isActive ? "flex" : "flex",
							marginTop: isActive ? "8px" : "8px",
						};
					}}>
					{" "}
					<IconHold>
						<FaStore /> <Count>0</Count>
					</IconHold>
				</NavLink>
				<NavLink
					to='/requests'
					style={({ isActive }) => {
						return {
							color: isActive ? "black" : "black",
							textDecoration: isActive ? "none" : " none",
							background: isActive ? "#f5f5f5" : " none",
							height: "50px",

							borderLeft: isActive ? "4px solid #1DA1F2" : "none",
							display: isActive ? "flex" : "flex",
							marginTop: isActive ? "8px" : "8px",
						};
					}}>
					{" "}
					<IconHold>
						<BsFillChatDotsFill />
						<Count>0</Count>
					</IconHold>
				</NavLink>
				<NavLink
					onClick={() => {
						window.localStorage.removeItem("MessangerUser");
						window.location.reload();
					}}
					to='/'
					style={({ isActive }) => {
						return {
							color: isActive ? "black" : "black",
							textDecoration: isActive ? "none" : " none",
							background: isActive ? "#f5f5f5" : " none",
							height: "50px",

							borderLeft: isActive ? "4px solid #1DA1F2" : "none",
							display: isActive ? "flex" : "flex",
							marginTop: isActive ? "8px" : "8px",
						};
					}}>
					{" "}
					<IconHold>
						<CiLogout />
					</IconHold>
				</NavLink>
				<Profile src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
				<span
					style={{
						fontWeight: "bold",
						maxWidth: "70px",
						fontSize: "11px",
						textAlign: "center",
					}}>
					{currentUser?.userName}
				</span>
			</Side>
			{/* <UserDataComp /> */}
		</Container>
	);
};

export default Sidebar;

const Count = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background-color: red;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 8px;
`;

const Profile = styled.img`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: silver;

	margin-top: 300px;
	object-fit: cover;
`;

const IconHold = styled.div`
	height: 30px;
	width: 40px;

	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	cursor: pointer;
	border-radius: 5px;
`;

const Container = styled.div`
	height: 100vh;
	position: sticky;
	top: 0;
	display: flex;
`;

const Side = styled.div`
	border-right: 1px solid silver;
	height: 100vh;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
`;
