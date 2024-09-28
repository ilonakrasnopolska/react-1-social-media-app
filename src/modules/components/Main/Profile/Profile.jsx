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
      <PostMaker dispatch={props.dispatch}
                 newPostText={props.profile.newPostText} />
      <MyPosts dispatch={props.dispatch} posts={props.profile.posts} />
    </div>
  );
}

export default Profile;
