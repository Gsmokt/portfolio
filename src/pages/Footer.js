import React from "react";
import { FaMailBulk, FaPhone, FaCode, FaGithub } from "react-icons/fa";
import { MainInfo, Wrapper, Icons, InfoWrapper } from "../styles/footer";
import { portfolioUrl, githubUrl } from "../utils/index";

const Footer = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <MainInfo>
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            500 748 431
          </h4>
        </MainInfo>
        <MainInfo>
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            biarth@wp.pl
          </h4>
        </MainInfo>
      </InfoWrapper>
      <Icons>
        <a href={portfolioUrl} className="icon">
          <FaCode />
        </a>
        <a href={githubUrl} className="icon">
          <FaGithub />
        </a>
      </Icons>
    </Wrapper>
  );
};

export default Footer;
