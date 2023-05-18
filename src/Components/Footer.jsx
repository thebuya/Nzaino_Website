import React, { useState, useEffect } from 'react';
//import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../Images/logo.png'

import { TfiInstagram, TfiFacebook} from "react-icons/tfi";
import { FaWhatsapp} from "react-icons/fa";
import { TiArrowRight , TiSocialTwitter } from "react-icons/ti";
import {CiMail} from "react-icons/ci";
import { BsGeoAltFill, BsTelephone,  BsGeo, BsSignpost } from "react-icons/bs";
//import { BsPersonCircle} from "react-icons/bs";
import './footer.css'

const Footer = () => {
    const [showSwipeUp, setShowSwipeUp] = useState(false);
  const [swipeUpContent, setSwipeUpContent] = useState('');
  
  useEffect(() => {
    // Function to hide the swipe-up message after 3 seconds
    const timer = setTimeout(() => {
      setShowSwipeUp(false);
    }, 3000);
    
    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [showSwipeUp]);
  
  // Function to handle NavLink click and display the swipe-up message
  const handleNavLinkClick = (content) => {
    setSwipeUpContent(content);
    setShowSwipeUp(true);
  
    setTimeout(() => {
      setShowSwipeUp(false);
    }, 3000); // Adjust the duration (in milliseconds) to your desired value
  };







  return (
    <footer>
        <div className="links_container">
            <div className="link_container location">
                <Link to="/" className='logo footer-logo'>
                    <img src={Logo} alt="Nzaino Travel Africa Logo"/>
                </Link>
                <p>
                    <BsGeoAltFill/>Behind Nakawa PostOffice <br className='off-phone' /> 
                    <BsGeo className='off-phone'/> Next to MUBS. <br />
                    < BsSignpost/> P.O Box 6365, Kampala (U)
                </p>
            </div>

            <div className="link_container contacts">
                <h2>Our Contacts:</h2>
                <div className="footer-icons">
                <ul>
                    <li><a  rel='noreferrer' href="https://wa.me/256772525312" target="_blank" >
                    <FaWhatsapp/>
                        </a>
                    </li>
                    <li><a  rel='noreferrer' href="https://wa.me/256704530502" target="_blank" >
                    <TfiFacebook/>
                        </a>
                    </li>
                    <li> <a  rel='noreferrer' href="https://twitter.com" target="_blank" >
                    <TiSocialTwitter/>
                        </a></li>
                    <li><a  rel='noreferrer' target="_blank" href="https://www.instagram.com" >
                    <TfiInstagram/>
                        </a>
                    </li>
                </ul>
                </div>
                <ul>
                    <li><a  href="tel:+256772-525-312" target="_blank" rel='noreferrer'>
             <BsTelephone/> 
             Call +256772525312 
                    </a></li>
                            <li><a  href="tel:+256752-755-256" target="_blank" rel='noreferrer'>
                            <BsTelephone/> 
                    Call +256752755256
                    </a></li>
                    <li> <a  href='mailto: batekerezad@gmail.com' target="_blank" rel='noreferrer'>
                    <CiMail/> 
                    batekerezad@gmail.com
                    </a></li>
                </ul>
            </div>

            

            
            <div className="link_container quick-links">
            <h2>Quick Links</h2>
                <ul>
                    <li><NavLink to="/aboutus" onClick={() => handleNavLinkClick('about us info.')}> <TiArrowRight/>About Nzaino</NavLink> </li>  
                    <li> <NavLink to="/#Testimonials"onClick={() => handleNavLinkClick('our client reviews.')}><TiArrowRight/>Client Testimonials </NavLink></li>
                    <li> <NavLink to="/packages#FAQS"onClick={() => handleNavLinkClick('frequently asked questions.')}><TiArrowRight/>Client Questions</NavLink></li>
                    <li> <NavLink to="/aboutus#Services"onClick={() => handleNavLinkClick('our services.')}><TiArrowRight/>Our Services </NavLink></li>
                    <li><NavLink to="/packages"onClick={() => handleNavLinkClick('packages on offer.')}> <TiArrowRight/>Our Travel Packages </NavLink></li>
                    <li> <NavLink to="/destinations"onClick={() => handleNavLinkClick('the popular destinations.')}><TiArrowRight/>Popular Destinations</NavLink>  </li>
                    
                    
                </ul>
            </div>

            <div className="link_container resources">
            <h2>Resources</h2>
                <ul>
                    <li> <NavLink to="/blog" onClick={() => handleNavLinkClick('travel blogs')}><TiArrowRight/>Travel Blog</NavLink></li>
                    <li> <a href='https://opencorporates.com/companies/ug/80020002502844' target="_blank" rel='noreferrer'> <TiArrowRight />Registration Status </a> </li>
                    
                    <li> <NavLink to="/aboutus" onClick={() => handleNavLinkClick('our terms and conditions.')}><TiArrowRight/>Terms and Conditions</NavLink></li>
                    <li> <NavLink to="/aboutus" onClick={() => handleNavLinkClick('insurance policy.')}><TiArrowRight/>Insurance Policy </NavLink></li>
                    <li> <NavLink to="/aboutus" onClick={() => handleNavLinkClick('job opportunities')}><TiArrowRight/>Job opportunities </NavLink></li>
                </ul>
            </div>

            
        </div>
        <hr />
        <div className="footnotes_container">
            <p className='footer-Nzaino'>Nzaino Travel Africa Limited © 2023</p>
            <p className="footer-architect">Site-Architect: <span>
                <a href="https://www.artbybuya.com/about.html"
                target="_blank" rel='noreferrer'
                > Buya
                </a>
                </span>
                </p>
        </div>
        {showSwipeUp && (
            <div className="swipe-up-message">
            <p>{`Swipe up to view ${swipeUpContent}`}</p>
            </div>
        )}
    </footer>
  )
}
export default Footer
