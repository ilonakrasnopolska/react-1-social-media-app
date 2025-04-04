import avatars from "../../../assets/Avatars-src"; // Импортируем аватары пользователей
import { v4 as uuidv4 } from "uuid"; // Импортируем функцию для генерации уникальных ID

const CURRENT_USER_NAME = "Ilona Sue"; // Имя текущего пользователя
const baseMessageUrl = "/messages/"; // Базовый URL для сообщений

// Функция для получения текущего времени в формате "часы:минуты"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

// Функция для поиска пользователя по ID
const findById = (state, id) => {
  return state.find((item) => item.userId === id);
};

// Хелпер для установки списка пользователей
export const setUsersListHelper = (state, action) => {
  const usersArr = action.payload; // Получаем список пользователей из действия

  // Находим уже существующие ID пользователей в списке
  const existingIds = new Set(state.users.map((u) => u.userId));

  // Фильтруем новые пользователи, чтобы избежать добавления дубликатов
  const newUsers = usersArr.filter((u) => !existingIds.has(u.userId));

  // Добавляем новых пользователей в список
  state.users.push(...newUsers);

  // Обновляем список контактов, добавляя новых пользователей
  state.contacts = [
    ...state.contacts,
    ...newUsers.map((user) => ({
      ...user,
      chat: {
        chatId: uuidv4(),
        participants: [user.name, CURRENT_USER_NAME],
        messages: [],
      },
    })),
  ];
};

// Хелпер для обновления текста нового сообщения
export const updateNewMessageTextHelper = (state, action) => {
  state.newMessageText = action.payload.text; // Обновляем текст нового сообщения
};

// Хелпер для отправки сообщения
export const sendMessageHelper = (state, action) => {
  const user = findById(state.users, action.payload.userId); // Находим пользователя по ID
  const chat = user.chat; // Получаем чат этого пользователя

  if (!chat) {
    console.error(`Chat with id ${action.payload.chatId} not found.`); // Если чат не найден, выводим ошибку
    return;
  }

  if (state.newMessageText.trim() !== "") {
    // Если текст сообщения не пустой
    const newMessage = {
      name: CURRENT_USER_NAME,
      id: uuidv4(),
      time: getData(),
      avatar: avatars.ilonaSue,
      message: state.newMessageText,
    };

    chat.messages.push(newMessage); // Добавляем новое сообщение в чат
    state.newMessageText = ""; // Очищаем поле для нового сообщения
  }
};

// Хелпер для удаления сообщения
export const deleteMessageHelper = (state, action) => {
  const { userId, messageId } = action.payload; // Получаем ID пользователя и ID сообщения для удаления
  const user = findById(state.users, userId); // Находим пользователя по ID
  const chat = user.chat; // Получаем чат этого пользователя

  if (!chat) {
    console.error(`Chat with id ${userId} not found.`); // Если чат не найден, выводим ошибку
    return state;
  }

  chat.messages = chat.messages.filter((message) => message.id !== messageId); // Фильтруем сообщения и удаляем нужное
};

// Хелпер для фильтрации контактов по тексту поиска
export const filterContactsHelper = (state) => {
  state.filteredContacts = state.contacts.filter((contact) => {
    const contactName = contact.name || ""; // Получаем имя контакта
    return contactName.toLowerCase().includes(state.searchUserText); // Фильтруем по введенному тексту
  });
};

// Хелпер для обновления текста поиска пользователей
export const updateSearchUserTextHelper = (state, action) => {
  state.searchUserText = action.payload.text.toLowerCase(); // Обновляем текст поиска и приводим его к нижнему регистру
  filterContactsHelper(state, action); // Применяем фильтрацию
};

// Хелпер для начала новой беседы
export const startConversationHelper = (state, action) => {
  const { userId, name } = action.payload; // Получаем ID пользователя и имя участника
  const user = findById(state.users, userId); // Находим пользователя по ID

  if (user) {
    return; // Если чат уже существует, ничего не делаем
  }

  const existingChat = state.users.find(
    (user) =>
      user.chat.participants.includes(name) &&
      user.chat.participants.includes(CURRENT_USER_NAME)
  ); // Ищем существующий чат с участниками

  if (existingChat) {
    state.activeUserId = existingChat.chatId; // Если чат найден, устанавливаем его как активный
  } else {
    const chat = {
      chatId: userId,
      participants: [name, CURRENT_USER_NAME],
      messages: [],
    };

    const newUser = { ...action.payload, chat }; // Создаем нового пользователя с чатом

    state.users.push(newUser); // Добавляем нового пользователя
    state.contacts.push(newUser); // Добавляем его в контакты
    state.searchUserText = ""; // Очищаем текст поиска
  }
};

// Хелпер для установки активного пользователя
export const setActiveUserHelper = (state, action) => {
  state.activeUserId = action.payload; // Устанавливаем активного пользователя
  state.searchUserText = ""; // Очищаем текст поиска
};

// Хелпер для сброса активного пользователя
export const resetActiveUserHelper = (state) => {
  state.activeUserId = null; // Сбрасываем активного пользователя
  state.searchUserText = ""; // Очищаем текст поиска
};
