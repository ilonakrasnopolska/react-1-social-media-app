import {updateNewMessageText, sendMessage} from "./DialogsHelpers/dialogs-helpers";

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
// const OPEN_DIALOG = 'OPEN_DIALOG';


const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE :
      sendMessage(state, action);
      return state;

    case UPDATE_NEW_MESSAGE_TEXT :
      updateNewMessageText(state, 'newMessageText', action);
      return state;

    default:
      return state;
  }

}

export default dialogsReducer;



//Экспортируемые функции
export const sendMessageActionCreator = (chatId) => ({type: SEND_MESSAGE, chatId: chatId});
export const updateNewMessageTextActionCreator = (newMessageText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value: newMessageText
});
// export const openDialogActionCreator = (id) => ({type: OPEN_DIALOG, id: id});
