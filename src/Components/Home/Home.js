import React, { useContext, useState } from 'react';
import {Navbar,Nav,Form,Button,FormControl,Carousel} from 'react-bootstrap';
import logo from '../../Images/Logo.png';
import sajek from '../../Images/Image/Sajek.png';
import sundarban from '../../Images/Image/sundorbon.png';
import sreemongol from '../../Images/Image/Sreemongol.png'
import { Link, useHistory } from 'react-router-dom';
import './Home.css'
import { UserContext } from '../../App';


const Home = () => {
    
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handle=()=>{
        history.push('/login');
    }
    
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
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={sajek}
                                        alt="First slide"
                                        style={{height:'600px'}}
                                        />
                                        <Carousel.Caption>
                                        <h1>Sajek Velly</h1>
                                        <p style={{textAlign:'center'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <Button variant="dark"><Link to={'/sajek/'}>Booking</Link></Button>
                                        
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={sundarban}
                                        alt="Third slide"
                                        style={{height:'600px'}}
                                        />

                                        <Carousel.Caption>
                                        <h1>Sundarban</h1>
                                        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <Button variant="dark"><Link to={'/sundarban/'}>Booking</Link></Button>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={sreemongol}
                                        alt="Third slide"
                                        style={{height:'600px'}}
                                        />

                                        <Carousel.Caption>
                                        <h1>Sreemongol</h1>
                                        <p style={{textAlign:'center'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        <Button variant="dark"><Link to={'/sreemongol/'}>Booking</Link></Button>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;