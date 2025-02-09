import { v4 as uuidv4 } from 'uuid';
import {
  updateNewMessageTextHelper,
  sendMessageHelper,
  updateSearchUserTextHelper,
  startConversationHelper,
  deleteMessageHelper,
  setActiveUserHelper, resetActiveUserHelper,
} from "./DialogsHelpers/dialogs-helpers";
import {createSlice} from '@reduxjs/toolkit';
import avatars from "../../assets/Avatars-src";


// Константы
const baseMessageUrl = '/messages/';
const users = [
  {name: 'Mark', userId: uuidv4(), url: `${baseMessageUrl}${uuidv4()}`, avatar: `${avatars.markPic}` ,
  chat: {
    chatId: uuidv4(),
    participants: ['Mark', 'Ilona Sue'],
    messages: [
      {name: 'Mark', message: 'Hello there!', id: uuidv4(), time: '17:28', avatar: avatars.markPic},
      {name: 'Ilona Sue', message: 'Hi', id: uuidv4(), time: '17:50', avatar: avatars.ilonaSue},
      {
        name: 'Mark',
        message: 'Have you seen Jujutsu K?',
        id: uuidv4(),
        time: '19:00',
        avatar: avatars.markPic
      },
      {name: 'Ilona Sue', message: 'Yeah', id: uuidv4(), time: '19:10', avatar: avatars.ilonaSue},
      {name: 'Mark', message: 'How old are you?', id: uuidv4(), time: '20:00', avatar: avatars.markPic},
      {name: 'Mark', message: 'Can I call u?', id: uuidv4(), time: '20:10', avatar: avatars.markPic},
      {
        name: 'Mark', message: 'Where are u?', id: uuidv4(), time: '22:00', avatar: avatars.markPic
      }
    ]
  }},
  {name: 'Vikky', userId: uuidv4(), url: `${baseMessageUrl}${uuidv4()}`, avatar: `${avatars.vikkyPic}`,
  chat: {
    chatId: uuidv4(),
    participants: ['Vikky', 'Ilona Sue'],
    messages: [
      {name: 'Vikky', message: 'Hello there!', id: uuidv4(), time: '17:28', avatar: avatars.vikkyPic},
    ]
  }},
  {name: 'Sunny', userId: uuidv4(), url: `${baseMessageUrl}${uuidv4()}`, avatar: `${avatars.sunnyPic}`,
  chat: {
    chatId: uuidv4(),
    participants: ['Sunny', 'Ilona Sue'],
    messages: [
      {name: 'Sunny', message: 'Hi!', id: uuidv4(), time: '17:28', avatar: avatars.sunnyPic},
      {name: 'Ilona Sue', message: 'Hi', id: uuidv4(), time: '17:50', avatar: avatars.ilonaSue},
      {
        name: 'Sunny',
        message: 'Have you seen Naruto?',
        id: uuidv4(),
        time: '19:00',
        avatar: avatars.sunnyPic
      },
    ]
  }},
  {name: 'Phillip',userId: uuidv4(),url: `${baseMessageUrl}${uuidv4()}`,avatar: `${avatars.phillipPic}`,
  chat: {
    chatId: uuidv4(),
    participants: ['Phillip', 'Ilona Sue'],
    messages: [
      {name: 'Phillip', message: 'Where are u?!', id: uuidv4(), time: '17:28', avatar: avatars.phillipPic},
      {name: 'Ilona Sue', message: 'Here', id: uuidv4(), time: '17:50', avatar: avatars.ilonaSue},
      {
        name: 'Phillip',
        message: 'How old are you?',
        id: uuidv4(),
        time: '19:00',
        avatar: avatars.phillipPic
      },
      {name: 'Ilona Sue', message: '25', id: uuidv4(), time: '19:10', avatar: avatars.ilonaSue},
    ]
  }},
  {name: 'Elon', userId: uuidv4(), url: `${baseMessageUrl}${uuidv4()}`, avatar: `${avatars.elonPic}`,
  chat: {
    chatId: uuidv4(),
    participants: ['Elon', 'Ilona Sue'],
    messages: [
      {name: 'Elon', message: 'Hello there!', id: uuidv4(), time: '17:28', avatar: avatars.elonPic},
      {name: 'Ilona Sue', message: 'Hi', id: uuidv4(), time: '17:50', avatar: avatars.ilonaSue},
      {
        name: 'Elon',
        message: 'Have you seen One Piece?',
        id: uuidv4(),
        time: '19:00',
        avatar: avatars.elonPic
      },
      {name: 'Ilona Sue', message: 'Yeah', id: uuidv4(), time: '19:10', avatar: avatars.ilonaSue},
    ]
  }},
  {name: 'Sakura', userId: uuidv4(), url: `${baseMessageUrl}${uuidv4()}`, avatar: `${avatars.sakuraPic}`,
  chat: {
    chatId: uuidv4(),
    participants: ['Sakura', 'Ilona Sue'],
    messages: [
      {name: 'Sakura', message: 'Are you ready?!', id: uuidv4(), time: '17:28', avatar: avatars.sakuraPic},
      {name: 'Ilona Sue', message: 'Nope', id: uuidv4(), time: '17:50', avatar: avatars.ilonaSue},
    ]
  }},
  {name: 'Ino', userId: uuidv4(), url: `${baseMessageUrl}${uuidv4()}`, avatar: `${avatars.inoPic}`,
  chat: {
    chatId: uuidv4(),
    participants: ['Ino', 'Ilona Sue'],
    messages: [
      {name: 'Ino', message: 'Hello there!', id: uuidv4(), time: '17:28', avatar: avatars.inoPic},
    ]
  }}
]

//Базовый state
const initialState = {
  users: users,
  contacts: [
    ...users,
    {name: 'Violet', userId: uuidv4(), url: `${baseMessageUrl}uuidv4()`, avatar: `${avatars.violetPic}`,
    chat: { chatId: uuidv4(),
      participants: ['Violet', 'Ilona Sue'],
      messages: []
    }},
    {name: 'Anna', userId: uuidv4(), url: `${baseMessageUrl}uuidv4()`, avatar: `${avatars.annaPic}`,
    chat: { chatId: uuidv4(),
      participants: ['Anna', 'Ilona Sue'],
      messages: []
    }},
    {name: 'Artur', userId: uuidv4(), url: `${baseMessageUrl}uuidv4()`, avatar: `${avatars.arturPic}`,
    chat: { chatId: uuidv4(),
      participants: ['Artur', 'Ilona Sue'],
      messages: []
    }},
  ],
  newMessageText: '',
  searchUserText: '',
  activeUserId: null,
  filteredContacts: [],
}

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
    setActiveUser: (state, action) => {
      setActiveUserHelper(state, action);
    },
    resetActiveUser: (state) => {
      resetActiveUserHelper(state);
    }
  }
})

export const {
  sendMessage,
  deleteMessage,
  updateNewMessageText,
  updateSearchUserText,
  startConversation,
  setActiveUser,
  resetActiveUser,
} = dialogsSlice.actions;
export default dialogsSlice.reducer;
