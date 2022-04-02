import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
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
                    <Link to="/ukrainian-crisis">Donate</Link>
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
};

export default Main;