import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../App";
import "./MainComponentMenu.css";

const MainComponentMenu = () => {
  const { newApp, setNewApp, handleNewAppData } = useContext(appContext);
  return (
    <div className="main-component-menu-component">
      <button
        type="button"
        className="btn new-app-button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        New App
      </button>

      {/* New App Popup  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New App:
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="appNameInput"
                    value={newApp.appName}
                    onChange={(e) =>
                      setNewApp({ ...newApp, appName: e.target.value })
                    }
                    placeholder="App Name (auto check)"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="appURLInput"
                    value={newApp.appURL}
                    onChange={(e) =>
                      setNewApp({ ...newApp, appURL: e.target.value })
                    }
                    placeholder="App URL (auto generated)"
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    value={newApp.country}
                    onChange={(e) =>
                      setNewApp({ ...newApp, country: e.target.value })
                    }
                  >
                    <option defaultValue>Country</option>
                    <option value="unitedStates">United States</option>
                  </select>
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    value={newApp.subscription}
                    onChange={(e) =>
                      setNewApp({ ...newApp, subscription: e.target.value })
                    }
                  >
                    <option defaultValue>Subscription</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleNewAppData}
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle profile-button"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Profile
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link className="dropdown-item" to="/home/my-account">
              Account
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="/login/auth0">
              Login
            </a>
          </li>
          <li>
            <Link className="dropdown-item" to="#billing">
              Billing
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#subscription">
              Subscription
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainComponentMenu;
