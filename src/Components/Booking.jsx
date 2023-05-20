import React, { useState} from 'react';
import './Booking.css';
import BackgroundImage1 from '../Images/bwindibuyajpeg1.jpg'
import BackgroundImage from '../Images/bwindibuyajpeg4.jpg'


const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    startdate: new Date().toISOString().split('T')[0],
    enddate: '',
    destinationLocation: '',
    returnLocation: '',
    adultCount: 2,
    childCount: 2,
    travelerName: '',
    travelerContact: '',
    specialRequests: ''
  });

   
  return (
    <section className="bookingSection"  id="bookingSection">
        <h1 className="bookTrip" >
            Book <span>Your</span> Trip
        </h1>


     <form className="bookingForm" 
                        style={{ backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'contain',
                        backgroundPositionY: 'bottom',
                        backgroundRepeat: 'no-repeat' }}>

              <h3 className="bookingTitle">
                  Choose Your Dream Destination
              </h3>
              {/*Location */}
              <div className="pickLocation">
                  <label>
                      Where To ?
                      <input
                      type="text"
                      name="destinationLocation"
                      placeholder='e.g Murchison Falls Park'
                      value={bookingData.destinationLocation}
                     // onChange={handleInputChange}
                      />
                  </label>
                  <label>
                      Where From ?
                      <input
                      type="text"
                      name="returnLocation"
                      placeholder='e.g Entebbe Airport'
                      value={bookingData.returnLocation}
                     // onChange={handleInputChange}
                      />
                  </label>
              </div>
          
              <div className="pickDates">
              <label>
                Departure Date
                <input
                  type="date"
                  name="startdate"
                  value={bookingData.startdate}
                  //onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]} // Restrict to current date or later
                />
              </label>

                  
                  <label>
                      Return Date
                      <input
                          type="date"
                          name="enddate"
                          value={bookingData.enddate}
                         // onChange={handleInputChange}
                          min={(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                      />
                  </label>
              </div>

              <div className="pickPeople">
              <label>
              Adults
              <input
                type="number"
                name="adultCount"
                min="1"
                value={bookingData.adultCount}
                //onChange={handleInputChange}
              />
            </label>
            <label className='children'>
              Children
              <input
                type="number"
                name="childCount"
                min="0"
                value={bookingData.childCount}
                //onChange={handleInputChange}
              />
            </label>
              </div>

              <div className="pickContacts">
              <label>
                      Full Name
                      <input
                      type="text"
                      name="travelerName"
                      placeholder='e.g Kwizera Davis'
                      value={bookingData.travelerName}
                     // onChange={handleInputChange}
                      //className={validationErrors.travelerNameError ? 'error' : ''}
                      />
                  </label>
                  <label>
                    Phone Number
                      <input
                      type="number"
                      name="travelerContact"
                      placeholder='e.g +256 *********'
                      value={bookingData.travelerContact}
                     // onChange={handleInputChange}
                      />
                  </label>
              </div>

              <div className="specialRequests">
              <label>
                          Special Requests
                          <textarea
                              name="specialRequests"
                              placeholder="Let us know how we can make your trip more enjoyable "
                              value={bookingData.specialRequests}
                              //onChange={handleInputChange}
                          />
                      </label>
              </div>

              <div className="submitBooking">
              <button type="submit" >
            Complete Booking
          </button>
            
              </div>
              <p className="belowBook">Travel Africa with Insurance.</p>
    
    
    </form>
    <img className='imageBehindCard' src={BackgroundImage1} alt="" />
    </section>
    
  );
};

export default BookingForm;
