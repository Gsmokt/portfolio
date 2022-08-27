import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem auto 3rem;
  max-width: 1000px;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-bottom: 1rem;
  h1 {
    margin-bottom: 9rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 3px;
      bottom: -4px;
      left: 0;
      width: 128px;
      background: rgb(248, 217, 15);
    }
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1a1919;
  padding: 1.2rem 1rem;
  h2 {
    padding: 1rem 0;
  }
`;

export const ProjectDetails = styled.div``;

export const ProjectLinks = styled.div`
  display: flex;
  a {
    color: #222;
  }
  .btn:hover a {
    color: #fff;
  }
`;
