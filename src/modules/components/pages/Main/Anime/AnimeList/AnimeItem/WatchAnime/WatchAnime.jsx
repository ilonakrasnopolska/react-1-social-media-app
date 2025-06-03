import React from "react";
import Classes from "./WatchAnime.module.css";
import Genres from "./Genres/Genres";
import Rating from "./Rating/Rating";
import { NavLink } from "react-router-dom";
import Preloader from "../../../../../../common/Preloader/Preloader";
import ImageWithLoader from "../../../../../../common/ImageWithLoader/ImageWithLoader";

const WatchAnime = ({ animeById, isLoading, t }) => {
  // Проверяем, если идет загрузка, сразу возвращаем спиннер
  if (isLoading) {
    return (
      <Preloader />
    );
  }

  // Если данных о аниме нет, показываем сообщение
  if (!animeById) {
    return <p>{t("NoAnimeData")}</p>; // Показать сообщение, если данные о аниме отсутствуют
  }

  return (
    <div className={Classes.content}>
      <div className={Classes.anime_page}>
        <NavLink to={"/anime"} className={Classes.button_back}>
          {t("BackToAnimeList")} {/* Кнопка для возврата в список аниме */}
        </NavLink>
        <div className={Classes.data}>
          <div className={Classes.cover}>
            {/* Показываем обложку аниме или используем изображение по умолчанию */}
            <ImageWithLoader src={animeById.cover || "default-cover.jpg"} alt={animeById.name}/>
          </div>
          <div className={Classes.about}>
            <h2>{animeById.name}</h2> {/* Название аниме */}
            <div className={Classes.main_data_wrapper}>
              <div className={Classes.main_data}>
                {/* Показываем основные данные: рейтинг, количество эпизодов, год выпуска */}
                <span className={Classes.text}>
                  {t("Rating")}: {animeById.score}
                </span>
                <span className={Classes.text}>
                  {t("Episodes")}: {animeById.episodes}
                </span>
                <span className={Classes.text}>
                  {t("Year")}: {animeById.year}
                </span>
              </div>
              {/* Если есть жанры, то показываем их */}
              {animeById.genres && <Genres genres={animeById.genres} />}
            </div>
            {/* Описание аниме, если оно есть */}
            <span className={Classes.description}>
              {animeById.description || t("NoDescriptionAvailable")}
            </span>
            {/* Компонент для отображения рейтинга */}
            <Rating animeById={animeById} votes={animeById.votes} />
          </div>
        </div>
        <div className={Classes.trailer}>
          {/* Если есть трейлер, показываем его, иначе выводим сообщение о его отсутствии */}
          {animeById.trailer ? (
            <iframe
              width="100%"
              height="600px"
              src={animeById.trailer}
              title="Anime Trailer"
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchAnime;
