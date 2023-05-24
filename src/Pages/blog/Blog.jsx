import React, {useEffect, useRef} from 'react'
import './blog.css'
import BookingForm from '../../Components/Booking';
import NewsLetter from '../../Components/NewsLetter';
import { blogs } from '../../Components/blogreel';

//import headerimage from '../../Images/bloghead.jpg';
import headerimage from '../../Images/zanib.jpg';

import FadingHeader from '../../Components/FadingHeader';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Pagination, Navigation } from 'swiper';
import BlogCard from '../../Components/Blog-Card';


const Blog = () => {
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


const description = 'Welcome to Nzaino Blogs'; // Replace with your description


  return (
    <div className='blogContainer'>

      <div className="moveableitems">
          <FadingHeader image={headerimage} description={description}/>

          <div className='textAndTitle'>
                <h1 className="blogtitle">8 Regions you must visit in Kenya</h1>

                <div className="textblog">
                  <p>
                  If you're looking for a vacation destination that has it all
                  , look no further than Kenya.Kenya is home to
                   some of the most diverse and stunning landscapes, wildlife,
                    and cultures in the world. Whether you want to explore the 
                    savannah, the mountains, the coast, or the cities, Kenya has
                     something for everyone. <br /> Here are eight regions you must visit
                      in Kenya to experience its beauty and richness.
                      <br /><br /><br />
                      <span className="boldblog">1. Nairobi: </span> 
                      <br />
                      The capital and largest city of Kenya, Nairobi is a
                       vibrant and cosmopolitan hub that offers a taste of modern Africa.
                        You can visit museums, art galleries, markets, restaurants, 
                        and nightlife venues, or take a short drive to the Nairobi 
                        National Park, where you can see lions, giraffes, zebras, and more.
                        <br />
                  </p>

                </div>
          </div>
      </div>


      <div className="immoveableitems">
            <NewsLetter/>

            <div className="popularblogs">
            <h2 className="populartitle">Most Popular Blogs</h2>
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
                              />
                              </SwiperSlide>
                              ))}
                </Swiper>
            </div>
      </div>


       


        <BookingForm />
    </div>
  )
}

export default Blog