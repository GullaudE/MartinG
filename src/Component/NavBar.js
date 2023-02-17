import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";


export default function NavBar(){

    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="#home">
                        <a href="/">
                            <img
                                className="Martin"
                                src="/asset/image/Martin.jpg"
                                width="60"
                                height="60"
                                alt="Martin"
                            />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Brand>Martin Groslambert</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="NavBar">
                            <Nav.Link href="/Component/ContactUs">
                                Me contacter
                            </Nav.Link>
                            <p className="bg-transparent">By Ewan Gullaud</p>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}