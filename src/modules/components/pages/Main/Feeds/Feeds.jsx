import React from "react";
import Classes from "./Feeds.module.css"; // Стили для компонента Feeds
import Posts from "./Posts/Posts"; // Компонент для отображения постов
import Categories from "./Categories/Categories"; // Компонент для отображения категорий

const Feeds = ({
  t,
  posts,
  categories,
  isLoading,
  handleCategoryFilter,
  activeCategory,
}) => {
  return (
    // Основной блок для ленты новостей
    <section className="news section">
      <div className={Classes.container}>
        {/* Компонент Posts отображает посты */}
        <Posts
          isLoading={isLoading} // Статус загрузки
          posts={posts} // Список постов, которые нужно отобразить
          t={t} // Функция перевода
        />

        {/* Компонент Categories отображает категории для фильтрации */}
        <Categories
          categories={categories} // Список категорий
          activeCategory={activeCategory} // Активная категория
          handleCategoryFilter={handleCategoryFilter} // Функция для фильтрации
          t={t} // Функция перевода
        />
      </div>
    </section>
  );
};

export default Feeds;
