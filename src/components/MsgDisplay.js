import React from 'react'

import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import avatar from '../Asset/62.png'


import Header from "./Header"

import { useChatContext} from "../context/ChatContext"

const MsgDisplay = () => {
    const { myUser, steps, } = useChatContext();
    
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        {...config}
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