import React from 'react'
import reactimg from "../images/react.png";
import nodeimg from "../images/nodejs.png";
import javaimg from "../images/java.png";
import pythonimg from "../images/python.png";
import mongodbimg from "../images/mongodb.png";
import expressimg from "../images/express.png";
import figmaimg from "../images/figma.png";
import awsimg from "../images/aws.png";
import dockerimg from "../images/docker.png";
import web3 from "../images/web3js.png";
import typescriptimg from "../images/typescript.png";
import rustlang from "../images/rustlang.png";
import { Helmet } from "react-helmet";



import assemblyscriptimg from "../images/ascript.png";
import thegraphfoundationimg from "../images/the-graph-foundation.png";
import { FiLink } from "react-icons/fi";
import '../styles/Projects.css';



const Projects = () => {
    const portfolioData = [{
      title: "ZKSnake",
      description:
        "The Snake Game with a Zero Knowledge verifier that lets you prove your score to your friends as well as mint an NFT! Won First place in the RISC0 bounty and First place in the MetaMask bounty at ETHDenver 2024.",
      techImgs: [
        { src: rustlang, name: "Rust" },

        { src: expressimg, name: "Express.js" },
  
        { src: reactimg, name: "React" },
        { src: nodeimg, name: "Node.js" },
      ],
      live: false,
    },
        {
          title: "LibInHTML",
          description:
            "An internet library that converts PDFs into HTML pages to allow users to easily read and share books. Made using the MERN stack and deployed using AWS.",
          techImgs: [
            { src: awsimg, name: "Amazon Web Services" },
      
            { src: mongodbimg, name: "MongoDB" },
            { src: expressimg, name: "Express.js" },
      
            { src: reactimg, name: "React" },
            { src: nodeimg, name: "Node.js" },
            { src: figmaimg, name: "Figma" },
          ],
          live: true,
          link: "https://www.libinhtml.com/explore",
        },
        {
          title: "Web3.js NFT Master Plugin",
          description:
            "NFT Master is a web3.js plugin designed to simplify and enhance the interaction with ERC-721 NFTs. It is aimed primarily at developers, providing a robust suite of tools for querying NFT collections and NFT statistics. NFT Master facilitates seamless interaction between DApps and NFT collections.",
          techImgs: [
            { src: web3, name: "Web3.js" },
            { src: typescriptimg, name: "TypeScript" },
            { src: nodeimg, name: "Node.js" },
          ],
          live: true,
          link: "https://www.npmjs.com/package/@saileshp56/web3.js-plugin-nft-master",
        },
        {
          title: "Buy and Sell Web Scraper",
          description:
            "Website Aid for the Government of Canada's Buy and Sell Team to find all links to the deprecated buyandsell.gc.ca website. Also reports error codes, and auxiliary programs were made to sanitize the program's output. The Web Scraper is available in Python's Scrapy and Node's Puppeteer, and the backends were dockerized for deployment.",
          techImgs: [
            { src: awsimg, name: "Amazon Web Services" },
            { src: dockerimg, name: "Docker" },
      
            { src: expressimg, name: "Express.js" },
      
            { src: reactimg, name: "React" },
            { src: nodeimg, name: "Node.js" },
      
            { src: pythonimg, name: "Python" },
          ],
          live: true,
          link: "https://github.com/saileshp56/Buy-and-Sell-Web-Scraper-Link-Compilation/blob/main/Links.md",
        },
        {
          title: "Tether USDT Account Relations",
          description:
            "A subgraph that lets you find all the relations and monetary exchanges of a USDT address. This subgraph won first place in the UWaterloo x The Graph Foundation Hackathon of October 2023.",
          techImgs: [
            {
              src: thegraphfoundationimg,
              name: "The Graph Foundation Indexing Protocol",
            },
            { src: assemblyscriptimg, name: "Assembly Script" },
          ],
          live: true,
          link: "https://github.com/saileshp56/tether-usdt-account-relations",
        },
        {
          title: "Asset Manager Lite",
          description:
            "A local web application for users to track their assets and receive real time information on their value. Includes NYSE stocks, cryptocurrencies, foreign currencies, precious metals, and more. This site is ultra secure and does not share any of the user's information with other entities.",
          techImgs: [
            { src: reactimg, name: "React" },
            { src: nodeimg, name: "Node.js" },
          ],
        },
        {
          title: "Discrete Math",
          description:
            "Website Aid for Carleton University's COMP2804 discrete structures II course. I programmed question generators to produce variants of exam and midterm questions using Python.",
          techImgs: [{ src: pythonimg, name: "Python" }],
          live: true,
          link: "https://discretemath.ca/",
        },
        {
          title: "E-Commerce GUI",
          description:
            "A GUI store emulator made using JFX that allows the user to make purchases, edit their cart, allows the merchant to restock the store. Also maintains a real time product stock list and popular product leaderboard.",
          techImgs: [{ src: javaimg, name: "Java" }],
        },
      ];
  return (

    
    <section >
      <Helmet>
        <html lang="en" />

        <meta
          name="description"
          content="Programming Projects, Computer Science Projects"
        />
      </Helmet>
        <div className="projects" id="projects">
    <h1 className="projects-title" >Projects</h1>

          <div className="main">
            {portfolioData.map((project, index) => (
              <div className="card" key={index}>
                <h2 className="solo-title">
                  {project.title}
                  {project.live && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLink style={{ marginLeft: "10px", color: "white" }} />
                    </a>
                  )}
                </h2>
                <p>{project.description}</p>
                <div className="tech-icons">
                  {project.techImgs.map((img, i) => (
                    <div key={i} className="tooltip">
                      <img src={img.src} alt={img.name} />
                      <span className="tooltiptext">{img.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>

  )
}

export default Projects