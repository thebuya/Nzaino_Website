import React, { useState } from 'react';
import './Booking.css';
import BackgroundImage1 from '../Images/bwindibuyajpeg1.jpg'
import BackgroundImage from '../Images/bwindibuyajpeg4.jpg'


const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    startdate: new Date().toISOString().split('T')[0],
    enddate: '',
    destinationLocation: '',
    returnLocation: '',
    adultCount: 1,
    childCount: 0,
    travelerName: '',
    travelerContact: '',
    specialRequests: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    startDateError: '',
    endDateError: '',
    travelerNameError: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({
      ...prevState,
      [name]: value
    }));

        // Validate start date
        if (name === 'startdate') {
            const selectedStartDate = new Date(value);
            const currentDate = new Date();
            const isInvalidStartDate = selectedStartDate <= currentDate;
            setValidationErrors((prevState) => ({
            ...prevState,
            startDateError: isInvalidStartDate ? 'Please select a date later than today.' : ''
            }));
        }

        // Validate end date
        if (name === 'enddate') {
            const selectedEndDate = new Date(value);
            const currentDate = new Date();
            const minEndDate = new Date();
            minEndDate.setDate(currentDate.getDate() + 2);
            const isInvalidEndDate =
            selectedEndDate <= currentDate || selectedEndDate <= minEndDate;
            setValidationErrors((prevState) => ({
            ...prevState,
            endDateError: isInvalidEndDate ? 'Please select a valid end date.' : ''
            }));
        }

         // Validate traveler name
        if (name === 'travelerName') {
            const fullNamePattern = /^[A-Za-z\s]+$/;
            const isValidName = fullNamePattern.test(value.trim());
            setValidationErrors((prevState) => ({
            ...prevState,
            travelerNameError: isValidName ? '' : 'Please space your first and last name.'
            }));
        }
};


const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    // Check for empty fields
  const requiredFields = ['travelerName', 'travelerContact', 'destinationLocation', 'returnLocation', 'startdate', 'enddate'];
  let hasEmptyFields = false;

  requiredFields.forEach((field) => {
    if (bookingData[field].trim() === '') {
      hasEmptyFields = true;
      setValidationErrors((prevState) => ({
        ...prevState,
        [`${field}Error`]: 'Please fill in empty fields',
      }));
    }
  });

  if (hasEmptyFields) {
    console.log('Please fill in all the required fields.');
    return;
  }
  
    // Trigger input change event for each field to revalidate and display errors
    Object.keys(bookingData).forEach((name) => {
      const event = { target: { name, value: bookingData[name] } };
      handleInputChange(event);
    });
  
    // Check for validation errors
    const hasErrors = Object.values(validationErrors).some((error) => error !== '');
    if (hasErrors) {
      console.log('Please fix the form errors before submitting.');
      return;
    }

    // Display success message
  alert('Form submitted successfully!');

  
    // Implement your form submission logic here
    console.log('Booking Data:', bookingData);

    // Reset the form fields
  setBookingData({
    startdate: new Date().toISOString().split('T')[0],
    enddate: '',
    destinationLocation: '',
    returnLocation: '',
    adultCount: 1,
    childCount: 0,
    travelerName: '',
    travelerContact: '',
    specialRequests: ''
  });

  if (!hasErrors) {
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 3000); // Revert back after 3 seconds
  } else {
    setIsFormSubmitted(false);
  }
  
  };


  return (
    <section className="bookingSection"  id="bookingSection">
        <h1 className="bookTrip" >
            Book <span>Your</span> Trip
        </h1>
    <form className="bookingForm" onSubmit={handleFormSubmit} 
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
                onChange={handleInputChange}
                />
            </label>
            <label>
                Where From ?
                <input
                type="text"
                name="returnLocation"
                placeholder='e.g Entebbe Airport'
                value={bookingData.returnLocation}
                onChange={handleInputChange}
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
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]} // Restrict to current date or later
          />
          {validationErrors.startDateError && (
            <p className="errorMessage">{validationErrors.startDateError}</p>
          )}
        </label>

            
            <label>
                Return Date
                <input
                    type="date"
                    name="enddate"
                    value={bookingData.enddate}
                    onChange={handleInputChange}
                    min={(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                />
                {validationErrors.endDateError && (
                    <p className="errorMessage">{validationErrors.endDateError}</p>
                )}
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
          onChange={handleInputChange}
        />
      </label>
      <label className='children'>
        Children
        <input
          type="number"
          name="childCount"
          min="0"
          value={bookingData.childCount}
          onChange={handleInputChange}
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
                onChange={handleInputChange}
                className={validationErrors.travelerNameError ? 'error' : ''}
                />
                {validationErrors.travelerNameError && (
                <p className="errorMessage">{validationErrors.travelerNameError}</p>
            )}
            </label>
            <label>
               Phone Number
                <input
                type="number"
                name="travelerContact"
                placeholder='e.g +256 *********'
                value={bookingData.travelerContact}
                onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </label>
        </div>

        <div className="submitBooking">
      <button type="submit">
        {isFormSubmitted ? 'Submission Complete' : 'Complete Booking'}
      </button>
      
    </div>
    <p className="belowBook">Travel Africa with Insurance.</p>
    
    
    </form>
    <img className='imageBehindCard' src={BackgroundImage1} alt="" srcset="" />
    </section>
    
  );
};

export default BookingForm;
