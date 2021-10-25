import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./ebookshop.css";

const EBookshop = () => {
  return (
    <div className="ebookshop--container">
      <Header />
      <div className="ebookshop--container__header">
        <div className="ebookshop--header__title">E-Bookshop</div>
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
      <div className="ebookshop--image__container">Image</div>
      <Footer />
    </div>
  );
};

export default EBookshop;
