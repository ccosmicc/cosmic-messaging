import { useSelector } from "react-redux";
import { Badge, Tooltip } from "@mui/material";
import { AccessTime, Search, HelpOutline } from "@mui/icons-material";

import {
  Container,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  SearchIconContainer,
  SearchInput,
  HeaderRight,
} from "./styled";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <HeaderLeft>
        <HeaderAvatar src={user.profilePicture} />
        <Tooltip disableFocusListener disableTouchListener title="History">
          <AccessTime />
        </Tooltip>
      </HeaderLeft>
      <HeaderSearch>
        <SearchIconContainer>
          <Search />
        </SearchIconContainer>
        <SearchInput placeholder="✨✨✨ Search the Cosmic  ✨✨✨" />
      </HeaderSearch>
      <HeaderRight>
        <Tooltip disableFocusListener disableTouchListener title="Help">
          <Badge variant="dot" color="secondary" invisible={false}>
            <HelpOutline />
          </Badge>
        </Tooltip>
      </HeaderRight>
    </Container>
  );
};

export default Header;
