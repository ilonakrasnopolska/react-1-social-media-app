import Classes from "./Chat.module.css";
import React from "react";
import ChatBubble from "./ChatBubble/ChatBubble";

const Chat = (props) => {
  let chatBubbles = props.bubbles.map(el =>
    <ChatBubble name={el.name} message={el.message} data={el.data} key={el.id} avatar={el.avatar} />)
  return (
    <section className="chat section">
      <ul className={Classes.list}>
        {chatBubbles}
      </ul>
    </section>
  )
}

export default Chat;
