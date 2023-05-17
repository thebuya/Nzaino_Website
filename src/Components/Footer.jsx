import React from 'react'
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
                    <li><NavLink to="/aboutus"> <TiArrowRight/>About Nzaino</NavLink> </li>  
                    <li> <NavLink to="/#Testimonials"><TiArrowRight/>Client Testimonials </NavLink></li>
                    <li> <NavLink to="/packages#FAQS"><TiArrowRight/>Client Questions</NavLink></li>
                    <li> <NavLink to="/aboutus#Services"><TiArrowRight/>Our Services </NavLink></li>
                    <li><NavLink to="/packages"> <TiArrowRight/>Our Travel Packages </NavLink></li>
                    <li> <NavLink to="/destinations"><TiArrowRight/>Popular Destinations</NavLink>  </li>
                    
                    
                </ul>
            </div>

            <div className="link_container resources">
            <h2>Resources</h2>
                <ul>
                    <li> <NavLink to="/blog"><TiArrowRight/>Travel Blog</NavLink></li>
                    <li> <a href='https://opencorporates.com/companies/ug/80020002502844' target="_blank" rel='noreferrer'> <TiArrowRight />Registration Status </a> </li>
                    
                    <li> <NavLink to="/aboutus"><TiArrowRight/>Terms and Conditions</NavLink></li>
                    <li> <NavLink to="/aboutus"><TiArrowRight/>Insurance Policy </NavLink></li>
                    <li> <NavLink to="/aboutus"><TiArrowRight/>Job opportunities </NavLink></li>
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
    </footer>
  )
}

export default Footer