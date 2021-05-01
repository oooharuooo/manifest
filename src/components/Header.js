import React from "react";
import { useChatContext } from "../context/ChatContext";

import styled from "styled-components";
import menu from "../Asset/Group 1298.png";
import profileImage from "../Asset/61.png";

const Header = () => {
	const { setShowModal } = useChatContext();
	return (
		<Wrapper>
			<div className="title">
				<h1>Manifest</h1>
				{/* Show Modal Component when user click */}
				<button onClick={() => setShowModal(true)}>
					<img src={menu} alt="menu" />
				</button>
			</div>
			<div className="profile">
				<img src={profileImage} alt="HenryProfilePicture" />
				<h1>Henry</h1>
				<p>TRANSFER SPECIALIST</p>
			</div>
		</Wrapper>
	);
};

export default Header;

// Styling
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	.title {
		display: flex;
		place-items: center;
		color: #4e78f6;
		border-bottom: 3px solid #e4e4e4;
		h1 {
			flex-grow: 1;
			font-weight: bold;
			text-align: center;
		}
		button {
			height: fit-content;
			border: none;
			background-color: inherit;
		}
	}
	.profile {
		text-align: center;
		p {
			color: #b1a0a0;
		}
	}
`;
