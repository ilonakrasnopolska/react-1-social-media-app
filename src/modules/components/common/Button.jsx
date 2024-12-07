const Button = ({className, onClick, label}) => {
  return (
    <button className={className}
            type="submit"
            onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

