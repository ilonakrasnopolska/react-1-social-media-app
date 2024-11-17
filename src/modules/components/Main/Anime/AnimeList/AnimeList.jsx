import React from "react";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";
import {useSelector} from "react-redux";

const AnimeList = () => {
  const filteredAnime = useSelector(state => state.anime.filteredAnime);

  if (filteredAnime.length === 0) {
    return <div className={Classes.noResults}>Nothing found</div>;
  }

  const animeElements = filteredAnime.map(anime => (
    <AnimeItem key={anime.id} animeId={anime.id} />
  ));
  return (
      <ul className={Classes.list}>
        {animeElements}
      </ul>
  )
}

export default AnimeList;
