import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  margin: 0.7rem auto;
  max-width: 600px;
  h1 {
    display: flex;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 2rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 3px;
      bottom: -4px;
      left: 0;
      width: 122px;
      background: rgb(248, 217, 15);
    }
    .error {
      color: #dc143c;
      font-weight: 300;
    }
    .success {
      color: rgb(248, 217, 15);
      font-weight: 300;
    }
  }
`;

export const FormRows = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    color: #fff;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  span {
    color: #dc143c;
    font-size: 14px;
  }
  input,
  textarea {
    margin-bottom: 1rem;
    padding: 10px 18px;
    font-size: 1.2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
    color: #f4f4f4;
    resize: none;
  }
`;

export const Submit = styled.button``;
