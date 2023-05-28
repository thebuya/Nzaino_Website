import React, { useState } from 'react';
import './newsletter.css';
import BackgroundBlog from '../Images/subscribingheader2.jpg';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Please input an email address 😬');
      setSuccessMessage('');
      handleErrorMessage();
    } else if (!isValidEmail(email)) {
      setErrorMessage('Please input a valid email address😬');
      setSuccessMessage('');
      handleErrorMessage();
    } else if (!isValidEmail(email)) {
      setErrorMessage('Thank you, Mr.CEO🤗');
      setSuccessMessage('');
      handleErrorMessage();
    } else {
      // Clear error message if email is valid
    setErrorMessage('');
    // Set success message
    if (email === 'batekerezad@gmail.com') {
      setSuccessMessage('Thank you, Mr.CEO🤗');
    } else if (email === 'kwizeradavisnkurunziza@gmail.com') {
      setSuccessMessage('Bankai! 🎭⚔️');
    } else {
      setSuccessMessage('Subscription Successful! Thank you');
    }
    // Handle successful form submission
    handleFormSubmit();
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleErrorMessage = () => {
    // Clear error message after a certain duration
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  };

  const handleFormSubmit = () => {
    setEmail('');
    // Clear success message after a certain duration
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <section className="NewsLetter">
      <h2 className="title">Travel Africa with Our Exclusive Tips</h2>
      <div className="subscribing">
        <form onSubmit={handleSubmit}>
          <div className="inputWerror">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
          </div>
          <button aria-label='Subscribe to Nzaino NewsLetter' type="submit" className="subscribeButton">
            Subscribe
          </button>
        </form>
      </div>
      <img src={BackgroundBlog} className="BackBlog subscribeback" alt="Aerial view of Zanzibar Coast" />
    </section>
  );
};

export default NewsLetter;
