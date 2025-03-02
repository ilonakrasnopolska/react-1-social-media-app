import React from "react";
import clsx from "clsx";
import { Star, Eye } from "lucide-react";
import Classes from "./AnimeItem.module.css";
import NavButton from "../../../../../common/NavButton";
import {
  toggleWatchList,
  toggleWatchedList,
} from "../../../../../../../redux/AnimeReducer/anime-reducer";
import useToggleAnimeToList from "../../../../../../hooks/useToggleAnimeToList";

const AnimeItem = ({ anime, t }) => {
  const { toggleAnimeList, isInWatchList, isInWatchedList } =
    useToggleAnimeToList(anime);
  return (
    <li className={Classes.item}>
      <div className={Classes.poster_wrapper}>
        <img className={Classes.avatar} src={anime.cover} alt="Post avatar" />
        <h4>
          {t("Episodes")} {anime.episodes}
        </h4>
        <span>
          {t("ReleaseDate")} {anime.year}
        </span>
        <div className={Classes.anime_actions}>
          <button
            onClick={() => toggleAnimeList(toggleWatchList)}
            className={clsx(Classes.watch_button, {
              [Classes.active]: isInWatchList,
            })}
          >
            <Star />
          </button>
          <button
            onClick={() => toggleAnimeList(toggleWatchedList)}
            className={clsx(Classes.watched_button, {
              [Classes.active]: isInWatchedList,
            })}
          >
            <Eye />
          </button>
        </div>
      </div>
      <div className={Classes.content}>
        <div className={Classes.description}>
          <h3>{anime.name}</h3>
          <span>{anime.description}</span>
        </div>
        <NavButton
          to={anime.toWatchUrl}
          label={t("WatchNow")}
          className={Classes.button}
        />
      </div>
    </li>
  );
};

export default AnimeItem;
