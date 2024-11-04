import React from "react";
import Classes from './AnimeItem.module.css'
import {useSelector} from "react-redux";


const AnimeItem = ({animeId}) => {
  const anime = useSelector(state => state.anime.anime.find(el => el.id === animeId));
  return (
    <li className={Classes.item}>
      <img className={Classes.avatar}
           src={anime.cover}
           alt="Post avatar"
      />
      <div className={Classes.content}>
        <div className={Classes.description}>
        <h3>{anime.name}</h3>
        <span>{anime.description}</span>
        </div>
        <button className={Classes.button}>Watch now</button>
      </div>
    </li>
  )
}

export default AnimeItem;
