// Импортируем необходимые ресурсы
import { createSlice } from "@reduxjs/toolkit"; // Импортируем createSlice из Redux Toolkit
import { v4 as uuidv4 } from "uuid"; // Импортируем uuid для генерации уникальных идентификаторов
import { NAV_LIST_NAME, NAV_LIST_URL } from "../../constants/state-constants"; // Импортируем константы для названий и URL в навигации
import {
  setFriendsListHelper,
  toggleFriendFollowHelper
} from "./SidebarHelpers/sidebar-helpers";

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
  friends: [],
  friendsListSize: 8, //Кол-во друзей в блоке
};

// Создание слайса для работы с сайдбаром (боковой панелью)
const sidebarSlice = createSlice({
  name: "sidebar", // Имя слайса
  initialState, // Начальное состояние
  reducers: {
    // Экшен для установки друзей
    setFriendsList: (state, action) => {
      setFriendsListHelper(state, action); // Вывод состояния в консоль
    },
    toggleFriendFollow: (state, action) => {
      toggleFriendFollowHelper(state, action);
    }
  },
});

// Экспортируем экшен для использования в компонентах
export const { setFriendsList, toggleFriendFollow } = sidebarSlice.actions;

// Экспортируем редьюсер по умолчанию для использования в store
export default sidebarSlice.reducer;
