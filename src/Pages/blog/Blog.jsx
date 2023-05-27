import  React, { useEffect, useState }from 'react'
import './blog.css'

import { blogs } from '../../Components/blogreel';
import headerimage from '../../Images/bloghead.jpg';

import NewsLetter from '../../Components/NewsLetter';
import Backgroundserve from '../../Images/fadingpackage.jpg';
//import Backgroundserve2 from '../../Images/backgroundservices.jpg';
import FadingHeader from '../../Components/FadingHeader';


import BlogCard from '../../Components/Blog-Card';
import FadeHeader from '../../UI/FadeHeader';



const Blog = () => {
  useEffect(() => {
    document.title = 'Travellers Blog';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Discover the best travel tips, insider insights, and captivating stories on our Travellers Blog. Explore East Africas hidden gems, plan your next adventure, and get inspired. Contact our customer service or use the provided email address for bookings and inquiries.');
    document.querySelector('meta[property="og:image"]').setAttribute('content', headerimage);
    // You can also modify other meta tags or perform other SEO-related operations here if necessary
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
                  path={blog.path}

                  heading={blog.heading}
                />
            ))}
              

            
              <img src={Backgroundserve} className="BackBlog packageback serveback " alt="" />
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

        <NewsLetter/>
     
    </div>
  )
}

export default Blog