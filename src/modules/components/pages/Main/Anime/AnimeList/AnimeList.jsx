import React from "react";
import Classes from "./AnimeList.module.css";
import AnimeItem from "./AnimeItem/AnimeItem";
import { fetchAnime } from "../../../../../../api/animeAPI";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { ClipLoader } from "react-spinners";

const AnimeList = ({ currentList, hasResults, isLoading, animeList, t }) => {
  // Используем хук для загрузки аниме
  useFetchAndDispatch(fetchAnime(animeList, hasResults), [animeList]);
  return (
    <div className={Classes.anime_list_box}>
      {isLoading ? (
        <div className={Classes.spinner}>
          <ClipLoader color="#194770" size={50} />
        </div>
      ) : hasResults ? (
        <ul className={Classes.list}>
          {currentList.map((anime) => (
            <AnimeItem anime={anime} key={anime.id} t={t} />
          ))}
        </ul>
      ) : (
        <div className={Classes.noResults}>{t("Empty")}</div>
      )}
    </div>
  );
};

export default AnimeList;
