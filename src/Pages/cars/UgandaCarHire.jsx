import React from 'react'

import './car.css'
import {availablecars} from '../../Components/cars'
import ogimage from '../../Images/seoimages/og-car.jpg';
import twitterimage from '../../Images/seoimages/twitter-car.jpg';
import SEO from '../../Components/SE0';

import SlideImage4 from '../../Images/carz.jpg'
import FadeHeader from '../../UI/FadeHeader'
import CarCard from './CarCard'
import BackgroundCar from '../../Images/carback.jpg';

const Car = () => {
  const seoProps = {
    title: "Car Hiring | Nzaino Travel",
    seodescription: "Are you need of a car for a few days, or even weeks?, Contact Nzaino Travel Africa Limited today for all your travel needs. Our friendly team is ready to assist you with trip bookings, inquiries, and more. Get in touch now!",
    ogimage: ogimage,
    twitterimage: twitterimage,
    keywords: 'Affordable travel packages, Cheap African tours, Zanzibar tour, Ugandan tours, rwandan tours, African tours'
  };
  return (
    <div>
       <SEO {...seoProps}/>


      <div className="main-image carhead">
        <img src={SlideImage4} alt="" />
      </div>

      <div className="left">
                        <FadeHeader className="whoHeader"
                        fadingtitle = "Car Hiring"
                        cleartitle = "Nzaino Cars"
                        /> 
                        <p className="paragraphs carintro">
                         Perhaps you are looking for a car to hire for your own travel🚗,
                         at Nzaino we offer a catalogue of cars ranging from 
                         8 seaters to a more cozy 4 seater. You have the option of 
                         having a designated driver or taking yourself on an adventure.  
                         <span className="highlight"> Click Book Car below & fill in the form</span>,  
                        or contact us directly for immediate response.
                        </p>
      </div>

      <div className="carCards">
        {availablecars.map((car) => (
               <CarCard
               key={car.id}
               {...car}
               />
        ))}
        <img
            src={BackgroundCar}
            className="BackBlog packageback serveback " //CarBack
            alt="East African Road."
          />
      </div>

      




    </div>
  )
}

export default Car