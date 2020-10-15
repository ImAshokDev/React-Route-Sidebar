import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./app/LandingPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={LandingPage} />
          <Route exact path="/aboute" component={LandingPage} />
          <Route exact path="/product" component={LandingPage} />
          <Route exact path="/product2" component={LandingPage} />
          <Route exact path="/product3" component={LandingPage} />
          <Route exact path="/product4" component={LandingPage} />
          <Route exact path="/product5" component={LandingPage} />
          <Route exact path="/contact" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
