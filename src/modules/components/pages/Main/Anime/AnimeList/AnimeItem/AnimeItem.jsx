import React from "react";
import Classes from './AnimeItem.module.css'
import {useSelector} from "react-redux";
import NavButton from "../../../../../common/NavButton";


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
        <NavButton to={anime.toWatchUrl} label='Watch now' className={Classes.button}/>
      </div>
    </li>
  )
}

export default AnimeItem;
