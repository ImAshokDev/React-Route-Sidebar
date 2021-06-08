import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Animations } from "./app/CssPractice/Animations";
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

          <Route exact path="/sideitem1" component={LandingPage} />
          <Route exact path="/sideitem2" component={LandingPage} />
          <Route exact path="/subsideitem5" component={LandingPage} />
          <Route exact path="/sideitem3" component={LandingPage} />
          <Route exact path="/subsideitem" component={LandingPage} />

          {/* <Route exact path="/contact" component={LandingPage} /> */}
          <Route exact path="/contact1" component={LandingPage} />
          <Route exact path="/contact2" component={LandingPage} />
          <Route exact path="/add1" component={LandingPage} />
          <Route exact path="/add2" component={LandingPage} />
        </Switch>
      </BrowserRouter>
      {/* <Animations /> */}
    </div>
  );
}

export default App;
