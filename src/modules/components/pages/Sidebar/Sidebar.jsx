import React from "react";
import Classes from "./Sidebar.module.css";
import Nav from "./Nav/Nav";
import Friends from "./Friends /Friends";

const Sidebar = ({t}) => {
  return (
    <nav className={Classes.nav}>
      <Nav t={t}/>
      <Friends t={t}/>
    </nav>
  );
}

export default Sidebar;
