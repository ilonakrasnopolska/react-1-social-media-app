import React from "react";
import Classes from "./Sidebar.module.css";
import Nav from "./Nav/Nav";
import Friends from "./Friends /Friends";

const Sidebar = () => {
  return (
    <nav className={Classes.nav}>
      <Nav/>
      <Friends/>
    </nav>
  );
}

export default Sidebar;
