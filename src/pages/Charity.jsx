import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Charity.css";
import { useState } from "react";

// Web3

function Charity() {
    const [showDonate, setShowDonate] = useState(false);

    const handleCloseDonate = () => setShowDonate(false);
    const handleShowDonate = () => setShowDonate(true);

    const [showRaise, setShowRaise] = useState(false);

    const handleCloseRaise = () => setShowRaise(false);
    const handleShowRaise = () => setShowRaise(true);

    return (
        <div className="container">
            <div className="wallet-connect">
                <Button className="wallet">Connect wallet</Button>
            </div>
            <div className="header">
                <h2>$1,000,000 raised</h2>
                <h1>Ukrainian Crisis</h1>
                <p>Stand with the people of Ukraine.</p>
                <div className="buttons">
                    <Button onClick={handleShowDonate} className="donate-button">Donate</Button>
                    <div className="spacer"> </div>
                    <Button onClick={handleShowRaise} className="raise-button">Raise</Button>
                </div>
            </div>
            <div className="leaderboard">
                <h3>Leaderboard</h3>
                <p>Top donors to the Ukrainian Crisis</p>
                {/* implement */}
            </div>

            <Modal show={showDonate} onHide={handleCloseDonate}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Donate</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Contribute a standard amount or suggest your own.

                </Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Amount" />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDonate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseDonate}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showRaise} onHide={handleCloseRaise}>
                <Modal.Header closeButton>
                    <Modal.Title><h5>Raise</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>Invite others to contribute through your referral link.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRaise}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseRaise}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Charity;