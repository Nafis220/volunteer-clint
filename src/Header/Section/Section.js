import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../../App';

const Section = ({event}) => {
 const [work,setWork] = useContext(EventContext)
  const handleAddWork = (clickedEvent) =>{
    const  allEvent = [...work, clickedEvent];
  setWork(allEvent)
  }
 
    return (
        <div className="col-md-3" style={{display: 'inline-block'}}>
             
      
      
      <div className="bg-primary">
      <Link to="/registeredEvent" > 
     <img  onClick={() => handleAddWork(event)} className="w-100" src={event.picture} alt=""/>
    <p onClick={() => handleAddWork(event)} style={{fontSize:'25px'}} className="p-3 text-center text-light"> {event.name}</p>
     
      </Link>
  </div>

     
 
</div>
        
    );
};

export default Section;