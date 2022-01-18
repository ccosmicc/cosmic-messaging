import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StarOutline, InfoOutlined } from "@mui/icons-material/";
import { Tooltip, Avatar } from "@mui/material";

import {
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
  StyledBadge,
} from "./styled";
import { getUser } from "../../../redux/apiCalls";

const ChatHeader = ({ chatType }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentChat = useSelector((state) => state.user.currentChat);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userID = currentChat.members.find((m) => m !== currentUser._id);
        const user = await getUser(userID);
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, [currentUser, currentChat.members]);

  return (
    <Header>
      <HeaderLeft chatType={chatType}>
        {chatType && chatType === "direct-message" ? (
          <>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                src={user?.profilePicture}
                sx={{ width: 24, height: 24 }}
              />
            </StyledBadge>
            <HeaderTitle>{user?.username}</HeaderTitle>
          </>
        ) : (
          <>
            <HeaderTitle>#{user?.username}</HeaderTitle>
            <StarOutline />
          </>
        )}
      </HeaderLeft>
      <HeaderRight>
        <Tooltip disableFocusListener disableTouchListener title="Details">
          <InfoOutlined />
        </Tooltip>
      </HeaderRight>
    </Header>
  );
};

export default ChatHeader;
