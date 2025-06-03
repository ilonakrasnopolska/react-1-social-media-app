const Button = ({ className, onClick, label, ...props }) => {
  return (
    <button
      className={className}
      type="submit"
      onClick={onClick}
      {...props} // передаёт onClick, disabled и любые другие
      >
      {label}
    </button>
  );
};

export default Button;
