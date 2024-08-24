import React from "react";
import User from "./User/User";
import PostMaker from "./PostMaker/PostMaker";
import MyPosts from "./MyPosts/MyPosts";
import Hero from "./Hero/Hero";

const Profile = () => {
  return (
    <div>
      <Hero />
      <User />
      <PostMaker />
      <MyPosts />
    </div>
  );
}

export default Profile;
