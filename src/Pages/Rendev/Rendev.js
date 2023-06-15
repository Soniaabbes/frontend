import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Rendev.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Rendev() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='rendev'>
                            <img id='rdv' alt='rdv' src='https://thumbs.dreamstime.com/b/docteur-appointment-icon-vecteur-plat-env-de-style-154239786.jpg'/>
                            <p className='navbar2'>
                                Book an  Appointment with a doctor
                                <br/>
                                Online
                            </p>

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle/>

                </Container>
            </Navbar>
            <div className='bookRdv'></div>
            <div className='RDVmod'>
                <>
                    <div className='modifierRDV'>
                        <img alt="RDV" id='horloge' src='https://static.vecteezy.com/ti/vecteur-libre/p1/19509134-eps10-vecteur-bleu-passage-du-temps-abstrait-icone-ou-logo-isole-sur-fond-blanc-symbole-de-contour-de-montre-ou-d-horloge-dans-un-style-moderne-simple-et-plat-pour-la-conception-de-votre-site-web-et-votre-application-mobile-vectoriel.jpg'/>
                        <p>
                          <Link to='/chercheMed' >
                            <Button className='title1' variant="link">make an appointment</Button>
                            </Link>
                            <br/><p className='parag2'>choose your doctor and make an appointment.</p>
                        </p>
                    </div>
                    <div className='modifierRDV'>
                        <img alt="RDV" id='patient' src='https://static.vecteezy.com/system/resources/previews/008/302/513/non_2x/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg'/>
                        <p>
                          <Link to='/profilPatient'>
                            <Button className='title1' variant="link">manage your appointments</Button>
                            </Link>
                            <br/>
                            <p className='parag2'>change or cancel your appointments</p>
                        </p>
                    </div>
                </>
            </div>

        </div>
    )
}

export default Rendev
