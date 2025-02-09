import React from "react";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";
import { fetchAnime } from "../../../../../../api/animeAPI";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { ClipLoader } from "react-spinners";

const AnimeList = ({filteredList, hasResults, isLoading, t}) => {
  useFetchAndDispatch(() => fetchAnime(filteredList));
  return (
    <div>
      {isLoading ? (
        <div className={Classes.spinner}>
          <ClipLoader color="#194770" size={50} />
        </div>
      ) : hasResults ? (
        <ul className={Classes.list}>
          {filteredList.map((anime) => (
            <AnimeItem anime={anime} key={anime.id} t={t} />
          ))}
        </ul>
      ) : (
        <div className={Classes.noResults}>{t("Empty")}</div>
      )}
    </div>
  )
}

export default AnimeList;
