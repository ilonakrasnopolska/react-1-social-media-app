import React from "react";
import Classes from "./MyPosts.module.css"; // Импорт CSS модуля для стилей
import PostContainer from "./Post/PostContainer"; // Импорт компонента контейнера для поста
import { ClipLoader } from "react-spinners"; // Импорт спиннера для загрузки
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch"; // Хук для выполнения запросов
import { fetchPosts } from "../../../../../../api/profileAPI"; // Импорт функции для получения постов

const MyPosts = ({ posts, isLoading, t }) => {
  // Вызов хука для выполнения запроса на получение постов
  useFetchAndDispatch(fetchPosts(posts));

  return (
    <section className="myPosts section">
      <div className={Classes.content}>
        {/* Если загрузка, и постов еще нет, показываем спиннер */}
        {isLoading && posts.length === 0 ? (
          <div className={Classes.spinner}>
            <ClipLoader color="#194770" size={50} />{" "}
            {/* Спиннер для загрузки */}
          </div>
        ) : (
          <ul className={Classes.list}>
            {/* Для каждого поста создаем компонент PostContainer */}
            {posts.map((post) => (
              <PostContainer post={post} key={post.postId} t={t} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MyPosts;
