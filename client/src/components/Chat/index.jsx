import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInputBox from "./ChatInputBox/";
import ChatMessage from "./ChatMessage/";
import ChatHeader from "./ChatHeader";
import { Container, ChatMessages } from "./styled";
import { getMessages } from "../../redux/apiCalls";
import { decrypt } from "../Utility";
import { decodeBase64, encodeBase64 } from "tweetnacl-util";

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
          messages.map((m) => {
            const secret = decodeBase64(localStorage.getItem('SHARED_SECRET'));
            const decrypted = decrypt(secret, m.text);
            return <ChatMessage
              message={m}
              own={m.sender === currentUser._id}
              key={m._id}
              text={decrypted}
            />
          })
        ) : (
          <span>Open a conversation to start a chat</span>
        )}
        <ChatInputBox chatType={chatType} />
      </ChatMessages>
    </Container>
  );
};

export default Chat;
