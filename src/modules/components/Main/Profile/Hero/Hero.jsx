import React from "react";
import Classes from './Hero.module.css';

const Hero = () => {
  return (
      <section className="hero">
        <div className={Classes.background}>
          <img src="https://wallpapersmug.com/download/3840x2160/17f94c/generations-naruto.jpg" alt="wallpaper" />
        </div>
      </section>
  );
}

export default Hero;
