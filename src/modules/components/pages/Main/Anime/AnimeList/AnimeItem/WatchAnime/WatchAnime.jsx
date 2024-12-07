import React from "react";
import Classes from "./WatchAnime.module.css";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const WatchAnime = () => {
  const { animeId } = useParams();
  const anime = useSelector((state) =>
    state.anime.anime.find((el) => el.id === Number(animeId))
  );

  if (!anime) {
    return <div>Anime not found!</div>;
  }

  return (
    <div className={Classes.content}>
      <h2>{anime.name}</h2>
      <img className={Classes.cover} src={anime.cover} alt={anime.name} />
     <p className={Classes.text}>Still ON WORK...</p>
    </div>
  );
};

export default WatchAnime;
