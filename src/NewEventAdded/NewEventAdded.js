import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../App';

const NewEventAdded = ({newEvent}) => {
    const [work,setWork] = useContext(EventContext)
  const handleAddWork = (clickedEvent) =>{
    const  allEvent = [...work, clickedEvent];
  setWork(allEvent)
  }
    return (
        
            <div className="col-md-3" style={{display: 'inline-block'}}>
             
      
      
             <div className="bg-primary">
             <Link to="/registeredEvent" > 
            <img  onClick={() => handleAddWork(newEvent)} className="w-100" src={newEvent.picture} alt=""/>
           <p onClick={() => handleAddWork(newEvent)} style={{fontSize:'25px'}} className="p-3 text-center text-light"> {newEvent.name}</p>
            
             </Link>
         </div>
       
            
        
       </div>
       
    );
};

export default NewEventAdded;