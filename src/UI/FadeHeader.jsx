import React from 'react'
import './UI.css'


function FadeHeader(props) {
    return (
        <div className="mainFade">
            <h2 className="fadingTitle">
              {props.fadingtitle}
            </h2>
            <h4 className="belowFade">
              {props.cleartitle}
            </h4>
        </div>
    );
  }
  


export default FadeHeader