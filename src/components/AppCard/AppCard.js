import React from "react";
import { Link } from "react-router-dom";
import "./AppCard.css";

const AppCard = (props) => {
  const { appName, appURL, subscription } = props.app;
  return (
    <div className="app-card-component">
      <div className="app-card-top-section">
        <h6>App Name: {appName}</h6>
        <Link to="/app-details">
          <button className="btn app-launch-button">Launch</button>
        </Link>
      </div>
      <p>URL: {appURL}</p>
      <p>Secret Key: #</p>
      <p>Subscription: {subscription}</p>
      <p>Permission: Admin</p>
    </div>
  );
};

export default AppCard;
