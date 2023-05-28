import React, { useState, useEffect } from 'react';
import './backtotop.css'

const BackToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 200; // Adjust the scroll position as needed
      setShowBackToTop(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showBackToTop && (
        <button
          className="back-to-top-button"
          onClick={handleBackToTop}
          title="Back to Top"
          aria-label="Go Back to Top of Screen"
        >

          &uarr;
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
