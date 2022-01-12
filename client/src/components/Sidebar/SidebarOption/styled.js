import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--cosmic-hover-color);
  }
`;

const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`;

export { Container, SectionTitle };
