import React from 'react';
import './contact.css';
import { Mail as MailICon, Linkedin as LinkedinIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, GitHub as GitHubIcon } from 'react-feather';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f8nwibj', 'template_dbamo09', e.target, 'user_8CswvBaem00tPZXHGfHI9')
      .then((result) => {
        console.log(result.text)
        alert('Email sent successfully')
      }, (error) => {
        console.log(error.text);
        alert('An error occurred')
      });
      e.target.reset();
  };
  return (
    <div className="contact-page">
      <div className="contact-page__header">Let's Build Something Together.</div>
      <div className="contact-page__content">
        <div className="contact-page__media">
          <div className="contact-media__description">
            Feel free to reach out if you are looking for a developer, have a question, or just want to connect.
            I'd love to get in touch with you.
          </div>
          <div className="contact-media__links">
            <div className="media-email">
              <div className="media-email__icon">
                <MailICon />
              </div>
              <div className="media-email__link">
                Email me for a chat
              </div>
            </div>
            <div className="media-linkedin">
              <div className="media-linkedin__icon">
                <LinkedinIcon />
              </div>
              <div className="media-linkedin__link">
                Connect with me
              </div>
            </div>
            <div className="media-twitter">
              <div className="media-twitter__icon">
                <TwitterIcon />
              </div>
              <div className="media-twitter__link">
                Follow me on Twitter
              </div>
            </div>
            <div className="media-instagram">
              <div className="media-instagram__icon">
                <InstagramIcon />
              </div>
              <div className="media-instagram__link">
                Follow me on Instagram
              </div>
            </div>
            <div className="media-github">
              <div className="media-github__icon">
                <GitHubIcon />
              </div>
              <div className="media-github__link">
                Check out my projects
              </div>
            </div>
          </div>
        </div>
        <form className="contact-page__form" onSubmit={sendEmail}>
          <div className="contact-form__name">
            <label className="name-label">Name:</label>
            <input type='text' className="form-name" name="name" />
          </div>
          <div className="contact-form__email">
            <label className="email-label">Email:</label>
            <input type="email" className="form-email" name="email" />
          </div>
          <div className="contact-form__subject">
            <label className="subject-label">Subject:</label>
            <input type="text"  className="form-subject" name="subject" />
          </div>
          <div className="contact-form__message">
            <label className="message-label">Message:</label>
            <textarea type="text" className="form-message" name="message"></textarea>
          </div>
          <div className="contact-form__button">
            <button className="submit-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;
