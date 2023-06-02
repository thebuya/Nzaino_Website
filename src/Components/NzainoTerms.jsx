import React, { useEffect, useState } from "react";
import "./nzainoterms.css";
import ogimage from "../Images/seoimages/og-blog.jpg";
import twitterimage from "../Images/seoimages/twitter-blog.jpg";
import SEO from "./SE0";

const NzainoTerms = () => {
  const seoProps = {
    title: "Nzaino Terms and Conditions | Travel With Insurance",
    seodescription:
      "Learn about our terms and conditions to ensure a smooth and enjoyable experience. Our page outlines important information regarding bookings, cancellations, and more. Contact our customer service or use the provided email address for any inquiries.",
    ogimage: ogimage,
    twitterimage: twitterimage,
    keywords: "Terms and Conditions, Travel Insurance, Nzaino Conditions",
  };

  // State variable to track the scroll position
  const [isFixed, setIsFixed] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    const termsContainer = document.querySelector(".termsContainer");
    const navbarHeight = navbar.offsetHeight;

    // Calculate the position where .termsContainer should become fixed
    const scrollPosition = navbar.offsetTop + navbarHeight;

    // Add or remove the CSS class based on the scroll position
    if (window.pageYOffset >= scrollPosition) {
      setIsFixed(true);
      // termsContainer.style.marginTop = navbarHeight + "px";
    } else {
      setIsFixed(false);
      termsContainer.style.marginTop = "1rem";
    }
  };

  useEffect(() => {
    // Attach scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="TermsAndConditions">
      <SEO {...seoProps} />

      <div className="termshead">
        <h1>Terms and Conditions</h1>
      </div>

      <div className="termsContainer">
        {isFixed ? (
          <div className="largescreenlinks fixed">
          <h2>T&C Contents</h2>

          <ul className="contents">
            <li  >
              <a href="#TCbegin"> 1. Services Provided</a>
            
            </li>
            <li  >
              <a href="#TCserve"> 2. Insurance</a>
             
            </li>
            <li  >
              <a href="#TCinsurance"> 3. Booking and Payments</a>
             
            </li>
            <li  >
              <a href="#TCbookings">4. Responsibilities and Obligations</a>
              
            </li  >
           
            <li>
            <a href="#TCresponsibilities">     5. Pricing and Negotiations</a>
         
            </li>
            <li  >
              <a href="#TCpricing">6. Intellectual Property</a>
            
            </li>
            <li  >
              <a href="#TCproperty">7. Governing Law and Jurisdiction  </a>
            
            </li>
          </ul>
        </div>
        ) : (
            <div className="largescreenlinks">
            <h2>T&C Contents</h2>

            <ul className="contents">
            <li  >
              <a href="#TCbegin"> 1. Services Provided</a>
            
            </li>
            <li  >
              <a href="#TCserve"> 2. Insurance</a>
             
            </li>
            <li  >
              <a href="#TCinsurance"> 3. Booking and Payments</a>
             
            </li>
            <li  >
              <a href="#TCbookings">4. Responsibilities and Obligations</a>
              
            </li  >
           
            <li>
            <a href="#TCresponsibilities">     5. Pricing and Negotiations</a>
         
            </li>
            <li  >
              <a href="#TCpricing">6. Intellectual Property</a>
            
            </li>
            <li  >
              <a href="#TCproperty">7. Governing Law and Jurisdiction  </a>
            
            </li>
          </ul>
          </div>
        )}

        <div className="textAndTitle TC">
          <div className="textblog">
            <p id="TCbegin">
              These terms and conditions ("Agreement") govern your use of the
              services provided by Nzaino Travel Africa Limited ("Nzaino") and
              constitute a legally binding agreement between you and Nzaino. By
              engaging in any transaction with Nzaino, you agree to be bound by
              these terms and conditions.
              <br  id="TCserve" />
              <br />
              <span className="boldblog" >1. Services Provided</span>
              <br />
              <br />
              1.1 Nzaino offers a range of services to help you explore and
              discover the beauty of Africa, including guided tours, car
              rentals, and travel packages. <br />
              1.2 Guided Tours: <br />
              Our experienced and knowledgeable guides will accompany you on
              your journey, providing you with valuable insights and ensuring
              your safety and enjoyment. <br />
              1.3 Car Rentals: <br />
              Nzaino offers a variety of vehicles for hire, ranging from
              8-seaters to more cozy 4-seaters. You may choose to have a
              designated driver or drive yourself. Please note that car rentals
              are subject to availability and certain terms and conditions.{" "}
              <br />
              1.4 Travel Packages: <br />
              Nzaino has curated a selection of travel packages that cater to
              different preferences and budgets. We aim to provide you with
              comfort, security, and an unforgettable experience. <br  id="TCinsurance" />
              <br />
              <span className="boldblog">2. Insurance </span>
              <br />
              <br />
              2.1 Nzaino does not directly provide insurance services. However, we can
              assist you in procuring travel insurance to protect your interests
              during your journey. It is your responsibility to ensure that you
              have appropriate insurance coverage. <br  id="TCbookings" /> <br />
              <span className="boldblog"> 3. Booking and Payments</span>
              <br />
              <br />
              3.1 To make a booking, you may use our online booking system or
              contact Nzaino directly. All bookings are subject to availability.
              <br />
              3.2 Payment for services rendered by Nzaino should be made as per
              the agreed terms and conditions. Payments can be made through the
              available payment methods specified by Nzaino. <br />
              3.3 Any additional costs incurred during your trip, such as
              entrance fees, meals, or optional activities, are your
              responsibility unless otherwise stated in the agreed terms. <br  id="TCresponsibilities" /> <br />
              <span className="boldblog">4. Responsibilities and Obligations</span>
              <br />
              <br />
              4.1 Nzaino is committed to providing high-quality services.
              However, it is important to note that certain factors, such as
              weather conditions, availability of wildlife, or cultural events,
              are beyond our control. Nzaino will not be held liable for any
              changes or disruptions to the itinerary caused by these external
              factors. <br />
              4.2 It is your responsibility to ensure that you possess
              valid travel documents, including passports, visas, and health
              certificates, as required by the countries you intend to visit.
              Nzaino will not be held responsible for any consequences resulting
              from your failure to comply with these requirements. <br />
              4.3 While Nzaino takes all reasonable precautions to ensure your safety
              during tours and car rentals, you acknowledge that travel involves
              inherent risks. You agree to release Nzaino from any liability for
              any personal injury, property damage, or loss arising from your
              participation in our services. <br  id="TCpricing" /> <br />
              <span className="boldblog">5. Pricing and Negotiations </span>
              <br />
             <br />
              5.1 Prices listed on the Nzaino website or in promotional materials
              are subject to change without prior notice. However, once a
              booking is confirmed, the agreed price will be honored, unless
              there are exceptional circumstances beyond Nzaino's control. <br />
              5.2 Please note that after making a booking, you may negotiate certain
              aspects of the trip or car rental with Nzaino. These negotiations
              are subject to the availability of resources and Nzaino's
              discretion. <br  id="TCproperty"  /> <br />
              <span className="boldblog"> 6. Intellectual Property </span>
              <br />
              6. Intellectual Property <br />
              6.1 All intellectual property rights, including but not limited to logos, trademarks, and
              content, associated with Nzaino and its services, are the property
              of Nzaino Travel Africa Limited and protected by applicable laws.
              You may not use, reproduce, or distribute any intellectual
              property owned by Nzaino without prior written consent. <br  id="TClaw"  /> <br />
              <span className="boldblog">  7. Governing Law and Jurisdiction  </span>
              <br />
             <br />
              7.1 This Agreement shall be governed by and construed in accordance with the laws of Uganda. Any disputes arising from or relating to
              this Agreement shall be subject to the exclusive jurisdiction of
              the courts of Uganda.
              <br />
              <br />
            </p>

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NzainoTerms;
