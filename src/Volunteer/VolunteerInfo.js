import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../App';
import InfoSection from '../InfoSection/InfoSection';

const VolunteerInfo = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const [info, setInfo] = useState([])
    useEffect(()=>{
        fetch(`https://agile-bayou-54471.herokuapp.com/volunteerEvents?email=` +loggedInUser.email)
       .then(res=> res.json())
       .then(data => setInfo(data))
    },[])
   
    return (
        <div>


<nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img className="w-25" src='https://i.ibb.co/D8ND3bK/Group-1329.png' alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link" href="#">Donation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Blog</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">{loggedInUser.displayName}</a>
            </li>
          </ul>
        </div>
      </nav>



     <div style={{padding:'5rem'}}>
       <h2 className="text-info">Don't Showing your Info ??</h2>
     <Link  to='/'><input className="d-flex justify-content-center btn btn-info" type="button" value="Click Here" /></Link>
     <div className="row d-flex justify-content-between">
    {
        info.map(info =><InfoSection info={info}></InfoSection> )
    }
    </div>
     </div>


        </div>
    );
};

export default VolunteerInfo;