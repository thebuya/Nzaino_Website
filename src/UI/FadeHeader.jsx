import React from 'react';
import './UI.css';

function FadeHeader(props) {
  const { fadingtitle, cleartitle, className } = props;

  return (
    <div className={`mainFade ${className}`}>
      <h2 className="fadingTitle">{fadingtitle}</h2>
      <h4 className="belowFade">{cleartitle}</h4>
    </div>
  );
}

export default FadeHeader;
