import styled from "styled-components";
import { Avatar } from "@mui/material";

const Container = styled.div`
  /* position is fixed since header will be shown always*/
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  /* global color variable defined in the main index.css*/
  background-color: var(--cosmic-primary-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  border: 1px solid lightgray;
  background-color: var(--cosmic-hover-color);
  border-radius: 10px;
  padding: 0px 30px;

  &:hover {
    background-color: var(--cosmic-primary-color);
    border-color: white;
  }
`;

const SearchIconContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  flex: 4;
  background-color: transparent;
  border: none;
  outline: 0;
  text-align: center;
  color: white;
  padding: 5px;
  font-size: 16px;
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
`;

export {
  Container,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  SearchIconContainer,
  SearchInput,
  HeaderRight,
};
