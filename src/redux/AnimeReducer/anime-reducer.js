// Redux slice для управления состоянием аниме
import { createSlice } from "@reduxjs/toolkit";
import {
  setAnimeListHelper,
  updateSearchAnimeTextHelper,
  filterAnimeListHelper,
  clearSearchQueryHelper,
  toggleWatchListHelper,
  toggleWatchedListHelper,
  setRatingHelper,
  showAnimeListHelper
} from "./AnimeHelpers/anime-helpers";

// Начальное состояние для слайса аниме
const initialState = {
  anime: [], // Список всех аниме
  watchList: [], // Список аниме для просмотра
  watchedList: [], // Список просмотренных аниме
  newSearchAnimeText: "", // Текст поискового запроса
  filteredAnime: [], // Отфильтрованный список аниме
};

// Создание слайса аниме
const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setAnimeList: (state, action) => {
      setAnimeListHelper(state, action); // Устанавливаем список аниме
    },
    setSearchQuery: (state, action) => {
      updateSearchAnimeTextHelper(state, action); // Обновляем текст поискового запроса
      filterAnimeListHelper(state); // Перефильтровываем список аниме на основе поискового запроса
    },
    clearSearchQuery: (state) => {
      clearSearchQueryHelper(state); // Очищаем поисковый запрос и сбрасываем отфильтрованный список
    },
    toggleWatchList: (state, action) => {
      toggleWatchListHelper(state, action); // Переключаем аниме в списке для просмотра
    },
    toggleWatchedList: (state, action) => {
      toggleWatchedListHelper(state, action); // Переключаем аниме в списке просмотренных
    },
    setRating: (state, action) => {
      setRatingHelper(state, action); // Устанавливаем или обновляем рейтинг аниме
    },
    showAnimeList: (state, action) => {
      showAnimeListHelper(state, action); // Показываем список аниме в зависимости от типа (для просмотра, просмотренные, все)
    }
  },
});

// Экспортируем действия из слайса аниме
export const {
  setAnimeList,
  setSearchQuery,
  clearSearchQuery,
  toggleWatchList,
  toggleWatchedList,
  setRating,
  showAnimeList
} = animeSlice.actions;

// Экспортируем редуктор для использования в хранилище
export default animeSlice.reducer;
