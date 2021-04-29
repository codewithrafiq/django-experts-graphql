import React from "react";
import MainComponentBody from "../MainComponentBody/MainComponentBody";
import MainComponentMenu from "../MainComponentMenu/MainComponentMenu";
import "./MainComponent.css";

const MainComponent = () => {
  return (
    <div className="homepage-main-component">
      <div className="row">
        <div className="col-2 homepage-main-component-left-section">
          <h6 className="main-component-heading">Applications: </h6>
        </div>
        <div className="col-10 homepage-main-component-right-section">
          <MainComponentMenu />
          <MainComponentBody />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
