import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Main.css";
import leaderboard from './leaderboard-overall.png';
import woodBronze from './wood-bronze.png';
import woodDiamond from './wood-diamond.png';
import woodGold from './wood-gold.png';
import woodSilver from './wood-silver.png';
import woodWood from './wood-wood.png';
import bronzeBronze from './bronze-bronze.png';
import bronzeDiamond from './bronze-diamond.png';
import bronzeGold from './bronze-gold.png';
import bronzeSilver from './bronze-silver.png';
import bronzeWood from './bronze-wood.png';
import silverBronze from './silver-bronze.png';
import silverDiamond from './silver-diamond.png';
import silverGold from './silver-gold.png';
import silverSilver from './silver-silver.png';
import silverWood from './silver-wood.png';
import goldBronze from './gold-bronze.png';
import goldDiamond from './gold-diamond .png';
import goldGold from './gold-gold.png';
import goldSilver from './gold-silver.png';
import goldWood from './gold-wood.png';
import diamondBronze from './diamond-bronze.png';
import diamondDiamond from './diamond-diamond.png';
import diamondGold from './diamond-gold.png';
import diamondSilver from './diamond-silver.png';
import diamondWood from './diamond-wood.png';


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
            <h4>Tokens of appreciation</h4>
                <p>The set of NFTs that represent your contribution to the Ukrainian Crisis.</p>
            <div className="NFT-grid">
                <img src={diamondDiamond} className="NFT"/>
                <img src={diamondGold} className="NFT"/>
                <img src={diamondSilver} className="NFT"/>
                <img src={diamondBronze} className="NFT"/>
                <img src={diamondWood} className="NFT"/>
                <img src={goldDiamond} className="NFT"/>
                <img src={goldGold} className="NFT"/>
                <img src={goldSilver} className="NFT"/>
                <img src={goldBronze} className="NFT"/>
                <img src={goldWood} className="NFT"/>
                <img src={silverDiamond} className="NFT"/>
                <img src={silverGold} className="NFT"/>
                <img src={silverSilver} className="NFT"/>
                <img src={silverBronze} className="NFT"/>
                <img src={silverWood} className="NFT"/>
                <img src={bronzeDiamond} className="NFT"/>
                <img src={bronzeGold} className="NFT"/>
                <img src={bronzeSilver} className="NFT"/>
                <img src={bronzeBronze} className="NFT"/>
                <img src={bronzeWood} className="NFT"/>
                <img src={woodDiamond} className="NFT"/>
                <img src={woodGold} className="NFT"/>
                <img src={woodSilver} className="NFT"/>
                <img src={woodBronze} className="NFT"/>
                <img src={woodWood} className="NFT"/>
            </div>
        </div>
    );
};

export default Main;