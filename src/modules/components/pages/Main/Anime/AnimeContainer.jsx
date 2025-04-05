import React from "react";
import Anime from "./Anime";
import { setSearchQuery } from "../../../../../redux/AnimeReducer/anime-reducer";
import { useInputHandlers } from "../../../../hooks/useInputHandlers";
import useGetDataAnime from "../../../../hooks/useGetDataAnime";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery";
import useData from "../../../../hooks/useData";
import usePageChange from "../../../../hooks/usePageChange";
import usePagination from "../../../../hooks/usePagination";

const AnimeContainer = ({ t }) => {
  // Получаем флаг загрузки из хука useData
  const isLoading = useData("loading");

  // Хук для обработки изменений текста поиска
  const { useTextChangeHandlers } = useInputHandlers(setSearchQuery);

  // Получаем отфильтрованные данные аниме, список аниме, есть ли результаты и списки просмотра
  const {
    anime,
    hasResults,
    watchList,
    watchedList,
    currentList,
    totalAnimeCount,
    pageSize,
    currentPage,
  } = useGetDataAnime("anime");
  // Извлекаем текст для поиска
  const newSearchAnimeText = anime.newSearchAnimeText;
  // Используем хук для изменения страницы
  const changePage = usePageChange();
  // Используем хук пагинации
  const { pages } = usePagination(totalAnimeCount, pageSize, currentPage);

  return (
    <Anime
      t={t} // Передаем функцию перевода для текста
      newSearchAnimeText={newSearchAnimeText} // Передаем текст для поиска
      useTextChangeHandlers={useTextChangeHandlers} // Функция для изменения текста поиска
      useResetSearchQuery={useResetSearchQuery} // Функция для сброса поиска
      animeList={anime.anime} //Базовый массив в который приходит список из сервера
      currentList={currentList} // Отфильтрованные аниме
      hasResults={hasResults} // Есть ли результаты поиска
      isLoading={isLoading} // Флаг загрузки
      watchList={watchList} // Список аниме, которые находятся в списке "к просмотру"
      watchedList={watchedList} // Список аниме, которые уже были просмотрены
      pages={pages} //страницы для пагинации
      totalAnimeCount={totalAnimeCount} //общее кол-во аниме
      pageSize={pageSize} //аниме кол-во на 1 странице
      currentPage={currentPage} //текущая страница
      changePage={changePage} //функция смены страницы
    />
  );
};

export default AnimeContainer;
