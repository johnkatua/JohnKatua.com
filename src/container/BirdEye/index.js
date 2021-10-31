import React from "react";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import '../../stylesheet/stylesheet.css'

const BirdEye = () => {
  return (
    <div className="projects--container">
      <Header />
      <div className="projects--container__header">
        <h2 className="projects--header__title">E-Bookshop</h2>
        <div className="projects--header__description">
          <p className="header--description__para1">
            E-Bookshop is a React application built for an online store where users can login and such various
            programming books. Users can search and filter books in different categories. Users can also pay for the
            books using braintree.
          </p>
        </div>
        <div className="projects--header__details">
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
      <div className="projects--image__container">
        <div className="projects--image">
          <img className="projects--img" src="./Images/image5.png" alt="ebookshop" />
        </div>
      </div>
      <div className="projects--webstack__container">
        <div className="projects--webstack__purpose">
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
        <div className="projects--webstack__explanation">
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
          <div className="projects--process__container">
            <h2 className="projects--process__title">Problems and Thought Process</h2>
            <div className="projects--process__description">
              <p className="process--description__para1">
                Like most projects, I ran into few bumps along the way, one particularly difficult area was organization
                of the code. Because of this project's size, I realized how important maintaining an organized structure
                would be.
              </p>
              <p className="process--description__para2">
                I worked hard to keep components as reusable as possible and utilized props for many slight variations.
                I also used styled components, because the structure of CSS-in-js is much clearer and prevents overrides
              </p>
            </div>
          </div>
          <div className="projects--lesson__container">
            <h2 className="projects--lesson__title">Lesson Learned</h2>
            <p className="projects--lesson__details">
              I could spend all day describing the lesson that I learned while working on this project, but the most
              important ones involved my newfound understanding of React Hooks, Git management, Feature Keys, and API
              integration. As my first large project using React. I learned a lot of lessons regarding code structure
              and organisation. When I first began, I would write sloppy code and move on, but now I know how doing so
              can come back to bite you. I now spend a lot more time refactoring and imporiving every line of code I
              write, for the best readability and far fewer headaches.
            </p>
          </div>
        </div>
      </div>
      <Footer value="birdeye" />
    </div>
  );
};

export default BirdEye;
