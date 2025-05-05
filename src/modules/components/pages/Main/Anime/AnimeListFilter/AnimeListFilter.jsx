import React from "react";
import useShowAnimeWatchList from "../../../../../hooks/useShowAnimeWatchList";
import Classes from "./AnimeListFilter.module.css";
import { showAnimeList } from "../../../../../../redux/AnimeReducer/anime-reducer";
import { ANIME_LIST_TYPES } from "../../../../../../constants/constants";

const AnimeListFilter = ({ t, listType }) => {
  // Получаем функцию для отображения списка аниме по типу
  const { showUserList } = useShowAnimeWatchList();

  return (
    <div className={Classes.anime_filter}>
      <button
        onClick={() => showUserList(showAnimeList, ANIME_LIST_TYPES.WATCH)}
        className={`${Classes.button} ${
          listType === ANIME_LIST_TYPES.WATCH ? Classes.active : ""
        }`}
      >
        {t("PlanToWatch")}
      </button>

      <button
        onClick={() => showUserList(showAnimeList, ANIME_LIST_TYPES.WATCHED)}
        className={`${Classes.button} ${
          listType === ANIME_LIST_TYPES.WATCHED ? Classes.active : ""
        }`}
      >
        {t("MyWatched")}
      </button>

      <button
        onClick={() => showUserList(showAnimeList, ANIME_LIST_TYPES.ALL)}
        className={`${Classes.button} ${
          listType === ANIME_LIST_TYPES.ALL ? Classes.active : ""
        }`}
      >
        {t("ShowAll")}
      </button>
    </div>
  );
};

export default AnimeListFilter;
