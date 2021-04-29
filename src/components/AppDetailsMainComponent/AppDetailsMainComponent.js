import React from "react";
import AppDetailsTabs from "../AppDetailsTabs/AppDetailsTabs";
import MainComponentMenu from "../MainComponentMenu/MainComponentMenu";
import "./AppDetailsMainComponent.css";

const AppDetailsMainComponent = () => {
  return (
    <div className="app-details-page-main-component">
      <div className="row">
        <div className="col-2 app-details-page-main-component-left-section">
          <h6 className="app-details-page-main-component-heading">
            Applications:{" "}
          </h6>
        </div>
        <div className="col-10 app-details-page-main-component-right-section">
          <MainComponentMenu />
          <AppDetailsTabs />
        </div>
      </div>
    </div>
  );
};

export default AppDetailsMainComponent;
