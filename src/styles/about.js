import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 1rem;
  margin: 6rem auto 9rem;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  h1 {
    color: #fff;
    margin-bottom: 9rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 3px;
      bottom: -4px;
      left: 0;
      width: 96px;
      background: rgb(248, 217, 15);
    }
  }
`;

export const InnerWrapper = styled.div`
  width: 70%;
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 60px;
    width: 60px;
    border-bottom: 4px solid rgb(248, 217, 15);
    border-right: 4px solid rgb(248, 217, 15);
    right: -50px;
    bottom: -40px;
  }
  &::before {
    content: "";
    position: absolute;
    height: 60px;
    width: 60px;
    border-top: 4px solid rgb(248, 217, 15);
    border-left: 4px solid rgb(248, 217, 15);
    left: -50px;
    top: -40px;
  }
  h3 {
    color: #fff;
    text-indent: 2em;
    margin-bottom: 1rem;
    font-weight: 400;
  }
`;
