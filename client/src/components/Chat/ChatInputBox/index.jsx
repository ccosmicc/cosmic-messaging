import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Popper } from "@mui/material/";

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

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userID = currentChat?.members.find((m) => m !== currentUser._id);
        const user = await getUser(userID);
        setUser(user);
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

    //message object
    const message = {
      sender: currentUser._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser._id
    );

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
