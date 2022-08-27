import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  height: 90px;
  width: 100%;
  z-index: 10;
  background-color: ${(props) =>
    props.bgcolor ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0)"};
  transition: 0.5s;
  h1 {
    cursor: pointer;
  }
  h1:hover {
    color: #a9a9a9;
  }
`;

export const NavIcons = styled.div`
  display: flex;
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
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    padding: 0 1rem;
  }
  li a {
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
  li a:hover {
    color: #a9a9a9;
  }
  .active {
    color: #a9a9a9;
    padding-bottom: 10px;
    border-bottom: 3px solid rgb(248, 217, 15);
  }
  @media screen and (max-width: 1040px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    left: ${(props) => (props.show === "active" ? "-100%" : "0")};
    z-index: -3;
    transition: 0.3s;
    li {
      padding: 1rem 0;
    }
    li a {
      font-size: 2rem;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 1040px) {
    & {
      display: initial;
    }
  }
`;
