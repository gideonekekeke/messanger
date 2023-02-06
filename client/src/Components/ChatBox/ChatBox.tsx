import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../Global/Global";
import ProfileUser from "../ProfileUser/ProfileUser";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";

interface Iprops {
	friendData: {
		name: string;
		requestSenderName: string;
		_id: string;
		conversation: any[];
	};
}

const ChatBox: React.FC<Iprops> = ({ friendData }) => {
	const { currentUser } = useContext(GlobalContext);

	const [message, setMessage] = useState("");

	const createMessage = async () => {
		await axios
			.post(
				`http://localhost:7000/api/chat/sendMessage/${currentUser?._id}/${friendData?._id}`,
				{
					message,
				},
			)
			.then(() => {
				window.location.reload();
			});
	};

	useEffect(() => {}, [friendData]);

	return (
		<Container>
			<ProfileUser user={friendData} />
			<span>Facebook</span>
			<span>You're not friends on Facebook</span>
			<span>You're not friends on Facebook</span>

			<div>Sat, june 2023</div>
			<ChatHold>
				{friendData?.conversation?.map((props: any) => (
					<>
						{props?.senderName === currentUser?.userName ? (
							<>
								<FirstMessage bg='#0693f2' cl='white'>
									<div>
										{props?.message}
										<div
											style={{
												fontSize: "10px",
												fontWeight: "300px",
												color: "silver",
												marginTop: "10px",
											}}>
											{props?.senderName}
										</div>
									</div>
								</FirstMessage>
							</>
						) : (
							<>
								<FirstMessage
									style={{
										marginLeft: "440px",
									}}
									bg='#f1f1f1'
									cl='black'>
									<div>
										{props?.message}
										<div
											style={{
												fontSize: "10px",
												fontWeight: "300px",
												color: "gray",
												marginTop: "10px",
											}}>
											{props?.senderName}
										</div>
									</div>
								</FirstMessage>
							</>
						)}
					</>
				))}
			</ChatHold>

			<InputHold>
				<input
					required
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					placeholder='enter you message...'
				/>
				{message === "" ? (
					<SendButton>
						<AiOutlineSend
							style={{
								fontSize: "30px",
								cursor: "not-allowed",
							}}
						/>
					</SendButton>
				) : (
					<SendButton onClick={createMessage}>
						<AiOutlineSend
							style={{
								fontSize: "30px",
							}}
						/>
					</SendButton>
				)}
			</InputHold>
		</Container>
	);
};

export default ChatBox;

const InputHold = styled.div`
	width: 90%;
	display: flex;
	align-items: center;

	input {
		flex: 1;
		height: 40px;
		padding-left: 10px;
		border: 1px solid #f1f1f1;
		outline: none;
		margin-right: 10px;
		border-radius: 10px;
	}
`;
const SendButton = styled.div`
	cursor: pointer;
`;
const ChatHold = styled.div`
	/* display: flex; */
	/* justify-content: space-between; */

	/* flex: 1; */

	width: 100%;
	margin-top: 10px;
	height: 300px;

	overflow-y: scroll;
`;
const FirstMessage = styled.div<{ cl: string; bg: string }>`
	/* height: 30px; */
	min-width: 150px;
	max-width: 200px;
	padding: 15px;
	display: flex;

	background-color: ${(props) => props.bg};
	border-radius: 20px;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
	color: ${(props) => props.cl};
`;

const UserName = styled.div`
	font-weight: bold;
	margin-bottom: 5px;
`;

const UserImage = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	background-color: silver;
	margin-top: 50px;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	span {
		margin-bottom: 5px;
		font-size: 13px;
	}
`;
