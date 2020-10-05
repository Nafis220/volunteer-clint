import React, { useContext, useState } from 'react';
import { EventContext, userContext } from '../App';
import css from './EventRegistered.css' ;
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
const EventRegistered = () => {
    const [work,setWork] = useContext(EventContext)
	const [loggedInUser,setLoggedInUser] = useContext(userContext);
	
	
	const [selectedDate, setSelectedDate] = useState({
        givenDate : new Date(),
        
	});
	const handleCheckInDate = (date) => {
        const newDate = {...selectedDate};
        newDate.givenDate = date ;
        setSelectedDate(newDate)
    };

    const handleEvent = () => {
	 const allInfoOfVolunteer = {...loggedInUser, ...work, ...selectedDate}
	 fetch('https://agile-bayou-54471.herokuapp.com/volunteerPersonalInfo',{
		 method: 'POST',
		 headers: {'Content-Type': 'application/json'},
		 body: JSON.stringify(allInfoOfVolunteer),
	 })
	 .then(res=> res.json())
     .then(data=>console.log(data))
    }
   
    return (
        <div className='body'>
            <img className="w-25  mx-auto d-block" src='https://i.ibb.co/D8ND3bK/Group-1329.png' alt=""/>
       <div className="main-w3layouts wrapper">
		<h1 className="h1">Register As A Proud Volunteer</h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form action="#" method="post">
                    <label className="p-2 text-white">Full Name</label>
					<input className="input text" value={loggedInUser.displayName} type="text" name="Username" placeholder="Username" required=""/>
                    <label className="p-2 text-white">User Name or Email</label>
					<input className="input text email" value={loggedInUser.email} type="email" name="email" placeholder="Email" required=""/>
                    <div className="form-group ">

					<MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid  container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label=" Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                  
                </Grid>
                
                  
            </MuiPickersUtilsProvider>

                    </div>
                    <label className="p-2 text-white">Description</label>
					<input className="input text w3lpass" type="text" name="text" placeholder="text " required=""/>
                    <label className="p-2 text-white">Organize books at the library.</label>
                    <input className="input text w3lpass" value={work[0].name} type="text" name="text"/>  
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required=""/>
							<span>I Agree To The Terms & Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<Link to="/volunteersInfo"><input onClick={handleEvent} className="input" type="submit" value="Register"/></Link>
   
				</form>
				
			</div>
			
		</div>
		
	
	</div>
        </div>
    );
};

export default EventRegistered;