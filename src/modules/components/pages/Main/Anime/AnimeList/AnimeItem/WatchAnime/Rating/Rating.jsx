import React from "react";
import clsx from "clsx";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Classes from "../WatchAnime.module.css";
import useToggleAnimeToList from "../../../../../../../../hooks/useToggleAnimeToList";
import { setRating } from "../../../../../../../.././../redux/AnimeReducer/anime-reducer";

const Rating = ({ animeById, votes }) => {
  const { toggleAnimeList, activeLike } = useToggleAnimeToList(animeById);
  return (
    <div className={Classes.reactions}>
      <button
        onClick={() => toggleAnimeList(setRating, true)}
        className={clsx(Classes.like_button, {
          [Classes.active]: activeLike === true,
        })}
      >
        <ThumbsUp />
        <span>{votes.likes}</span>
      </button>
      <button
        onClick={() => toggleAnimeList(setRating, false)}
        className={clsx(Classes.unlike_button, {
          [Classes.active]: activeLike === false,
        })}
      >
        <ThumbsDown />
        <span>{votes.dislikes}</span>
      </button>
    </div>
  );
};

export default Rating;
