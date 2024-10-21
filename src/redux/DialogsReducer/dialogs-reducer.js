import {updateNewMessageTextHelper, sendMessageHelper} from "./DialogsHelpers/dialogs-helpers";
import {createSlice} from '@reduxjs/toolkit';
import avatars from "../Avatars-src";

// Константы
const baseMessageUrl = '/messages/';

// Счетчики
let userIdCounter = 1;
let chatIdCounter = 1;
let messageIdCounter = 1;

//Базовый state
const initialState = {
  users: [
    {name: 'Mark', userId: userIdCounter++, url: `${baseMessageUrl}1`, avatar: `${avatars.markPic}`},
    {name: 'Vikky', userId: userIdCounter++, url: `${baseMessageUrl}2`, avatar: `${avatars.vikkyPic}`},
    {name: 'Sunny', userId: userIdCounter++, url: `${baseMessageUrl}3`, avatar: `${avatars.sunnyPic}`},
    {name: 'Phillip', userId: userIdCounter++, url: `${baseMessageUrl}/4`, avatar: `${avatars.phillipPic}`},
    {name: 'Elon', userId: userIdCounter++, url: `${baseMessageUrl}5`, avatar: `${avatars.elonPic}`},
    {name: 'Sakura', userId: userIdCounter++, url: `${baseMessageUrl}6`, avatar: `${avatars.sakuraPic}`},
    {name: 'Ino', userId: userIdCounter++, url: `${baseMessageUrl}7`, avatar: `${avatars.inoPic}`},
  ],
  chats: [
    {
      chatId: chatIdCounter++,
      participants: ['Mark', 'Ilona Sue'],
      messages: [
        {name: 'Mark', message: 'Hello there!', id: messageIdCounter++, time: '17:28', avatar: avatars.markPic},
        {name: 'Ilona Sue', message: 'Hi', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue},
        {
          name: 'Mark',
          message: 'Have you seen Jujutsu K?',
          id: messageIdCounter++,
          time: '19:00',
          avatar: avatars.markPic
        },
        {name: 'Ilona Sue', message: 'Yeah', id: messageIdCounter++, time: '19:10', avatar: avatars.ilonaSue},
        {name: 'Mark', message: 'How old are you?', id: messageIdCounter++, time: '20:00', avatar: avatars.markPic},
        {name: 'Mark', message: 'Can I call u?', id: messageIdCounter++, time: '20:10', avatar: avatars.markPic},
        {
          name: 'Mark', message: 'Where are u?', id: messageIdCounter++, time: '22:00', avatar: avatars.markPic
        }
      ]
    },
  ],
  newMessageText: '',
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      sendMessageHelper(state, action);
    },
    updateNewMessageText: (state, action) => {
      updateNewMessageTextHelper(state, 'newMessageText', action);
    },
  }
})

export const {sendMessage, updateNewMessageText} = dialogsSlice.actions;
export default dialogsSlice.reducer;
