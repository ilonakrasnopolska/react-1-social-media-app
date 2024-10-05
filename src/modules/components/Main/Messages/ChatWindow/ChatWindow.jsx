import Classes from "./ChatWindow.module.css";
import React from "react";
import ChatBubble from "./ChatBubble/ChatBubble";
import NewMessage from "./NewMessage/NewMessage";

const ChatWindow = (props) => {
  let chatBubbles = props.chats.map(el =>
    <ChatBubble name={el.name} message={el.message} data={el.data} key={el.id} avatar={el.avatar} />)
  return (
    <section className="chat section">
      <ul className={Classes.list}>
        {chatBubbles}
      </ul>
      <NewMessage />
    </section>
  )
}

export default ChatWindow;
