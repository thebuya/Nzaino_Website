import React from 'react'

import { ugandaPlaces, kenyaPlaces, tanzaniaPlaces, rwandaPlaces } from '../../Components/eadestinations';
import Destinationcard from '../../Components/Destinationcard';
import SlideImage4 from '../../Images/Zanzibarfader.jpg' ;
import './destinations.css'




// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from 'swiper';
import HomeReviewSlide from '../../Components/HomeReviewSlide';



const Destinations = () => {
  return (
    <>
      <div className="main-image">
        <img src={SlideImage4} alt="" />
      </div>

      <h5 className='below-main'><span>Discover</span> East Africas Hidden Gems.</h5>

      <div className="nextto-belowmain">
        <h2 className="fadingtitle">
          Destinations
        </h2>
        <h4 className="below-fadetitle">
          Uganda
        </h4>
      </div>

      <div className="desintations-container">
      <Swiper className=" mySwiper ugandan-destinations-cards"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      >

            {ugandaPlaces.map(places => (
              <SwiperSlide key={places.id}>
              <Destinationcard
                key={places.id}
                image={places.image}
                fact={places.fact}
                image2={places.image2}
                image3={places.image3}
                image4={places.image4}
                image5={places.image5}
                heading={places.locationTitle}
                paragraph={places.paragraph}
                activity1={places.activity1}
                activity2={places.activity2}
                activity3={places.activity3}
                activity4={places.activity4}
              />
              </SwiperSlide>
            ))}

      </Swiper>
      <div className="nextto-belowmain">
        <h2 className="fadingtitle">
          Destinations
        </h2>
        <h4 className="below-fadetitle">
          Kenya
        </h4>
      </div>
      <Swiper className=" mySwiper kenyan-destinations-cards"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      >

{kenyaPlaces.map(places => (
              <SwiperSlide key={places.id}>
              <Destinationcard
                key={places.id}
                image={places.image}
                fact={places.fact}
                image2={places.image2}
                image3={places.image3}
                image4={places.image4}
                image5={places.image5}
                heading={places.locationTitle}
                paragraph={places.paragraph}
                activity1={places.activity1}
                activity2={places.activity2}
                activity3={places.activity3}
                activity4={places.activity4}
              />
              </SwiperSlide>
            ))}

      </Swiper>
      <div className="nextto-belowmain">
        <h2 className="fadingtitle">
          Destinations
        </h2>
        <h4 className="below-fadetitle">
          Tanzania
        </h4>
      </div>

      <Swiper className=" mySwiper kenyan-destinations-cards"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      >

            {tanzaniaPlaces.map(places => (
              <SwiperSlide key={places.id}>
              <Destinationcard
                key={places.id}
                image={places.image}
                fact={places.fact}
                image2={places.image2}
                image3={places.image3}
                image4={places.image4}
                image5={places.image5}
                heading={places.locationTitle}
                paragraph={places.paragraph}
                activity1={places.activity1}
                activity2={places.activity2}
                activity3={places.activity3}
                activity4={places.activity4}
              />
              </SwiperSlide>
            ))}

      </Swiper>


      <div className="nextto-belowmain">
        <h2 className="fadingtitle">
          Destinations
        </h2>
        <h4 className="below-fadetitle">
          Rwanda
        </h4>
      </div>
      <Swiper className=" mySwiper kenyan-destinations-cards"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      >

            {rwandaPlaces.map(places => (
              <SwiperSlide key={places.id}>
              <Destinationcard
                key={places.id}
                image={places.image}
                fact={places.fact}
                image2={places.image2}
                image3={places.image3}
                image4={places.image4}
                image5={places.image5}
                heading={places.locationTitle}
                paragraph={places.paragraph}
                activity1={places.activity1}
                activity2={places.activity2}
                activity3={places.activity3}
                activity4={places.activity4}
              />
              </SwiperSlide>
            ))}

      </Swiper>
      </div>

      <HomeReviewSlide/>

    </>
  )
}

export default Destinations