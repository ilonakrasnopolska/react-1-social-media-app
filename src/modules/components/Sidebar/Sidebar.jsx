import React from "react";
import Classes from "./Sidebar.module.css";
import Nav from "./Nav/Nav";
import Friends from "./Friends /Friends";

const Sidebar = (props) => {
  return (
    <nav className={Classes.nav}>
      <Nav/>
      <Friends friends={props.sidebar.friends}/>
    </nav>
  );
}

export default Sidebar;
