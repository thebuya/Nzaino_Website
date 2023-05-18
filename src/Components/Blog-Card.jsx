import React from 'react';
import './blogcard.css';
import { TiArrowRight } from "react-icons/ti";

function BlogCard(props) {
  const scrollToSection = () => {
    const section = document.getElementById('bookingSection');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bloghighlights'>
        <div className="bloghighlight-card" key={props.id}>
          <div className="bloghighlight-image">
          <img src={props.image} alt="destination" className='b-image' />
          </div>
            
            <p className="label">{props.location}</p>

            <div className="main-highlighttext">
              <h2 className="highlight-title">{props.heading}</h2>
              <p className="highlight-text">{props.paragraph}</p>
            </div>

            <div className="call-to-actions">
              <button className="readblog">Read Blog</button>
              <button className="booktrip" onClick={scrollToSection}>Book Trip<TiArrowRight/> </button>
            </div>
        </div>
    </div>
  );
}

export default BlogCard;