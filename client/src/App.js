import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/Banner";
import Results from "./components/resultsContainer/results";
import Saved from "./components/savedContainer/saved";

import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Banner/>
            <div>
            <Switch>
              <div>
              <Route exact path="/search" component={Results} />
              <Route exact path="/" component={Saved} />
              {/* <Route component={NoMatch} /> */}
              </div>
            </Switch>
            </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
