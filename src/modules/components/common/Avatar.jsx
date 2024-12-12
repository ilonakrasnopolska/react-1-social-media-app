const Avatar = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt || "Avatar"}
    />
  );
};

export default Avatar;
