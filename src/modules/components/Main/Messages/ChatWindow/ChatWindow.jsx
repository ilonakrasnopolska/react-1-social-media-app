import Classes from "./ChatWindow.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ChatBubble from "./ChatBubble/ChatBubble";
import NewMessage from "./NewMessage/NewMessage";
import CreateNewChat from "./CreateNewChat/CreateNewChat";

const ChatWindow = () => {
  const {userId} = useParams();
  const activeUserId = useSelector(state => state.dialogs.activeUserId);
  const chats = useSelector(state => state.dialogs.chats);
  const currentChat = chats.find(chat => chat.chatId === Number(userId));

  // Определим, отображать ли кнопку для нового чата
  const showCreateNewChat = !activeUserId && !currentChat;

  let chatBubbles = currentChat ? currentChat.messages.map((message, index) => (
    <ChatBubble chatId={currentChat.chatId} messageId={message.id} key={index} />
  )) : null


  return (
    <section className="chat section">
      <ul className={currentChat ? Classes.list : Classes.emptyList}>
        {chatBubbles}
        {showCreateNewChat && <CreateNewChat />}
      </ul>
      {currentChat && <NewMessage chatId={currentChat.chatId}/>}
    </section>
  );
}

export default ChatWindow;
