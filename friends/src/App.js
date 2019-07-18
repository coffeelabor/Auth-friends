import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import People from "./components/People";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Login</Link>
        <Link to="/people">People</Link>
      </div>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/People"
        render={props => {
          const token = localStorage.getItem("token");
          if (!token) {
            return <Redirect to="/" />;
          }
          return <People {...props} />;
        }}
      />
    </div>
  );
}

export default App;
