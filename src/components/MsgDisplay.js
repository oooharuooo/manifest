import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { useChatContext } from "../context/ChatContext"
import Header from "./Header"
import EditConfirm from "./EditConfirm";

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import avatar from '../Asset/62.png'

const MsgDisplay = () => {
    const { showModal,steps, } = useChatContext();
    
  return (
    <Wrapper >
        <ThemeProvider theme={theme}>
          {/* Only show Modal component when user click on EditButton or Main Menu */}
            { showModal && <EditConfirm/>}
          {/* Passing steps from context */}
            <ChatBot
              steps={steps}
              {...config}
              // show Modal and blur out main screen
              className={showModal && `brightnessScreen`}
              headerComponent={<Header />} />
        </ThemeProvider>
      </Wrapper>
  );
}

export default MsgDisplay

// Styling
  const config = {
    width: "500px",
    botAvatar: `${avatar}`,
    };

  const theme = {
  background: '#F4f4f4',
  fontFamily:"SFUI",
  botBubbleColor: '#e4e4e4',
  botFontColor: '#000',
};
  
const Wrapper = styled.div`
.brightnessScreen {
    filter: brightness(70%);
}
.rsc{
    &-container{
        height:100%
    }

    &-content{
      display:flex;
      flex-direction: column;
      gap:1.5rem;

      position:relative;
    }
    &-os {
        display:flex;
        justify-content: center;
        align-items: flex-end;
        height:100%;
        

        &-option-element {
            background: #4E78F6;
            color: #fff;

            font-family:'SFUISemiBold';
            font-size: 20px;
            padding: 1rem 3rem;

            border: 0;
            border-radius: 15px;
        }
    }
    &-cs {
    align-self:flex-end;
    
    background: #4E78F6;
    color: #FFFFFF;

    border-radius: 0 0 15px 15px;
    font-size: 15px;
    padding: 1px;
    width:6rem;

    animation: gZmgDU 0.3s ease forwards;
    -webkit-animation: gZmgDU 0.3s ease forwards;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: bottom left;
    -ms-transform-origin: bottom left;
    transform-origin: bottom left;
    }   
}

`