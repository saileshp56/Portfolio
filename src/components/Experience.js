import React from 'react'
import canada_img from "../images/canada.png";
import carleton_img from "../images/carleton.png";
import sov_prime_img from "../images/sov_prime.jpeg";
import uw_img from "../images/uwlogo123.png";
import amazon_img from "../images/amazon.png";


import "../styles/Experience.css"
import { Helmet } from "react-helmet";


const Experience = () => {
  return (
    <section class="section" id="experience">
      <Helmet>
        <html lang="en" />

        <meta
          name="description"
          content="Work Experience, Professional Experience, Professional Portfolio, Programming Jobs"
        />
      </Helmet>
      <div class="tile is-ancestor">
        <div class="tile is-parent work-elem">
          <div class="tile is-child">
            <h1 class="title is-2 section-title">Experience</h1>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
        <div class="tile is-parent work-elem">
            <div class="tile is-child is-3">
              <figure class="image is-128x128 work-logo">
                <img src={amazon_img}/>
              </figure>
            </div>
            <div class="tile is-child">
              <p class="title is-4"><a href="https://aws.amazon.com/" target="_blank">Amazon</a></p>
              <p class="subtitle is-5">
                Software Development Engineer Intern<br/>
                <span class="subtitle is-6">JUNE 2024 -  SEPTEMBER 2024</span><br/>
                <span class="subtitle is-6">Vancouver, BC</span><br/>
                <span class="subtitle is-6">OOP, Kotlin, TypeScript</span>
              </p>
              <p class="work-content">
                <ul>
                  <li>
                  • Creating internal tooling for AWS teams using OOP principles with Typescript and Kotlin
                  </li>
                </ul>
              </p>
            </div>
          </div>

        <div class="tile is-parent work-elem">
            <div class="tile is-child is-3">
              <figure class="image is-128x128 work-logo">
                <img src={uw_img}/>
              </figure>
            </div>
            <div class="tile is-child">
              <p class="title is-4"><a href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a></p>
              <p class="subtitle is-5">
                Undergraduate Research Assistant &mdash; Machine Learning<br/>
                <span class="subtitle is-6">JANUARY 2024 -  APRIL 2024</span><br/>
                <span class="subtitle is-6">Waterloo, ON</span><br/>
                <span class="subtitle is-6">C++, CUDA, Python, Pandas</span>
              </p>
              <p class="work-content">
                <ul>
                  <li>
                  • Researched Parallelizing Zero-Knowledge Proofs of Machine Learning workloads to reduce proof overhead
                  </li>
                  <li>
                  • Work with PyTorch and Linux Servers to compare and analyze ZK frameworks on Runtime, and Space Usage
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div class="tile is-parent work-elem">
            <div class="tile is-child is-3">
              <figure class="image is-128x128 work-logo">
                <img src={canada_img}/>
              </figure>
            </div>
            <div class="tile is-child">
              <p class="title is-4"><a href="https://www.canada.ca/en/public-services-procurement.html" target="_blank">Federal Government of Canada</a></p>
              <p class="subtitle is-5">
                Junior Web Developer<br/>
                <span class="subtitle is-6">MAY 2023 - SEPTEMBER 2023</span><br/>
                <span class="subtitle is-6">Ottawa, ON</span><br/>
                <span class="subtitle is-6">React.js, Express.js, Docker, Python, Selenium</span>
              </p>
              <p class="work-content">
                <ul>
                  <li>
                  • Programmed Front-end and Back-end applications using React.js and Express.js for tasks such as Web Scraping and requesting federal government contract history for both internal and public use
                  </li>
                  <li>
                  • Used Selenium to automate live fact checking of company reports, saving the company hundreds of hours on my own initiative
                  </li>
                  <li>
                  • Containerized and programmed Node and Python Back-end technology using Docker for ease of end users
                  </li>
                  <li>
                  • Deployed Full-Stack and Front-end applications using AWS Cloud Computing and Drupal
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div class="tile is-parent work-elem">
            <div class="tile is-child is-3">
              <figure class="image is-128x128 work-logo">
                <img src={carleton_img} />
              </figure>
            </div>
            <div class="tile is-child">
              <p class="title is-4"><a href="https://carleton.ca/" target="_blank">Carleton University</a></p>
              <p class="subtitle is-5">
              Undergraduate Computer Science Teaching Assistant<br/>
                <span class="subtitle is-6">SEPTEMBER 2022 - APRIL 2023</span><br/>
                <span class="subtitle is-6">Ottawa, ON</span><br/>
                <span class="subtitle is-6">Java</span>

              </p>
              <p class="work-content">
              <ul>
                  <li>
                  • Taught Java programming and libraries to over 100 students through weekly tutorials to advance their understanding of lectures, programming concepts, and to showcase Java functionality and frameworks
                  </li>
                  <li>
                  • Answered student questions regarding Java syntax, errors and library documentation to help with coursework
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div class="tile is-parent work-elem">
            <div class="tile is-child is-3">
              <figure class="image is-128x128 work-logo">
                <img src={sov_prime_img} />
              </figure>
            </div>
            <div class="tile is-child">
              <p class="title is-4"><a href="" target="_blank">Sovereign Prime</a></p>
              <p class="subtitle is-5">
                Front-End Development Intern<br/>
                <span class="subtitle is-6">MAY 2022 - SEPTEMBER 2022</span><br/>
                <span class="subtitle is-6">Ottawa, ON</span><br/>
                <span class="subtitle is-6">React.js</span>

              </p>
              <p class="work-content">
              <ul>
                  <li>
                  • Programmed multiple components using React.js with high regard to scalability and decreased page rendering time by 25% to successfully emulate a social media profile page and online marketplace

                  </li>
                  <li>
                  • Merged WebSocket chat room app and personal work into the website using GitHub and knowledge of the project architecture of over 160 files to keep website up to date with peoples’ work

                  </li>
                  <li>
                  • Installed multiple JavaScript libraries into the project using dependency files and node package manager to expand the website’s use cases and improve scalability
                  </li>
                  <li>
                    • Proposed website ideas and communicated with over 55 coworkers to avoid work duplication, and maintain documentation and standard design principles

                  </li>
                </ul>
              </p>
            </div>
          </div>
     

           
          

        </div>
      </div>

      
    </section>
  )
}

export default Experience;