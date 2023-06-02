import React from 'react';
import { Link } from "react-router-dom";
import './blogcard.css';
import { TiArrowRight } from "react-icons/ti";

function BlogCard(props) {
  const scrollToSection = () => {
    const section = document.getElementById('bookingSection');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    scrollToTop();
  };

  return (
    <div className='bloghighlights'>
        <div className="bloghighlight-card" key={props.id}>
          <div className="bloghighlight-image">
          <img src={props.image} alt={props.location} className='b-image' />
          </div>
            
            <p className="label">{props.location}</p>

            <div className="main-highlighttext">
              <h2 className="highlight-title">{props.heading}</h2>
              <p className="highlight-text">{props.paragraph}</p>
            </div>

            <div className="call-to-actions">
             
              <Link to={props.path} 
              onClick={() => {
                handleLinkClick();
              }} 
              aria-label={`Read ${props.heading}`}>
                 <button className="readblog">Read Blog</button>
              </Link>
              <button className="booktrip" onClick={scrollToSection}>Book Trip <TiArrowRight/> </button>
            </div>
        </div>
    </div>
  );
}

export default BlogCard;