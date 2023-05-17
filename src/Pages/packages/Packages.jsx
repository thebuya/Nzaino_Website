import React, { useState, useEffect  }  from 'react'
import './packages.css'

import headerimage from '../../Images/packagesHeader.jpg';
import FadingHeader from '../../Components/FadingHeader';
import {faqs} from '../../Components/destinations'
import BookingForm from '../../Components/Booking';
import FAQItem from '../../Components/Faq';
import { packages } from '../../Components/eadestinations';
import PackagesCard from '../../Components/PackagesCard';
import FadeHeader from '../../UI/FadeHeader';
//import BackgroundBlog from '../../Images/fadingpackage.jpg';
import BackgroundBlog from '../../Images/fadingpackage2.jpg';

const Packages = () => {


  const description = 'Volacanoes National Park Lodges, Rwanda '; // Replace with your description

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  // Calculate number of cards per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(6);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate indexes for current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = packages.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className='Packages'>
        <FadingHeader image={headerimage} description={description}/>
        <FadeHeader className="PackHeader"
        fadingtitle = "Packages"
        cleartitle = "Choose Your Package" 
        /> 
        <p className="whotext paragraphs">
                        At Nzaino, we understand that comfort and security
                         are essential for a memorable journey. 
                         That’s why we provide services that make it easy for you to
                          explore the rich and diverse cultures of Africa. Whether you want
                           to experience the wildlife, the landscapes, or the people,
                            we are here to help you discover the beauty of this continent.
                        </p>
              <div className="packagesContainer">
                  {currentCards.map(pack => (
                    <PackagesCard
                      key={pack.id}
                      image={pack.image}
                      caption={pack.caption}
                      title={pack.title}
                      activities={pack.activities}
                      price={pack.price}
                      people={pack.people}
                      duration={pack.duration}
                      availability={pack.availability}
                      highlights={pack.highlights}
                    />
                  ))}
                  <img src={BackgroundBlog} className="BackBlog packageback " alt="" srcset="" />
              </div>

              {/* Pagination */}
              <div className="packagesPagination">
                {Array.from({ length: Math.ceil(packages.length / cardsPerPage) }, (_, index) => (
                  <button
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <FadeHeader className="FAQsHeader"
        fadingtitle = "FAQS"
        cleartitle = "Frequently Asked Questions" /> 
            <div className="questionsContainer" id='FAQS'>
                    <div className="questionsmapped">
                      {faqs.map((faq, index) => {
                        if (index < Math.ceil(faqs.length / 2)) {
                          return (
                            <FAQItem
                              key={faq.id}
                              question={faq.question}
                              answer={faq.answer}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                    <div className="questionsmapped">
                      {faqs.map((faq, index) => {
                        if (index >= Math.ceil(faqs.length / 2)) {
                          return (
                            <FAQItem
                              key={faq.id}
                              question={faq.question}
                              answer={faq.answer}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
            </div>
        
        <BookingForm />
    </div>
  )
}

export default Packages