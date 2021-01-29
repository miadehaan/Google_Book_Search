import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav } from "react-bootstrap";

function Header() {
    return (
        <div className="sticky">
        <Navbar bg="dark"variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/" style={{ fontFamily: ' "Gloria Hallelujah", cursive ', fontSize: '22px'}} >Google Book Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" style={{ fontFamily: ' "Gloria Hallelujah", cursive '}}>Search</Nav.Link>
                <Nav.Link as={Link} to="/saved" style={{ fontFamily: ' "Gloria Hallelujah", cursive '}}>Saved</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default Header;