import React from "react";
import Classes from './Hero.module.css';
import {useSelector} from "react-redux";

const Hero = () => {
  const coverPic = useSelector(state => state.profile.profileCover)
  return (
    <section className="hero">
      <div className={Classes.background}>
        <img src={coverPic} alt="wallpaper"/>
      </div>
    </section>
  );
}

export default Hero;
