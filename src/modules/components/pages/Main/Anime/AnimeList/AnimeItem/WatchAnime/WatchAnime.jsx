import React from "react";
import Classes from "./WatchAnime.module.css";
import Genres from "./Genres/Genres";
import { NavLink } from "react-router-dom";

const WatchAnime = ({anime}) => {
  return (
    <div className={Classes.content}>
      <div className={Classes.anime_page}>
      <NavLink to={'/anime'} className={Classes.button_back}>Back to Anime List</NavLink>
      <div className={Classes.data}>
      <div className={Classes.cover}>
      <img src={anime.cover} alt={anime.name} />
      </div>
      <div className={Classes.about}>
      <h2>{anime.name}</h2>
        <div className={Classes.main_data_wrapper}>
        <div className={Classes.main_data}>
          <span className={Classes.text}>Rating: {anime.score}</span>
          <span className={Classes.text}>Episodes: {anime.episodes}</span>
          <span className={Classes.text}>Year: {anime.year}</span>
        </div>
        <Genres genres={anime.genres}/>
        </div>
      <span className={Classes.description}>{anime.description}</span>
      </div>
      </div>
      <div className={Classes.trailer}>
      {anime.trailer ? (
          <iframe
            width="100%"
            height="600px"
            src={anime.trailer}
            title="Anime Trailer"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <p>No trailer available</p>
        )}
        </div>
     </div>
    </div>
  );
};

export default WatchAnime;
