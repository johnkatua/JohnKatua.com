import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./ebookshop.css";

const EBookshop = () => {
  return (
    <div className="ebookshop--container">
      <Header />
      <div className="ebookshop--container__header">
        <h2 className="ebookshop--header__title">E-Bookshop</h2>
        <div className="ebookshop--header__description">
          <p className="header--description__para1">
            E-Bookshop is a React application built for an online store where users can login and such various
            programming books. Users can search and filter books in different categories. Users can also pay for the
            books using braintree.
          </p>
        </div>
        <div className="ebookshop--header__details">
          <div className="header--details__box1">
            <h4 className="details--box1__title">Type</h4>
            <span className="details--box1__description">Personal Project</span>
          </div>
          <div className="header--details__box2">
            <h4 className="details--box2__title">Stack</h4>
            <ul className="details--box2__list">
              <li>React</li>
              <li>NodeJs</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="header--details__box3">
            <h4 className="details--box3__title">Live</h4>
            <p className="details--box3__description">Netlify</p>
          </div>
        </div>
      </div>
      <div className="ebookshop--image__container">
        <div className="ebookshop--image">
          <img className="ebookshop--img" src="./Images/image5.png" alt="ebookshop" />
        </div>
      </div>
      <div className="ebookshop--webstack__container">
        <div className="ebookshop--webstack__purpose">
          <h2 className="webstack--purpose__title">Project Purpose and Goal</h2>
          <div className="webstack--purpose__paragraphs">
            <div className="purpose__para1">
              This project included 3 phases and iterations of the site. Phase 1 simply allowed users to enter their
              email to be alerted to when the product was released. Phase 2 was quite larger and is designed to
              introduce users to the ebookshop and answer any questions they may have. Phase 3 is by far the largest and
              most complex, as it includes the full shop and cart pages as well as the logic and backend that goes along
              with it.
            </div>
            <div className="purpose__para2">
              I found that the best way to implement these 3 phases without having separate versions saved was to
              incorporate a feature flag that will pass the current state that should be displayed and then render
              content conditionally.
            </div>
          </div>
        </div>
        <div className="ebookshop--webstack__explanation">
          <h2 className="webstack--explanation__title">Web stack and Explanation</h2>
          <div className="webstack--explanation__container">
            <div className="webstack--list">
              <ul>
                <li>React</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="webstack--explanation">
              <div>
                This project included 3 phases and iterations of the site. Phase 1 simply allowed users to enter their
                email to be alerted to when the product was released. Phase 2 was quite larger and is designed to
                introduce users to the ebookshop and answer any questions they may have. Phase 3 is by far the largest
                and most complex, as it includes the full shop and cart pages as well as the logic and backend that goes
                along with it.
              </div>
              <br />
              <div>
                I found that the best way to implement these 3 phases without having separate versions saved was to
                incorporate a feature flag that will pass the current state that should be displayed and then render
                content conditionally.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EBookshop;
