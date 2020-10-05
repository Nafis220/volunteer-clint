import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Section from '../Header/Section/Section';
import NewEventAdded from '../NewEventAdded/NewEventAdded';


const Homepage = () => {
    const [event, SetEvent] = useState([])
    const [newEvent, setNewEvent] = useState([])
    useEffect(() => {
        fetch('https://agile-bayou-54471.herokuapp.com/eventsCollection')
            .then(response => response.json())
            .then(data => {
                SetEvent(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://agile-bayou-54471.herokuapp.com/newEvents')
            .then(response => response.json())
            .then(data => {
                setNewEvent(data)
            })
    }, [])

    return (
        <div>

            <Header></Header>
            <div className="row">{
                event.map(event => <Section event={event} key={event.id}></Section>)
            }
            </div>
            <div className="row">

                {newEvent.map(newEvent => <NewEventAdded newEvent={newEvent}></NewEventAdded>)}
            </div>



        </div>
    );
};

export default Homepage;