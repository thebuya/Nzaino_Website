import React, { useEffect, useRef} from 'react'


import { blogs } from '../../Components/blogreel';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Backgroundserve from '../../Images/backgroundservices.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Pagination, Navigation } from 'swiper';
import BlogCard from '../../Components/Blog-Card';
import NewsLetter from '../../Components/NewsLetter';


const Immovableitems = () => {
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
    <div className="immoveableitems">
 
 <img src={Backgroundserve} className="BackBlog packageback serveback " alt="" />
    <div className="popularblogs">
    <h2 className="populartitle">Popular Blogs</h2>
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
              {blogs
              .filter(blog => blog.popular) // Filter blogs with `popular` set to true
              .map(blogs => (
                  <SwiperSlide key={blogs.id}>
                      <BlogCard
                      key={blogs.id}
                      image={blogs.image}
                      location={blogs.location}
                      paragraph={blogs.paragraph}
                      heading={blogs.heading}
                  path={blogs.path}

                      />
                      </SwiperSlide>
                      ))}
        </Swiper>
    </div>
   

    <div className="recentblogs">
    <h2 className="populartitle">Most Recent Blogs</h2>
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
              {blogs
              .filter(blog => blog.recent) // Filter blogs with `recent` set to true
              .map(blogs => (
                  <SwiperSlide key={blogs.id}>
                      <BlogCard
                      key={blogs.id}
                      image={blogs.image}
                      location={blogs.location}
                      paragraph={blogs.paragraph}
                      heading={blogs.heading}
                  path={blogs.path}

                      />
                      </SwiperSlide>
                      ))}
        </Swiper>
    </div>

    <NewsLetter/>


  
</div>
  )
}

export default Immovableitems