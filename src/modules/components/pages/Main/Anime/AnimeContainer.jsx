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

  // Сбросить поисковый запрос перед рендером компонента
  useResetSearchQuery();

  // Получаем отфильтрованные данные аниме, список аниме, есть ли результаты и списки просмотра
  const {
    anime,
    hasResults,
    currentList,
    listType,
    pageSize,
    currentPage,
    totalAnimeCount,
    newSearchAnimeText,
    loadedPages,
    animePages
  } = useGetDataAnime("anime");

  // Хук для обработки изменений текста поиска
  const { useTextChangeHandlers } = useInputHandlers(setSearchQuery);
  // Используем хук для изменения страницы
  const changePage = usePageChange();
  // Используем хук пагинации
  const { pages } = usePagination(totalAnimeCount, pageSize);

  return (
    <Anime
      t={t} // Передаем функцию перевода для текста
      newSearchAnimeText={newSearchAnimeText} // Передаем текст для поиска
      useTextChangeHandlers={useTextChangeHandlers} // Функция для изменения текста поиска
      animeList={anime.anime} //Базовый массив в который приходит список из сервера
      animePages={animePages} //Страницы с аниме
      currentList={currentList} // Отфильтрованные аниме
      hasResults={hasResults} // Есть ли результаты поиска
      isLoading={isLoading} // Флаг загрузки
      pages={pages} //страницы для пагинации
      pageSize={pageSize} //аниме кол-во на 1 странице
      currentPage={currentPage} //текущая страница
      changePage={changePage} //функция смены страницы
      loadedPages={loadedPages} //Загруженные страницы
      listType={listType} //Тип страницы
    />
  );
};

export default AnimeContainer;
