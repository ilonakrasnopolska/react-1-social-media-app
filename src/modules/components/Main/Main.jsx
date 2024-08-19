import React from "react";
import Hero from "./Hero/Hero";
import Profile from "./Profile/Profile";
import Classes from "./Main.module.css"

const Main = () => {
  return (
    <main>
      <div className={Classes.content}>
        <Hero />
        <Profile />
      </div>
    </main>
  );
}

export default Main;
