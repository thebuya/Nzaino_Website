import React, {useEffect, useRef} from 'react'

import { packages  } from './eadestinations';
import PackagesCard from './PackagesCard';


import FadeHeader from '../UI/FadeHeader';
import {Link} from 'react-router-dom'
import BackgroundBlog from '../Images/fadingelephants.jpg';


import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination, Navigation } from 'swiper';


const HomePackageSlide = () => {
    const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        swiperInstance.slidePrev();
      } else if (event.key === 'ArrowRight') {
        swiperInstance.slideNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <FadeHeader
        fadingtitle = "Packages"
        cleartitle = "Travel More, Live More"
        className="packagehomefade"
      /> 
       <p className="whotext paragraphs paratext">
       If you have a dream of exploring East Africa on a budget, 
       Nzaino Travels has <a href="/eastafricatravelpackages" className='linker' aria-label='Find an afffordable travel package for East africa.'>the perfect packages</a> for you. 
       We offer great deals on flights 🛩 accommodation 🏕 and
        activities in various destinations. We also assist with
        all the itenary details for you, from planning to booking 
        to insurance. Have a swipe at some of our offers below and 
        contact us today. Let us help you 
        
         <span className="highlight"> travel more and spend less</span>.
        </p>
        
      <div className="blogo packagehomeslide">
      
            <Swiper 
            ref={swiperRef}
            className=" mySwiper blogs-on-homepage "
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            loopadditionalslides={1}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              // For screens larger than 900px
              1100: {
                slidesPerView: 3,
              },
              // For screens between 500px and 900px
              700: {
                slidesPerView: 2,
              },
              // For screens below 500px
              0: {
                slidesPerView: 1,
              },
            }}
            >
                  {packages.map(packageItem => (
                      <SwiperSlide key={packageItem.id}>
                          <PackagesCard
                         key={packageItem.id}
                         //image={packageItem.image}
                           images={packageItem.images} 
                           caption={packageItem.caption}
                           title={packageItem.title}
                           activities={packageItem.activities}
                           price={packageItem.price}
                           people={packageItem.people}
                           duration={packageItem.duration}
                           availability={packageItem.availability}
                           highlights={packageItem.highlights}
                          />
                          </SwiperSlide>
                          ))}
            
                       
            </Swiper>
            <img src={BackgroundBlog} className="BackBlog packageback " alt="" />
      </div>
      
        <Link to="/eastafricatravelpackages" className='linkbutton' aria-label='View all East African Travel Packages Nzaino Has To Offer.'>
           <button className="moredestinations"> View All Packages  </button>
        </Link>
    

      
    </>
  )
}

export default HomePackageSlide