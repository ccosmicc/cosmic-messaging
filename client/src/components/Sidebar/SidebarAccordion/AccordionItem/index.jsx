import { ItemWrapper, SubTitle } from "../styled";
import { Avatar } from "@mui/material";

/* Sidebar Accordion Item is reusable component */

//TODO: Information will come from backend. Need for relevant props.
const AccordionItem = ({ type }) => (
  <ItemWrapper>
    {type && type === "direct-message" ? (
      <Avatar
        alt="Avatar"
        src="/cosmic-logo.png"
        sx={{ width: 24, height: 24 }}
        z
      />
    ) : (
      <span>#</span>
    )}
    <SubTitle>lorem</SubTitle>
  </ItemWrapper>
);

export default AccordionItem;
