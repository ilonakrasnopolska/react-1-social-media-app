import {
  setUsersListHelper,
  updateNewMessageTextHelper,
  sendMessageHelper,
  updateSearchUserTextHelper,
  startConversationHelper,
  deleteMessageHelper,
  setActiveUserHelper,
  resetActiveUserHelper,
} from "./DialogsHelpers/dialogs-helpers"; // Импортируем хелперы для работы с данными
import { createSlice } from "@reduxjs/toolkit"; // Импортируем createSlice для создания редьюсера

// Базовый state
const initialState = {
  users: [],
  contacts: [],
  newMessageText: "",
  searchUserText: "",
  activeUserId: null,
  filteredContacts: [],
};

// Создаем редьюсер для работы с диалогами
const dialogsSlice = createSlice({
  name: "dialogs", // Название слайса
  initialState, // Начальное состояние
  reducers: {
    setUsersList: (state, action) => {
      setUsersListHelper(state, action); // Вызов хелпера для установки списка пользователей
    },
    sendMessage: (state, action) => {
      sendMessageHelper(state, action); // Вызов хелпера для отправки сообщения
    },
    deleteMessage: (state, action) => {
      deleteMessageHelper(state, action); // Вызов хелпера для удаления сообщения
    },
    updateNewMessageText: (state, action) => {
      updateNewMessageTextHelper(state, action); // Вызов хелпера для обновления текста нового сообщения
    },
    updateSearchUserText: (state, action) => {
      updateSearchUserTextHelper(state, action); // Вызов хелпера для обновления текста поиска
    },
    startConversation: (state, action) => {
      startConversationHelper(state, action); // Вызов хелпера для начала новой беседы
    },
    setActiveUser: (state, action) => {
      setActiveUserHelper(state, action); // Вызов хелпера для установки активного пользователя
    },
    resetActiveUser: (state) => {
      resetActiveUserHelper(state); // Вызов хелпера для сброса активного пользователя
    },
  },
});

export const {
  setUsersList,
  sendMessage,
  deleteMessage,
  updateNewMessageText,
  updateSearchUserText,
  startConversation,
  setActiveUser,
  resetActiveUser,
} = dialogsSlice.actions; // Экспортируем действия
export default dialogsSlice.reducer; // Экспортируем редьюсер
