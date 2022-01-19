import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Popper } from "@mui/material/";
import { io } from "socket.io-client";
import { encrypt } from "../../Utility";
import { box } from "tweetnacl";
import { decodeBase64, encodeBase64 } from 'tweetnacl-util';

import {
  Container,
  StyledForm,
  StyledInput,
  StyledPickerButton,
  StyledSendButton,
} from "./styled";

import { getUser, sendNewMessage } from "../../../redux/apiCalls";

const ChatInputBox = ({ chatType }) => {
  const [newMessage, setNewMessage] = useState("");
  const [isPopperOpen, setPopperOpen] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentChat = useSelector((state) => state.user.currentChat);
  const messages = useSelector((state) => state.user.messages);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const socket = useRef();
  const [user, setUser] = useState(null);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      sendNewMessage(dispatch, messages, arrivalMessage);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", {userID: currentUser._id, userPK: localStorage.getItem('PUBLIC_KEY')});
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [currentUser]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userID = currentChat?.members.find((m) => m !== currentUser._id);
        const user = await getUser(userID);
        setUser(user);
        const secretKey = decodeBase64(localStorage.getItem('PRIVATE_KEY'))
        const publicKey = decodeBase64(user.publicKey)
        localStorage.setItem('SHARED_SECRET', encodeBase64(box.before(publicKey,secretKey)));
      } catch (err) {
        console.log(err);
      }
    };
    currentChat && fetchUserInfo();
  }, [currentUser, currentChat]);

  /* It's used to set the position of the popper */
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPopperOpen((isPopperOpen) => !isPopperOpen);
  };

  const sendMessage = (e) => {
    e.preventDefault(); //prevent from refreshing

    const encrypted = encrypt(decodeBase64(localStorage.getItem('SHARED_SECRET')), newMessage);

    //message object
    const message = {
      sender: currentUser._id,
      text: encrypted,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser._id
    );

    socket.current.emit("sendMessage", {
      senderId: currentUser._id,
      receiverId,
      text: encrypted,
    });

    sendNewMessage(dispatch, messages, message);
    setNewMessage("");
  };

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setNewMessage((text) => text + emoji);
  };

  return (
    <Container>
      <Tooltip disableFocusListener disableTouchListener title="Emoji">
        <StyledPickerButton onClick={(event) => handleClick(event)} />
      </Tooltip>
      <Popper open={isPopperOpen} anchorEl={anchorEl}>
        <Picker title="pick an emoji" onSelect={(emoji) => addEmoji(emoji)} />
      </Popper>
      <StyledForm onSubmit={(e) => sendMessage(e)}>
        <StyledInput
          type="text"
          value={newMessage}
          placeholder={`send a message to ${
            chatType === "direct-message" ? "@" : "#"
          } ${user?.username} `}
          onChange={(event) => handleChange(event)}
        />
      </StyledForm>
      <StyledSendButton onClick={(e) => sendMessage(e)} />
    </Container>
  );
};

export default ChatInputBox;
