import React, { useEffect } from "react";
import { Wrapper, InnerWrapper } from "../styles/about";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper name="about">
      <h1>About</h1>
      <InnerWrapper data-aos="fade-up">
        <h3>
          Hello, I'm Grzegorz Smoktunowicz, and I'm passionate about building
          things for the web. In fact, I'm lawyer by profession, but after
          graduation I started to be interested in programming.
        </h3>
        <h3>
          In 2022, I completed postgraduate studies at the Bialystok University
          of Technologdy in the field of Javascript Developer and after that i
          started seriously thinking about re-branching.
        </h3>
        <h3>
          So, at the moment I have over a year of experience in building web
          applications. I feel best in MERN stack, especially in React, but I'm
          open to other technologies as well. I'm now looking for a junior dev
          position to finally kick start my carrer and learn among
          professionals.
        </h3>
      </InnerWrapper>
    </Wrapper>
  );
};

export default About;
