import React, { useEffect } from 'react';

const AdminSection = ({volunteer}) => {
    const deleteEvent = (email) => (event) =>  {

        const selected = event.target.parentNode ;
          fetch(`https://agile-bayou-54471.herokuapp.com/deleteMember/${email}`,{
              method: 'DELETE',
          })
          .then(res => res.json())
          .then(data =>{
              if(data)
              {selected.style.display='none'}
          })
        }
    return (
  
        <ul class="list-group list-group-horizontal-xl p-3">
            <li class="list-group-item">{volunteer.displayName}</li>
    <li class="list-group-item">{volunteer.email}</li>
    <li class="list-group-item">{volunteer[0].name}</li>
            <li class="list-group-item">{volunteer.givenDate}</li>
            <button onClick={deleteEvent(volunteer.email)}  className='btn btn-danger ml-2 mb-2'>Delete</button>
            
        </ul>
        
      
             
            
      
        
    );
};

export default AdminSection;