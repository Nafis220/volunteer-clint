import React, { createContext, useState } from 'react';
import './App.css';
import Homepage from './HomePage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EventRegistered from './EventRegistered/EventRegistered';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './LogIn/logIn';
import VolunteerInfo from './Volunteer/VolunteerInfo';
import Admin from './Admin/Admin';
import AddEvent from './AddEvent/AddEvent';
export const EventContext = createContext() ;
export  const userContext = createContext();

function App() {
  const [work, setWork ] = useState([])
  const [loggedInUser,setLoggedInUser] = useState({})

  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <EventContext.Provider value = {[work,setWork]}>
    <Router>   
     <Switch> 
       <Route path="/home" > 
    <Homepage></Homepage>
       </Route>
       <Route path="/login">
              <Login />
            </Route>

          <Route path='/volunteersInfo'> 
            <VolunteerInfo></VolunteerInfo>
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/addEvent'> 
             <AddEvent></AddEvent> 
          </Route>
       <PrivateRoute path='/registeredEvent'> 
       <EventRegistered></EventRegistered>
       </PrivateRoute>
       <Route exact path='/'> 
         <Homepage></Homepage>
       </Route>
     </Switch>
      </Router>
      </EventContext.Provider>
      </userContext.Provider>
        );
}

export default App;
