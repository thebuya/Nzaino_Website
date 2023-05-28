import React, {useEffect, useRef} from 'react'

import { team } from './blogreel';
import Teamcard from './Teamcard';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import 'swiper/css';

import { Pagination, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';




const TeamSlide = () => {
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
    
        
      <div className="blogo">
            <Swiper 
            ref={swiperRef}
            className=" mySwiper teamswipe "
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
                  {team.map(team => (
                      <SwiperSlide key={team.id}>
                          <Teamcard
                          key={team.id}
                          image={team.image}
                          name={team.name}
                          job={team.job}
                          />
                          </SwiperSlide>
                          ))}
            </Swiper>

            
          {/** <img src={BackgroundBlog} className="BackBlog " alt="" /> */}  
      </div>
    </>
  )
}

export default TeamSlide