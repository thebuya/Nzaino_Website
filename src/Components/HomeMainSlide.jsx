import React, { useRef }  from 'react'
//import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import SlideImage2 from '../Images/gorilla.jpg' ;
import SlideImage10 from '../Images/coolest-rwanda.jpeg' ;
import SlideImage9 from '../Images/lions.jpg' ;


import SlideImage from '../Images/Nyungwe5.jpg';
import SlideImage7 from '../Images/discoveruganda.jpg'; 
import SlideImage4 from '../Images/Zanzibar.jpg' ;
import SlideImage3 from '../Images/clearblueskymountain.jpg' ;
import SlideImage6 from '../Images/serengeti.jpg' ;
import SlideImage8 from '../Images/zanzibarkids.jpg' ;
import SlideImage5 from '../Images/gamepark-hippos.jpg' ;





import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, Pagination, Navigation } from 'swiper';



const HomeMainSlide = () => {
  const navigate = useNavigate();// Initialize useHistory
  const progressCircle = useRef(null);
  const progressContent = useRef(null);


  const goToCarPage = () => {
    navigate('/ugandacarhire'); // Navigate to the car page
  };

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  const scrollToSection = () => {
    const section = document.getElementById('bookingSection');
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="content-container">    
      <h1 className="home-heading">
         Discover <span>The Wonders of East Africa</span> with our Tailor-Made Tours
      </h1>
      <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  onAutoplayTimeLeft={onAutoplayTimeLeft}
 
  className="mySwiper"
  
  
>
        

        
        <SwiperSlide>
        <img className='SlideImage6' src={SlideImage10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='SlideImage4' src={SlideImage2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='SlideImage5' src={SlideImage3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='SlideImage3' src={SlideImage9} alt="" />
        </SwiperSlide> 
        
        
        
        <SwiperSlide>
        <img className='SlideImage1' src={SlideImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='SlideImage7' src={SlideImage4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='SlideImage8' src={SlideImage5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='SlideImage9' src={SlideImage6} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className='SlideImage2' src={SlideImage8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='SlideImage10' src={SlideImage7} alt="" />
        </SwiperSlide>
       
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div className="buttonz">
        <a href="#bookingSection">
          <button className="firstbutton bookhome" onClick={scrollToSection}>
              <span>Book a Trip</span>
          </button>
        </a>
          

          
            <Link to="/ugandacarhire">
                <button className="firstbutton" onClick={goToCarPage}> Hire a Car</button>
            </Link>
            
      </div>

      
    </div>
  )
}

export default HomeMainSlide