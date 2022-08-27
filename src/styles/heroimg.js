import styled from "styled-components";
import IntroImg from "../assets/images/behnam-norouzi-exxWKBGrNqA-unsplash.jpg";

export const Hero = styled.div`
  height: 100%;
  width: 100%;
`;

export const Mask = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;
`;

export const Content = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  h1 {
    font-size: 3rem;
    font-weight: 300;
    font-family: "Lato", sans-serif;
  }
  p {
    font-size: 1.4rem;
    font-weight: 200;
    margin-bottom: 2rem;
    color: #a9a9a9;
  }
  span {
    color: rgb(248, 217, 15);
    font-weight: 300;
    font-family: "Lato", sans-serif;
  }
  @media screen and (max-width: 640px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

Image.defaultProps = {
  src: IntroImg,
  alt: "IntroImg",
};
