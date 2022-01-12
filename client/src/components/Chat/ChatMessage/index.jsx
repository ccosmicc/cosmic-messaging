import {
  Container,
  UserImage,
  MessageInfo,
  MessageHeader,
  Message,
} from "./styled";

//TODO:Informations shold come from the backend.
//TODO:If there are no images place default image
const ChatMessage = ({ user, messageDate, message }) => {
  return (
    <Container>
      <UserImage src={user.img} />
      <MessageInfo>
        <MessageHeader>
          <h3>{user.name}</h3>
          <span>{messageDate}</span>
        </MessageHeader>
        <Message>{message}</Message>
      </MessageInfo>
    </Container>
  );
};

export default ChatMessage;
