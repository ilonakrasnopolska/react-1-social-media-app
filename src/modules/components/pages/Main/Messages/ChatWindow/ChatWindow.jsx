import Classes from "./ChatWindow.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ChatBubble from "./ChatBubble/ChatBubble";
import NewMessage from "./NewMessage/NewMessage";

const ChatWindow = () => {
  const {userId} = useParams();
  const chats = useSelector(state => state.dialogs.chats);
  const currentChat = chats.find(chat => chat.chatId === Number(userId));


  const chatContent = currentChat
    ? currentChat.messages.length > 0
      ? currentChat.messages.map((message) => (
        <ChatBubble
          chatId={currentChat.chatId}
          messageId={message.id}
          key={message.id}
        />
      ))
      : <li className={Classes.initialList}>Start conversation..</li>
    : <li className={Classes.noChat}>Please select a chat..</li>;


  return (
    <section className="chat section">
      <ul className={currentChat ? Classes.list : Classes.emptyList}>
        {chatContent}
      </ul>
      {currentChat && <NewMessage chatId={currentChat.chatId}/>}
    </section>
  );
}

export default ChatWindow;
