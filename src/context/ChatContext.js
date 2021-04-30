import React, { useContext, useState } from "react";
import UserChoices from "../components/UserChoices";

// Create ContextAPI
const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);

	// Passing steps array to MsgDisplay
	const steps = [
		{
			id: "question-page-1",
			message: "You can add custom components",
			trigger: "choices-page-1",
		},
		{
			id: "choices-page-1",
			options: [
				{
					value: "Yes",
					label: "Yes",
					component: <UserChoices choice="Yes,I do" />,
					trigger: "question-page-2",
				},
				{
					value: "No",
					label: "No",
					component: <UserChoices choice="No, I don't" />,
					trigger: "choices-page-1",
				},
			],
			hideInput: true,
		},
		{
			id: "question-page-2",
			message: "What is your Date of Birth?",
			trigger: "calendar",
		},
		{
			id: "calendar",
			user: true,
			inputAttributes: { type: "date" },
			end: true,
		},
	];
	return (
		<ChatContext.Provider value={{ showModal, setShowModal, steps }}>
			{children}
		</ChatContext.Provider>
	);
};

// make sure use ContextAPI function
export const useChatContext = () => {
	return useContext(ChatContext);
};
