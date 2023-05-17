import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { links } from './destinations'
import React from 'react'
import Logo from '../Images/logo.png' 
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'
import {CiMail, CiPaperplane} from "react-icons/ci";
// BsFillBrightnessLowFill, BsFillMoonFill, BsFillMoonFill 
import { BsTelephone} from "react-icons/bs"; 


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState (false);


    const scrollToSection = () => {
        const section = document.getElementById('bookingSection');
        section.scrollIntoView({ behavior: 'smooth' });
      };



  return (
    
    <nav>
        <div className="banner">
            <div className="call">
            <p> Call or Whatsapp us directly at:</p>
            <a  href="tel:+256772-525-312" target="_blank" rel='noreferrer'>
             <BsTelephone/> 
             +256772525312 
            </a>
            <a  href="tel:+256752-755-256" target="_blank" rel='noreferrer'>
            <BsTelephone/> 
            +256752755256
            </a>
            </div>
            <div className="email">
                <p>  Send us an email at: </p>
          
                <a  href='mailto: batekerezad@gmail.com' target="_blank" rel='noreferrer'>
            <CiMail/> 
            batekerezad@gmail.com
            </a>
            
            </div>
        </div>

        <div className="container nav__container">
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nzaino Travel Africa Logo"/>
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' :'hide__nav'}`}>
                {
                    links.map(({name, path}, index) =>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className = {({isActive}) => isActive ? 'active-nav' :
                                ''} onClick={() => setIsNavShowing 
                                    ( prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav-button" onClick={scrollToSection}>
                Book a trip<CiPaperplane/>
            </button>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing 
            ( prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> :   <RxHamburgerMenu/>
                } 
            </button>
        </div>
    </nav>
  )
}

export default Navbar