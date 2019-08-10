import React from "react";
import { BrowserRouter, Route, Switch ,Link} from "react-router-dom";
import Clock from "./home/Clock";
import Giphy from "./giphy/Giphy";
import Common from "./Common"

const CommonRoutes = [];

const Router = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Common} />
      <Route exact path="/home" component={Clock} />,
      <Route exact path="/giphy" component={Giphy} />
    </Switch>
  </BrowserRouter>
);

export default Router;
