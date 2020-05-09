import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


document.body.style = 'background: #A095BF;';


function Home() {
    return (
        <div>
        {/*Move to right */}
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">HelpingHand</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Jobs</Nav.Link>
            <Nav.Link href="#pricing">Log In</Nav.Link>
        </Nav>
    </Navbar>


            <p className="landingPageTitle">
                HelpingHand
            </p>
        <Button variant="light" className="buttonTitle1" href="/Helper">I am looking to help!</Button> {' '}
         <Button variant="light" className="buttonTitle2" href="/User">I am looking for helpers!</Button> {' '}
        </div >
    );
}

export default Home;
