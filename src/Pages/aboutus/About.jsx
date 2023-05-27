import React,{useEffect} from 'react'
//import { Helmet } from 'react-helmet';
import { Helmet } from 'react-helmet';
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



import HomeReviewSlide from '../../Components/HomeReviewSlide';
import AboutSectionsI from './AboutSectionsI';




const About = () => {
  useEffect(() => {
    document.title = 'About Us | Nzaino - Trusted Tours and Travel Agency in East Africa.';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Learn About Nzaino Travels- Your Trusted guide to exploring East Africa. We offer a wide range of comprehensive services to enhance your travel experience. From reliable car rentals and expert trip planning to knowledgeable tour guides, seamless accommodation booking, and efficient document processing assistance, we have got you covered. Explore the beauty and diversity of East Africa with Nzaino as your trusted companion.');
    document.querySelector('meta[name="twitter:description]').setAttribute('content', 'Learn About Nzaino Travels- Your Trusted guide to exploring East Africa. We offer a wide range of comprehensive services to enhance your travel experience. From reliable car rentals and expert trip planning to knowledgeable tour guides, seamless accommodation booking, and efficient document processing assistance, we have got you covered. Explore the beauty and diversity of East Africa with Nzaino as your trusted companion.');
    document.querySelector('meta[property="og:description]').setAttribute('content', 'Learn About Nzaino Travels- Your Trusted guide to exploring East Africa. We offer a wide range of comprehensive services to enhance your travel experience. From reliable car rentals and expert trip planning to knowledgeable tour guides, seamless accommodation booking, and efficient document processing assistance, we have got you covered. Explore the beauty and diversity of East Africa with Nzaino as your trusted companion.');
    document.querySelector('meta[property="og:image"]').setAttribute('content', service2);
    document.querySelector('meta[name="twitter:image"]').setAttribute('content', service2);
  // You can also modify other meta tags or perform other SEO-related operations here if necessary
  }, []);
  


  return (
    <section className="aboutPage">
        <Helmet>
          <meta property="og:site_name" content="Nzaino Travel Africa" />
          <meta property="og:description" content="Learn about Nzaino, a leading tours and travel agency dedicated to showcasing the wonders of East Africa. Our experienced team is passionate about creating unforgettable adventures and connecting travelers with the best destinations." />
   
        
    </Helmet>
      <AboutSectionsI/>

      <div className="secondpart servicessection" id='Services'>
          <div className="who">
                    <div className="left">
                          <FadeHeader className="whoHeader"
                          fadingtitle = "Services"
                          cleartitle = "What Nzaino Offers"
                          />
                        <p className="whotext paragraphs">
                         
                         At Nzaino, we provide services that make it easy for you to
                          explore the rich and diverse cultures of Africa. Whether you want
                           to experience the wildlife, the landscapes, the people, or you just want to get a ride,
                            we are here to help you discover the beauty of this continent with our catalogue of services
                            shown below. We understand that comfort and security
                         are essential for a memorable journey. Contact us today and start your African adventure.
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


          {/** <button className="nav-button contact">Contact us  </button> */}

          <img src={Backgroundserve} className="BackBlog packageback serveback " alt="East African Horizon" />
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
                        We are passionate about helping you travel within East Africa and beyond. Whether
                          the tour you are looking for is for adventure, romance, business, or culture,
                           we have the perfect tours and travel package for you. We work with
                            trusted partners all over East Africa to ensure 
                            your safety and satisfaction. Join us and experience
                             the Wonders of East Africa.
                        </p>
                    </div>
          </div>

          <div className="servicegrid">
              
              <div className="serve">
                <img src={local} alt="East African Local Knowledge." />
                <p className="service">Local Knowledge</p>
              </div>
              <div className="serve">
                <img src={airportpick} alt="Airport Transfers and Chauffering." />
                <p className="service">Airport Transfer &amp; Chauffering</p>
              </div>
             
              <div className="serve">
                <img src={staff} alt="Experienced and Professional Staff." />
                <p className="service">Experienced &amp; Professional Staff</p>
              </div>

              <div className="serve">
                <img src={service4} alt="Recommend Accommodation." />
                <p className="service">Recommended Accommodation</p>
              </div>
              <div className="serve">
                <img src={service} alt="Super Vehicles For Comfort and Safety." />
                <p className="service">Super Vehicles For Comfort &amp; Safety</p>
              </div>
              <div className="serve">
                <img src={service6} alt="Cross Border Experience." />
                <p className="service">Cross-Border Experience</p>
              </div>

          </div>
      </div>


    </section>
   
  )
}

export default About