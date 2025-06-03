import React from "react";
import Classes from "./Hero.module.css";
import ImageWithLoader from "../../../../common/ImageWithLoader/ImageWithLoader";

const Hero = ({ wallpaper }) => {
  return (
    <section className="hero">
      <div className={Classes.background}>
        <ImageWithLoader
          src={wallpaper}
          alt="wallpaper"
          className={Classes.spinnerWrapper}
        />
      </div>
    </section>
  );
};

export default Hero;
