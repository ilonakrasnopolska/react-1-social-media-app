import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatBubbleContainer from "./ChatWindow/ChatBubbleContainer/ChatBubbleContainer";


const ChatWindowContainer = ({chats, newMessageText, urlId, t}) => {
  const currentChat = chats.find(chat => chat.chatId === Number(urlId));
  return (
    <ChatWindow
      chatContent={<ChatBubbleContainer currentChat={currentChat} chats={chats} t={t} />}
      showNewMessage={!!currentChat}
      chatId={currentChat?.chatId}
      newMessageText={newMessageText}
      t={t}
    />
  );
};


export default ChatWindowContainer;
