import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/pages/login/login";
import Users from "./containers/pages/users/users";
import NotFound from "./containers/pages/notFound/notFound";
import User from "../src/containers/pages/user/user";
import { Redirect } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Login} />
    
        {!localStorage.getItem("username") ||
        !localStorage.getItem("password") ? (
          <Redirect to="/" />
        ) : (
          <React.Fragment>
            <Route path="/users" exact component={Users} />
            <Route path="/user_data/:id" exact component={User} />
          </React.Fragment>
        )}
          <Route path="*/" exact component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
