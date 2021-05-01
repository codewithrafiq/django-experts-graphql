import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "../src/components/NotFound/NotFound";
import { createContext, useState } from "react";
import AppDetailsPage from "./pages/AppDetailsPage/AppDetailsPage";
import MyAccounts from "./pages/MyAccounts";
export const appContext = createContext();

function App() {
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
          <Route exact path="/my-account" component={MyAccounts} />
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </appContext.Provider>
    </div>
  );
}

export default withRouter(App);
