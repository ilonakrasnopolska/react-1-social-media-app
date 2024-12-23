import React from "react";
import User from "./User/User";
import PostMaker from "./PostMaker/PostMaker";
import MyPosts from "./MyPosts/MyPosts";
import Hero from "./Hero/Hero";
import {useSelector} from "react-redux";

const Profile = ({t}) => {
  const profileData = useSelector(state => state.profile)
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
