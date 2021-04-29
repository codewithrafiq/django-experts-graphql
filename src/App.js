import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "../src/components/NotFound/NotFound";
import Auth from "./Auth/Auth";
import { createContext, useState } from "react";
import Profile from "./components/Profile/Profile";
import AppDetailsPage from "./pages/AppDetailsPage/AppDetailsPage";

export const appContext = createContext();

function App({ history }) {
  const auth = new Auth(history);

  const [newApp, setNewApp] = useState({
    appName: "",
    appURL: "",
    country: "",
    subscription: "",
  });

  const [applications, setApplications] = useState([]);

  const handleNewAppData = () => {
    applications.push(newApp);
    setNewApp({
      appName: "",
      appURL: "",
      country: "",
      subscription: "",
    });
  };

  return (
    <div className="App">
      <appContext.Provider
        value={{
          auth,
          newApp,
          setNewApp,
          applications,
          setApplications,
          handleNewAppData,
        }}
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/app-details">
            <AppDetailsPage />
          </Route>
          <Route path="/my-account">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </appContext.Provider>
    </div>
  );
}

export default withRouter(App);
