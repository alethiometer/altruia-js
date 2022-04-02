import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// Pages
import Main from "./pages/Main";
import Charity from "./pages/Charity";

// Web3
import web3 from './web3';
import donations from './donations';

 
class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/ukrainian-crisis*" component={Charity}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  }
}
export default App;