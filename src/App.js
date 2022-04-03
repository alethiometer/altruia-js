import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";

// Pages
import Main from "./pages/Main";
import Charity from "./pages/Charity";
import Charity2 from "./pages/Charity2";
 
class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/ukrainian-crisis*" component={Charity}/>
        <Route path="/givewell*" component={Charity2}/>
        <Redirect to="/" />
      </Switch>
    </Router>
  }
}
export default App;