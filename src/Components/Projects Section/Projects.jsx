import React from "react";
import "./projects.css";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import { AiFillGithub } from "react-icons/ai";

const data = [
  {
    id: 1,
    image: img1,
    link: "https://www.newsexplorer.lozan.com/",
    github: "https://github.com/aydar013/news-explorer-frontend",
    title: "NewsExplorer",
    desc: "This is the news explorer web application which is focused on searching news on any topic and saving them.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    tech4: "React",
  },
  {
    id: 2,
    image: img2,
    link: "https://www.wtwr.servernux.com/",
    github: "https://github.com/aydar013/se_project_react",
    title: "WTWR - What To Wear",
    desc: "This is the news explorer web application which is focused on searching news on any topic and saving them.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    tech4: "React",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            link,
            desc,
            title,
            tech2,
            tech1,
            tech3,
            tech4,
          }) => {
            return (
              <div className="singleProject" key={id}>
                <div className="externalLinks flex">
                  <div className="githubIcon">
                    <a href={github} target="_blank" rel="noreferrer">
                      <AiFillGithub className="icon" />
                    </a>
                  </div>
                </div>

                <div className="imgDev">
                  <a href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">{desc}</div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
