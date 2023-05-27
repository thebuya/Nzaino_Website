import React, { useState } from 'react';
import './fadingHeader.css'

function FadingHeader(props) {

     const [showDescription, setShowDescription] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event) => {
    setShowDescription(true);
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };


  
    return (
    
   
      <div className="main-image">
      <img
        src={props.image}
        alt={props.description}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showDescription && (
        <div
          className="description"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        >
          {props.description}
        </div>
      )}
    </div>
  );
}
  

export default FadingHeader