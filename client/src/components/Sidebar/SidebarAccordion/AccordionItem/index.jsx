import { ItemWrapper, SubTitle } from "../styled";
import { Avatar } from "@mui/material";

/* Sidebar Accordion Item is reusable component */

const AccordionItem = ({ type, image, name }) => (
  <ItemWrapper>
    {type && type === "direct-message" ? (
      <Avatar alt="Avatar" src={image} sx={{ width: 24, height: 24 }} z />
    ) : (
      <span>#</span>
    )}
    <SubTitle>{name}</SubTitle>
  </ItemWrapper>
);

export default AccordionItem;
