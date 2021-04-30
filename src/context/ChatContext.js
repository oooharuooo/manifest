import React, { useContext, useState } from "react";
import UserChoices from "../components/UserChoices"

// Create ContextAPI
const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {

	const [showModal, setShowModal] = useState(false);

  // Passing steps array to MsgDisplay
	  const steps = [
    {
      id: 'question-page-1',
      message: 'You can add custom components',
      trigger: 'choices-page-1',
    },
     {
        id: 'choices-page-1',
        options: [
			{ value: "Yes", label: 'Yes', component: <UserChoices choice="Yes"/>, trigger: 'question-page-2' },
          	{ value: "No", label: 'No',component: <UserChoices choice="No"/>,trigger: 'choices-page-1' },
		 ],
		hideInput: true,
      },
      {
        id: 'question-page-2',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
  ];
	
	return (
		<ChatContext.Provider value={{showModal,setShowModal,steps}}>
			{children}
		</ChatContext.Provider>
	);
};

// make sure use ContextAPI function
export const useChatContext = () => {
	return useContext(ChatContext);
};