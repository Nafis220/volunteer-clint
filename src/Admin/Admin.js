import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSection from './AdminSection/AdminSection';

const Admin = () => {
    const [volunteer, setVolunteer] = useState([])
    useEffect(()=>{
        fetch('https://agile-bayou-54471.herokuapp.com/volunteerAllEvents')
        .then(res => res.json())
        .then(data => setVolunteer(data))
    },[])
    return (
        
           <div className="row"> 
            <div className="col-md-3 p-5"> 
               <img className="w-75" src="https://i.ibb.co/D8ND3bK/Group-1329.png" alt=""/>
               <p className="p-2"> <img src="" alt=""/> Volunteer Register List</p>
               <Link to='/addEvent'> 
               <p>+ Add Event</p>
               </Link>
            </div>
            <div className="rounded shadow bg-white p-5 mt-5">
               
             {volunteer.map   ( volunteer =><AdminSection volunteer={volunteer} ></AdminSection>)}
              </div>
           </div>
     
    );
};

export default Admin;