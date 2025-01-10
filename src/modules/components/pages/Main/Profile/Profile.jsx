import React from "react";
import User from "./User/User";
import PostMaker from "./PostMaker/PostMaker";
import MyPosts from "./MyPosts/MyPosts";
import Hero from "./Hero/Hero";
import useData from "../../../../hooks/useData"

const Profile = ({t}) => {
  const profileData = useData('profile');
  return (
    <div>
      <Hero wallpaper={profileData.profileCover}/>
      <User userData={profileData.personalAccount.userData} t={t}/>
      <PostMaker t={t}/>
      <MyPosts posts={profileData.posts} t={t}/>
    </div>
  );
}

export default Profile;
