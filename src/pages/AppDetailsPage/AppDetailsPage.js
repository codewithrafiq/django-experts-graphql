import React from "react";
import AppDetailsMainComponent from "../../components/AppDetailsMainComponent/AppDetailsMainComponent";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./AppDetailsPage.css";

const AppDetailsPage = () => {
  return (
    <div>
      <SideMenu />
      <AppDetailsMainComponent />
    </div>
  );
};

export default AppDetailsPage;
