import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Tooltip, Popper } from "@mui/material/";

import {
  Container,
  StyledForm,
  StyledInput,
  StyledPickerButton,
  StyledSendButton,
} from "./styled";

const ChatInputBox = ({ chatType }) => {
  const [text, setText] = useState("");
  const [isPopperOpen, setPopperOpen] = useState(false);

  /* It's used to set the position of the popper */
  const [anchorEl, setAnchorEl] = useState(null);

  /* Place holder value changes depending on chatType */
  const placeHolderValue = useSelector((state) =>
    chatType === "direct-message" ? state.message.user.name : state.room.name
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPopperOpen((isPopperOpen) => !isPopperOpen);
  };

  const sendMessage = (e) => {
    e.preventDefault(); //prevent from refreshing
    //TODO: send message to the backend
    //TODO: clear text state
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setText((text) => text + emoji);
    console.log(text);
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
          value={text}
          placeholder={`send a message to ${
            chatType === "direct-message" ? "@" : "#"
          } ${placeHolderValue} `}
          onChange={(event) => handleChange(event)}
        />
      </StyledForm>
      <StyledSendButton onClick={(e) => sendMessage(e)} />
    </Container>
  );
};

export default ChatInputBox;
