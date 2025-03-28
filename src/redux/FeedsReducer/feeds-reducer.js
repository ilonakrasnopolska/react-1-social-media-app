import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { FEEDS_LIST_TITLE } from "../../constants/state-constants";
import {
  setFeedsListHelpers,
  filterFeedsHelpers,
  setActiveCategoryHelpers,
} from "./FeedsHelpers/feeds-helpers";

// Инициализация состояния для слайса "feeds"
const initialState = {
  // Список категорий фидов с уникальными ID для каждой категории
  categories: [
    {
      title: FEEDS_LIST_TITLE.TRENDS, // Заголовок категории
      id: uuidv4(), // Генерация уникального идентификатора для категории
    },
    {
      title: FEEDS_LIST_TITLE.MANGA,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.FANS,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.NEWS,
      id: uuidv4(),
    },
    {
      title: FEEDS_LIST_TITLE.VIEW_ALL,
      id: uuidv4(),
    },
  ],
  feeds: [], // Массив всех фидов
  filteredFeeds: [], // Массив отфильтрованных фидов
  activeCategory: FEEDS_LIST_TITLE.VIEW_ALL, // Активная категория фидов по умолчанию "View All"
};

// Создание слайса с состоянием фидов
const feedsSlice = createSlice({
  name: "feeds", // Имя слайса
  initialState, // Изначальное состояние
  reducers: {
    // Редьюсер для установки нового списка фидов
    setFeedsList: (state, action) => {
      setFeedsListHelpers(state, action);
    },
    // Редьюсер для фильтрации фидов по категории
    filterFeeds: (state, action) => {
      filterFeedsHelpers(state, action);
    },
    // Редьюсер для установки активной категории
    setActiveCategory: (state, action) => {
      setActiveCategoryHelpers(state, action);
    },
  },
});

// Экспортируем действия из слайса для использования в компонентах
export const { setFeedsList, filterFeeds, setActiveCategory } =
  feedsSlice.actions;

// Экспортируем редьюсер слайса для подключения к store
export default feedsSlice.reducer;
