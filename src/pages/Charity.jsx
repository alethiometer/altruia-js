import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Charity.css";
import { useState, useEffect } from "react";

import Web3 from "web3";
import donations from "../donations";

function Charity() {
    const [account, setAccount] = useState(null);

    const checkWalletIsConnected = () => { 
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have Metamask installed!");
            return;
        } else {
            console.log("Wallet exists! We're ready to go!")
        }
    }
    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Please install Metamask!");
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } catch (err) {
            console.log(err);
            alert("There was an issue connecting your wallet. Please try again!")
        }
    }

    useEffect(() => {
        checkWalletIsConnected();
      }, [])

    // Donate modal
    const [showDonate, setShowDonate] = useState(false);
    const handleCloseDonate = () => setShowDonate(false);
    const handleShowDonate = () => setShowDonate(true);

    // Raise modal
    const [showRaise, setShowRaise] = useState(false);
    const handleCloseRaise = () => setShowRaise(false);
    const handleShowRaise = () => setShowRaise(true);

    return (
        <div className="container">
            <div className="wallet-connect">
                {account ? <Button className="wallet-connected">Wallet connected</Button>
                : <Button onClick={connectWalletHandler} className="wallet-not-connected">Connect wallet</Button>}
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