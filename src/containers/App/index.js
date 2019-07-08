import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Home } from "../../pages";

const AppCtnr = () => (
  <Router>
    <div className="main-container">
      <header className="header">
        <Link to="/">Home</Link>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default AppCtnr;
