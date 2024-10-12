// Константы
import avatars from "./Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const OPEN_DIALOG = 'OPEN_DIALOG';

// Счетчики
let messageIdCounter = 1;

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE :
      sendMessage(state, action);
      return state;

    case UPDATE_NEW_MESSAGE_TEXT :
      updateText(state, 'newMessageText', action);
      return state;
  }
}

export default dialogsReducer;

//Функции
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
const updateText = (state, property, action) => {
  state[property] = action.value;
  return state;
}
const findById = (state, id) => {
  return state.find(item => item.id === id);
}
const sendMessage = (state, action) => {
  const chat = findById(state.chats, action.chatId);
  if (!chat) {
    console.error(`Chat with id ${action.chatId} not found.`);
    return;
  }

  if (state.newMessageText.trim() !== '') {
    let newMessageId = messageIdCounter++;
    let newMessage = {
      name: CURRENT_USER_NAME,
      id: newMessageId,
      time: getData(),
      avatar: avatars.ilonaSue,
      message: state.newMessageText,
    };

    chat.messages.push(newMessage);

    state.newMessageText = '';
  }
}


//Экспортируемые функции
export const sendMessageActionCreator = (chatId) => ({type: SEND_MESSAGE, chatId: chatId});
export const updateNewMessageTextActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value: newMessageText
});
export const openDialogActionCreator = (id) => ({type: OPEN_DIALOG, id: id});
