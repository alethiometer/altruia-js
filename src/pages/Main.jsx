import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Main.css";
import leaderboard from './leaderboard-overall.png';
import diamondDiamond from './diamond-diamond.png';

function Main() {
    return (
        <div className="container">
            <div className="header">
                <h2>Donate crypto with</h2>
                <h1>Altruia</h1>
                <p>Give effectively to the global causes you care about.</p>
            </div>
            <div className="prop">
                <img src={diamondDiamond} className="logo"/>
                <div className="spacer"></div>
                <div>
                <h5>Plus a personalized NFT to represent your contribution permenantly on the blockchain.</h5>
                <p>There are five tiers: wood (less than 0.01 ETH), bronze (less than 0.1 ETH), silver (less than 1 ETH), gold (less than 10 ETH), and diamond (more than 10 ETH). The inner symbol corresponds to the amount you've donated. The outer symbol corresponds to the amount you've raised through your referral link.</p>
                </div>
            </div>
            <div className="causes">
                <h4>Causes we support</h4>
                <p>We onboard charities, non-profits, organizations, and institions in
                    need of fundings - and make it easy for your to contribute.</p>
                <div className="carousel">
                    <div className="cause-block">
                        <div className="cause-header">
                            <h3>Ukraine Crisis</h3>
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
                            <h3>GiveWell</h3>
                            <p>Researching and shortlisting the global charities that save the most lives per dollar.</p>
                        </div>
                        <NavLink 
                            to="/givewell" 
                            className="link"
                        >
                            Donate
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="leaderboard">
                <h4>Leaderboard</h4>
                <p>The top givers, globally.</p>
                <img src={leaderboard} className="leaderboard-img"/>
            </div>
        </div>
    );
};

export default Main;