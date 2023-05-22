import React, {useEffect, useRef} from 'react'

import { reviews } from './blogreel';
import ReviewCard from './ReviewCard';
//import BackgroundBlog from '../Images/fadingZanzibar.jpg' ;

import FadeHeader from '../UI/FadeHeader';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Pagination, Navigation } from 'swiper';


const HomeReviewSlide = () => {
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
        fadingtitle = "Reviews"
        cleartitle = "What Our Travellers Say"
        className="fade"
      /> 
        
      <div className="blogo" id='Testimonials'>
      
            <Swiper 
            ref={swiperRef}
            className=" mySwiper blogs-on-homepage reviewsslide "
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
                  {reviews.map(review => (
                      <SwiperSlide key={review.id}>
                          <ReviewCard
                          key={review.id}
                          quote={review.quote}
                          client={review.client}
                          />
                          </SwiperSlide>
                          ))}
            </Swiper>
        {/**  <img src={BackgroundBlog} className="BackBlog " alt="" /> */} 
      </div>
    </>
  )
}

export default HomeReviewSlide