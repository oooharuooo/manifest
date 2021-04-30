import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import avatar from './Asset/62.png'

import Test from "./Test";
import Header from "./components/Header"

function App() {
  const config = {
    width: "500px",
    botAvatar: `${avatar}`,
};

  const steps = [
    {
      id: '1',
      message: 'You can add custom components',
      trigger: '2',
    },
     {
        id: '2',
        options: [
          { value: 1, label: 'Number 1', component: <Test/>, trigger: '4' },
          { value: 2, label: 'Number 2', trigger: '1' },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '3',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    {
      id: '5',
      component: <Test/>,
      end: true,
    },
  ];

  const theme = {
  background: '#F4f4f4',
  fontFamily:"SFUI",
  headerBgColor: '#e4e4e4',
  headerFontColor: '#4e78f6',
  headerFontSize: '15px',
  botBubbleColor: '#e4e4e4',
  botFontColor: '#000',
  userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    rscHeader: "#fff",
  };


  const customProps = {
    botAvatar: `${avatar}`,
  }
  return (
      <ThemeProvider theme={theme}>
      <ChatBot steps={steps}  {...config} headerComponent={<Header/>}/>
        </ThemeProvider>
  );
}

export default App;
