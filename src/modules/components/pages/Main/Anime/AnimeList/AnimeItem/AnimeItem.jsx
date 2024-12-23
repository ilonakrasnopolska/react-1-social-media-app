import React from "react";
import Classes from './AnimeItem.module.css'
import {useSelector} from "react-redux";
import NavButton from "../../../../../common/NavButton";


const AnimeItem = ({animeId, t}) => {
  const anime = useSelector(state => state.anime.anime.find(el => el.id === animeId));
  const descriptionKey = `anime_${animeId}`;

  return (
    <li className={Classes.item}>
      <img className={Classes.avatar}
           src={anime.cover}
           alt="Post avatar"
      />
      <div className={Classes.content}>
        <div className={Classes.description}>
        <h3>{t(anime.name)}</h3>
        <span>{t(descriptionKey)}</span>
        </div>
        <NavButton to={anime.toWatchUrl} label={t('WatchNow')} className={Classes.button}/>
      </div>
    </li>
  )
}

export default AnimeItem;
