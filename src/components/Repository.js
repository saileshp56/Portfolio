import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../styles/Repository.css";
import { Helmet } from "react-helmet";

const Repository = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const pinnedRepoId = [490452510, 732567631, 701164009];
  const [apiFail, setApiFail] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const pinnedProjects = [];
  const [repoArr, setRepoArr] = useState([]);
  const [projects, setProjects] = useState([]);

  const API_key = "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";

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
      .get("/users/saileshp56/repos?per_page=100")
      .catch(function (err) {
        console.log("Error was ", err);
        setApiFail(true);
      });
    if (!response || !response["data"]) {
      return;
    }
    let repos = response["data"];
    let pinnedRepos = [];
    let unpinnedRepos = [];

    repos.forEach(repo => {
      if (pinnedRepoId.includes(repo.id)) {
        repo.pinned = true;
        pinnedRepos.push(repo);
      } else {
        repo.pinned = false;
        if (!repo.fork) {
          unpinnedRepos.push(repo);
        }
      }
    });

    // Sort repos by creation date
    pinnedRepos = pinnedRepos.sort((a, b) =>
      a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
    );

    unpinnedRepos = unpinnedRepos.sort((a, b) =>
      a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
    );

    setRepoArr([...pinnedRepos, ...unpinnedRepos]);

  };

  useEffect(() => {
    getRepos();
  }, []);

  useEffect(() => {
    console.log(repoArr);

    const fetchLanguages = async () => {
      const promises = repoArr.map(async (repo) => {

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
          description: repo.description,
          url: repo.html_url,
          pinned: repo.pinned,
        };
      });
      const data = await Promise.all(promises);
      setProjects(pinnedProjects.concat([...data]));
    };

    if (repoArr.length > 0) {
      fetchLanguages();
    }
  }, [repoArr]);

  const getLanguages = async (title) => {
    return await axiosInstance.get(`/repos/saileshp56/${title}/languages`);
  };

  return (
    <section className="entire-thing" id="repos">
      <Helmet>
        <html lang="en" />
        <meta
          name="description"
          content="GitHub Repositories, Full-Stack Programming Projects, Computer Science Projects"
        />
      </Helmet>
      <h1 className="repositories-title">GitHub Repositories</h1>
      <br />
      <br />
      <br />

      <div className="main">
        {apiFail && (
          <p>
            Due to high website traffic, I am unable to display the rest of my
            projects. Please visit{" "}
            <a
              href="https://github.com/saileshp56?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              my GitHub
            </a>{" "}
            to see them, and try again in the next hour.
          </p>
        )}

        {projects.slice(0, showAll ? projects.length : 9).map((p) => {
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
                borderColor: randomizedColors.map(color =>
                  color.replace('0.6', '1')
                ), // Replace the alpha value for border
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
            <div key={p.id} className="card-repo">
              <Helmet>
                <html lang="en" />
                <title>Sailesh Portfolio | Repositories</title>
                <meta
                  name="description"
                  content="GitHub Repositories, Full-Stack Programming Projects, Computer Science Projects, Software Projects"
                />
              </Helmet>
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
                        <span
                          role="img"
                          aria-label="pin"
                          style={{ marginLeft: "5px" }}
                        >
                          📌
                        </span>
                      )}
                    </h1>
                  </div>
                </div>
                <p className="project-text">{p.description}</p>
              </div>
              <div className="graph">
                <Pie data={data} options={options} />
              </div>
            </div>
          );
        })}
      </div>
      {projects.length > 9 && (
        <button className="show-all-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      )}
    </section>
  );
};

export default Repository;
