import React, { useState } from 'react';
import './PackagesCard.css';
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { CiCalendarDate, CiClock1 } from "react-icons/ci";

function PackagesCard(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleSwipeLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.images.length - 1 : prevIndex - 1
    );
  };

  const handleSwipeRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollToSection = () => {
    const section = document.getElementById('bookingSection');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = props.highlights.map((highlight, index) => (
    <li key={index}>{highlight}</li>
  ));

    return (
        <div className='packagesCard' key={props.id}>
                <div className="imageCaption">
                      {/**  <img src={props.image} alt="destination" className='packagesImage' />*/}
                      <img
                        src={props.images[currentImageIndex]}
                        alt={props.caption}
                        className='packagesImage'
                      />
                      <button className="prevButton" onClick={handleSwipeLeft}><TiArrowLeft /></button>
                      <button className="nextButton" onClick={handleSwipeRight}><TiArrowRight /></button>
                      <p className="caption">{props.caption}</p>
                </div>

                <div className="packagesText">
                    <h2 className="packageTitle">{props.title}</h2>
                    <h4 className="themeActivities">{props.activities}</h4>

                <div className="middlecolumns">
                    <div className="pricePeople">
                        <h3 className="packagePrice">{props.price}</h3>
                        <p className="packagePeople">{props.people}</p>
                        <h5 className="daysNights"><CiClock1/>{props.duration}</h5>
                        <h6 className="availability"><CiCalendarDate/>{props.availability}</h6>
                    </div>

                    <div className="miniItenary">
                        <h4 className="highlights">Inclusive</h4>
                        <ul>{highlights}</ul>
                    </div> 
                </div>

                

                </div>

                <button className="bookpackage" onClick={scrollToSection}>Book Trip <TiArrowRight/> </button>
        </div>
    );
  }
  

export default PackagesCard