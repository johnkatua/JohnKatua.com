import React from "react";
import "./contact.css";
import {
  Mail as MailICon,
  Linkedin as LinkedinIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
} from "react-feather";
import { Link } from "react-router-dom";
// import emailjs from 'emailjs-com';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__header">Let's Build Something Together.</div>
      <div className="contact-page__content">
        <div className="contact-page__media">
          <div className="contact-media__description">
            Feel free to reach out if you are looking for a developer, have a question, or just want to connect. I'd
            love to get in touch with you.
          </div>
          <div className="contact-media__links">
            <div className="media-email">
              <div className="media-email__icon">
                <MailICon />
              </div>
              <Link to="/form">
                <div className="media-email__link">Email me for a chat</div>
              </Link>
            </div>
            <div className="media-linkedin">
              <div className="media-linkedin__icon">
                <LinkedinIcon />
              </div>
              <div className="media-linkedin__link">
                <a href="https://www.linkedin.com/in/johnkatua/" target="_blank" rel="noreferrer">
                  Connect with me
                </a>
              </div>
            </div>
            <div className="media-twitter">
              <div className="media-twitter__icon">
                <TwitterIcon />
              </div>
              <div className="media-twitter__link">
                <a href="https://twitter.com/realKatua_" target="_blank" rel="noreferrer">
                  Follow me on Twitter
                </a>
              </div>
            </div>
            <div className="media-instagram">
              <div className="media-instagram__icon">
                <InstagramIcon />
              </div>
              <div className="media-instagram__link">
                <a href="https://www.instagram.com/__johnkatua/" target="_blank" rel="noreferrer">
                  Follow me on Instagram
                </a>
              </div>
            </div>
            <div className="media-github">
              <div className="media-github__icon">
                <GitHubIcon />
              </div>
              <div className="media-github__link">
                <a href="https://github.com/johnkatua" target="_blank" rel="noreferrer">
                  Check out my projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
