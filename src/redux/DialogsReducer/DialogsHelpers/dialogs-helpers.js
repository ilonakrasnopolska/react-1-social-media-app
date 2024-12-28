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
  state.newMessageText = action.payload.text;
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
    const newMessageId = chat.messages.length + 1
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
export const deleteMessageHelper = (state, action) => {
  const {chatId, messageId} = action.payload;

  const chat = state.chats.find(chat => chat.chatId === chatId);
  if (!chat) {
    console.error(`Chat with id ${chatId} not found.`);
    return state;
  }

  chat.messages = chat.messages.filter(message => message.id !== messageId);

  return state;
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
  const newUser = action.payload;
  const name = action.payload.name;
  const existingChatById = state.chats.find(chat => chat.chatId === action.payload.userId);

    // Проверяем, существует ли чат с таким ID
    if (existingChatById) {
      return state;
    }

  const existingChat = state.chats.find(chat =>
    chat.participants.includes(name) && chat.participants.includes('Ilona Sue')
  );

  if (existingChat) {
    state.activeUserId = existingChat.chatId;
  } else {
    const newChatId = action.payload.userId;
    const newChat = {
      chatId: newChatId,
      participants: [name, 'Ilona Sue'],
      messages: []
    }
    state.users.push(newUser);
    state.chats.push(newChat);
  }

  state.searchUserText = '';
  return state
}
export const setActiveUserHelper = (state, action) => {
  state.activeUserId = action.payload;
}
export const resetActiveUserHelper = (state) => {
  state.activeUserId = null;
}
