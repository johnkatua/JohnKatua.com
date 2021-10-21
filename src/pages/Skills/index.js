import React from 'react';
import { TiTick } from 'react-icons/ti';
import './skills.css';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <div className="skills-page__header">
        My Skills
      </div>
      <div className="skills-page__description">
        <p className="skills-page__paragraph">
          Apart from the courses included in my degree. I have taken a number of online
          courses such as Modern Javascript for Beginners 2020 + Javascript Project, React - Build
          your React App fast using React Design System. I have also read some programming books which
          include Eloquent_Javascript, CSS in Depth, Fullstack Node.js and I'm currently reading 
          Practical Enterprise React.
        </p>
      </div>
      <div className="skills-page__data">
        <div className="data-row1">
          <div className="data-row1__upper">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>Javascript ES6</p>
          </div>
          <div className="data-row1__lower">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>React</p>
          </div>
        </div>
        <div className="data-row2">
          <div className="data-row2__upper">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>GraphQL</p>
          </div>
          <div className="data-row2__lower">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>CSS3</p>
          </div>
        </div>
        <div className="data-row3">
          <div className="data-row3__upper">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>Typescript</p>
          </div>
          <div className="data-row3__lower">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>Redux</p>
          </div>
        </div>
        <div className="data-row4">
          <div className="data-row4__upper">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>NodeJS</p>
          </div>
          <div className="data-row4__lower">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>Postgres</p>
          </div>
        </div>
        <div className="data-row5">
          <div className="data-row5__upper">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>MongoDB</p>
          </div>
          <div className="data-row5__lower">
            <span style={{marginRight: '.4rem'}}><TiTick /></span>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage;
