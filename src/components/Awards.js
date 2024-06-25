import React from 'react'
import "../styles/Awards.css"
import { Helmet } from "react-helmet";

const Awards = () => {
  return (

        <div class="tile is-parent work-elem-award" id="achievements">
          <Helmet>
        <html lang="en" />

        <meta
          name="description"
          content="Awards, Achievements, Scholarships"
        />
      </Helmet>
          <div class="tile is-child">
            <h1 class="title is-2 section-title-award">Awards</h1>
            <table class="table">
              <thead>
                <tr>
                  <th>Award Name</th>
                  <th>Value</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>ETHDenver 2024 Metamask and RISC0 Bounty &#8212; First Place Winner</td>
                  <td>$8000 USD</td>
                  <td>03/2024</td>
                </tr>
                <tr>
                  <td>ChainSafe Web3.js Plugin Bounty &#8212; Second Place</td>
                  <td>$1500 USD</td>
                  <td>02/2024</td>
                </tr>
              <tr>
                  <td>UWaterloo Blockchain Club Research Circle Researcher</td>
                  <td></td>
                  <td>02/2024</td>
                </tr>
                <tr>
                  <td>The Graph Foundation Subgraph Development Hackathon - First Place</td>
                  <td>$1000 USD</td>
                  <td>10/2023</td>
                </tr>
                <tr>
                  <td>Ananmalay Computer Science Scholarship</td>
                  <td>$1100 CAD</td>
                  <td>09/2023</td>
                </tr>
                <tr>
                  <td>Espial Computer Science Scholarship</td>
                  <td>$1000 CAD</td>
                  <td>09/2022</td>
                </tr>
                <tr>
                  <td>Carleton Computer Science Faculty Sponsorship</td>
                  <td>$16000 CAD</td>
                  <td>09/2021</td>
                </tr>
                <tr>
                  <td>Waterdown Rotary Club Leadership Sponsorship</td>
                  <td>$1000 CAD</td>
                  <td>09/2021</td>
                </tr>
                <tr>
                  <td>Air Cadets Paul Proulx Award for Spirit and Engagement</td>
                  <td></td>
                  <td>02/2021</td>
                </tr>
                <tr>
                  <td>Air Cadets Rank of Warrant Officer Second Class</td>
                  <td></td>
                  <td>01/2020</td>
                </tr>
                <tr>
                  <td>4.0 GPA University of Waterloo and Carleton University</td>
                  <td></td>
                  <td>All terms</td>
                </tr>
                <tr>
                  <td>Dean's Honours List</td>
                  <td></td>
                  <td>All terms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

  )
}

export default Awards