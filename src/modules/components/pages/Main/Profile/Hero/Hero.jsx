import React from "react";
import Classes from './Hero.module.css';

const Hero = ({wallpaper}) => {
  return (
    <section className="hero">
      <div className={Classes.background}>
        <img src={wallpaper} alt="wallpaper"/>
      </div>
    </section>
  );
}

export default Hero;
