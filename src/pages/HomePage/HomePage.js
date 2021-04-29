import React, { useContext, useEffect } from "react";
import { appContext } from "../../App";
import MainComponent from "../../components/MainComponent/MainComponent";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./HomePage.css";

const HomePage = () => {
  const { auth } = useContext(appContext);

  useEffect(() => {
    auth.handleAuth();
  }, [auth]);

  return (
    <div>
      <SideMenu />
      <MainComponent />
    </div>
  );
};

export default HomePage;
