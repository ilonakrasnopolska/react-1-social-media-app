import React from "react";
import Classes from "./Anime.module.css";
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";
import AnimeListFilter from "./AnimeListFilter/AnimeListFilter";

const Anime = ({
  t, // Функция для перевода
  newSearchAnimeText, // Текст для поиска аниме
  useTextChangeHandlers, // Хук для обработки изменений текста
  animeList, //Базовый массив для получения данных с сервера
  animePages, //Загруженные страницы с аниме
  currentList, // список аниме
  hasResults, // Есть ли результаты поиска
  isLoading, // Флаг загрузки данных
  pages, //страницы для пагинации
  pageSize, //аниме кол-во на 1 странице
  currentPage, //текущая страница
  changePage, //функция смены страницы
  loadedPages, //Загруженные страницы
  listType, //Тип страницы
}) => {
  return (
    <section className="anime section">
      <div className={Classes.container}>
        {/* Компонент для поиска аниме */}
        <SearchAnime
          newSearchAnimeText={newSearchAnimeText}
          useTextChangeHandlers={useTextChangeHandlers}
          t={t}
        />

        {/* Компонент для фильтрации списка аниме */}
        <AnimeListFilter t={t} listType={listType}/>

        {/* Компонент для отображения списка аниме */}
        <AnimeList
          currentList={currentList}
          hasResults={hasResults}
          isLoading={isLoading}
          animeList={animeList}
          pages={pages}
          currentPage={currentPage}
          changePage={changePage}
          pageSize={pageSize}
          t={t}
          loadedPages={loadedPages}
          animePages={animePages}
          listType={listType}
        />
      </div>
    </section>
  );
};

export default Anime;
