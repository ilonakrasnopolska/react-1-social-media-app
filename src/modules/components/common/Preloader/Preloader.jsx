import React from "react";
import { ClipLoader } from "react-spinners";
import Classes from "./Preloader.module.css";

const Preloader = ({ size = 60, color = "#194770", height = "300px" }) => {
  return (
    <div className={Classes.wrapper} style={{ height }}>
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Preloader;
