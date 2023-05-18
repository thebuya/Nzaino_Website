import React from 'react'
import './teamcard.css'

function Teamcard(props) {
    
  
    return (
      <div className='teamMemberCard' key={props.id}>
          {/**  <img src={props.image} className="memberImage" alt="" /> */} 
            <div className="jobDiv" >
                 <h5 className="job">{props.job}</h5> 
                 <p className="name">{props.name}</p>
            </div>
      </div>
    );
  }
  
export default Teamcard