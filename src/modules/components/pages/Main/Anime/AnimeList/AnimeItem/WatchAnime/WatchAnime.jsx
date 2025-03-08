import React from "react";
import Classes from "./WatchAnime.module.css";
import Genres from "./Genres/Genres";
import Rating from "./Rating/Rating";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const WatchAnime = ({ animeById, isLoading, t }) => {
  return (
    <div className={Classes.content}>
      <div className={Classes.anime_page}>
        <NavLink to={"/anime"} className={Classes.button_back}>
          {t('BackToAnimeList')}
        </NavLink>
        <div className={Classes.data}>
          <div className={Classes.cover}>
            <img src={animeById.cover} alt={animeById.name} />
          </div>
          <div className={Classes.about}>
            <h2>{animeById.name}</h2>
            <div className={Classes.main_data_wrapper}>
              <div className={Classes.main_data}>
                <span className={Classes.text}>{t('Rating')}: {animeById.score}</span>
                <span className={Classes.text}>
                  {t('Episodes')}: {animeById.episodes}
                </span>
                <span className={Classes.text}>{t('Year')}: {animeById.year}</span>
              </div>
              <Genres genres={animeById.genres} />
            </div>
            <span className={Classes.description}>{animeById.description}</span>
            <Rating animeById={animeById} votes={animeById.votes} />
          </div>
        </div>
        <div className={Classes.trailer}>
          {isLoading ? (
            <div className={Classes.spinner}>
              <ClipLoader color="#194770" size={50} />
            </div>
          ) : animeById.trailer ? (
            <iframe
              width="100%"
              height="600px"
              src={animeById.trailer}
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
