import React from "react";
import Classes from './AnimeItem.module.css'
import NavButton from "../../../../../common/NavButton";


const AnimeItem = ({anime, t}) => {
  console.log(anime);
  return (
    <li className={Classes.item}>
      <div className={Classes.poster_wrapper}>
      <img className={Classes.avatar}
           src={anime.cover}
           alt="Post avatar"/>
              <h4>Episodes: {anime.episodes}</h4>
             <span>Release Date: {anime.year}</span>
      </div>
      <div className={Classes.content}>
        <div className={Classes.description}>
        <h3>{anime.name}</h3>
        <span>{anime.description}</span>
        </div>
        <NavButton to={anime.toWatchUrl} label={t('WatchNow')} className={Classes.button}/>
      </div>
    </li>
  )
}

export default AnimeItem;
