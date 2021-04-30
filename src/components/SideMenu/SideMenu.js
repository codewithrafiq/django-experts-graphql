import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="sidemenu-component">
      <Link to="/">Application</Link>
      <Link to="#tutorials">Tutorials</Link>
      <Link to="#help">Help</Link>
    </div>
  );
};

export default SideMenu;
