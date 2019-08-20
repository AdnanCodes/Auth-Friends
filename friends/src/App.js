import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friends" component={Friends} />
    </div>
  );
}

export default App;
