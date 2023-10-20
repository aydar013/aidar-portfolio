import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { BsInstagram } from "react-icons/bs";
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g8dhkaq",
      "template_8qon6va",
      form.current,
      "dvho7LmdO8eSWFtlK"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon" />
              </div>
              <span className="userName">@aydar013</span>

              <div>
                <a
                  href="https://www.instagram.com/aydar013/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send Message <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
            <div className="card">
              <div>
                <AiFillLinkedin className="icon" />
              </div>
              <span className="userName">Aidar Shaidullin</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/aidar-shaidullin-424010279/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send Message <TbArrowBigRightLines className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter Your name" name="name" />
            <input type="email" placeholder="Enter Your Email" name="email" />
            <textarea
              name="message"
              placeholder="Enter Your message"
            ></textarea>
            <button className="formBtn" type="submit" name="subnit">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
