import React from "react";
import UserContainer from "./User/UserContainer"; // Импортируем компонент для отображения информации о пользователе
import PostMakerContainer from "./PostMaker/PostMakerContainer"; // Контейнер для создания постов
import MyPosts from "./MyPosts/MyPosts"; // Компонент для отображения постов пользователя
import Hero from "./Hero/Hero"; // Компонент для отображения обоев или фонового изображения

const Profile = ({
  wallpaper,
  userData,
  t,
  isLoading,
  posts,
  isOwnProfile,
  handleFollowToggle
}) => {
  return (
    <div>
      {/* Компонент Hero для отображения обоев/фона */}
      <Hero wallpaper={wallpaper} isLoading={isLoading} />

      {/* Компонент User для отображения информации о пользователе */}
      <UserContainer userData={userData} isLoading={isLoading} t={t} isOwnProfile={isOwnProfile}  handleFollowToggle={handleFollowToggle}/>

      {/* Контейнер для создания постов */}
      {isOwnProfile && <PostMakerContainer t={t} />}

      {/* Компонент для отображения списка постов */}
      <MyPosts
        posts={posts}
        isLoading={isLoading}
        t={t}
        isOwnProfile={isOwnProfile}
      />
    </div>
  );
};

export default Profile;
