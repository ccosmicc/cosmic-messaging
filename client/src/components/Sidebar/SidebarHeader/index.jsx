import { FiberManualRecord, CreateOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import {
  Container,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoTextContainer,
  HeaderIcon,
} from "./styled";

const SidebarHeader = () => {
  return (
    <Container>
      <HeaderInfo>
        <HeaderInfoTitle>Hatice Demir</HeaderInfoTitle>
        {/*TODO: Get the name when user logs in */}
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
