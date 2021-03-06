import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";

import IAmHelp from "./views/iAmHelp/iAmHelp";

import NotFound from "./views/NotFound";
import INeedHelp from "./views/iNeedHelp/iNeedHelp"
import NavBar from "./components/Header/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Helper" component={IAmHelp} />
        <Route exact path="/User" component={INeedHelp} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div >
  );
}

export default App;
