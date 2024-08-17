import React from "react";

const Sidebar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a className="nav__list-item-link" href="#s">Profile</a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-link" href="#s">Messages</a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-link" href="#s">News</a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-link" href="#s">Music</a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item-link" href="#s">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
