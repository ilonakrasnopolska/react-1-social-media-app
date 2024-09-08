import Classes from "./ChatWindow.module.css";
import React from "react";
import Chat from "./Chat/Chat";


const ChatWindow = (props) => {
  let messagesElements = props.messages.map(el =>
    <Chat message={el.message} data={el.data} key={el.id} avatar={el.avatar} />)
  return (
    <section className="chats section">
        <ul className={Classes.list}>
          {messagesElements}
        </ul>
    </section>
  )
}

export default ChatWindow;
