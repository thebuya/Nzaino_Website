import React from 'react'
import './newsletter.css'

import BackgroundBlog from '../Images/subscribingheader2.jpg' ;

const NewsLetter = () => {
  return (
    <section className='NewsLetter'>
            <h2 className="title"> Travel the World with Our Exclusive Tips</h2>
            <div className="subscribing">
                <input type="email" placeholder="Enter Your Email Address" />
                <button className="subscribeButton">Subscribe</button>
            </div>

            <img src={BackgroundBlog} className="BackBlog subscribeback" alt="" srcset="" />
    </section>
  )
}

export default NewsLetter