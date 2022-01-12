import { useState } from "react";
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
  return (
    <Container>
      <HeaderLeft>
        <HeaderAvatar />
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
