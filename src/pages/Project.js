import React, { useEffect } from "react";
import { Wrapper, InnerWrapper } from "../styles/project";
import CardList from "../components/CardList";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper name="projects">
      <h1>Projects</h1>
      <InnerWrapper data-aos="fade-up">
        <CardList />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Project;
