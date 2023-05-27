import React from 'react';
import './UI.css';

function FadeHeader(props) {
  const { fadingtitle, cleartitle, className } = props;

  return (
    <div className={`mainFade ${className}`}>
      <h1 className="fadingTitle">{fadingtitle}</h1>
      <h2 className="belowFade">{cleartitle}</h2>
    </div>
  );
}

export default FadeHeader;
