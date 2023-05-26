import React from 'react'


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
      <div className="main-image carhead">
        <img src={SlideImage4} alt="" />
      </div>

      <div className="left">
                        <FadeHeader className="whoHeader"
                        fadingtitle = "Car Hiring"
                        cleartitle = "Nzaino Cars"
                        /> 
                        <p className="paragraphs">
                         If you are looking for a car to take you on your own travel 🚗,
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
         <img src={BackgroundCar} className="CarBack" alt="" />
      </div>

      




    </div>
  )
}

export default Car