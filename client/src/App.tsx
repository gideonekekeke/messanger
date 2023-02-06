import React, { useContext } from "react";
import styled from "styled-components";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import RegisterRoute from "./Components/AllRoutes/RegisterRoute";
import { GlobalContext } from "./Components/Global/Global";
import ProfileComp from "./Components/ProfileComp/ProfileComp";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
	const { currentUser } = useContext(GlobalContext);

	return (
		<>
			{!currentUser?.userName ? (
				<RegisterRoute />
			) : (
				<Container>
					<Sidebar />
					<AllRoutes />
				</Container>
			)}
		</>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	overflow: hidden;
`;
