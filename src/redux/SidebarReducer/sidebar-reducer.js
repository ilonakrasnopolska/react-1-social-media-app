// Импортируем необходимые ресурсы
import avatars from "../../assets/Avatars-src"; // Импорт изображений аватаров
import { createSlice } from "@reduxjs/toolkit"; // Импортируем createSlice из Redux Toolkit
import { v4 as uuidv4 } from "uuid"; // Импортируем uuid для генерации уникальных идентификаторов
import { NAV_LIST_NAME, NAV_LIST_URL } from "../../constants/state-constants"; // Импортируем константы для названий и URL в навигации

// Инициализация базового состояния
const initialState = {
  // Навигационные ссылки
  nav: [
    {
      name: NAV_LIST_NAME.PROFILE, // Название ссылки
      url: NAV_LIST_URL.PROFILE, // URL для перехода по ссылке
      id: uuidv4(), // Уникальный идентификатор для каждой ссылки
    },
    {
      name: NAV_LIST_NAME.MESSAGES,
      url: NAV_LIST_URL.MESSAGES,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.FEEDS,
      url: NAV_LIST_URL.FEEDS,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.ANIME,
      url: NAV_LIST_URL.ANIME,
      id: uuidv4(),
    },
    {
      name: NAV_LIST_NAME.SETTINGS,
      url: NAV_LIST_URL.SETTINGS,
      id: uuidv4(),
    },
  ],
  // Ссылка для поиска друзей
  findFriends: {
    name: NAV_LIST_NAME.FIND_FRIENDS,
    url: NAV_LIST_URL.FIND_FRIENDS,
    id: uuidv4(),
  },
  // Массив с друзьями, каждый объект включает имя, уникальный ID и аватар
  friends: [
    { name: "Sunny", userId: uuidv4(), avatar: `${avatars.sunnyPic}` }, // Друзья с их аватарами
    { name: "Phillip", userId: uuidv4(), avatar: `${avatars.phillipPic}` },
    { name: "Elon", userId: uuidv4(), avatar: `${avatars.elonPic}` },
  ],
};

// Создание слайса для работы с сайдбаром (боковой панелью)
const sidebarSlice = createSlice({
  name: "sidebar", // Имя слайса
  initialState, // Начальное состояние
  reducers: {
    // Экшен для отображения друзей (в данном случае просто выводит состояние в консоль)
    showFriends: (state) => {
      console.log(state); // Вывод состояния в консоль
    },
  },
});

// Экспортируем экшен для использования в компонентах
export const {
  showFriends, // Экспорт экшена showFriends
} = sidebarSlice.actions;

// Экспортируем редьюсер по умолчанию для использования в store
export default sidebarSlice.reducer;
