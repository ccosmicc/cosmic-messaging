import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  &:hover {
    background-color: var(--cosmic-text-hover-color);
  }

  justify-content: ${(props) => (props.own ? "flex-end" : "flex-start")};
`;

const UserImage = styled.img`
  height: 50px;
  object-fit: cover;
  border-radius: 10%;
  cursor: pointer;
`;

const MessageInfo = styled.div`
  padding: 0px 10px;
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  > h3 {
    font-size: 16px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  > span {
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Message = styled.div`
  font-size: 16px;
`;

const Wrapper = styled.div`
  display: flex;
`;

export { Container, UserImage, MessageInfo, MessageHeader, Message, Wrapper };
