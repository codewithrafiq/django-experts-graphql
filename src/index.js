import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // Dev inverments

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// Dev inverments
// Dev inverments
// Dev inverments
const httpLink = createHttpLink({
  uri: "https://0.0.0.0:8888/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InJhZmlxIiwiZXhwIjoxNjE5ODM4MjM2LCJvcmlnSWF0IjoxNjE5ODM3OTM2fQ.jz5nBhK-S31FaiN7tAuTGi6pbnPh1D3LqqpUwXZnaiM";
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const devClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// Dev inverments
// Dev inverments
// Dev inverments
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
