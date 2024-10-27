import Classes from "./ChatWindow.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ChatBubble from "./ChatBubble/ChatBubble";
import NewMessage from "./NewMessage/NewMessage";
import CreateNewChat from "./CreateNewChat/CreateNewChat";

const ChatWindow = () => {
  const {userId} = useParams();
  const chats = useSelector(state => state.dialogs.chats);
  const currentChat = chats.find(chat => chat.chatId === Number(userId));

  // Если текущий чат существует, отобразим сообщения, иначе сообщим, что чат пуст
  let chatBubbles = currentChat ? currentChat.messages.map((message, index) => (
    <ChatBubble
      chatId={currentChat.chatId}
      messageId={message.id}
      key={index}
    />
  )) : <li className={Classes.initialList}>Create a new chat:</li>

  return (
    <section className="chat section">
      <ul className={currentChat ? Classes.list : Classes.emptyList}>
        {chatBubbles}
        {!currentChat && <CreateNewChat />}
      </ul>
      {currentChat && <NewMessage chatId={currentChat.chatId}/>}
    </section>
  );
}

export default ChatWindow;
