import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/Repository.css";
import { Helmet } from "react-helmet";

const Repository = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const pinnedRepoId = [490452510, 732567631, 701164009]; //just Ids we'll have if statements for
  const unpinnedRepoId = []; //just Ids we'll have if statements for
  const [apiFail, setApiFail] = useState(false);

  const pinnedProjects = []; //this should be custom objects we force into the projects array
  const [repoArr, setRepoArr] = useState([]);
  const [projects, setProjects] = useState([]);

  const API_key = "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";
  /*
    This is a read only api key, but instead of using mine and diminishing my rate limit, please make your own for free (which is what I did)

  */

  const rotateColors = (colors) => {
    const startIndex = Math.floor(Math.random() * colors.length);
    return [...colors.slice(startIndex), ...colors.slice(0, startIndex)];
  };

  const chartColors = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
  ];

  const axiosInstance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
      Authorization: API_key,
    },
  });
  const getRepos = async () => {
    let response = await axiosInstance
      .get("/users/saileshp56/repos")
      .catch(function (err) {
        console.log("Error  was ", err)
        setApiFail(true);
      });

    let repos = response["data"];
    for (let i = 0; i < repos.length; ++i) {
      if (pinnedRepoId.includes(repos[i].id)) {
        repos[i].pinned = true;
      } else {
        repos[i].pinned = false;
      }
    }
    // repos += pinnedProjects;
    repos = repos.sort((a, b) =>
      a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
    );
    for (let i = 0; i < repos.length; ++i) {
      if (repos[i].fork && !repos[i].pinned) {
        repos.splice(i, 1);
      } else if (repos[i].pinned) {
        repos.splice(0, 0, repos[i]);
        repos.splice(i + 1, 1);
      }
    }

    setRepoArr(repos);
  };
  useEffect(() => {
    getRepos();
  }, []);

  useEffect(() => {
    const promises = repoArr.map(async (repo) => {
      console.log(repoArr);
      const languagesObject = await getLanguages(repo["name"]);
      let titleArr = repo["name"].split("-");
      for (let i = 0; i < titleArr.length; i++) {
        titleArr[i] =
          titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1);
      }
      titleArr = titleArr.join(" ");

      return {
        id: repo.id,
        titleArr,
        languagesObject,
        description:
          // repo.description && repo.description.length > 300
          //   ? repo.description.slice(0, 297) + "..."
          //   : repo.description,
          repo.description,
        url: repo.html_url,
        pinned: repo.pinned,
      };
    });
    Promise.all(promises).then((data) => {
      setProjects(pinnedProjects.concat([...data]));
    });
  }, [repoArr]);

  const getLanguages = async (title) => {
    return await axiosInstance.get(`/repos/saileshp56/${title}/languages`);
  };

  return (
    <section class="entire-thing" id="repos">
      <Helmet>
              <html lang="en" />
              <meta
                name="description"
                content="GitHub Repositories, Full-Stack Programming Projects, Computer Science Projects"
              />
            </Helmet>
    <h1 className="repositories-title" >Repositories</h1>
    <br />
    <br />
    <br />

    <h1 className="mini-title" style={{"paddingLeft": "15px"}}>GitHub Repositories</h1>


    <div class="main">
      {apiFail && (
        <p>
          Due to high website traffic, I am unable to display the rest of my
          projects. Please visit{" "}
          <a
            href="https://github.com/saileshp56?tab=repositories"
            target="_blank"
          >
            my GitHub
          </a>{" "}
          to see them, and try again in the next hour.
        </p>
      )}

      {projects.map((p) => {
        let sum = 0;
        let languagesArr = [];

        for (const property in p.languagesObject.data) {
          sum += p.languagesObject.data[property];
          languagesArr.push({
            language: property,
            value: p.languagesObject.data[property],
          });
        }
        const randomizedColors = rotateColors(chartColors);

        const data = {
          labels: languagesArr.map((lang) => lang.language),
          datasets: [
            {
              label: "% of Usage",
              data: languagesArr.map((lang) => (lang.value / sum) * 100),
              backgroundColor: randomizedColors, // Use the rotated colors
              borderColor: randomizedColors.map(color => color.replace('0.6', '1')), // Replace the alpha value for border
              borderWidth: 1,
            },
          ],
        };
        const options = {
          plugins: {
            maintainAspectRatio: false,

            legend: {
              position: "right",
              labels: {
                // This more specific font property overrides the global property
                color: "white",
                usePointStyle: true,
                pointStyle: "circle",

                font: {
                  size: 10,
                },
              },
            },
          },
          maintainAspectRatio: true,
        };

        return (
          <div key={p.id} className="card">
            {/* <Helmet>
              <html lang="en" />
              <title>Sailesh Portfolio | Repositories</title>
              <meta
                name="description"
                content="GitHub Repositories, Full-Stack Programming Projects, Computer Science Projects"
              />
            </Helmet> */}
            <div className="project-header-content">
      <div className="project-header">
        <div className="project-title">
          <h1 className="link-and-title">
          <a
            href={p.url}
            target="_blank"
            onClick={(e) => {
              p.url === "No Link" ? e.preventDefault() : void 0;
            }}
          >
            {p.titleArr}
          </a>
            {p.pinned && (
              <span role="img" aria-label="pin" style={{ marginLeft: '5px' }}>
                📌
              </span>
            )}
          </h1>
          
        </div>
      </div>
              <p className="project-text">{p.description}</p>
            </div>
            <div className="graph">
              <Pie data={data} options={options}  />
                  </div> 
          </div>
        );
      })}
    </div>
    </section>
    
  );
};

export default Repository;
