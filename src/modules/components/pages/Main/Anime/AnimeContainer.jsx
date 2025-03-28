import React from "react";
import Anime from "./Anime";
import { setSearchQuery } from "../../../../../redux/AnimeReducer/anime-reducer";
import { useInputHandlers } from "../../../../hooks/useInputHandlers";
import useFilteredAnime from "../../../../hooks/useFilteredAnime";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery";
import useData from "../../../../hooks/useData";

const AnimeContainer = ({ t }) => {
  // Получаем флаг загрузки из хука useData
  const isLoading = useData("loading");

  // Хук для обработки изменений текста поиска
  const { useTextChangeHandlers } = useInputHandlers(setSearchQuery);

  // Получаем отфильтрованные данные аниме, список аниме, есть ли результаты и списки просмотра
  const { anime, filteredList, hasResults, watchList, watchedList } =
    useFilteredAnime("anime");

  // Извлекаем текст для поиска
  const newSearchAnimeText = anime.newSearchAnimeText;

  return (
    <Anime
      t={t} // Передаем функцию перевода для текста
      newSearchAnimeText={newSearchAnimeText} // Передаем текст для поиска
      useTextChangeHandlers={useTextChangeHandlers} // Функция для изменения текста поиска
      useResetSearchQuery={useResetSearchQuery} // Функция для сброса поиска
      filteredList={filteredList} // Отфильтрованные аниме
      hasResults={hasResults} // Есть ли результаты поиска
      isLoading={isLoading} // Флаг загрузки
      watchList={watchList} // Список аниме, которые находятся в списке "к просмотру"
      watchedList={watchedList} // Список аниме, которые уже были просмотрены
    />
  );
};

export default AnimeContainer;
