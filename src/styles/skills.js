import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0.4rem auto 3rem auto;
  max-width: 1000px;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  h1 {
    margin-bottom: 10rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 3px;
      bottom: -4px;
      left: 0;
      width: 87px;
      background: rgb(248, 217, 15);
    }
  }
`;

export const ListWrapper = styled.div`
  display: flex;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 3rem;
  h2 {
    margin-top: 2rem;
  }
`;
