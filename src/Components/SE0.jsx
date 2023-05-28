import React from 'react'
import { Helmet } from 'react-helmet';

function SEO(props) {
  return (
    <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.seodescription} />
            {/* Open Graph meta tags */}
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.seodescription} />
            <meta property="og:image" content={props.ogimage} />
            <meta property="og:image:alt" content={props.title} />
            <meta property="og:url" content={window.location.href} />
            {/* Twitter meta tags */}
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.seodescription} />
            <meta name="twitter:image" content={props.twitterimage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@ich_bin_buya" />
            <meta name="twitter:image:alt" content={props.title} />

            {/* Add other meta tags if needed */}
            <meta name="keywords" content={`Ugandan car hires, east african Tours, africa Travel tips, Blog, East Africa, Cheap travel packages + ${props.keywords} `} />
            <meta name="author" content={`Morris Higenyi Wabuya`} />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_UG" />
            <meta name="language" content="en-UG" />
           {/**<meta name="twitter:site" content="@yourtwitterhandle" />  */} 
  </Helmet>
  )
}

export default SEO