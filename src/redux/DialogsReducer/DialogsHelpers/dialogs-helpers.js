import avatars from "../../assets/Avatars-src";

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
  state.newMessageText = action.payload.text.trim();
}
export const sendMessageHelper = (state, action) => {
  const chat = findById(state.chats, action.payload.chatId);
  if (!chat) {
    console.error(`Chat with id ${action.payload.chatId} not found.`);
    return;
  }

  if (state.newMessageText.trim() !== '') {
    const newMessage = {
      name: CURRENT_USER_NAME,
      id: chat.messages.length + 1,
      time: getData(),
      avatar: avatars.ilonaSue,
      message: state.newMessageText,
    };

    chat.messages.push(newMessage);

    state.newMessageText = '';
  }
}
export const deleteMessageHelper = (state, action) => {
  const {chatId, messageId} = action.payload;
  const chat = state.chats.find(chat => chat.chatId === chatId);
  if (!chat) {
    console.error(`Chat with id ${chatId} not found.`);
    return state;
  }

  chat.messages = chat.messages.filter(message => message.id !== messageId);
}
export const filterContactsHelper = (state, action) => {
  const {language} = action.payload
  state.filteredContacts = state.contacts.filter(contact => {
    const contactName = contact.name[language] || '';
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
  const existingChatById = state.chats.find(chat => chat.chatId === userId);

  if (existingChatById) {
      return;
    }

  const existingChat = state.chats.find(chat =>
    chat.participants.includes(name) && chat.participants.includes(CURRENT_USER_NAME)
  );

  if (existingChat) {
    state.activeUserId = existingChat.chatId;
  } else {
    const newChat = {
      chatId: userId,
      participants: [name, CURRENT_USER_NAME],
      messages: []
    }
    state.users.push(action.payload);
    state.chats.push(newChat);
  }
  state.searchUserText = '';
}
export const setActiveUserHelper = (state, action) => {
  state.activeUserId = action.payload;
}
export const resetActiveUserHelper = (state) => {
  state.activeUserId = null;
}
