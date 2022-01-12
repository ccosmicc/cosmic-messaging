import styled from "styled-components";

/* Header includes HeaderInfo and HeaderIcon */
const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 5px 10px;
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
  margin-right: auto;
`;

const HeaderInfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const HeaderInfoTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  /* we can style MuiIcon using root class*/
  > .MuiSvgIcon-root {
    color: var(--cosmic-active-color);
    margin-right: "5px";
  }
`;

const HeaderIcon = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`;

export {
  Container,
  HeaderInfo,
  HeaderInfoTitle,
  HeaderInfoTextContainer,
  HeaderIcon,
};
