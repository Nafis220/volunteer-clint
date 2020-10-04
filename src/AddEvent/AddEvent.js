import React, { useState } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    
    const [title, setTitle] = useState([])
    const newEvent = 
        {name:`${title}`,
    picture:'https://i.ibb.co/Tv4vvvz/food-Charity.png' }
  
    

    const handleEvent = () => {
      
        fetch('http://localhost:8080/newEvent',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newEvent),
        })
        .then(res=> res.json())
        .then(data=>console.log(data))
       }


 const { register, handleSubmit, watch, errors } = useForm();
 const onSubmit = data => console.log(data);

  
    return (
        <div className='row'>
            <div className="col-md-3 p-5"> 
            <img className="w-75" src="https://i.ibb.co/D8ND3bK/Group-1329.png" alt=""/>
               <p className="p-2"> <img src="" alt=""/> Volunteer Register List</p>
               <p>+ Add Event</p>
               <Link to='/'><button className='btn btn-primary'>Home</button></Link>
            </div>
            <div className="col-md-8 rounded shadow bg-white p-5 mt-5">
             
        < div class="form-group row">
            
            
            <div className="col-md-5">
        
            <label >Event Name</label>


            <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register({ required: true })} name="exampleRequired" class="form-control" onChange={event => setTitle(event.target.value)} placeholder="Event Name"/>
            {errors.exampleRequired && <span>This field is required</span>}
            
           
            <input onClick={() =>handleEvent()} type="submit" className='m-4 d-block btn btn-success'/>
            </form>

            <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
               
            </div>
       
            <div className="col-md-5"> 
            
            <div class="form-group">

                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
               </div>
               



               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid  container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label=" Date"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                  
                </Grid>
                
                  
            </MuiPickersUtilsProvider>

            


               </div> 


               
      
            </div>
            </div>
            </div>
        
    );
};

export default AddEvent;