import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl, Col, Container, Row } from 'react-bootstrap';



const INeedHelp = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');

    const submit = (event) => {
        event.preventDefault();
        console.log('email: ' + email + ' password: ' + pass);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPassChange = (event) => {
        setpass(event.target.value);
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">HelpingHand</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Jobs</Nav.Link>
                    <Nav.Link href="#pricing">Log In</Nav.Link>
                </Nav>
            </Navbar>

            <Container>
                <Row className='justify-content-center'>
                    <Col xs={9} md={5}>
                        <Form onSubmit={submit}>



                            {/*First Name*/}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label> First Name</Form.Label>
                                    <Form.Control required type=" name" placeholder="First Name" />
                                </Form.Group>
                            </Form.Row>

                            {/*Last Name*/}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label> Last Name</Form.Label>
                                    <Form.Control required type="name" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>

                            {/*Email*/}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label> Email </Form.Label>
                                    <Form.Control onChange={onEmailChange} required type="email" placeholder="Email" />
                                </Form.Group>
                            </Form.Row>

                            {/*Password*/}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label> Password </Form.Label>
                                    <Form.Control onPassChange={onPassChange} required type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group className='button'>
                                <Button variant="dark" type="submit">
                                    Register
                        </Button>
                            </Form.Group>
                            <div className='already-have-an-account-container' style={{ marginBottom: "20px", fontSize: "20px" }}>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default INeedHelp;