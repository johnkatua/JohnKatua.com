import React from 'react';
import { ChevronsRight as ChevronsRightIcon } from 'react-feather';
import './project.css';

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="project-page__header">What I have been working on.</div>
      <div className="project-page__description">
        I like to stay busy and always have a project that I am working on.
        Take a look at some of the applications that I have managed to build.
      </div>
      <div className="project-page__details">
        <div className="project-details__upper">
          <div className="project-details__project1">
            <div className="project1-card">
              <div className="project1-card__image">
                <div className="project1-image">
                  <img className="project1-img" src="./Images/image5.png" alt="john" />
                </div>
              </div>
              <div className="project1-card__title">E-Bookshop</div>
              <div className="project1-card__details">C</div>
              <div className="project1-card__link">
                View Project <ChevronsRightIcon />
              </div>
            </div>
          </div>
          <div className="project-details__project2">
          <div className="project2-card">
            <div className="project2-card__image">
              <div className="project2-image">
                <img className="project2-img" src="./Images/image5.png" alt="john" />
              </div>
            </div>
            <div className="project2-card__title">Meta Movie Review</div>
              <div className="project2-card__details">C</div>
              <div className="project2-card__link">
                View Project <ChevronsRightIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="project-details__lower">
          <div className="project-details__project3">
            <div className="project3-card">
              <div className="project3-card__image">
                <div className="project3-image">
                  <img className="project3-img" src="./Images/image5.png" alt="john" />
                </div>
              </div>
              <div className="project3-card__title">Smart Watch</div>
                <div className="project3-card__details">C</div>
                  <div className="project3-card__link">
                    View Project <ChevronsRightIcon />
                  </div>
            </div>
          </div>
          <div className="project-details__project4">
            <div className="project4-card">
              <div className="project4-card__image">
                <div className="project4-image">
                  <img className="project4-img" src="./Images/image5.png" alt="john" />
                </div>
              </div>
              <div className="project4-card__title">Bird Eye</div>
              <div className="project4-card__details">C</div>
              <div className="project4-card__link">
                View Project <ChevronsRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;
