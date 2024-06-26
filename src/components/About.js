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
    <section id="about">
      <Helmet>
        <html lang="en" />

        <meta
          name="description"
          content="Programmer, Developer, Full-Stack Developer, Full Stack Developer, Full-Stack, Full Stack, Software Engineer, Blockchain Developer, Web3 Developer, Contact Me, Contact the developer, Contact programmer, Contact Full-Stack developer, email, github, linkedin, twitter, Computer Science, Programming Portfolio"
        />
      </Helmet>
        <div class="container" >
            <div class="columns is-centered">
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
                <div class="column-right">
                <p>

                I'm a 21 y/o <span style={{ color: "#339fde" }}>Software Engineer</span> and Computer Science student @ the{" "}
                
                <span style={{ color: "#EAAB00" }} className="tooltip">
              <abbr title="">University of Waterloo</abbr>.
              <span className="tooltiptext" style={{zIndex: "10000"}}>Honours Bachelor of Computer Science 2026</span>
            </span>{" "}

                <br/><br/>
              </p>
              
              <p>
              I'm a skilled {" "}
              <span style={{ color: "#339fde" }} className="tooltip">
              <abbr title="">Full-Stack developer</abbr>
              <span className="tooltiptext">React.js, Express.js, Node.js</span>
            </span> {" "}
              (my usual role during hackathons + I've made multiple projects),
              an (at least) 
              {" "}
              <span style={{ color: "#339fde" }} className="tooltip">
              <abbr title="">FAANG level software engineer</abbr>
              <span className="tooltiptext">Java, Kotlin, C++, Python, (Java/Type)Script</span>
            </span>,{" "}
              <span style={{ color: "#339fde" }} className="tooltip">
              <abbr title="">Database designer</abbr>
              <span className="tooltiptext">Mongoose, MongoDB, SQL, NoSQL</span>
            </span>, 
              
              and an AWS certified cloud practitioner (this just means I'm good at deploying applications to AWS).
              <br/><br/>


            
          </p>

          <h3 class="special">What I'm working on 👨‍💻</h3>
          <ul id="interests">
            <li>
              <input type="checkbox" disabled></input>
              &nbsp;&nbsp;&nbsp;&nbsp;I'm a Software Development Engineer Intern at Amazon this summer!

            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;&nbsp;&nbsp;Blockchain Development Tools
              
            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;&nbsp;&nbsp;Hackathons
            </li>
          </ul>
                <br />
                <h3 class="special">My Blockchain Work 🦄	</h3>
                <ul id="interests">
            <li>
              <input type="checkbox" disabled></input>
              &nbsp;&nbsp;&nbsp;&nbsp;UWaterloo Blockchain Club Executive and Researcher

            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;&nbsp;&nbsp;ETHDenver 2024 ZKSnake &#8212; First Place MetaMask & Risc0
              
            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;&nbsp;&nbsp;ChainSafe Web3.js NFT Plugin &#8212; Second Place
            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;&nbsp;&nbsp;The Graph Foundation USDT Account Relations Subgraph &#8212; First Place
            </li>
          </ul>
          <br />
          <h3 class="special">Contact Me 📫	</h3>
          <ul id="interests-links">
            <li>
              <input type="checkbox" disabled></input>
              &nbsp;&nbsp;<a href="https://t.me/unhingexd" target="_blank">&nbsp;&nbsp;Telegram</a>

            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;<a href="mailto:saileshp.dev@gmail.com">&nbsp;&nbsp;Email</a>
              
            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;<a href="https://linkedin.com/in/saileshpola" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;LinkedIn</a>
            </li>
            <li>
            <input type="checkbox" disabled></input>
            &nbsp;&nbsp;<a href="https://twitter.com/Unhingexd" target="_blank" rel="noopener noreferrer">&nbsp;&nbsp;𝕏 Twitter</a>
            </li>
          </ul>
                <br />
            
          <h3 class="special">Check Out my Work 💹</h3>

            <ul id="interests-links">
            <li>
              <input type="checkbox" disabled></input>
              &nbsp;&nbsp;<a href="https://github.com/saileshp56" target="_blank">&nbsp;&nbsp;GitHub</a>

            </li>
            <li>
              <input type="checkbox" disabled></input>
              &nbsp;&nbsp;<a href="https://hub.docker.com/u/saileshp56" target="_blank">&nbsp;&nbsp;Docker Hub</a>
            </li>
            </ul>

                </div>

            </div>

        </div>
        
    </section>
  )
}

export default About