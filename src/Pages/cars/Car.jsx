import React from 'react'
import BookingForm from '../../Components/Booking'

import './car.css'
import {availablecars} from '../../Components/cars'

import SlideImage4 from '../../Images/Zanzibarfader.jpg'
import FadeHeader from '../../UI/FadeHeader'
import CarCard from './CarCard'


const Car = () => {

  return (
    <div>
      <div className="main-image">
        <img src={SlideImage4} alt="" />
      </div>

      <div className="left">
                        <FadeHeader className="whoHeader"
                        fadingtitle = "Car Hiring"
                        cleartitle = "Nzaino Cars"
                        /> 
                        <p className="paragraphs">
                         If you are looking for a car to take you on your own travel,
                         at Nzaino we avail to you a catalogue of cars ranging from
                         8 seaters to a more cozy 4 seater. You have the option of 
                         having a designated driver or taking yourself on an adevnture. 
                         All you have to do is fill in the form on the book now sheet, 
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
       
      </div>

      




    <BookingForm/>
    </div>
  )
}

export default Car