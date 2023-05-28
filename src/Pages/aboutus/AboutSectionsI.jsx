import React, { useEffect, useState } from 'react'
import './about.css'
import headerimage from '../../Images/discoveruganda.jpg';

import who from '../../Images/van.jpg';
//import { AiTwotoneCustomerService } from "react-icons/ai";

import FadingHeader from '../../Components/FadingHeader'
import FadeHeader from '../../UI/FadeHeader';


import logo from '../../Images/logos/logo.png'
import logo2 from '../../Images/logos/logoutb.png'
import logo3 from '../../Images/logos/logoregistration.png'
import logo4 from '../../Images/logos/logotourismmin.png'
import logo5 from '../../Images/logos/logoutb.png'
import logo6 from '../../Images/logos/logoregistration.png'
import logo7 from '../../Images/logos/logotourismmin.png'
import TeamSlide from '../../Components/TeamSlide';



const AboutSectionsI = () => {

    const description = 'Beautiful Kisoro, Western Uganda';

  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => {
      setAnimationPaused(true);
    };

    const handleMouseOut = () => {
      setAnimationPaused(false);
    };

    const logosWrapper = document.querySelector('.logoscroll');
    logosWrapper.addEventListener('mouseover', handleMouseOver);
    logosWrapper.addEventListener('mouseout', handleMouseOut);

    return () => {
      logosWrapper.removeEventListener('mouseover', handleMouseOver);
      logosWrapper.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);


  return (
    <div>
        <div className="firstpart">
            <div className="behind">
                <div className="headerWords">
                    <FadingHeader
                    image={headerimage}
                    description={description}/>
                    <p className="mainwording">
                    Founded on over 
                    <span> 4 Decades </span>
                    worth travelling experiences.
                    </p>
                </div>

                <div className="logos">
       
                       <div className="logoscroll marquee--inner" style={{ animationPlayState: animationPaused ? 'paused' : 'running' }}>
                            <span>
                                <img src={logo} alt="" />
                                <img src={logo2} alt="" />
                                <img src={logo3} alt="" />
                                <img src={logo4} alt="" />
                                <img src={logo5} alt="" />
                                <img src={logo6} alt="" />
                                <img src={logo7} alt="" />
                            </span>
                            <span>
                                <img src={logo3} alt="" />
                                <img src={logo2} alt="" />
                                <img src={logo3} alt="" />
                                <img src={logo4} alt="" />
                                <img src={logo5} alt="" />
                                <img src={logo6} alt="" />
                                <img src={logo7} alt="" />
                            </span>
                        </div>
             
                </div>
            </div>

            <div className="showff">
                <div className="ontop">
                      <div className="stat">
                        <h4>40+</h4>
                        <p>Satisfied Customers</p>             
                      </div>
                      <div className="stat">
                        <h4>24/7 </h4>
                        <p>Customer Service</p>             
                      </div>
                      <div className="stat">
                        <h4>100+</h4>
                        <p>Successful Trips</p>             
                      </div>
                      <div className="stat">
                        <h4>2020</h4>
                        <p>Registered Under Ugandan Law</p>             
                      </div>
                </div>
                <h3 className="partners" id='Partners'>Trusted By:</h3>
            </div>

            
      </div>

      <div className="secondpart">
      <div className="who">
                <div className="left">
                    <FadeHeader className="whoHeader"
                    fadingtitle = "Guides"
                    cleartitle = "Who We Are"
                    /> 
                    <p className="whotext">
                    Nzaino Travel Africa is more than just a tour and travel agency.
                    We are a team of passionate and knowledgeable experts
                    who love to create   <a href="/eastafricatravelpackages" className='linker' aria-label='Find an affordable East Africa travel package.'> unforgettable safaris </a>
                    “into the heart of Africa”. Our vision is to inspire you with the
                      beauty and diversity of this amazing continent. 
                      Whether you are looking for adventure, business, romance, culture, or wildlife
                     <span className="highlight">, we have something for everyone</span>. We tailor each safari 
                      to your personal preferences and interests, ensuring that you have
                        the best experience possible. Join us and discover the wonders
                        of Africa with Nzaino Travel Africa.
                    </p>
                </div>

                <div className="imagewho">
                  <img src={who} alt="Nzaino Team" />
                </div>
          </div>

          <div className="team">
              <h5 className="teamtitle">Meet The Team</h5>

              <div className="teamswiper">
                <TeamSlide/>
                <p className="caption">
                A special mention to all our friends all around East
                 Africa who offer their guide and support on <a href="/eastafricatraveldestinations" className='linker' aria-label='Find an exciting East Africa travel destination.'> our tours</a>. 
                 They are a crucial part of our team. 👏🏾
                </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AboutSectionsI