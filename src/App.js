import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import web3 from './web3';
import donations from './donations';
 
class App extends React.Component {
  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Donate crypto with</h2>
          <h1>Altrui</h1>
          <p>Give effectively to the global causes you care about.</p>
        </div>
        <div className="prop">
          {/* insert NFT image here */}
          <h3>A personalized NFT will represent your contribution permenantly on the blockchain.</h3>
        </div>
        <div className="causes">
          <h3>Causes we support</h3>
          <p>We onboard charities, non-profits, organizations, and institions in 
            need of fundings - and make it easy for your to contribute.</p>
          <div className="cause-boc">
            <h3>Ukrainian Crisis</h3>
            <p>Stand with the people of Ukraine during this time.</p>
            <button>Donate</button>
          </div>
          <p>and more to come.</p>
        </div>
        <div className="leaderboard">
          <h3>Leaderboard</h3>
          <p>The top givers, globally.</p>
          {/* implement */}
        </div>
      </div>
    );
  }
}
export default App;