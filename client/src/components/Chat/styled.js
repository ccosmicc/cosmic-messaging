import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  position: relative;
`;

const ChatMessages = styled.div`
  flex: 1;
`;

export { Container, ChatMessages };
