import React from "react";
import Hero from "../subcomponents/Hero";
import User from "../subcomponents/User";
import PostMaker from "../subcomponents/PostMaker";
import Timeline from "../subcomponents/Timeline";

const Main = () => {
  return (
    <main className="content">
      <Hero />
      <User />
      <PostMaker />
      <Timeline />
    </main>
  );
}

export default Main;
