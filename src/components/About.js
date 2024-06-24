import React from 'react'
import selfie from '../images/pfp.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faDocker,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";


const About = () => {
  return (
    <section class="section" id="about">
      <Helmet>
        <html lang="en" />

        <meta
          name="description"
          content="Programmer, Developer, Full-Stack Developer, Full Stack Developer, Full-Stack, Full Stack, Software Engineer, Blockchain Developer, Web3 Developer, Contact Me, Contact the developer, Contact programmer, Contact Full-Stack developer, email, github, linkedin, twitter, Computer Science, Programming Portfolio"
        />
      </Helmet>
        <div class="container">
            <div class="columns is-centered is-vcentered">
                <div class="column">
                <img class="avatar" src={selfie}/>
                <div class="about-title has-text-centered">
              <h1 class="title is-2">Sailesh Polavarapu</h1>
              <div class="has-text-centered">
              {/* <span class="about-subtitle" style={{fontSize: "150%"}}>
                ⟨ Software Engineer | Full-Stack Developer ⟩
                </span> */}
                <span class="about-subtitle" style={{fontSize: "150%"}}>
                ⟨ Software Engineer | Full-Stack Developer ⟩
                </span>
            </div>
            </div>
                </div>
                <div class="column">
                <p>
                  <br /><br />
                I'm a 20 y/o <span class="highlight">Software Engineer</span> and aspiring <span class="highlight">Algorithmic Trader</span>. I love working on hackathons and side projects in my spare time; I just can't sit still!  My passion for
                computer science has settled in the{" "}
                
                <span style={{ color: "#EAAB00" }} className="tooltip">
              <abbr title="">University of Waterloo </abbr>
              <span className="tooltiptext">Honours Bachelor of Computer Science 2025</span>
            </span>{" "}
                
                
                
                
                for now.
                
                
                
                <br/><br/>
              </p>
              
              <p>
            I am proficient in {" "}
            <span style={{ color: "#339fde" }}>React.js</span>,{" "}
            <span style={{ color: "#339fde" }}>Node.js</span> as well as{" "}
            <span style={{ color: "#D17B5B" }}>Database Technologies</span> such
            as <span style={{ color: "#68b848" }}>MongoDB</span> and{" "}
            <span style={{ color: "#68b848" }}>Mongoose</span>
            ,Firebase and SQL,{" "}
            <span style={{ color: "#D17B5B" }}>Backend Technologies</span> such
            as <span style={{ color: "#339fde" }}>Express.js</span>, and{" "}
            <span style={{ color: "#D17B5B" }}>DevOps</span> tools such as{" "}
            <span style={{ color: "#B892C0" }}>Docker</span> and{" "}
            <span style={{ color: "#B892C0" }}>Kubernetes</span>. <br />I am also an <span style={{ color: "#DBAA5E" }}>
              AWS Certified Cloud Practitioner
            </span> and an exceptional <span style={{ color: "#449346" }}>Python</span> and <span style={{ color: "#EB4A3F" }}>Java</span> programmer.<br />
            <br />
            

            
            
          </p>


              <p id="interests">
                Current Projects: Algorithmic Trading with Python, Blockchain Development, Hackathons<br/><br/>

                Blockchain Work: UWaterloo Blockchain Club Executive and Researcher, ETHDenver 2024 ZKSnake &#8212; 2x Bounty Winner, The Graph Foundation &#8212; USDT Subgraph, Web3.js &#8212; NFT Master Plugin<br/><br/>

                Current Research Interests: Trading Strategies, DeFi Intents<br/><br/>
                
              </p>

              <p id="contact">
              Reach out to me if you'd like to work together!<br/>
              </p>
              <ul class="contact-me-ulist">
            <li>
                <FontAwesomeIcon icon={faTelegram} />
                <a href="https://t.me/unhingexd" target="_blank">&nbsp;&nbsp;Telegram</a>
              </li>
              
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:saileshp.dev@gmail.com">&nbsp;&nbsp;Email</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  href="https://linkedin.com/in/saileshpola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;&nbsp;LinkedIn
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faXTwitter} />
                <a
                  href="https://twitter.com/Unhingexd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;&nbsp;Twitter
                </a>
              </li>
            </ul>
            <p>Check out my work!</p>
            <ul class="contact-me-ulist">
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <a
                  href="https://github.com/saileshp56"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;&nbsp;GitHub
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDocker} />
                <a
                  href="https://hub.docker.com/u/saileshp56"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;&nbsp;Docker
                </a>
              </li>
            </ul>

                </div>

            </div>

        </div>
        
    </section>
  )
}

export default About