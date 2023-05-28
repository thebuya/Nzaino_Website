import React from 'react'
import './teamcard.css'

function Teamcard(props) {
    
  
    return (
      <div className='teamMemberCard' key={props.id}>
          {/**  <img src={props.image} className="memberImage" alt={`${props.name} is Nzainos ${props.job}`} /> */} 
            <div className="jobDiv" >
                 <h5 className="name">{props.name}</h5>
                 <p className="job">{props.job}</p> 
            </div>
      </div>
    );
  }
  
export default Teamcard