import React from "react";
import User from "./User/User";
import PostMaker from "./PostMaker/PostMaker";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <User />
      <PostMaker />
      <MyPosts />
    </div>
  );
}

export default Profile;
