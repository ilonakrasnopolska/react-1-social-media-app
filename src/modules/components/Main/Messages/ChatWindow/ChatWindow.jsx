import Classes from "./ChatWindow.module.css";
import React from "react";
import {useSelector} from "react-redux";
import ChatBubble from "./ChatBubble/ChatBubble";
import NewMessage from "./NewMessage/NewMessage";

const ChatWindow = () => {
  const chats = useSelector(state => state.dialogs.chats);
  const newMessageText = useSelector(state => state.dialogs.newMessageText);
  const currentChat = chats.find(chat => chat.chatId === 1);

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
      <NewMessage chatId={currentChat ? currentChat.chatId : null}
      />
    </section>
  );
}

export default ChatWindow;
