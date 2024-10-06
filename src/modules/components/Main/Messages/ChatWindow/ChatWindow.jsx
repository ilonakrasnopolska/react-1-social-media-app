import Classes from "./ChatWindow.module.css";
import React from "react";
import ChatBubble from "./ChatBubble/ChatBubble";
import NewMessage from "./NewMessage/NewMessage";

const ChatWindow = (props) => {
  console.log(props)

  const currentChat = props.dialogs.chats.find(chat => chat.id === 1);

  // Если текущий чат существует, отобразим сообщения, иначе сообщим, что чат пуст
  let chatBubbles = currentChat ? currentChat.messages.map((message, index) => (
    <ChatBubble
      name={message.name}
      message={message.message}
      time={message.time}
      key={index}
      avatar={message.avatar}
    />
  )) : <li>Select dialog</li>;

  return (
    <section className="chat section">
      <ul className={Classes.list}>
        {chatBubbles}
      </ul>
      <NewMessage />
    </section>
  );
}

export default ChatWindow;
