import React, { useContext } from 'react';
import {Navbar,Nav,Form,Button,FormControl,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png';
import img1 from '../../Images/Image/Rectangle 26.png'
import img2 from '../../Images/Image/Rectangle 27.png'
import img3 from '../../Images/Image/Rectangle 28.png'

const Shipment = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
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
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                        <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img1} />
                                    <Card.Body>
                                        <Card.Title>Our Service</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                                        </div>
                                        <div className="col-4">
                                        <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img2} />
                                    <Card.Body>
                                        <Card.Title>Our Service</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                                        </div>
                                        <div className="col-4">
                                        <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Our Service</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>
                                        </div>
                                    </div>
                                </div>
                                
                </div>
            </div>
        </div>
    );
};

export default Shipment;