import React from "react";
import { useChatContext } from "../context/ChatContext";

import styled from "styled-components";

const RestartButton = () => {
	const { setShowModal } = useChatContext();

	return (
		<>
			<Button onClick={() => setShowModal(true)}>
				Click to restart your application
			</Button>
		</>
	);
};

export default RestartButton;

const Button = styled.button`
	display: flex;
	align-items: center;

	border-radius: 15px;
	border: none;
	height: 50px;

	color: #fff;
	background-color: inherit;
`;
