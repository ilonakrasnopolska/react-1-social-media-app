import React from "react";
import useData from "../../../../hooks/useData";
import Profile from "./Profile";

const ProfileContainer = ({t}) => {
  const profileData = useData('profile');
  const wallpaper = profileData.profileCover;
  const userData = profileData.personalAccount.userData;
  const posts = profileData.posts;

  return (
    <Profile wallpaper={wallpaper} userData={userData} posts={posts} t={t}/>
  );
};

export default ProfileContainer;
