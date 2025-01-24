import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";
import { fetchAnime } from "../../../../../../api/animeAPI";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";

const AnimeList = ({filteredList, hasResults, t}) => {
  useFetchAndDispatch(fetchAnime)

  return (
    <div>
      {hasResults ? (
            <ul className={Classes.list}>
              {filteredList.map(anime => (
                <AnimeItem anime={anime} key={anime.id} t={t} />
              ))}
            </ul>
          ) : (
            <div className={Classes.noResults}>{t('Empty')}</div>
          )}
    </div>
  )
}

export default AnimeList;
