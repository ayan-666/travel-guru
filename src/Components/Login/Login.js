import React, { useContext } from 'react';
import { useState } from 'react';
import * as firebase from "firebase/app";
import 'firebase/auth';
import logo from '../../Images/Logo.png';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


function Login() {
  const [newUser,setNewUser] = useState(false);

  const [user,setUser] = useState({
    isSignIn: false,
    name:'',
    email:'',
    password:'',
    photo:''
  })
const [loggedInUser,setLoggedInUser] = useContext(UserContext)
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleBlur = (e) => {
    //console.log(e.target.name , e.target.value);
    let isFormValid = true;
    if(e.target.name === 'email'){
      const isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      //console.log(isEmailValid);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length >6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
      //console.log(isPasswordValid && passwordHasNumber)
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res=>{
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success=true;
        setUser(newUserInfo);
        updateUserName(user.name);
      })
      .catch(error=> {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res=> {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success=true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('Sign in User Info',res.user);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    e.preventDefault();
  }


 

  const updateUserName = name =>{ 
    var user = firebase.auth().currentUser;
    user.updateProfile({
    displayName: name,
    
  }).then(function() {
    console.log('User Name Updated');
  }).catch(function(error) {
    console.log(error);
  });
}
  return (
    <div>
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
                               
                                
                                <input type="checkbox" onChange={()=> setNewUser(!newUser)} name="newUser"/>
                                <label htmlFor="newUser">New User Sign Up</label>
                                <form onSubmit={handleSubmit}>
                                    {newUser && <input type="text" name="name" placeholder="write Name" onBlur={handleBlur} required/>}
                                    <br/>
                                    <input type="text" name="email" onBlur={handleBlur} placeholder="Write Email" required/>
                                    <br/>
                                    <input type="password" name="password" onBlur={handleBlur} placeholder="Write password" required/>
                                    <br/>
                                    <input type="submit" value={newUser ? 'sign Up' : 'Sign In'}/>
                                </form>
                                <p style={{color:'red'}}>{user.error}</p>
                                {
                                    user.success && <p style={{color:'green'}}>User {newUser ? 'created' : 'Loggin'} Successfully</p>
                                }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
