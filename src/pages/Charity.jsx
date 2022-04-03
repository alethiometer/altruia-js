import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Charity.css";
import { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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

            <Modal show={showDonate} onHide={handleCloseDonate} className="donateModal">
                <Modal.Header closeButton className="modalHeader btn-close-white">
                </Modal.Header>
                <Modal.Body className="justify-content-center modalBody">
                    <Modal.Title><div><h5 className="modalTitle">Donate</h5></div></Modal.Title>
                    <p>Contribute a standard amount or suggest your own.</p>
                </Modal.Body>

                <Form>
                    <Form.Group className="mb-3 d-flex justify-content-center" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" className="amountInput shadow-none mb-3" placeholder="Amount" />
                        <Form.Label className="mb-3">
                            ETH
                        </Form.Label>
                    </Form.Group>
                    <Button variant="primary" onClick={handleCloseDonate} className="send-button">
                        Send
                    </Button>
                </Form>




            </Modal>

            <Modal show={showRaise} onHide={handleCloseRaise} className="raiseModal">
            <Modal.Header closeButton className="modalHeader btn-close-white">
                </Modal.Header>
                <Modal.Body className="justify-content-center modalBody">
                    <Modal.Title><h5>Raise</h5></Modal.Title>
                    <p>Invite others to contribute through your referral link.</p>
                    <p className="inviteLink">https://altruia.com/ukrainian-crisis?ref=0x123978561298376128346</p>
                    <Button variant="primary" onClick={handleCloseDonate} className="copy-link-button">
                        Copy Link
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Charity;