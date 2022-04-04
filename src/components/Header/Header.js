import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='fs-4 fw-bolder' href="/"><span className='text-danger'>FeedBack</span>Me</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end ' id="basic-navbar-nav">
                        <Nav className="gap-3">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/reviews">Reviews</CustomLink>
                            <CustomLink to="/dashBoard">DashBoard</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;