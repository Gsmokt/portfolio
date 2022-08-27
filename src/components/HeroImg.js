import React from "react";
import { Hero, Mask, Image, Content } from "../styles/heroimg";
import { Link } from "react-scroll";

const HeroImg = () => {
  return (
    <Hero>
      <Mask>
        <Image />
      </Mask>
      <Content>
        <h1>
          Hi There, I'm <span>Grzegorz</span>
        </h1>
        <h1>
          <span>Smoktunowicz</span>
        </h1>
        <p>Frontend Developer</p>
        <div>
          <Link
            to="projects"
            className="btn"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="btn btn-light"
            smooth={true}
            duration={500}
            spy={true}
            offset={-55}
          >
            Contact
          </Link>
        </div>
      </Content>
    </Hero>
  );
};

export default HeroImg;
