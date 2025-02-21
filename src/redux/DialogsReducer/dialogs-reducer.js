import {
  setUsersListHelper,
  updateNewMessageTextHelper,
  sendMessageHelper,
  updateSearchUserTextHelper,
  startConversationHelper,
  deleteMessageHelper,
  setActiveUserHelper, resetActiveUserHelper,
} from "./DialogsHelpers/dialogs-helpers";
import {createSlice} from '@reduxjs/toolkit';


//Базовый state
const initialState = {
  users: [],
  contacts: [],
  newMessageText: '',
  searchUserText: '',
  activeUserId: null,
  filteredContacts: [],
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      setUsersListHelper(state, action)
    },
    sendMessage: (state, action) => {
      sendMessageHelper(state, action);
    },
    deleteMessage: (state, action) => {
      deleteMessageHelper(state, action)
    },
    updateNewMessageText: (state, action) => {
      updateNewMessageTextHelper(state, action);
    },
    updateSearchUserText: (state, action) => {
      updateSearchUserTextHelper(state, action);
    },
    startConversation: (state, action) => {
      startConversationHelper(state, action);
    },
    setActiveUser: (state, action) => {
      setActiveUserHelper(state, action);
    },
    resetActiveUser: (state) => {
      resetActiveUserHelper(state);
    }
  }
})

export const {
  setUsersList,
  sendMessage,
  deleteMessage,
  updateNewMessageText,
  updateSearchUserText,
  startConversation,
  setActiveUser,
  resetActiveUser,
} = dialogsSlice.actions;
export default dialogsSlice.reducer;
