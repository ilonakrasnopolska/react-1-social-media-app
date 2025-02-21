import avatars from "../../../assets/Avatars-src";
import { v4 as uuidv4 } from 'uuid';

const CURRENT_USER_NAME = "Ilona Sue"
const baseMessageUrl = '/messages/';

const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
const findById = (state, id) => {
  return state.find(item => item.userId === id);
}

export const setUsersListHelper = (state, action) => {
  const usersArr = action.payload;
  state.users = usersArr;
  state.contacts =
  [...usersArr, {name: 'Violet', userId: uuidv4(), url: `${baseMessageUrl}uuidv4()`, avatar: `${avatars.violetPic}`,
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
  }},];
};

export const updateNewMessageTextHelper = (state, action) => {
  state.newMessageText = action.payload.text;
}
export const sendMessageHelper = (state, action) => {
  const user = findById(state.users, action.payload.userId);
  const chat = user.chat;
  if (!chat) {
    console.error(`Chat with id ${action.payload.chatId} not found.`);
    return;
  }

  if (state.newMessageText.trim() !== '') {
    const newMessage = {
      name: CURRENT_USER_NAME,
      id: uuidv4(),
      time: getData(),
      avatar: avatars.ilonaSue,
      message: state.newMessageText,
    };

    chat.messages.push(newMessage);

    state.newMessageText = '';
  }
}
export const deleteMessageHelper = (state, action) => {
  const {userId, messageId} = action.payload;
  const user = findById(state.users, userId);
  const chat = user.chat
  if (!chat) {
    console.error(`Chat with id ${userId} not found.`);
    return state;
  }
  chat.messages = chat.messages.filter(message => message.id !== messageId);
}
export const filterContactsHelper = (state) => {
  state.filteredContacts = state.contacts.filter(contact => {
    const contactName = contact.name || '';
    return contactName.toLowerCase().includes(state.searchUserText)
  }
  );
};
export const updateSearchUserTextHelper = (state, action) => {
  state.searchUserText = action.payload.text.toLowerCase();
  filterContactsHelper(state, action)
}
export const startConversationHelper = (state, action) => {
  const { userId, name } = action.payload;
  const user = findById(state.users, userId);

  if (user) {
      return;
    }

  const existingChat = state.users.find(user =>
    user.chat.participants.includes(name) && user.chat.participants.includes(CURRENT_USER_NAME)
  );

  if (existingChat) {
    state.activeUserId = existingChat.chatId;
  } else {
    const chat = {
      chatId: userId,
      participants: [name, CURRENT_USER_NAME],
      messages: []
    }

    const newUser = { ...action.payload, chat }

    state.users.push(newUser);
    state.contacts.push(newUser)
    state.searchUserText = '';
  }
}
export const setActiveUserHelper = (state, action) => {
  state.activeUserId = action.payload;
  state.searchUserText = '';
}
export const resetActiveUserHelper = (state) => {
  state.activeUserId = null;
  state.searchUserText = '';
}
