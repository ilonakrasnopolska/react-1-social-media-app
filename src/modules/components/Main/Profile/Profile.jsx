import React from "react";
import User from "./User/User";
import PostMaker from "./PostMaker/PostMaker";
import MyPosts from "./MyPosts/MyPosts";
import Hero from "./Hero/Hero";

const Profile = (props) => {
  return (
    <div>
      <Hero />
      <User />
      <PostMaker addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
                 newPostText={props.profile.newPostText} />
      <MyPosts posts={props.profile.posts} />
    </div>
  );
}

export default Profile;
