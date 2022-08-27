import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 4rem 1rem;
  background-color: rgba(19, 19, 19, 0.8);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoWrapper = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  h4 {
    font-size: 1.2rem;
    padding-bottom: 0.7rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export const Icons = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 0.8rem;
  justify-content: space-around;
  margin-right: 7rem;
  .icon {
    color: #fff;
    align-self: center;
    font-size: 37px;
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      color: #a9a9a9;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
