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
          <meta property="og:site_name" content="Nzaino Travel Africa" />
    </Helmet>

    <App />
   
  </React.StrictMode>
);

reportWebVitals();
