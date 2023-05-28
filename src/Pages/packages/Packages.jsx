import React, { useState, useEffect  }  from 'react'
import { Helmet } from 'react-helmet';
import './packages.css'

import headerimage from '../../Images/nana.jpg';
import ogimage from '../../Images/ogImage-travel.jpg';
import FadingHeader from '../../Components/FadingHeader';
import {faqs} from '../../Components/destinations'

import FAQItem from '../../Components/Faq';
import { packages } from '../../Components/eadestinations';
import PackagesCard from '../../Components/PackagesCard';
import FadeHeader from '../../UI/FadeHeader';
//import BackgroundBlog from '../../Images/fadingpackage.jpg';
import BackgroundBlog from '../../Images/fadingpackage2.jpg';

const Packages = () => {
 // useEffect(() => {
       // document.title = 'Travel East Africas with Nzaino Packages | Nzaino';
       // document.querySelector('meta[name="description"]').setAttribute('content', 
       //   'Nzaino provides a catalogue of budget-friendly travel packages from some of the best destinations and accommodations East Africa has to offer.'+
       //   'Get in touch with us to start your East African adventure. Contact our customer service or use the provided email address for bookings and inquiries.');
    //    document.querySelector('meta[property="og:image"]').setAttribute('content', headerimage);
      // You can also modify other meta tags or perform other SEO-related operations here if necessary
 // }, []);


  const [selectedFilter, setSelectedFilter] = useState(null);

  const description = 'Queen Elizabeth National Park, Uganda'; // Replace with your description

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

  // Calculate number of cards per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(6);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate indexes for current page and selected filter
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  /// Filter packages based on selected filter
  const filteredPackages = selectedFilter
    ? packages.filter((packageItem) => parseInt(packageItem.price.slice(1)) <= selectedFilter)
    : packages;

  // Get the packages for the current page
  const currentCards = filteredPackages.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset filter and current page when the selected filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  return (
    <div className='Packages'>
      <Helmet>
            <title>Travel East Africas with Nzaino Packages | Nzaino</title>
            <meta name="description" content="Nzaino provides a catalogue of budget-friendly travel packages from some of the best destinations and accommodations East Africa has to offer. Get in touch with us to start your East African adventure. Contact our customer service or use the provided email address for bookings and inquiries." />
            <meta property="og:title" content="Travel East Africas with Nzaino Packages | Nzaino" />
            <meta property="og:description" content="Nzaino provides a catalogue of budget-friendly travel packages from some of the best destinations and accommodations East Africa has to offer. Get in touch with us to start your East African adventure. Contact our customer service or use the provided email address for bookings and inquiries." />
            <meta property="og:image" content={ogimage} />
            {/* Add other meta tags if needed */}
      </Helmet>


        <FadingHeader image={headerimage} description={description}/>
        <FadeHeader className="PackHeader"
        fadingtitle = "Packages"
        cleartitle = "Choose Your Package" 
        /> 
        <p className="whotext paragraphs intropackage">
                        At Nzaino, we understand that comfort 😌 and security
                         are essential for a memorable journey. 
                         We have taken the liberty of curating a catalogue of 
                         <span className="highlight"> travel packages that  make it easy for you </span>
                        to travel the rich and diverse cultures of Africa. Whether you want
                           to experience the wildlife, the landscapes, or the people. We understand that sometimes the budget can be an issue
                           and as a result you can go through some of our more budget friendly packages.
                            We are here to help you discover the beauty ✨ of the motherland.
                            Choose a package below and contact us, or <a href="/ugandacarhire" className='linker' aria-label='Find a car to hire for your travels.'>hire a car</a> for personal travels.
        </p>

              {/* Pagination */}
              <div className="packagesPagination upper">
                    <button
                        className={selectedFilter === null ? 'active' : ''}
                        onClick={() => setSelectedFilter(null)}
                      >
                        All
                    </button>
                    <button
                      className={selectedFilter === 300 ? 'active' : ''}
                      onClick={() => setSelectedFilter(300)}
                    >
                      &lt; $300
                    </button>
                    <button
                      className={selectedFilter === 700 ? 'active' : ''}
                      onClick={() => setSelectedFilter(700)}
                    >
                      &lt; $700
                    </button>
                    <button
                      className={selectedFilter === 1000 ? 'active' : ''}
                      onClick={() => setSelectedFilter(1000)}
                    >
                      &lt; $1000
                    </button>
                    <button
                      className={selectedFilter === 2000 ? 'active' : ''}
                      onClick={() => setSelectedFilter(2000)}
                    >
                      &lt; $2000
                    </button>
              </div>

              <div className="packagesContainer" >
                  {currentCards.map(packageItem => (

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
                  ))}
                  <img src={BackgroundBlog} className="BackBlog packageback " alt="" />
              </div>

             {/* Pagination */}
      <div className="packagesPagination">
        {Array.from({ length: Math.ceil(filteredPackages.length / cardsPerPage) }, (_, index) => (
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
        cleartitle = "Frequently Asked Questions" 
        /> 
         <p className="whotext paragraphs">
         We know that planning a trip can be challenging and exciting. That’s why we have compiled a list of frequently asked questions to help you prepare for your adventure. Whether you need information about visas, vaccinations, luggage, or payments, we have the answers for you. If you have any other questions or concerns, please feel free to contact us anytime.
                        </p>
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
        
    </div>
  )
}

export default Packages