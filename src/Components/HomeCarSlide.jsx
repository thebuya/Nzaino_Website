import React, { useEffect, useRef } from "react";

import { availablecars } from "../Components/cars";
import CarCard from "../Pages/cars/CarCard";
//import BackgroundBlog from '../Images/Zanzibarfade.jpg' ;
import BackgroundBlog from "../Images/carback.jpg";

import FadeHeader from "../UI/FadeHeader";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Navigation } from "swiper";

const HomeCarSlide = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        swiperInstance.slidePrev();
      } else if (event.key === "ArrowRight") {
        swiperInstance.slideNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  return (
    <>
      <FadeHeader
        fadingtitle="Car Hiring"
        cleartitle="Nzaino Cars"
        className="fade carfade"
      />

<p className="whotext paragraphs paratext">
       Maybe you want to explore Africa at your own pace and comfort? If yes, then you’ll
        love our car hiring service at Nzaino. We have a wide range of cars to
        suit your travel needs and preferences. You may choose to have a professional
        driver or drive yourself on an adventure.<span className="highlight"> Booking is easy and
        convenient</span>. Just click on Book Car and fill in the form, or contact us
        directly for a quick response.
        
      </p>

      <div className="blogo packagehomeslide carhomeslide">
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
              slidesPerView: 2,
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
          {availablecars.map((car) => (
            <SwiperSlide key={car.id}>
              <CarCard key={car.id} {...car} />
            </SwiperSlide>
          ))}
        </Swiper>

        <img
          src={BackgroundBlog}
          className="BackBlog "
          alt="The Zanzibar Coast"
        />
      </div>
    </>
  );
};

export default HomeCarSlide;
