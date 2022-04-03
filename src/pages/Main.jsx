import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Main.css";
import leaderboard from './leaderboard-overall.png'

function Main() {
    return (
        <div className="container">
            <div className="header">
                <h2>Donate crypto with</h2>
                <h1>Altruia</h1>
                <p>Give effectively to the global causes you care about.</p>
            </div>
            <div className="prop">
                <h5>Plus a personalized NFT to represent your contribution permenantly on the blockchain.</h5>
            </div>
            <div className="causes">
                <h4>Causes we support</h4>
                <p>We onboard charities, non-profits, organizations, and institions in
                    need of fundings - and make it easy for your to contribute.</p>
                <div className="carousel">
                    <div className="cause-block">
                        <div className="cause-header">
                            <h3>Ukrainian Crisis</h3>
                            <p>Stand with the people of Ukraine during this time.</p>
                        </div>
                        <NavLink 
                            to="/ukrainian-crisis" 
                            className="link"
                        >
                            Donate
                        </NavLink>
                    </div>
                    <div className="cause-block">
                        <div className="cause-header">
                            <h3>In progress...</h3>
                            <p>We are in the process of onboarding the next charity.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="leaderboard">
                <h4>Leaderboard</h4>
                <p>The top givers, globally.</p>
                <img src={leaderboard} className="leaderboard-img"/>
            </div>
            <div className="NFT-grid">

            </div>
        </div>
    );
};

export default Main;