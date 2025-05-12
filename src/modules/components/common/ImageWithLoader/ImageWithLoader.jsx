import Preloader from "../Preloader/Preloader";
import { useState } from "react";

const ImageWithLoader = ({ src, alt, className, height }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader height={height} />}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

export default ImageWithLoader;
