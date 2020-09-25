import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Sajek from './Components/Sajek/Sajek';
import Sundarban from './Components/Sundarban/Sundarban';
import Sreemongol from './Components/Sreemongol/Sreemongol';
import Login from './Components/Login/Login';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext =  createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
      <Router>
        <Switch>
          <Route  path='/home'>
              <Home></Home>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute  path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/sajek/">
            <Sajek></Sajek>
          </Route>
          <Route path="/sundarban/">
            <Sundarban></Sundarban>
          </Route>
          <Route path="/sreemongol/">
            <Sreemongol></Sreemongol>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
