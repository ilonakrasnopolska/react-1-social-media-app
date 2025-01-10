import React from "react";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";

const AnimeList = ({filteredAnime, t}) => {
  if (filteredAnime.length === 0) {
    return <div className={Classes.noResults}>{t('Empty')}</div>;
  }
  return (
    <ul className={Classes.list}>
      {filteredAnime.map(anime => (
        <AnimeItem key={anime.id} animeId={anime.id} t={t}/>
      ))
      }
    </ul>
  )
}

export default AnimeList;
