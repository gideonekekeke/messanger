import React from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import FriendDataComp from "../Freinds/FriendsDataComp";
import HomeScreen from "../HomeScreen";
import ProfileComp from "../ProfileComp/ProfileComp";
import RequestDataComp from "../Requests/RequestDataComp";
import UserDataComp from "../UserDataCompt/UserDataComp";

const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/chats",
			children: [
				{
					index: true,
					element: <UserDataComp />,
				},
				{
					path: "c/:id",
					element: (
						<Container>
							<UserDataComp />
							<HomeScreen />
							<ProfileComp />
						</Container>
					),
				},
			],
		},
		{
			path: "/friends",
			children: [
				{
					index: true,
					element: <FriendDataComp />,
				},
				{
					path: "f/:id",
					element: (
						<Container>
							<FriendDataComp />
							<HomeScreen />
							<ProfileComp />
						</Container>
					),
				},
			],
		},
		{
			path: "/requests",
			children: [
				{
					index: true,
					element: <RequestDataComp />,
				},
				{
					path: "r/:id",
					element: (
						<Container>
							<RequestDataComp />
							<HomeScreen />
							<ProfileComp />
						</Container>
					),
				},
			],
		},
	]);

	return element;
};

export default AllRoutes;

const Container = styled.div`
	flex: 1;
	display: flex;
`;
