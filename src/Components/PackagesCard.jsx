import React from 'react'
import './PackagesCard.css'
import { TiArrowRight } from "react-icons/ti";
import { CiCalendarDate, CiClock1 } from "react-icons/ci";


function PackagesCard(props) {
    const scrollToSection = (caption) => {
        const section = document.getElementById('bookingSection');
        section.scrollIntoView({ behavior: 'smooth' });

      };
    

      const highlights = props.highlights.map((highlight, index) => (
        <li key={index}>{highlight}</li>
    ));
  
    return (
        <div className='packagesCard' key={props.id}>
            <div className="imageCaption">
                <img src={props.image} alt="destination" className='packagesImage' />
                <p className="caption">{props.caption}</p>
            </div>


             <div className="packagesText">
                <h2 className="packageTitle">{props.title}</h2>
                <h4 className="themeActivities">{props.activities}</h4>

                <div className="middlecolumns">
                    <div className="pricePeople">
                        <h1 className="packagePrice">{props.price}</h1>
                        <p className="packagePeople">{props.people}</p>
                        <h5 className="daysNights"><CiClock1/>{props.duration}</h5>
                        <h6 className="availability"><CiCalendarDate/>{props.availability}</h6>
                    </div>

                    <div className="miniItenary">
                        <h5 className="highlights">Inclusive</h5>
                        <ul>{highlights}</ul>
                    </div> 
                </div>

                

             </div>

             <button className="bookpackage" onClick={scrollToSection}>Book Trip <TiArrowRight/> </button>

        </div>
    );
  }
  

export default PackagesCard