import React from "react";
import User from "./User/User";
import PostMakerContainer from "./PostMaker/PostMakerContainer";
import MyPosts from "./MyPosts/MyPosts";
import Hero from "./Hero/Hero";

const Profile = ({wallpaper, userData, t, isLoading, posts}) => {
  return (
    <div>
      <Hero wallpaper={wallpaper}/>
      <User userData={userData} isLoading={isLoading} t={t}/>
      <PostMakerContainer t={t}/>
      <MyPosts posts={posts} isLoading={isLoading} t={t}/>
    </div>
  );
}

export default Profile;
