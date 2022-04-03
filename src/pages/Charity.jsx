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
import ukraine from "../ukraine";

function Charity() {
    const [account, setAccount] = useState(null);
    const [copied, setCopied] = useState(false);

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have Metamask installed!");
            return;
        } else {
            console.log("Wallet exists! We're ready to go!")
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) {
            const account = accounts[0];
            setAccount(account);
        } else {
            console.log("No authorized account yet.")
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

    const handleDonate = async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (urlParams.has('ref')) {
            const referral = urlParams.get("ref");

            //...
        } else {
            const amount = parseFloat(document.getElementById("inputAmount").value);

            donations.methods.donate("0x165CD37b4C644C2921454429E7F9358d18A45e14").send({ from: account, value: amount * 1000000000000000000 }).then(result => {
                alert('Donated ' + toString(amount) + ' ETH successfully');
                
            }).catch((error) => {
                alert(error);
            });
            

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
    const handleCloseRaise = () => {setShowRaise(false); setCopied(false);}
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

            <Modal show={showDonate} onHide={handleCloseDonate} className="donateModal" size="lg">
                <Modal.Header closeButton className="modalHeader btn-close-white">
                </Modal.Header>
                <Modal.Body className="justify-content-center modalBody">
                    <Modal.Title><div><h5 className="modalTitle">Donate</h5></div></Modal.Title>
                    <p className="modalSubtitle">Contribute a standard amount or suggest your own.</p>
                </Modal.Body>
                <Form>
                    <Form.Group className="mb-3 d-flex justify-content-center" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" className="amountInput shadow-none mb-3" placeholder="Amount" id="inputAmount" />
                        <Form.Label className="mb-3">
                            ETH
                        </Form.Label>
                    </Form.Group>
                    <Button variant="primary" onClick={handleDonate} className="send-button">
                        Send
                    </Button>
                </Form>
            </Modal>

            <Modal show={showRaise} onHide={handleCloseRaise} className="raiseModal" size="lg">
                <Modal.Header closeButton className="modalHeader btn-close-white">
                </Modal.Header>
                <Modal.Body className="justify-content-center modalBody">
                    <Modal.Title><h5>Raise</h5></Modal.Title>
                    <p className="modalSubtitle">Invite others to contribute through your referral link.</p>
                    <div className="invite-row">
                        <p className="inviteLink">https://altruia.com/ukrainian-crisis?ref=0x123978561298376128346</p>
                        <div className="spacer"></div>
                        {copied ? <Button variant="primary" className="copy-link-button">Copied</Button> :
                        <Button variant="primary" onClick={() => {
                            navigator.clipboard.writeText("https://altruia.com/ukrainian-crisis?ref=0x123978561298376128346");
                            setCopied(true);
                        }} className="copy-link-button">
                            Copy
                        </Button>
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Charity;