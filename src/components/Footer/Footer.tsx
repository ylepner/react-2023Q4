import circleShadow from './CIRCLE_BUTTON_SHADOW.svg';
import linkedinIcon from './LINKEDINLOGO.svg';
import githubIcon from './GITHUBLOGO.svg';

const Footer = () => {
  return (
    <footer className="wrapper pt-5 pb-5 flex justify-between items-center">
      <div className="flex">
        <h4>Open Library Project</h4>
      </div>
      <div className="links flex">
        <ShowOffLink
          link="https://www.linkedin.com/in/julia-lepner/"
          icon={circleShadow}
          logo={linkedinIcon}
        />
        <ShowOffLink
          link="https://github.com/ylepner/"
          icon={circleShadow}
          logo={githubIcon}
        />
      </div>
      <a href="https://github.com/ylepner" target="_blank" rel="noreferrer">
        <h4>ylepner</h4>
      </a>
      <h4>2023</h4>
    </footer>
  );
};

const ShowOffLink = (props: { link: string; icon: string; logo: string }) => {
  return (
    <div className="relative pr-5">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.icon} alt="circle shadow" />
        <img
          className="absolute top-0 left-0 translate-x-2/4 translate-y-2/4"
          src={props.logo}
          alt="circle shadow"
        />
      </a>
    </div>
  );
};

export default Footer;
