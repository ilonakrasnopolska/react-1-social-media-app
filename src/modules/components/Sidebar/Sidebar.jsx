import React from "react";
import Classes from "./Sidebar.module.css";
import Nav from "./Nav/Nav";
import Friends from "./Friends /Friends";

const Sidebar = (props) => {
  return (
    <nav className={Classes.nav}>
      <Nav />
      <Friends sidebar={props.sidebar} />
    </nav>
  );
}

export default Sidebar;
