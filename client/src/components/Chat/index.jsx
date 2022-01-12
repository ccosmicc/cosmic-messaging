import ChatInputBox from "./ChatInputBox/";
import ChatMessage from "./ChatMessage/";
import ChatHeader from "./ChatHeader";
import { Container, ChatMessages } from "./styled";

const Chat = ({ chatType }) => {
  return (
    <Container>
      <ChatHeader chatType="direct-message" />
      <ChatMessages>
        {/*TODO:Information should come from backend
         */}
        <ChatMessage
          user={{ name: "cosmic official", img: "./cosmic-logo.png" }}
          messageDate="07/05/2021 20.27 PM"
          message="hey there"
        />
        <ChatInputBox chatType={chatType} />
      </ChatMessages>
    </Container>
  );
};

export default Chat;
