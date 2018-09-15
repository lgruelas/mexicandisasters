import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class Header extends React.Component {

    render() {
        return (
            <Navbar inverse staticTop style={{boxShadow:'0 0 10px rgba(0,0,0,0.3)'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        Mexican Disasters agro.mx
                    </Navbar.Brand>      
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        hola
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}