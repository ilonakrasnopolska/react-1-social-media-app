import { createSlice } from "@reduxjs/toolkit";
import {
  setUsersListHelper,
  updateSearchNewFriendTextHelper,
  setCurrentPageHelper,
  setLoadedPageHelper,
  setTotalUsersCountHelper,
  followHelper,
  unFollowHelper,
  filterUsersListHelper,
  clearSearchQueryHelper,
} from "./FindFriendsHelpers/find-friends-helpers";

// Начальный стейт для хранения информации о друзьях и поиске
const initialState = {
  users: [], // Список всех друзей
  usersPages: [], // Объект для хранения пользователей по страницам
  currentList: [], // массив для UI показывает нужный список в нужный момент
  searchNewFriendText: "", // Текст для поиска новых друзей
  filteredUsers: [], // Отфильтрованные друзья на основе текста поиска
  pageSize: 10, //Кол-во пользователей на странице
  totalUsersCount: 0, //Общее кол-во пользователей
  currentPage: 1, //Текущая страница
  loadedPages: [], // Загруженные страницы
};

const sidebarSlice = createSlice({
  name: "findFriends", // Имя слайса
  initialState, // Инициализация состояния
  reducers: {
    // Редьюсер для установки списка пользователей
    setUsersList: (state, action) => {
      setUsersListHelper(state, action); // Вызов хелпера для установки списка друзей
    },
    setLoadedPage: (state, action) => {
      setLoadedPageHelper(state, action); //Установить загруженные страницы аниме
    },
    // Редьюсер для обновления строки поиска и фильтрации списка друзей
    setSearchQuery: (state, action) => {
      updateSearchNewFriendTextHelper(state, action); // Обновление строки поиска
      filterUsersListHelper(state); // Фильтрация списка друзей по строке поиска
    },
    // Редьюсер для установки текущей страницы
    setCurrentPage: (state, action) => {
      setCurrentPageHelper(state, action); // Вызов хелпера для установки страницы
    },
    // Редьюсер для установки общего кол-во пользователей
    setTotalUsersCount: (state, action) => {
      setTotalUsersCountHelper(state, action);
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
  setLoadedPage,
  setCurrentPage,
  setTotalUsersCount,
  clearSearchQuery,
  follow,
  unFollow,
} = sidebarSlice.actions;

// Экспортируем редьюсер для использования в store
export default sidebarSlice.reducer;
