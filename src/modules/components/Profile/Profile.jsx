import React from "react";
import Hero from "../../subcomponents/Hero/Hero";
import User from "../../subcomponents/User/User";
import PostMaker from "../../subcomponents/PostMaker/PostMaker";
import Timeline from "../../subcomponents/Timeline/Timeline";
import Classes from './Profile.module.css';

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
