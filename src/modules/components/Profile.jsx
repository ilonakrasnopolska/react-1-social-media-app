import React from "react";
import Hero from "../subcomponents/Hero";
import User from "../subcomponents/User";
import PostMaker from "../subcomponents/PostMaker";
import Timeline from "../subcomponents/Timeline";

const Profile = () => {
  return (
    <main className="content">
      <div className="content-container">
      <Hero />
      <User />
      <PostMaker />
      <Timeline />
      </div>
    </main>
  );
}

export default Profile;
