import React from 'react'
import '../styles/Resume.css';
import { Helmet } from "react-helmet";


const Resume = () => {
  return (

      <div id="resume">
        <Helmet>
              <html lang="en" />
              <meta
                name="description"
                content="Full-Stack Programming Resume, Computer Science Resume, Programming Resume"
              />
            </Helmet>
        <div class="tile resume">
          <div class="tile is-child">
          <h1 class="title is-2 section-title resume">Resume</h1>
          <iframe
        title="Resume"
        src="https://chocolate-fanni-72.tiiny.site/"
        className="pdf-iframe"
        aria-label="PDF document"
        scrolling="no"
      />
      <div className="pdf-container">
      <p className="pdf-text">
        If the PDF is not loading, check it out on{" "}
        <a href="https://chocolate-fanni-72.tiiny.site/" target="_blank">
          tiiny.host
        </a>
      </p>
      </div>
          
          </div>
        </div>
      </div>
      

  )
}

export default Resume;