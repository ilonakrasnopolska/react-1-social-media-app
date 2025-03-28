import React from "react";
import Classes from "./Post.module.css"; // Импорт стилей для компонента Post

const Post = ({ post, t }) => {
  const { avatar, name, time, content, poster } = post; // Извлекаем нужные данные из объекта post

  return (
    <li className={Classes.item}>
      {" "}
      {/* Обертка для каждого поста */}
      <div className={Classes.container}>
        {/* Информация о пользователе, создавшем пост */}
        <div className={Classes.creator}>
          <img className={Classes.avatar} src={avatar} alt="Post avatar" />{" "}
          {/* Аватар пользователя */}
          <div className={Classes.info}>
            <div>
              <h3>{t(name)}</h3>{" "}
              {/* Имя пользователя, с переводом через функцию t */}
              {name === "AniHub" && (
                <span role="img" aria-label="verified">
                  ✔️
                </span>
              )}{" "}
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
            <img src={poster} alt="Poster" className={Classes.poster} />
          )}{" "}
          {/* Если есть постер (изображение), выводим его */}
        </div>
      </div>
    </li>
  );
};

export default Post;
