import { createSlice } from "@reduxjs/toolkit";
import {
  setUsersListHelper,
  updateSearchNewFriendTextHelper,
  followHelper,
  unFollowHelper,
  filterUsersListHelper,
  clearSearchQueryHelper,
} from "./FindFriendsHelpers/find-friends-helpers";

// Начальный стейт для хранения информации о друзьях и поиске
const initialState = {
  friends: [], // Список всех друзей
  searchNewFriendText: "", // Текст для поиска новых друзей
  filteredFriends: [], // Отфильтрованные друзья на основе текста поиска
};

const sidebarSlice = createSlice({
  name: "findFriends", // Имя слайса
  initialState, // Инициализация состояния
  reducers: {
    // Редьюсер для установки списка пользователей
    setUsersList: (state, action) => {
      setUsersListHelper(state, action); // Вызов хелпера для установки списка друзей
    },
    // Редьюсер для обновления строки поиска и фильтрации списка друзей
    setSearchQuery: (state, action) => {
      updateSearchNewFriendTextHelper(state, action); // Обновление строки поиска
      filterUsersListHelper(state); // Фильтрация списка друзей по строке поиска
    },
    // Редьюсер для очистки строки поиска и восстановления всех друзей
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state); // Очистка строки поиска и возвращение всех друзей
    },
    // Редьюсер для подписки на пользователя
    follow: (state, action) => {
      followHelper(state, action); // Вызов хелпера для подписки
    },
    // Редьюсер для отписки от пользователя
    unFollow: (state, action) => {
      unFollowHelper(state, action); // Вызов хелпера для отписки
    },
  },
});

// Экспортируем действия слайса для использования в компонентах
export const {
  setUsersList,
  setSearchQuery,
  clearSearchQuery,
  follow,
  unFollow,
} = sidebarSlice.actions;

// Экспортируем редьюсер для использования в store
export default sidebarSlice.reducer;
