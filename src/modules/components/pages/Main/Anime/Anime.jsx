import React from "react";
import Classes from "./Anime.module.css";
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";
import AnimeListFilter from "./AnimeListFilter/AnimeListFilter";

const Anime = ({
  t, // Функция для перевода
  newSearchAnimeText, // Текст для поиска аниме
  useTextChangeHandlers, // Хук для обработки изменений текста
  useResetSearchQuery, // Хук для сброса поискового запроса
  filteredList, // Отфильтрованный список аниме
  hasResults, // Есть ли результаты поиска
  isLoading, // Флаг загрузки данных
}) => {
  return (
    <section className="anime section">
      <div className={Classes.container}>
        {/* Компонент для поиска аниме */}
        <SearchAnime
          newSearchAnimeText={newSearchAnimeText}
          useTextChangeHandlers={useTextChangeHandlers}
          useResetSearchQuery={useResetSearchQuery}
          t={t}
        />

        {/* Компонент для фильтрации списка аниме */}
        <AnimeListFilter t={t} />

        {/* Компонент для отображения списка аниме */}
        <AnimeList
          filteredList={filteredList}
          hasResults={hasResults}
          isLoading={isLoading}
          t={t}
        />
      </div>
    </section>
  );
};

export default Anime;
