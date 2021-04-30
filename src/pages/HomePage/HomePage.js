import React from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <SideMenu />
      <MainComponent />
    </div>
  );
};

export default HomePage;
