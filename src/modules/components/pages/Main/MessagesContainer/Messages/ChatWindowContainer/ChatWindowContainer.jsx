import React from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatBubbleContainer from "./ChatWindow/ChatBubbleContainer/ChatBubbleContainer";


const ChatWindowContainer = ({chats, newMessageText, urlId}) => {
  const currentChat = chats.find(chat => chat.chatId === Number(urlId));
  return (
    <ChatWindow
      chatContent={<ChatBubbleContainer currentChat={currentChat} chats={chats} />}
      showNewMessage={!!currentChat}
      chatId={currentChat?.chatId}
      newMessageText={newMessageText}
    />
  );
};


export default ChatWindowContainer;
