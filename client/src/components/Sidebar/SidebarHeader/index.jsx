import { FiberManualRecord, CreateOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import {
  Container,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoTextContainer,
  HeaderIcon,
} from "./styled";

const SidebarHeader = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <HeaderInfo>
        <HeaderInfoTitle>{user && user.username}</HeaderInfoTitle>
        <HeaderInfoTextContainer>
          <FiberManualRecord />
          active
        </HeaderInfoTextContainer>
      </HeaderInfo>
      <Tooltip disableFocusListener disableTouchListener title="New Message">
        <HeaderIcon>
          <CreateOutlined color="primary" />
        </HeaderIcon>
      </Tooltip>
    </Container>
  );
};

export default SidebarHeader;
