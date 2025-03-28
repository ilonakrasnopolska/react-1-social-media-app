import React from "react";
import User from "./User/User"; // Импортируем компонент для отображения информации о пользователе
import PostMakerContainer from "./PostMaker/PostMakerContainer"; // Контейнер для создания постов
import MyPosts from "./MyPosts/MyPosts"; // Компонент для отображения постов пользователя
import Hero from "./Hero/Hero"; // Компонент для отображения обоев или фонового изображения

const Profile = ({ wallpaper, userData, t, isLoading, posts }) => {
  return (
    <div>
      {/* Компонент Hero для отображения обоев/фона */}
      <Hero wallpaper={wallpaper} />

      {/* Компонент User для отображения информации о пользователе */}
      <User userData={userData} isLoading={isLoading} t={t} />

      {/* Контейнер для создания постов */}
      <PostMakerContainer t={t} />

      {/* Компонент для отображения списка постов */}
      <MyPosts posts={posts} isLoading={isLoading} t={t} />
    </div>
  );
};

export default Profile;
