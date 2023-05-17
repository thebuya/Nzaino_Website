import React, {useEffect, useRef} from 'react'

import { places } from './blogreel';
import PlacesCard from './PlacesCard';
import BackgroundBlog from '../Images/fadingelephants.jpg' ;

import FadeHeader from '../UI/FadeHeader';
import {Link} from 'react-router-dom'

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination, Navigation } from 'swiper';


const HomePlaces = () => {
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
        fadingtitle = "Destinations"
        cleartitle = "Places To Visit"
      /> 
        
      <div className="blogo">
      
            <Swiper 
            ref={swiperRef}
            className=" mySwiper blogs-on-homepage "
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            loopAdditionalSlides={1}
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
                  {places.map(place => (
                      <SwiperSlide key={place.id}>
                          <PlacesCard 
                          key={place.id}
                          image={place.image}
                          name={place.name}
                          description={place.description}
                          activities={place.activities}
                          />
                          </SwiperSlide>
                          ))}


            </Swiper>
            <img src={BackgroundBlog} className="BackBlog destinback" alt="" srcset="" />
      </div>
      <button className="moredestinations">
      <Link to="/destinations" className='linkbutton'> Explore All Destinations</Link>
      </button>

      
    </>
  )
}

export default HomePlaces