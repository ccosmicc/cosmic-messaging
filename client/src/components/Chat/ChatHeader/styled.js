import styled from "styled-components";
import { Badge } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) =>
    props?.chatType === "direct-message" ? "5px 10px" : "0px 10px"};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: var(--cosmic-text-hover-color);
  }

  ${HeaderTitle} {
    margin-left: ${(props) => props.chatType === "direct-message" && "10px"};
    margin-right: ${(props) => props.chatType === "channel" && "10px"};
  }
`;

const StyledBadge = styled(Badge)`
  > .MuiBadge-badge {
    background-color: var(--cosmic-active-color);
    color: var(--cosmic-active-color);
    box-shadow: 0 0 0 2px white;
  }
`;

const HeaderRight = styled.div`
  cursor: pointer;
  padding-right: 10px;
`;

const ChatMessages = styled.div`
  flex: 1;
`;

export {
  Container,
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderRight,
  ChatMessages,
  StyledBadge,
};
