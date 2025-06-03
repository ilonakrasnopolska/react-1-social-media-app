import React from "react";
import { NavLink } from "react-router-dom";
import ImageWithLoader from "../../../../../common/ImageWithLoader/ImageWithLoader";
import Classes from "./Post.module.css"; // Импорт стилей для компонента Post

const Post = ({ post, t }) => {
  const { avatar, name, time, content, poster, userId } = post; // Извлекаем нужные данные из объекта post
  return (
    <li className={Classes.item}>
      {/* Обертка для каждого поста */}
      <div className={Classes.container}>
        {/* Информация о пользователе, создавшем пост */}
        <div className={Classes.creator}>
          <NavLink to={'/profile/' + userId}>
            <ImageWithLoader
              src={avatar}
              alt="Post avatar"
              className={Classes.avatar}
            />
          </NavLink>
          {/* Аватар пользователя */}
          <div className={Classes.info}>
            <div>
              <h3>{t(name)}</h3>{" "}
              {/* Имя пользователя, с переводом через функцию t */}
              {name === "AniHub" && (
                <span role="img" aria-label="verified">
                  ✔️
                </span>
              )}
              {/* Если имя пользователя "AniHub", показываем значок верификации */}
            </div>
            <div>
              <span>{time}</span> {/* Время публикации поста */}
            </div>
          </div>
        </div>

        {/* Контент поста */}
        <div className={Classes.content}>
          <span>
            {content} {/* Основное содержимое поста */}
          </span>
          {poster && (
            <ImageWithLoader
              src={poster}
              alt="Poster"
              className={Classes.poster}
            />
          )}
          {/* Если есть постер (изображение), выводим его */}
        </div>
      </div>
    </li>
  );
};

export default Post;
