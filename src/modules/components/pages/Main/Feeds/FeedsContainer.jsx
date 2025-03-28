import React from "react";
import useData from "../../../../hooks/useData"; // Хук для получения состояния данных
import Feeds from "./Feeds"; // Компонент, отображающий ленту постов
import { useFeedsFilter } from "../../../../hooks/useFeedsFilter"; // Хук для фильтрации постов

const FeedsContainer = ({ t }) => {
  // Получаем информацию о загрузке из хука useData
  const isLoading = useData("loading");

  // Получаем функцию фильтрации категорий из хука useFeedsFilter
  const { handleCategoryFilter } = useFeedsFilter();

  // Получаем данные о лентах и категориях через useData
  const state = useData("feeds");
  const feeds = state.feeds; // Все посты
  const filteredFeeds = state.filteredFeeds; // Отфильтрованные посты
  const categories = state.categories; // Категории
  const activeCategory = state.activeCategory; // Активная категория

  // Если отфильтрованные посты существуют, используем их, иначе показываем все посты
  const posts = filteredFeeds.length > 0 ? filteredFeeds : feeds;

  return (
    // Передаем данные в компонент Feeds
    <Feeds
      posts={posts}
      categories={categories}
      isLoading={isLoading}
      activeCategory={activeCategory}
      handleCategoryFilter={handleCategoryFilter}
      t={t} // Передаем функцию перевода (если используется)
    />
  );
};

export default FeedsContainer;
