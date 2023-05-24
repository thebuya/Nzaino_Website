import React, { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {inputs} from '../../Components/cars'
import Carinput from './Carinput'

import { BsPersonCircle, BsFillFuelPumpFill} from "react-icons/bs";
import { TbSettingsAutomation, TbWindmill } from "react-icons/tb";
import { GiPathDistance } from "react-icons/gi";
// TbSettingsAutomation

function CarCard(props)  {


const[values, setValues] = useState({
    carname: props.carname, 
    driversName: "",
    email:"",
    phonenumber: "",
    pickupdate: new Date().toISOString().split('T')[0],
    returndate: '',
    withdriver: false, // Updated to include the driver property
    
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  
  const onChange = (e) => {
    const { name, value, type} = e.target;
    const newValue = type === "checkbox" ? !values[name] : value;
  
    setValues({ ...values, [name]: newValue });
  };
  
  console.log(values);







const [isVisible, setIsVisible] = useState(false)

const handleShowContent = () =>{
    setIsVisible(true);
}
const handleHideContent = () =>{
    setIsVisible(false);
}










  return (
   <div className="carCard" key={props.id}>
   
        <div className="carShow">
            <img src={props.carimage} alt="Nzaino Car"/>
            <hr className='divider'/>
            <div className="infoPart">
                    <div className="infographs">
                        <div className="seats"><BsPersonCircle/> {props.carpeople}</div>
                        <div className="mileage"><GiPathDistance/>{props.mileage}</div>
                        <div className="system"><TbSettingsAutomation/>{props.system}</div>
                        <div className="AC"><TbWindmill/>{props.conditioning}</div>
                        <div className="Fuel"><BsFillFuelPumpFill/>{props.fuelcapacity}</div>
                    </div>

                    <div className="mainInfo">
                        <div className="head">
                        <h3>{props.carname}</h3>
                            <p>{props.availability}</p>
                        </div>

                        <div className="pricingInfo">
                            <ul>
                                <li className="good">{props.highlight1}</li>
                                <li className="good">{props.highlight2}</li>
                                <li className="good">{props.highlight3}</li>
                                <li className="good">{props.highlight4}</li>
                                <li className="bad">{props.badhighlight1}</li>
                            </ul>

                            <div className="carpricing">
                                <h4 className="percentageOff">{props.percentageoff}</h4>
                                <p className='previousPrice'>{props.previousprice}</p>
                                <h3 className="price">{props.price}</h3>
                                <p className="rate">{props.rate}</p>
                            </div>
                        </div>
                    </div>
                    {!isVisible && (
                    <button className='bookCar' onClick={handleShowContent }>Book Car</button>
                    )}
            </div>

        </div> 
   

        {isVisible && (
                <form onSubmit={handleSubmit} className="bookingForm carForm">
                <MdOutlineClose onClick={ handleHideContent}/>
                <h3>Drivers Details</h3>
                        {inputs.map((input) => (
                            <Carinput 
                                key={input.id} 
                                {...input} 
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}

                        <button>Complete Booking</button>
                </form>
        )}

    </div>
  )
}

export default CarCard