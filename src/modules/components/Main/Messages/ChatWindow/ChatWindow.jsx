import Classes from "./ChatWindow.module.css";
import React from "react";
import Chat from "./Chat/Chat";
import {messages} from "../../../../helpers/MessagesData";

let messagesElements = messages.map(el =>
  <Chat message={el.message} data={el.data} key={el.id} />)

const ChatWindow = () => {
  return (
    <section className="chats section">
        <ul className={Classes.list}>
          {messagesElements}
        </ul>
    </section>
  )
}

export default ChatWindow;
