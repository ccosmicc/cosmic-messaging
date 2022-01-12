import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--cosmic-primary-color);
`;

const Title = styled.h1`
  padding: 80px 0px 20px 0px;
  text-align: center;
`;

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  padding: 10px 0px;
  > label {
    line-height: 2;
    text-align: left;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }
  > input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    font-size: 14px;
  }
`;

const ErrorMessage = styled.p`
  padding-top: 10px;
  color: black;

  &:before {
    display: inline;
    content: "⚠ ";
    vertical-align: middle;
  }
`;

const SubmitButton = styled.button`
  border: none;
  padding: 10px;
  background: var(--cosmic-button-color);
  color: white;
  text-transform: uppercase;
  margin: 20px 0px;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 10px;
  cursor: pointer;

  &:hover {
    background: var(--cosmic-button-active-color);
  }
`;

const Link = styled.a`
  display: block;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  Container,
  Title,
  StyledForm,
  InputWrapper,
  ErrorMessage,
  SubmitButton,
  Link,
};
