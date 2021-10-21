import React from 'react';
import { Instagram as InstagramIcon } from 'react-feather';
import { Linkedin as LinkedinIcon } from 'react-feather';
import { Twitter as TwitterIcon } from 'react-feather';
import { GitHub as GithubIcon } from 'react-feather';
import { ArrowLeftCircle as ArrowLeftCircleIcon } from 'react-feather';
import { ArrowRightCircle as ArrowRightCircleIcon } from 'react-feather';

import './about.css';
import image1  from '../../components/Images/image1.jpg';
import image2 from '../../components/Images/image2.jpg';
import image3  from '../../components/Images/image3.jpg';

const AboutPage = () => {
  const [image, setImage] = React.useState({
    index: 0,
    imgList: [image1, image2, image3]
  });

  console.log(image);

  const onClickForward = () => {
    console.log('forward clicked')
    if(image.index + 1 === image.imgList.length) {
      setImage({...image, index:  0})
    } else {
      setImage({...image, index: image.index + 1})
    }
  }

  const onClickBack = () => {
    console.log('back clicked')
    if(image.index - 1 === -1) {
      setImage({...image, index: image.imgList.length - 1})
    } else {
      setImage({...image, index: image.index - 1})
    }
  }
  return (
    <div className="about-page">
      <div className="about-page__introduction">
        <div className="about-page__icons">
          <div className="icon-linkedin">
            <LinkedinIcon />
          </div>
          <div className="icon-github">
            <GithubIcon />
          </div>
          <div className="icon-twitter">
            <TwitterIcon />
          </div>
          <div className="icon-instagram">
            <InstagramIcon />
          </div>
        </div>
        <div className="about-page__paragraph">
          Hi there 💁‍♂️, I'm John. Software  Developer and a student.
        </div>
      </div>
      <div className="about-page__image">
        <div className="image">
          <span onClick={onClickBack} className="about-icon__left"><ArrowLeftCircleIcon /></span>
          <img className="about-image" src={image.imgList[image.index]} alt="John" />
          <span onClick={onClickForward} className="about-icon__right"><ArrowRightCircleIcon /></span>
        </div>
      </div>
      <div className="about-page__details">
        <div className="details__para1">
          <p className="paragraph1">
            I'm a 21 year old student at The Technical University of Kenya,
            currently studying Bachelor of Technology in Business Information Technology.
          </p>
          <p className="paragraph2">
            I started programming in 2019. I have worked alongside developers and different
            teams who have raised my standards for what is expected of me as a software developer.
          </p>
        </div>
        <div className="details__para2">
          Through these experiences. I have had the opportunity to create wonderful applications
          that are not only enjoyable to use, but are written in code that is maintainable and easy
          to understand.
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
