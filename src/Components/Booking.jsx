import emailjs from "@emailjs/browser";
import React, { useState } from "react";

import "./Booking.css"; //Styling

//One is behind Card, The Other is On Card
import BackgroundImage1 from "../Images/bwindibuyajpeg1.jpg";
import BackgroundImage from "../Images/bwindibuyajpeg4.jpg";

const BookingForm = () => {
  const [values, setValues] = useState({
    startdate: new Date().toISOString().split("T")[0],
    enddate: "",
    destinationLocation: "",
    returnLocation: "",
    adultCount: 1,
    childCount: 0,
    travelerName: "",
    travelerContact: "",
    specialRequests: "",
    successMessage: false, // new state value for success
  });

  //Just For Just
  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setValues((prevValues) => ({
        ...prevValues,
        successMessage: false,
      }));
    }, 6000);

    emailjs
      .sendForm(
        "service_n29vta7",
        "template_tg8uhff",
        e.target,
        "OjV8v_LlrwE82S4dU"
      )
      .then((result) => {
        console.log(result.text);
        const travelerName = e.target.elements.travelerName.value;
         
        
        alert(`${travelerName}, Your trip has been Booked Successfully.`);

        setValues({
          startdate: new Date().toISOString().split("T")[0],
          enddate: "",
          destinationLocation: "",
          returnLocation: "",
          adultCount: 1,
          childCount: 0,
          travelerName: "",
          travelerContact: "",
          specialRequests: "",
          successMessage: true,
        });

       
      })
      .catch((error) => {
        console.log(error.text);
        alert("Yes");
      });
    e.target.reset();
  };

  //Captures What Someone is Typing
  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log(values);

  //So error appears only when needed, <---
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <section className="bookingSection" id="bookingSection">
      <h1 className="bookTrip">
        Book <span>Your</span> Trip
      </h1>

      <img
        className="imageBehindCard mobilesOnly"
        src={BackgroundImage1}
        alt="Bwindi Impenetrable Forest as the background"
      />

      <form
        className="bookingForm"
        onSubmit={handleSubmit}
        onChange={onChange}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "contain",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="bookingTitle">Choose Your Dream Destination</h3>
        {/*Location */}
        <div className="pickLocation">
          <label>
            Where To ?
            <input
              type="text"
              name="destinationLocation"
              placeholder="e.g Mombasa"
              value={values.destinationLocation}
              onChange={onChange}
              required
              focused={focused.toString()}
            />
            <span className="errorMessage">Please provide a destination</span>
          </label>
          <label>
            Where From ?
            <input
              type="text"
              name="returnLocation"
              placeholder="e.g Entebbe Airport"
              value={values.returnLocation}
              onChange={onChange}
              required
              focused={focused.toString()}
            />
            <span className="errorMessage">
              Please provide a pick-up location
            </span>
          </label>
        </div>

        <div className="pickDates">
          <label>
            Departure Date
            <input
              type="date"
              name="startdate"
              //value={bookingData.startdate}
              value={values.startdate}
              onChange={onChange}
              //onChange={handleInputChange}

              min={new Date().toISOString().split("T")[0]} // Restrict to current date or later
            />
          </label>

          <label>
            Return Date
            <input
              type="date"
              name="enddate"
              placeholder="return date e.g 2023-05-31"
              //value={bookingData.enddate}

              value={values.enddate}
              onChange={onChange}
              // onChange={handleInputChange}
              min={
                new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                  .toISOString()
                  .split("T")[0]
              }
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
              //value={bookingData.adultCount}
              value={values.adultCount}
              onChange={onChange}
              //onChange={handleInputChange}
            />
          </label>

          <label className="children">
            Children
            <input
              type="number"
              name="childCount"
              min="0"
              //value={bookingData.childCount}
              value={values.childCount}
              onChange={onChange}
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
              placeholder="e.g Kwizera Davis"
              value={values.travelerName}
              onChange={onChange}
              focused={focused.toString()}
              //className={validationErrors.travelerNameError ? 'error' : ''}
              required
              //pattern="^[A-Za-z]+ [A-Za-z]+$"
              //pattern="^(?:[A-Za-z]+(?:\\s+|$)){2,}$"
              pattern="^(?:[A-Za-z]+\s*){2,}$"
            />
            {values.travelerName &&
              !/^(?:[A-Za-z]+\s*){2,}$/.test(values.travelerName) && (
                <span className="errorMessage">
                  Include a space between your names.
                </span>
              )}
          </label>

          <label>
            Phone Number
            <input
              type="text"
              name="travelerContact"
              placeholder="e.g +256*********"
              focused={focused.toString()}
              value={values.travelerContact}
              onChange={onChange}
              pattern="^(\+[1-9]\d{9,14}|0\d{9,14})$"
             
              required
            />
            {values.travelerContact &&
              !/^(\+[1-9]\d{9,14}|0\d{9,14})$/.test(values.travelerContact) && (
                <span className="errorMessage">
                  Please provide a valid phone number.
                </span>
              )}
          </label>
        </div>

        <div className="specialRequests">
          <label>
            Special Requests
            <textarea
              name="specialRequests"
              placeholder="Let us know how we can make your trip more enjoyable "
              //value={bookingData.specialRequests}
              value={values.specialRequests}
              onChange={onChange}
              //onChange={handleInputChange}
            />
          </label>
        </div>
        {/** onBlur={handleFocus} */}
        <div className="submitBooking">
            <button type="submit" onClick={handleFocus}>
              {values.successMessage ? "Booking Complete" : "Complete Booking"}
            </button>
        </div>
        <p className="belowBook">Travel Africa with Insurance.</p>
      </form>
      <img
        className="imageBehindCard"
        src={BackgroundImage1}
        alt="Bwindi Impenetrable Forest as the background"
      />
    </section>
  );
};

export default BookingForm;
