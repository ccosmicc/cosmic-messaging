import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInputBox from "./ChatInputBox/";
import ChatMessage from "./ChatMessage/";
import ChatHeader from "./ChatHeader";
import { Container, ChatMessages } from "./styled";
import { getMessages } from "../../redux/apiCalls";

const Chat = ({ chatType }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentChat = useSelector((state) => state.user.currentChat);
  const messages = useSelector((state) => state.user.messages);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
      await getMessages(dispatch, currentChat);
    };
    fetchMessages();
  }, [currentChat, dispatch]);

  return (
    <Container>
      <ChatHeader chatType="direct-message" />
      <ChatMessages>
        {currentChat ? (
          messages.map((m) => (
            <ChatMessage
              message={m}
              own={m.sender === currentUser._id}
              key={m._id}
            />
          ))
        ) : (
          <span>Open a conversation to start a chat</span>
        )}
        <ChatInputBox chatType={chatType} />
      </ChatMessages>
    </Container>
  );
};

export default Chat;
