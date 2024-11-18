import {
  updateNewMessageTextHelper,
  sendMessageHelper,
  updateSearchUserTextHelper,
  startConversationHelper,
  deleteMessageHelper,
  selectUserHelper,
} from "./DialogsHelpers/dialogs-helpers";
import {createSlice} from '@reduxjs/toolkit';
import avatars from "../Assets/Avatars-src";

// Константы
const baseMessageUrl = '/messages/';

// Счетчики
let userIdCounter = 1;
let chatIdCounter = 1;
let messageIdCounter = 1;

//Базовый state
const initialState = {
  users: [
    {name: 'Mark', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.markPic}`},
    {name: 'Vikky', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.vikkyPic}`},
    {name: 'Sunny', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.sunnyPic}`},
    {
      name: 'Phillip',
      userId: userIdCounter,
      url: `${baseMessageUrl}${userIdCounter++}`,
      avatar: `${avatars.phillipPic}`
    },
    {name: 'Elon', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.elonPic}`},
    {name: 'Sakura', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.sakuraPic}`},
    {name: 'Ino', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.inoPic}`},
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
    {
      chatId: chatIdCounter++,
      participants: ['Vikky', 'Ilona Sue'],
      messages: [
        {name: 'Vikky', message: 'Hello there!', id: messageIdCounter++, time: '17:28', avatar: avatars.vikkyPic},
      ]
    },
    {
      chatId: chatIdCounter++,
      participants: ['Sunny', 'Ilona Sue'],
      messages: [
        {name: 'Sunny', message: 'Hi!', id: messageIdCounter++, time: '17:28', avatar: avatars.sunnyPic},
        {name: 'Ilona Sue', message: 'Hi', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue},
        {
          name: 'Sunny',
          message: 'Have you seen Naruto?',
          id: messageIdCounter++,
          time: '19:00',
          avatar: avatars.sunnyPic
        },
      ]
    },
    {
      chatId: chatIdCounter++,
      participants: ['Phillip', 'Ilona Sue'],
      messages: [
        {name: 'Phillip', message: 'Where are u?!', id: messageIdCounter++, time: '17:28', avatar: avatars.phillipPic},
        {name: 'Ilona Sue', message: 'Here', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue},
        {
          name: 'Phillip',
          message: 'How old are you?',
          id: messageIdCounter++,
          time: '19:00',
          avatar: avatars.phillipPic
        },
        {name: 'Ilona Sue', message: '25', id: messageIdCounter++, time: '19:10', avatar: avatars.ilonaSue},
      ]
    },
    {
      chatId: chatIdCounter++,
      participants: ['Elon', 'Ilona Sue'],
      messages: [
        {name: 'Elon', message: 'Hello there!', id: messageIdCounter++, time: '17:28', avatar: avatars.elonPic},
        {name: 'Ilona Sue', message: 'Hi', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue},
        {
          name: 'Elon',
          message: 'Have you seen One Piece?',
          id: messageIdCounter++,
          time: '19:00',
          avatar: avatars.elonPic
        },
        {name: 'Ilona Sue', message: 'Yeah', id: messageIdCounter++, time: '19:10', avatar: avatars.ilonaSue},
      ]
    },
    {
      chatId: chatIdCounter++,
      participants: ['Sakura', 'Ilona Sue'],
      messages: [
        {name: 'Sakura', message: 'Are you ready?!', id: messageIdCounter++, time: '17:28', avatar: avatars.sakuraPic},
        {name: 'Ilona Sue', message: 'Nope', id: messageIdCounter++, time: '17:50', avatar: avatars.ilonaSue},
      ]
    },
    {
      chatId: chatIdCounter++,
      participants: ['Ino', 'Ilona Sue'],
      messages: [
        {name: 'Ino', message: 'Hello there!', id: messageIdCounter++, time: '17:28', avatar: avatars.inoPic},
      ]
    },
  ],
  contacts: [
    {name: 'Violet', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.violetPic}`},
    {name: 'Anna', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.annaPic}`},
    {name: 'Artur', userId: userIdCounter, url: `${baseMessageUrl}${userIdCounter++}`, avatar: `${avatars.arturPic}`},
  ],
  newMessageText: '',
  searchUserText: '',
  activeUserId: null,
}

initialState.contacts = initialState.users
  .map(user => ({
    name: user.name,
    userId: user.userId,
    url: user.url,
    avatar: user.avatar,
  }))
  .concat(initialState.contacts);

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
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
    selectUser: (state, action) => {
      selectUserHelper(state, action)
    },
  }
})

export const {
  sendMessage,
  deleteMessage,
  updateNewMessageText,
  updateSearchUserText,
  startConversation,
  selectUser,
} = dialogsSlice.actions;
export default dialogsSlice.reducer;
