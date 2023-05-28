import React from 'react';
import { FaWhatsapp} from "react-icons/fa";
import './backtotop.css'

const WhatsAppButton = () => {
    const message = encodeURIComponent('Hey Nzaino Travels, I was just on your website.'); // Encode the message

  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/256772525312?text=${message}`} 
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
    >
     <FaWhatsapp/>
    </a>
  );
};

export default WhatsAppButton;
