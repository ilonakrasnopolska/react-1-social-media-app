import avatars from "../../Avatars-src";
import {current} from "@reduxjs/toolkit";

const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
const findById = (state, id) => {
  return state.find(item => item.chatId === id);
}
export const updateNewMessageTextHelper = (state, action) => {
  state.newMessageText = action.payload;
  return state
}
export const sendMessageHelper = (state, action) => {
  const chat = findById(state.chats, action.payload.chatId);
  if (!chat) {
    console.error(`Chat with id ${action.payload.chatId} not found.`);
    return;
  }

  if (state.newMessageText.trim() !== '') {
    // Генерируем уникальный ID для нового сообщения
    const newMessageId = chat.messages.length+1
    const newMessage = {
      name: CURRENT_USER_NAME,
      id: newMessageId,
      time: getData(),
      avatar: avatars.ilonaSue,
      message: state.newMessageText,
    };

    chat.messages.push(newMessage); // Добавляем новое сообщение в текущий чат

    state.newMessageText = ''; // Очищаем текстовое поле после отправки
    return state; // Возвращаем обновлённое состояние
  }
}
export const updateSearchUserTextHelper = (state, action) => {
  state.searchUserText = action.payload;
  return state;
}
export const startConversationHelper = (state, action) => {
  const newUser = action.payload;
  const name = action.payload.name;
  const newChatId = state.chats.length+1
  const newChat = {
    chatId: newChatId,
    participants: [name, 'Ilona Sue'],
    messages: []
  }
  state.users.push(newUser);
  state.chats.push(newChat);
  console.log(current(state))
  return state
}
