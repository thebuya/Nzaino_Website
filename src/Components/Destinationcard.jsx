import React, { useState }  from 'react'
import './Destinationcard.css'
import { TiArrowRight } from "react-icons/ti";









function Destinationcard(props) {
    const [mainImage, setMainImage] = useState(props.image);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
  
    // Function to handle image click and update the main image
    const handleImageClick = (imageUrl, index) => {
        setMainImage(imageUrl);
        setActiveImageIndex(index);
      };

      const scrollToSection = () => {
        const section = document.getElementById('bookingSection');
        section.scrollIntoView({ behavior: 'smooth' });
      };

    return (
  
            <div className="upperpart" key={props.id}>
                <div className="leftpart">
                    <div className="maini">
                        <img className='mainimagery' src={mainImage} alt={props.heading}/>
                    </div>
                    <p className="description-fact">{props.fact}</p>
                        
                   
                    <div className="lowerpart">
                        <img
                          src={props.image2}
                          alt={props.heading}
                          onClick={() => handleImageClick(props.image2, 1)}
                          className={activeImageIndex === 1 ? 'active-image' : ''}
                        />
                        <img
                          src={props.image3}
                          alt={props.heading}
                          onClick={() => handleImageClick(props.image3, 2)}
                          className={activeImageIndex === 2 ? 'active-image' : ''}
                        />
                        <img
                          src={props.image4}
                          alt={props.heading}
                          onClick={() => handleImageClick(props.image4, 3)}
                          className={activeImageIndex === 3 ? 'active-image' : ''}
                        />
                        <img
                          src={props.image5}
                          alt={props.heading}
                          onClick={() => handleImageClick(props.image5, 4)}
                          className={activeImageIndex === 4 ? 'active-image' : ''}
                        />
                        <img
                          src={props.image}
                          alt={props.heading}
                          onClick={() => handleImageClick(props.image, 5)}
                          className={activeImageIndex === 5 ? 'active-image' : ''}
                        />
                    </div>
                </div>

                <div className="rightpart">
                    <div className="maintext">
                        <h2 className="heading">
                            {props.heading}
                        </h2>
                        <p className="paragraph">
                            {props.paragraph}
                        </p>
                    </div>

                    <div className="secondary-info">
                        <div className="mini-leftpart">
                                <h3 className="subheading">
                                    Resources
                                </h3>
                                <a href={props.download ? props.download : "#"} style={{ opacity: 0.5, fontSize: '13px' }} aria-label={`Download Travel Guide for ${props.heading} `}>
                                    {props.download ? "Download TravelGuide.pdf" : "Uploading in 14days"}
                                </a>                
                        </div>

                        <div className="mini-rightpart">
                            <h3 className="subheading">
                                Activities
                            </h3>
                            <ul>
                                <li>{props.activity1}</li>
                                <li>{props.activity2}</li>
                                <li>{props.activity3}</li>
                                <li>{props.activity4}</li>
                            </ul>
                        </div>
                
                    </div>

                    <button onClick={scrollToSection} aria-label={`Book a Trip To ${props.heading}`}>Book This Trip <TiArrowRight/> </button>
                </div>
            </div>  
     
    );
  }

export default Destinationcard