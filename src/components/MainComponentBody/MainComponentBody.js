import React, { useContext } from "react";
import { appContext } from "../../App";
import AppCard from "../AppCard/AppCard";
import "./MainComponentBody.css";

const MainComponentBody = () => {
  const { applications } = useContext(appContext);

  return (
    <div className="main-component-body-component">
      {applications.map((app) => (
        <AppCard key={app.appURL} app={app} />
      ))}
    </div>
  );
};

export default MainComponentBody;
