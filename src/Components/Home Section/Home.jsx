import React from "react";
import "./home.css";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FiChevronsDown } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/aydar013" target="_blank">
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aidar-shaidullin-424010279/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <div className="line"></div>
        </div>
      </div>
      <div className="container homeContainer">
        <span className="introText">Hi, my name is </span>
        <h1 className="title">Aidar Shaidullin</h1>
        <span className="subTitle">I'm developing React websites</span>
        <p className="homeParagraph">
          Really motivated to create more and more
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact me <TbArrowBigRightLines className="icon" />
            </a>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll down</h6>{" "}
              <FiChevronsDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:aydar013@gmail.com" target="_blank">
              aydar013@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
