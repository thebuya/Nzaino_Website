import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Helmet>
          <meta
            name="description"
            content="Discover the beauty of Africa with Nzaino. We offer car rentals, trip planning, tour guides, accommodation booking, and assistance in document processing. Contact us today to start your African adventure."/>

          <meta property="og:title" content="Nzaino Travel Africa - Your East African Guide" />
          <meta property="og:site_name" content="Nzaino Travel Africa" />
          <meta property="og:description" content="Discover the beauty of Africa with Nzaino. We offer car rentals, trip planning, tour guides, accommodation booking, and assistance in document processing. Contact us today to start your African adventure." />
          <meta property="og:image" content="https://www.nzaino.com/og-image.jpg" />
          <meta property="og:url" content="https://www.nzaino.com/"/>
          <meta name="twitter:title" content="Nzaino Travel Africa - Your East African Travel Guide" />
          <meta name="twitter:description" content="Discover the beauty of Africa with Nzaino. We offer car rentals, trip planning, tour guides, accommodation booking, and assistance in document processing. Contact us today to start your African adventure." />
          <meta name="twitter:image" content="https://www.nzaino.com/twitter-image.jpg" />
    </Helmet>

    <App />
   
  </React.StrictMode>
);

reportWebVitals();
