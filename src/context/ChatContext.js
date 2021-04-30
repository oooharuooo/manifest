import React, { useContext, useEffect, useState } from "react";

const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {

	const [myUser, setMyUser] = useState("dat");
	
	return (
		<ChatContext.Provider value={{myUser}}>
			{children}
		</ChatContext.Provider>
	);
};
// make sure use
export const useChatContext = () => {
	return useContext(ChatContext);
};