import React from 'react'
import './blog.css'

import headerimage from '../../Images/zanib.jpg';
import nai from  '../../Images/mombasa4.jpg'



import FadingHeader from '../../Components/FadingHeader';



const Kenyan8Places = () => {
    const description = 'Welcome to Nzaino Blogs'; // Replace with your description
    return (
      <div className='blogContainer'>
  
        <div className="moveableitems">
            <FadingHeader image={headerimage} description={description}/>
  
            <div className='textAndTitle'>
                  <h1 className="blogtitle">8 Regions you must visit in Kenya</h1>
  
                  <div className="textblog">
                        <p>
                        If you're looking for a vacation destination that has it all
                        , look no further than Kenya.Kenya is home to
                        some of the most diverse and stunning landscapes, wildlife,
                          and cultures in the world. Whether you want to explore the 
                          savannah, the mountains, the coast, or the cities, Kenya has
                          something for everyone. <br /> Here are eight regions you must visit
                            in Kenya to experience its beauty and richness.
                            <br /><br /><br />
                            <span className="boldblog">1. Nairobi: </span> 
                            <br />
                            The capital and largest city of Kenya, <span className="highlight">
                            Nairobi is a vibrant and cosmopolitan hub that offers a taste of modern Africa.</span> You 
                            can visit museums, art galleries, markets, restaurants, 
                              and nightlife venues, or take a short drive to the Nairobi 
                              National Park, where you can see lions, giraffes, zebras, and more.
                              <br />
                              
                        </p>
                        <img src={nai} alt="Nairobi East Africa Travel" srcset="" />
                        <p>
                          <br />
                            <span className="boldblog">2. Mombasa: </span> 
                            <br />
                            The capital and largest city of Kenya, Nairobi is a
                            vibrant and cosmopolitan hub that offers a taste of modern Africa.
                              You can visit museums, art galleries, markets, restaurants, 
                              and nightlife venues, or take a short drive to the Nairobi 
                              National Park, where you can see lions, giraffes, zebras, and more.
                              <br />
                              
                        </p>
                  </div>
            </div>
        </div>
  
      </div>
    )
  }
export default Kenyan8Places