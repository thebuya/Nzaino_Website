import React from 'react';
import { Helmet } from 'react-helmet';
import HomeBlogSlide from '../../Components/HomeBlogSlide';

import NewsLetter from '../../Components/NewsLetter';
import HomeMainSlide from '../../Components/HomeMainSlide';
import HomePlaces from '../../Components/HomePlaces';


import './home.css';
import HomeReviewSlide from '../../Components/HomeReviewSlide';
import HomePackageSlide from '../../Components/HomePackageSlide';





import who from '../../Images/van.jpg';
//import siteimage from '../../Images/bwindi3.jpg';
import ogimage from '../../Images/ogImage-home.jpg';
import FadeHeader from '../../UI/FadeHeader';
import TeamSlide from '../../Components/TeamSlide';


const Home = () => {


  return (
    <div className='home-page'>
       <Helmet>
            <title>Nzaino Travel Africa Limited - Home</title>
            <meta name="description" content="Welcome to Nzaino Travel Africa Limited, your guide to discovering the wonders of East Africa. We offer trips, and car hires along a wide range of services for an unforgettable African adventure." />
            <meta property="og:title" content="Nzaino Travel Africa Limited - Home" />
            <meta property="og:description" content="Welcome to Nzaino Travel Africa Limited, your guide to discovering the wonders of East Africa. We offer trips, and car hires along a wide range of services for an unforgettable African adventure." />
            <meta property="og:image" content={ogimage} />
            {/* Add other meta tags if needed */}
      </Helmet>





        <HomeMainSlide/>
     {/**  <div className='exp'>
          <h3>Founded on Over 40 years worth Travel Experiences. </h3>
        </div>*/}  
        <HomePackageSlide/>
        <div className="secondpart">
              <div className="who">
                    <div className="left">
                        <FadeHeader className="whoHeader"
                        fadingtitle = "Guides"
                        cleartitle = "Who We Are"
                        /> 
                        <p className="whotext">
                        Nzaino Travel Africa is more than just a tour and travel agency.
                        We are a team of passionate and knowledgeable travel experts
                        who love to create <a href="/eastafricatravelpackages" className='linker' aria-label='Find an affordable East Africa travel package.'> unforgettable safaris </a>
                        “into the heart of Africa ✨”. Our vision is to inspire you with the
                          beauty and diversity of this amazing continent. 
                          Whether you are looking for adventure, business, romance, culture, or wildlife,
                          we have something for everyone. We tailor each safari 
                          to your personal preferences and interests, ensuring that you have
                            the best experience possible. Join us and discover the wonders
                            of Africa 🌍 with Nzaino Travel Africa.
                        </p>
                    </div>

                    <div className="imagewho">
                      <img src={who} alt="Nzaino Team" />
                    </div>
              </div>

              <div className="team">
                  <h5 className="teamtitle">Meet The Team</h5>

                  <div className="teamswiper">
                    <TeamSlide/> 
                    <p className="caption">
                      A special mention to all our friends all around East
                      Africa who offer their guide and support on <a href="/eastafricatraveldestinations" className='linker' aria-label='Find an exciting East Africa travel destination.'> our tours</a>. 
                      They are a crucial part of our team. 👏🏾
                    </p>
                  </div>
              </div>
      </div>
        <HomePlaces /> {/** Destinations */}
        <HomeReviewSlide />



        <HomeBlogSlide/>
        <NewsLetter/>
   
    </div>
  );
};

export default Home;
 