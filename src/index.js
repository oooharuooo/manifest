import React from "react";
import ReactDOM from "react-dom";
import { ChatProvider} from "./context/ChatContext"

import App from "./App";

import "./index.css";
import './Asset/sf-ui-text-2-cufonfonts/SFUIText-Regular.ttf';
import './Asset/sf-ui-text-2-cufonfonts/SFUIText-Semibold.ttf';

ReactDOM.render(
    <ChatProvider>
        <App />
    </ChatProvider>, document.getElementById("root"));
