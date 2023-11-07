import React, { Component } from 'react';
import circleShadow from './CIRCLE_BUTTON_SHADOW.svg';
import linkedinIcon from './LINKEDINLOGO.svg';
import githubIcon from './GITHUBLOGO.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="wrapper pt-5 pb-5 flex justify-between items-center">
        <div className="flex">
          <p>Open Library Project</p>
        </div>
        <div className="links flex">
          <ShowLink
            link="https://www.linkedin.com/in/julia-lepner/"
            icon={circleShadow}
            logo={linkedinIcon}
            ariaLabel={'Go to julia lepner linkedin page'}
          />
          <ShowLink
            link="https://github.com/ylepner/"
            icon={circleShadow}
            logo={githubIcon}
            ariaLabel={'Go to ylepner github page'}
          />
        </div>
        <a href="https://github.com/ylepner" target="_blank" rel="noreferrer">
          <p>ylepner</p>
        </a>
        <p>2023</p>
      </footer>
    );
  }
}
const ShowLink = ({
  link,
  icon,
  logo,
  ariaLabel,
}: {
  link: string;
  icon: string;
  logo: string;
  ariaLabel: string;
}) => {
  return (
    <div className="relative pr-5">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icon} alt="" />
        <img
          className="absolute top-0 left-0 translate-x-2/4 translate-y-2/4"
          src={logo}
          alt=""
          aria-label={ariaLabel}
        />
      </a>
    </div>
  );
};

export default Footer;
