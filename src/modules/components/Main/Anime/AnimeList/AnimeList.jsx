import React from "react";
import Classes from './AnimeList.module.css'
import AnimeItem from "./AnimeItem/AnimeItem";
import {useSelector} from "react-redux";

const AnimeList = () => {
  const list = useSelector((state) => state.anime.anime);
  const animeElements = list.map(anime => (
    <AnimeItem key={anime.id} animeId={anime.id} />
  ));
  return (
      <ul className={Classes.list}>
        {animeElements}
      </ul>
  )
}

export default AnimeList;
