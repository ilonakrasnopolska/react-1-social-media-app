import React from "react";
import Classes from "./Sidebar.module.css";
import Nav from "./Nav/Nav";
import FriendsContainer from "./Friends /FriendsContainer";

const Sidebar = ({t}) => {
  return (
    <nav className={Classes.nav}>
      <Nav t={t}/>
      <FriendsContainer t={t}/>
    </nav>
  );
}

export default Sidebar;
