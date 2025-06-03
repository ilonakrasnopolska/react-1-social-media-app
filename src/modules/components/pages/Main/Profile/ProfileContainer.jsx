import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import useData from "../../../../hooks/useData"; // Хук для получения данных, например, профиля и загрузки
import Profile from "./Profile"; // Компонент для отображения профиля пользователя
import { useParams } from "react-router-dom";
import { fetchProfileData } from "../../../../../api/profileAPI";
import { fetchPosts } from "../../../../../api/profileAPI";
import { useFollowToggle } from "../../../../hooks/useFollowToggle";

const ProfileContainer = ({ t }) => {
  const { userId } = useParams(); // <--- берём ID из URL
  const dispatch = useDispatch();
  // Хук для подписки и отписки
  const toggleFollow = useFollowToggle();
  // Получаем состояние загрузки через хук useData
  const isLoading = useData("loading");
  // Получаем профильные данные через хук useData
  const profileData = useData("profile");

  // Извлекаем нужные данные из profileData
  const wallpaper = profileData.personalAccount.userData.profileCover; // Обои профиля
  const userData = profileData.personalAccount.userData; // Личные данные пользователя
  const posts = profileData.posts; // Посты пользователя
  const viewedUserId = profileData.viewedUserId; //id пользователя
  //Проверка отображать ли кнопку удаления комментариев и опцию добавлять посты
  const isOwnProfile =
    !viewedUserId || viewedUserId === null || viewedUserId === undefined;

  //  Правильный useEffect, реагирует на userId
  useEffect(() => {
    dispatch(fetchProfileData(userData, userId ?? null));
    dispatch(fetchPosts(posts, userId ?? null));
  }, [userId]); // только useEffect и dispatch

  // 👇 Условный рендеринг: показываем спиннер, если данные ещё не пришли
  if (isLoading || !userData || Object.keys(userData).length === 0) {
    return <Preloader />;
  }
  return (
    // Передаем данные в компонент Profile
    <div>
      <Profile
        wallpaper={wallpaper}
        userData={userData}
        posts={posts}
        isLoading={isLoading}
        t={t}
        isOwnProfile={isOwnProfile}
        handleFollowToggle={toggleFollow}
      />
    </div>
  );
};

export default ProfileContainer;
