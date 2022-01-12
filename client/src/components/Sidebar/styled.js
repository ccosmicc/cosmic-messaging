import styled from "styled-components";

const Container = styled.div`
  background-color: var(--cosmic-primary-color);
  margin-top: 60px;
  color: #faf9fa;
  height: 100vh;
  flex: 0.25;
`;

/* To seperate sections in the header */
const Hr = styled.hr`
  background-color: #5dadec;
  height: 1px;
  border: none;
`;

const BodyWrapper = styled.div``;
const SidebarOptions = styled.div`
  padding: 10px;
`;

export { Container, Hr, BodyWrapper, SidebarOptions };
