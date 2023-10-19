import React from "react";
import "./skills.css";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { DiPhotoshop } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { FaSass, FaHtml5, FaGit } from "react-icons/fa";
import { SiCss3, SiNodedotjs, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">
              3 Years Experience in QA <br />1 Year Experience in Web
              Development
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkills">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <BiLogoJavascript className="icon" />
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <FaSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <SiNodedotjs className="icon" />
              </div>
              <span className="skillName">Node.js</span>
            </div>

            {/* <div className="singleSkills">
              <div className="iconBox flex">
                <SiMongodb className="icon" />
              </div>
              <span className="skillName">MongoDB</span>
            </div> */}
          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX</h2>
            <span className="subTitle">
              3 Years Experience in QA <br />1 Year Experience in Web
              Development
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkills">
              <div className="iconBox flex">
                <CgFigma className="icon" />
              </div>
              <span className="skillName">Figma</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <DiPhotoshop className="icon" />
              </div>
              <span className="skillName">Photoshop</span>
            </div>
          </div>
        </div>

        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">
              3 Years Experience in QA <br />1 Year Experience in Web
              Development
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkills">
              <div className="iconBox flex">
                <AiFillGithub className="icon" />
              </div>
              <span className="skillName">GitHub</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <FaGit className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkills">
              <div className="iconBox flex">
                <SiMongodb className="icon" />
              </div>
              <span className="skillName">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
