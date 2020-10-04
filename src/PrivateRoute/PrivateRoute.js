import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { EventContext, userContext } from '../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const [work,setWork] = useContext(EventContext)
    
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email && work[0] ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    
       
    );
};

export default PrivateRoute;