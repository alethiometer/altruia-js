import React from "react";

function Charity() {
    return (
        <div className="container">
            <div className="header">
                <h2>$1,000,000 raised</h2>
                <h1>Ukrainian Crisis</h1>
                <p>Stand with the people of Ukraine</p>
            </div>
            <button>Donate</button>
            <button>Raise</button>
            <div className="leaderboard">
                <h3>Leaderboard</h3>
                <p>Top donors to the Ukrainian Crisis</p>
                {/* implement */}
            </div>
        </div>
    );
};

export default Charity;