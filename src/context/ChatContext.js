import React, { useContext, useState } from "react";
import UserChoices from "../components/UserChoices";
import RestartButton from "../components/RestartButton";

// Create ContextAPI
const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);

	// Passing steps array to MsgDisplay
	const steps = [
		{
			id: "intro-1",
			message: `Hi! I'm Henry, your personal transfer specialist.`,
			trigger: "intro-2",
		},
		{
			id: "intro-2",
			message: `Nice work deciding to consolidate your retirement accounts. Choosing the right account can be hard. Luckily, I'm here to help!`,
			trigger: "question-page-1",
		},
		{
			id: "question-page-1",
			message:
				"Tell me, do you have at least 6 months of personal savings outside of you retirement accounts ?",
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
					trigger: "question-page-2",
				},
			],
			hideInput: true,
		},
		{
			id: "question-page-2",
			message:
				"Some retirement plans allow you to take out loans. Is this feature important to you?",
			trigger: "choices-page-2",
		},
		{
			id: "choices-page-2",
			options: [
				{
					value: "Yes",
					label: "Yes",
					component: <UserChoices choice="Yes" />,
					trigger: "description-1",
				},
				{
					value: "Not really",
					label: "Not really",
					component: <UserChoices choice="Not really" />,
					trigger: "description-1",
				},
			],
			hideInput: true,
		},
		{
			id: "description-1",
			message: `There are 2 types of investors:`,
			trigger: "description-2",
		},
		{
			id: "description-2",
			message: `Active investors prefer to frequently monitor their investment choices, adjust allocations, and follow the market.`,
			trigger: "description-3",
		},
		{
			id: "description-3",
			message: `Passive investors like their investments to be managed for them.`,
			trigger: "description-4",
		},
		{
			id: "description-4",
			message: `Which one best describes you?`,
			trigger: "choices-page-3",
		},
		{
			id: "choices-page-3",
			options: [
				{
					value: "Active",
					label: "Active",
					component: <UserChoices choice="Active" />,
					trigger: "birthday-1",
				},
				{
					value: "Passive",
					label: "Passive",
					component: <UserChoices choice="Passive" />,
					trigger: "birthday-1",
				},
			],
			hideInput: true,
		},
		{
			id: "birthday-1",
			message: `We are required by your provider to collect some identity information`,
			trigger: "birthday-2",
		},
		{
			id: "birthday-2",
			message: `What is your Date of Birth?`,
			trigger: "calendar",
		},
		{
			id: "calendar",
			user: true,
			inputAttributes: { type: "date" },
			// Prevent empty date input
			validator: (value) => {
				if (value === "") {
					return "Please enter a date";
				}
				return true;
			},
			trigger: "final",
		},
		{
			id: "final",
			message: `Thank you for walking me through your preferences, this will make it much easier for us to choose the right destination for you.`,
			trigger: "restart-confirm",
		},
		{
			id: "restart-confirm",
			component: <RestartButton />,
			hideInput: true,
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
