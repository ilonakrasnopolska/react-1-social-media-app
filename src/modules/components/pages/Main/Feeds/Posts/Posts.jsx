import React from "react";
import Classes from "./Posts.module.css"; // Импорт стилей для компонента Posts
import Post from "./Post/Post"; // Компонент для отображения отдельного поста
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch"; // Хук для загрузки данных
import { fetchFeeds } from "../../../../../../api/feedsAPI"; // API для получения постов
import { ClipLoader } from "react-spinners"; // Спиннер для отображения загрузки

const Posts = ({ isLoading, posts, t }) => {
  // Хук useFetchAndDispatch вызывает функцию для загрузки постов
  useFetchAndDispatch(fetchFeeds(posts));
  return (
    <div className={Classes.feeds}>
      {isLoading ? (
        // Если данные еще загружаются, показываем спиннер
        <div className={Classes.spinner}>
          <ClipLoader color="#194770" size={50} />
        </div>
      ) : posts.length > 0 ? (
        // Если посты есть, отображаем их
        <ul className={Classes.list}>
          {posts.map((post) => (
            // Для каждого поста создаем компонент Post
            <Post key={post.feedId} post={post} t={t} />
          ))}
        </ul>
      ) : (
        // Если постов нет, выводим сообщение о пустом результате
        <div className={Classes.noResults}>{t("Empty")}</div>
      )}
    </div>
  );
};

export default Posts;
