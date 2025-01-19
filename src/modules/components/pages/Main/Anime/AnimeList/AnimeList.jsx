import React from "react";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";

const AnimeList = ({filteredList, hasResults, t}) => {
  return (
    <div>
      {hasResults ? (
            <ul className={Classes.list}>
              {filteredList.map(anime => (
                <AnimeItem anime={anime} key={anime.id} animeId={anime.id} t={t} />
              ))}
            </ul>
          ) : (
            <div className={Classes.noResults}>{t('Empty')}</div>
          )}
    </div>
  )
}

export default AnimeList;
