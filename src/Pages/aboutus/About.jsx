import React from 'react'
import './about.css'

import service from '../../Images/service1.png';
import service2 from '../../Images/guides2.png';
import service3 from '../../Images/tripplan.png';
import service4 from '../../Images/hotel3.png';

import service5 from '../../Images/passport.png';
import service6 from '../../Images/crosssborder.png';

import staff from '../../Images/staff.png';
import airportpick from '../../Images/airportpick.png';
import local from '../../Images/lk.png';


import Backgroundserve from '../../Images/backgroundservices.jpg';
//
import FadeHeader from '../../UI/FadeHeader';


import BookingForm from '../../Components/Booking';

import HomeReviewSlide from '../../Components/HomeReviewSlide';
import AboutSectionsI from './AboutSectionsI';




const About = () => {
  
  


  return (
    <section className="aboutPage">
      <AboutSectionsI/>

      <div className="secondpart servicessection" id='Services'>
          <div className="who">
                    <div className="left">
                          <FadeHeader className="whoHeader"
                          fadingtitle = "Services"
                          cleartitle = "What Nzaino Offers"
                          />
                        <p className="whotext paragraphs">
                        At Nzaino, we understand that comfort and security
                         are essential for a memorable journey. 
                         That’s why we provide services that make it easy for you to
                          explore the rich and diverse cultures of Africa. Whether you want
                           to experience the wildlife, the landscapes, or the people,
                            we are here to help you discover the beauty of this continent.
                        </p>
                    </div>
          </div>

          <div className="servicegrid">
              <div className="serve">
                <img src={service} alt="" />
                <p className="service">Car-Rentals and Chauffering</p>
              </div>
              <div className="serve">
                <img src={service3} alt="" />
                <p className="service">Trip Planning</p>
              </div>
              
              <div className="serve">
                <img src={service2} alt="" />
                <p className="service">Tour Guides</p>
              </div>
              <div className="serve">
                <img src={service4} alt="" />
                <p className="service">Accommodation Booking</p>
              </div>
              <div className="serve">
                <img src={service5} alt="" />
                <p className="service">Assistance In Document Processing</p>
              </div>
              

          </div>


          <button className="nav-button contact">Contact us  </button>

          <img src={Backgroundserve} className="BackBlog packageback serveback " alt="" />
      </div>

      <HomeReviewSlide/>

      <div className="secondpart servicessection missionsec" >
          <div className="who">
                    <div className="left">
                          <FadeHeader className="whoHeader"
                          fadingtitle = "Our Mission"
                          cleartitle = "Why You Should Travel With Nzaino"
                          />
                        <p className="whotext">
                        We are passionate about connecting
                         you with the best of East Africa and beyond. Whether
                          you are looking for adventure, romance, business, or culture,
                           we have the perfect travel package for you. We work with
                            trusted partners in Europe and the United States to ensure 
                            your safety and satisfaction. Join us and discover
                             the wonders of this amazing region.
                        </p>
                    </div>
          </div>

          <div className="servicegrid">
              
              <div className="serve">
                <img src={local} alt="" />
                <p className="service">Local Knowledge</p>
              </div>
              <div className="serve">
                <img src={airportpick} alt="" />
                <p className="service">Airport Transfer &amp; Chauffering</p>
              </div>
             
              <div className="serve">
                <img src={staff} alt="" />
                <p className="service">Experienced &amp; Professional Staff</p>
              </div>

              <div className="serve">
                <img src={service4} alt="" />
                <p className="service">Recommended Accommodation</p>
              </div>
              <div className="serve">
                <img src={service} alt="" />
                <p className="service">Super Vehicles For Comfort &amp; Safety</p>
              </div>
              <div className="serve">
                <img src={service6} alt="" />
                <p className="service">Cross-Border Experience</p>
              </div>

          </div>
      </div>


      


      <BookingForm/>

    </section>
  )
}

export default About