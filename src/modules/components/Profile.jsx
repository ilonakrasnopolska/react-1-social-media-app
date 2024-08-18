import React from "react";
import Hero from "../subcomponents/Hero";
import User from "../subcomponents/User";
import PostMaker from "../subcomponents/PostMaker";
import Timeline from "../subcomponents/Timeline";
import Classes from '../css/Profile.module.css';

const Profile = () => {
  return (
    <main className={Classes.content}>
      <div>
      <Hero />
      <User />
      <PostMaker />
      <Timeline />
      </div>
    </main>
  );
}

export default Profile;
