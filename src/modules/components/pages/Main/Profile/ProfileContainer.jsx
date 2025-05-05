import React from "react";
import useData from "../../../../hooks/useData"; // Хук для получения данных, например, профиля и загрузки
import Profile from "./Profile"; // Компонент для отображения профиля пользователя

const ProfileContainer = ({ t }) => {
  // Получаем состояние загрузки через хук useData
  const isLoading = useData("loading");

  // Получаем профильные данные через хук useData
  const profileData = useData("profile");

  // Извлекаем нужные данные из profileData
  const wallpaper = profileData.profileCover; // Обои профиля
  const userData = profileData.personalAccount.userData; // Личные данные пользователя
  const posts = profileData.posts; // Посты пользователя

  return (
    // Передаем данные в компонент Profile
    <div>
    <Profile
      wallpaper={wallpaper}
      userData={userData}
      posts={posts}
      isLoading={isLoading}
      t={t}
    />
    </div>
  );
};

export default ProfileContainer;
