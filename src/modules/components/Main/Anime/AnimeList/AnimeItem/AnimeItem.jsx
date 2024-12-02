import React from "react";
import Classes from './AnimeItem.module.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


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
        <button className={Classes.button}>
          <NavLink to={anime.toWatchUrl}>
            Watch now
          </NavLink>
        </button>
      </div>
    </li>
  )
}

export default AnimeItem;
