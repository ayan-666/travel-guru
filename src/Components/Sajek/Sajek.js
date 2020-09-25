import React, { useContext } from 'react';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap';
import logo from '../../Images/Logo.png';
import { Link, useHistory } from 'react-router-dom';
import './Sajek.css'
import { UserContext } from '../../App';

const Sajek = () => {
    const history = useHistory();
    const handleProcess=()=>{
        history.push('/shipment');
    }
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="container-fluid home_page">
                <div className="row">
                    <div className="col">
                        {/* Nav Bar Start*/}
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <Navbar bg="light" expand="lg">
                                    <Navbar.Brand href="#home"><img src={logo} style={{height:'50px'}}/></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                        <Form inline>
                                        <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                                        </Form>
                                        </Nav>
                                        <Link to="/home">Home</Link>
                                        <Nav.Link href="#destination">Destination</Nav.Link>
                                        <Nav.Link href="#blog">Blog</Nav.Link>
                                        <Nav.Link href="#contact">Contact</Nav.Link>
                                        
                                        <Button variant="outline-success" onClick={()=>setLoggedInUser({})}>Log Out</Button>
                                    </Navbar.Collapse>
                                </Navbar>
                                {/* Banner Start */}
                                <div className="background">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6"></div>
                                            <div className="col-6">
                                            <h2>Sajek Resourt....</h2>
                                                <p>ajek valley is known for its natural environment and is surrounded by mountains, dense forest</p>
                                                <Button className="btn" variant="dark" onClick={handleProcess}>Booking</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sajek;