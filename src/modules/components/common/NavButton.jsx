import {NavLink} from "react-router-dom";

const NavButton = ({ to, label, className, classNavLink }) => {
  return (
    <button className={className}>
      <NavLink to={to} className={classNavLink}>
        {label}
      </NavLink>
    </button>
  );
};

export default NavButton;

