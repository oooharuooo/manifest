import React from "react";
import styled from "styled-components";
import { useChatContext } from "../context/ChatContext";

const EditConfirm = () => {
	const { showModal, setShowModal } = useChatContext();

	return (
		showModal && (
			<Wrapper>
				<p>Are you sure want to restart ?</p>
				<div className="choicesContainer">
					<button onClick={() => window.location.reload()}>Yes</button>
					<button onClick={() => setShowModal(false)}>No</button>
				</div>
			</Wrapper>
		)
	);
};

export default EditConfirm;

// Styling
const Wrapper = styled.div`
	display: grid;
	place-content: center;

	background-color: white;
	font-family: SFUI;
	color: #4e78f6;
	font-size: 1.5rem;
	text-align: center;

	position: absolute;
	top: 50%;
	left: 50%;
	width: 80%;
	height: 50%;
	transform: translate(-50%, -50%);

	z-index: 1000;

	.choicesContainer {
		display: flex;
		justify-content: space-evenly;

		button {
			border: none;
			border-radius: 15px;
			padding: 1rem 1.5rem;

			font-size: 1.5rem;
			background-color: #4e78f6;
			color: #fff;
		}
	}
`;
