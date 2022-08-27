import React, { useEffect } from "react";
import { Wrapper, ListWrapper } from "../styles/skills";
import SkillsList from "../components/SkillsList";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper name="skills">
      <h1>Skills</h1>
      <ListWrapper data-aos="fade-up">
        <SkillsList />
      </ListWrapper>
    </Wrapper>
  );
};

export default Skills;
