import React from "react";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";

const AnimeList = ({filteredAnime}) => {

  if (filteredAnime.length === 0) {
    return <div className={Classes.noResults}>Nothing found</div>;
  }

  return (
    <ul className={Classes.list}>
      {filteredAnime.map(anime => (
        <AnimeItem key={anime.id} animeId={anime.id}/>
      ))
      }
    </ul>
  )
}

export default AnimeList;
