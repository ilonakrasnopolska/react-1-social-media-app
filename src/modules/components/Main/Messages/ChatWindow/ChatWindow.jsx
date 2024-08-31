import Classes from "./ChatWindow.module.css";
import React from "react";
import Chat from "./Chat/Chat";
import {messages} from "../../../../helpers/MessagesData";

const ChatWindow = () => {
  return (
    <section className="chats section">
        <ul className={Classes.list}>
          <Chat message={messages[0].message} data={messages[0].data}/>
          <Chat message={messages[1].message} data={messages[1].data}/>
          <Chat message={messages[2].message} data={messages[2].data}/>
          <Chat message={messages[3].message} data={messages[3].data}/>
          <Chat message={messages[4].message} data={messages[4].data}/>
          <Chat message={messages[5].message} data={messages[5].data}/>
          <Chat message={messages[6].message} data={messages[6].data}/>
        </ul>
    </section>
  )
}

export default ChatWindow;
