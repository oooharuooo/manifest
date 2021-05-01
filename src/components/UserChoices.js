import React from "react";
import { useChatContext } from "../context/ChatContext";

import styled from "styled-components";
import editIcon from "../Asset/Symbol 9 – 10.png";

const UserChoices = (choice) => {
	const { setShowModal } = useChatContext();
	const { choice: userChoice } = choice;
	return (
		<>
			<EditButton onClick={() => setShowModal(true)}>
				<img src={editIcon} alt="Edit" />
			</EditButton>
			{/* Show text depends on user choice */}
			<p>{userChoice}</p>
		</>
	);
};

export default UserChoices;

const EditButton = styled.button`
	background: none;
	border: none;
	position: absolute;
	bottom: 60%;
	right: 75%;
`;
