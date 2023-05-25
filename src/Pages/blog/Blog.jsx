import  React, { useEffect, useRef, useState }from 'react'
import './blog.css'
import BookingForm from '../../Components/Booking';
import NewsLetter from '../../Components/NewsLetter';
import { blogs } from '../../Components/blogreel';

import headerimage from '../../Images/bloghead.jpg';




import FadingHeader from '../../Components/FadingHeader';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Pagination, Navigation } from 'swiper';
import BlogCard from '../../Components/Blog-Card';
import FadeHeader from '../../UI/FadeHeader';


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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(6);

  // Calculate number of blogs per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setBlogsPerPage(3);
      } else {
        setBlogsPerPage(6);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate indexes for current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className='blogContainer'>

      <div className="moveAbleItems">
          <FadingHeader image={headerimage} description={description}/>
          <FadeHeader className="PackHeader"
        fadingtitle = "Blogs"
        cleartitle = "Travellers Blogs" 
          /> 
          <p className="whotext paragraphs">
          If like us, you need to make your due diligence by researching about the destination
          or travel experience more, we have you covered. For each of our trips, we endeavour
            to document and write about it so that you can learn about the dos and donts, or 
            better yet so that you know the exact destination you can’t miss out on during your adventures.
          </p>

          <div className="blogsGrid">
            {currentBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                location={blog.location}
                paragraph={blog.paragraph}
                heading={blog.heading}
              />
        ))}
      </div>
          {/* Pagination */}
      <div className="paginationContainer">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
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