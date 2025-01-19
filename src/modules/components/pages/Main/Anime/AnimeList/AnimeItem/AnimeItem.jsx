import React from "react";
import Classes from './AnimeItem.module.css'
import NavButton from "../../../../../common/NavButton";


const AnimeItem = ({anime, animeId, t}) => {
  return (
    <li className={Classes.item}>
      <img className={Classes.avatar}
           src={anime.cover}
           alt="Post avatar"/>
      <div className={Classes.content}>
        <div className={Classes.description}>
        <h3>{t(anime.name.en)}</h3>
        <span>{t(`anime_${animeId}`)}</span>
        </div>
        <NavButton to={anime.toWatchUrl} label={t('WatchNow')} className={Classes.button}/>
      </div>
    </li>
  )
}

export default AnimeItem;
