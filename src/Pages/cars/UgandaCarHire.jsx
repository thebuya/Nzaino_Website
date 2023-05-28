import React from 'react'
import { Helmet } from 'react-helmet';

import './car.css'
import {availablecars} from '../../Components/cars'

import SlideImage4 from '../../Images/carz.jpg'
import FadeHeader from '../../UI/FadeHeader'
import CarCard from './CarCard'
import BackgroundCar from '../../Images/carback.jpg';
//import BackgroundCar from '../../Images/carbehing2.jpg';
//

const Car = () => {

  return (
    <div>
       <Helmet>
            <title>Car Hiring | Nzaino Travel</title>
            <meta name="description" content="Are you need of a car for a few days, or even weeks?, Contact Nzaino Travel Africa Limited today for all your travel needs. Our friendly team is ready to assist you with trip bookings, inquiries, and more. Get in touch now!" />
            <meta property="og:title" content="Car Hiring | Nzaino Travel" />
            <meta property="og:description" content="Are you need of a car for a few days, or even weeks?, Contact Nzaino Travel Africa Limited today for all your travel needs. Our friendly team is ready to assist you with trip bookings, inquiries, and more. Get in touch now!" />
            <meta property="og:image" content={SlideImage4} />
            {/* Add other meta tags if needed */}
      </Helmet>


      <div className="main-image carhead">
        <img src={SlideImage4} alt="" />
      </div>

      <div className="left">
                        <FadeHeader className="whoHeader"
                        fadingtitle = "Car Hiring"
                        cleartitle = "Nzaino Cars"
                        /> 
                        <p className="paragraphs carintro">
                         If you are looking for a car to hire for your own travel.🚗,
                         At Nzaino we offer a catalogue of cars ranging from
                         8 seaters to a more cozy 4 seater. You have the option of 
                         having a designated driver or taking yourself on an adevnture.  
                         <span className="highlight"> Click Book Car & fill in the form</span>,  
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
         <img src={BackgroundCar} className="CarBack" alt="East African Road." />
      </div>

      




    </div>
  )
}

export default Car