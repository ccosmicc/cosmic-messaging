import { StarOutline, InfoOutlined } from "@mui/icons-material/";
import { Tooltip, Avatar } from "@mui/material";

import {
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
  StyledBadge,
} from "./styled";

const ChatHeader = ({ chatType }) => {
  const headerTitle = "title";

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
              <Avatar src="./cosmic-logo.png" sx={{ width: 24, height: 24 }} />
            </StyledBadge>
            <HeaderTitle>{headerTitle}</HeaderTitle>
          </>
        ) : (
          <>
            <HeaderTitle>#{headerTitle}</HeaderTitle>
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
