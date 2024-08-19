import React from "react";
import User from "../../subcomponents/User/User";
import PostMaker from "../../subcomponents/PostMaker/PostMaker";
import Timeline from "../../subcomponents/Timeline/Timeline";
import Classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <User />
      <PostMaker />
      <Timeline />
    </div>
  );
}

export default Profile;
