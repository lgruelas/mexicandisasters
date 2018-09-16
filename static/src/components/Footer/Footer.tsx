import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faResearchgate, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { CenterView } from './../Functions';

export class Footer extends React.Component {
    render() {
        return (
            <footer className='blue page-footer' style={{padding:20}}>
                <Grid>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={1}>
                            <CenterView>
                                <a className="fb-ic" href='https://facebook.com/EcofisiologiaAgraria'>
                                    <FontAwesomeIcon icon={faFacebook} size='3x'/>
                                </a>
                            </CenterView>
                        </Col>
                        <Col md={1}>
                            <CenterView>
                                <a className="tw-ic"  href='https://twitter.com/erickdlbm'>
                                    <FontAwesomeIcon icon={faTwitter} size='3x'/>
                                </a>    
                            </CenterView>
                        </Col>
                        <Col md={1}>
                            <CenterView>
                                <a className="gplus-ic" href='https://www.researchgate.net/profile/Erick_De_La_Barrera2'>
                                    <FontAwesomeIcon icon={faResearchgate} size='3x'/>
                                </a>
                            </CenterView>
                        </Col>
                        <Col md={1}>
                            <CenterView>
                                <a className="li-ic" href='https://scholar.google.com.mx/citations?user=7PUtFDQAAAAJ'>
                                    <FontAwesomeIcon icon={faGoogle} size='3x'/>
                                </a>
                            </CenterView>
                        </Col>
                        <Col md={4}></Col>
                    </Row>  
                </Grid>     
                <hr />
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://agro.mx"> Agro.mx</a>
                </div>
            </footer>
        );
    }
}