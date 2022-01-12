import styled from "styled-components";
import { Send, SentimentSatisfiedAlt } from "@mui/icons-material/";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  margin: 30px 10px;
  padding: 10px;
  height: 30px;
  width: 75vw;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

/* flex 1 in order to give form the possible full width */
const StyledForm = styled.form`
  flex: 1;
  padding: 0px 10px;
`;

const StyledInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 16px;
`;

const StyledPickerButton = styled(SentimentSatisfiedAlt)`
  cursor: pointer;

  &:hover {
    color: var(--cosmic-primary-color);
  }
`;

const StyledSendButton = styled(Send)`
  cursor: pointer;

  &:hover {
    color: var(--cosmic-primary-color);
  }
`;

export {
  Container,
  StyledForm,
  StyledInput,
  StyledPickerButton,
  StyledSendButton,
};
