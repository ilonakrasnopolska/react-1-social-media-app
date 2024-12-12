import React from "react";

const Title = ({ CommonClasses, text }) => {
  return (
    <h2 className={CommonClasses.title}>{text}</h2>
  );
};

export default Title;
