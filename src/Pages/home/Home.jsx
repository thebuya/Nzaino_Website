import React from "react";
import HomeBlogSlide from "../../Components/HomeBlogSlide";
import { Link } from "react-router-dom";
import NewsLetter from "../../Components/NewsLetter";
import HomeMainSlide from "../../Components/HomeMainSlide";
import HomePlaces from "../../Components/HomePlaces";

import "./home.css";
import HomeReviewSlide from "../../Components/HomeReviewSlide";
import HomePackageSlide from "../../Components/HomePackageSlide";

import who from "../../Images/van.jpg";
import FadeHeader from "../../UI/FadeHeader";
import TeamSlide from "../../Components/TeamSlide";

import ogimage from "../../Images/seoimages/og-home.jpg";
import twitterimage from "../../Images/seoimages/twitter-home.jpg";
import SEO from "../../Components/SE0";
import HomeCarSlide from "../../Components/HomeCarSlide";

const Home = () => {
  const seoProps = {
    title: "Nzaino Travel Africa Limited - Home",
    url:"https://www.nzainotravelafrica.com/",
    seodescription:
      "Welcome to Nzaino Travel Africa Limited, your guide to discovering the wonders of East Africa. We offer trips, and car hires along a wide range of services for an unforgettable African adventure.",
    ogimage: ogimage,
    twitterimage: twitterimage,
    keywords:
      "Affordable Travel Packages, Uganda Car Hiring, East African Travel Destinations, Tours and Travel Services",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <div className="home-page">
      <SEO {...seoProps} />
      <HomeMainSlide />
      {/**  <div className='exp'>
          <h3>Founded on Over 40 years worth Travel Experiences. </h3>
        </div>*/}
      <HomePackageSlide />
      <div className="secondpart">
        <div className="who">
          <div className="left">
            <FadeHeader
              className="whoHeader"
              fadingtitle="Guides"
              cleartitle="Who We Are"
            />
            <p className="whotext">
              Nzaino Travel Africa is more than just a tour and travel agency.
              We are a team of passionate and knowledgeable travel experts who
              love to create{" "}
              <Link
                to="/eastafricatraveldestinations"
                onClick={() => {
                  handleLinkClick();
                }}
                className="linker"
                aria-label="Find an affordable East Africa travel package."
              >
                {" "}
                unforgettable safaris{" "}
              </Link>
              “into the heart of Africa ✨”. Our vision is to inspire you with
              the beauty and diversity of this amazing continent. Whether you
              are looking for adventure, business, romance, culture, or
              wildlife, we have something for everyone. We tailor each safari to
              your personal preferences and interests, ensuring that you have
              the best experience possible. Join us and discover the wonders of
              Africa 🌍 with Nzaino Travel Africa.
            </p>
          </div>

          <div className="imagewho">
            <img src={who} alt="Nzaino Team" />
          </div>
        </div>

        <div className="team">
          <h5 className="teamtitle">Meet The Team</h5>

          <div className="teamswiper">
            <TeamSlide />
            <p className="caption">
              A special mention to all our friends all around East Africa who
              offer their guide and support on{" "}
              <Link
                to="eastafricatraveldestinations"
                className="linker"
                aria-label="Find an exciting East African destination to travel and tour."
                onClick={() => {
                  handleLinkClick();
                }}
              >
                {" "}
                our tours
              </Link>
              . They are a crucial part of our team. 👏🏾
            </p>
          </div>
        </div>
      </div>
      <HomePlaces /> {/** Destinations */}
      <HomeCarSlide />
      <HomeReviewSlide />
      <HomeBlogSlide />
      <NewsLetter />
    </div>
  );
};

export default Home;
