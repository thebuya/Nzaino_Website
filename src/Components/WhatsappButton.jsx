import React from 'react';
import { FaWhatsapp} from "react-icons/fa";
import './backtotop.css'

const WhatsAppButton = () => {
  return (
    <a
      className="whatsapp-button"
      href="https://wa.me/256772525312" // Replace with your WhatsApp number or link
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
    >
     <FaWhatsapp/>
    </a>
  );
};

export default WhatsAppButton;
