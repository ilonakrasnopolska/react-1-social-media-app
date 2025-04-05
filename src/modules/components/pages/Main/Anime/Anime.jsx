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
  currentList, // список аниме
  hasResults, // Есть ли результаты поиска
  isLoading, // Флаг загрузки данных
  animeList, //Базовый массив для получения данных с сервера
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
          currentList={currentList}
          hasResults={hasResults}
          isLoading={isLoading}
          animeList={animeList}
          t={t}
        />
      </div>
    </section>
  );
};

export default Anime;
