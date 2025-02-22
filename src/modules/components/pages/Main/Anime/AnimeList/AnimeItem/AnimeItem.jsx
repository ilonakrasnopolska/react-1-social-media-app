import React from "react";
import Classes from './AnimeItem.module.css'
import NavButton from "../../../../../common/NavButton";
import { AddToList, Watched } from "../../../../../../../assets/SVG-icons";


const AnimeItem = ({anime, t}) => {
  return (
    <li className={Classes.item}>
      <div className={Classes.poster_wrapper}>
      <img className={Classes.avatar}
           src={anime.cover}
           alt="Post avatar"/>
              <h4>{t('Episodes')} {anime.episodes}</h4>
             <span>{t('ReleaseDate')} {anime.year}</span>
             <div className={Classes.anime_actions}>
          <button><AddToList/></button>
          <button><Watched/></button>
        </div>
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
