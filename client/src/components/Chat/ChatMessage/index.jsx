import { useState, useEffect } from "react";

import {
  Container,
  UserImage,
  MessageInfo,
  MessageHeader,
  Message,
  Wrapper,
} from "./styled";

import { getUser } from "../../../redux/apiCalls";

const ChatMessage = ({ message, own, text }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUser(message.sender);
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, [message]);

  return (
    <Container own={own}>
      <Wrapper>
        <UserImage src={user?.profilePicture} />
        <MessageInfo>
          <MessageHeader>
            <h3>{user?.username}</h3>
            <span>{message.createdAt}</span>
          </MessageHeader>
          <Message>{text}</Message>
        </MessageInfo>
      </Wrapper>
    </Container>
  );
};

export default ChatMessage;
