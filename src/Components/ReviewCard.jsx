import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import './reviewcard.css'

function ReviewCard(props)  {
    

  return (
    <div className='quoteCard' key={props.id}>
        <RiDoubleQuotesL/>

        <div className="quoteWClient">
            <p className="quote" dangerouslySetInnerHTML={{ __html: props.quote }}></p>
            <h5 className="client">{props.client}</h5>
        </div>

    </div>
  )
}

export default ReviewCard