import React from 'react';

import HomeBlogSlide from '../../Components/HomeBlogSlide';
import BookingForm from '../../Components/Booking';
import NewsLetter from '../../Components/NewsLetter';
import HomeMainSlide from '../../Components/HomeMainSlide';
//import FadeHeader from '../../UI/FadeHeader';
import HomePlaces from '../../Components/HomePlaces';

import './home.css';
import HomeReviewSlide from '../../Components/HomeReviewSlide';









const Home = () => {



  return (
    <div className='home-page'>
        <HomeMainSlide/>
        <HomePlaces /> {/** Destinations */}
        <HomeReviewSlide />
        <HomeBlogSlide/>
        <NewsLetter/>
        <BookingForm />
    </div>
  );
};

export default Home;
 