import React from 'react'
import { TiArrowRight } from "react-icons/ti";
//import {Link} from 'react-router-dom'
import './placescard.css'


function PlacesCard(props)  {
    const scrollToSection = () => {
        const section = document.getElementById('bookingSection');
        section.scrollIntoView({ behavior: 'smooth' });
      };

    const activities = props.activities.map((activity, index) => (
        <li key={index} className='placeActivity'>{activity}</li>
    ));

  return (
    <div className='cardWButton' key={props.id}>
            <div className="placesCard">
                <img src={props.image} className="placeImg" alt={props.name}/>
                <div className="placeInformation">
                    <h3 className="placeName">{props.name}</h3>
                    <ul className='placeActivities'> {activities} </ul>
                </div>
            </div>

            <div className="buttons">
                <button onClick={scrollToSection} aria-label={`Book a Trip to ${props.name}`} className="bookAPlace"> Book Trip <TiArrowRight/>  </button>
            </div>
    </div>
  )
}

export default PlacesCard