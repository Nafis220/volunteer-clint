import React from 'react';

const InfoSection = ({info}) => {
   
    
  const deleteEvent = (item) => (event) =>  {

const selected = event.target.parentNode ;
  fetch(`http://localhost:8080/delete/${item}`,{
      method: 'DELETE',
  })
  .then(res => res.json())
  .then(data =>{
      if(data)
      {selected.style.display='none'}
  })
   
  }


    return (
       
        
        <div className=' col-md-5 rounded shadow bg-white m-5 p-5'>
             
              <img className="w-50" src={info[0].picture} alt=""/>
                  {info[0].name ? <h3>{info[0].name}</h3> : <h3 classNaame='text-danger'>Action Failed</h3> }
                 <p>{(new Date(info.givenDate).toDateString('dd/MM/yyyy')) }</p>
                <button onClick={deleteEvent(info._id)} className="btn btn-danger">Cancel</button>
                  </div>
            
        
    );
};

export default InfoSection;