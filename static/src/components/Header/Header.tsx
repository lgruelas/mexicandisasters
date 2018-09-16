import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export class Header extends React.Component {

    render() {
        return (
            <Navbar inverse staticTop style={{boxShadow:'0 0 10px rgba(0,0,0,0.3)'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        Mexican Disasters Viewer
                    </Navbar.Brand>      
                </Navbar.Header>
                <Navbar.Text pullRight>
                    <Navbar.Link href='https://github.com/lgruelas/mexicandisasters'>
                        <FontAwesomeIcon icon={faGithub} size="lg"/> Source Code
                    </Navbar.Link>
                </Navbar.Text>
            </Navbar>
        );
    }
}