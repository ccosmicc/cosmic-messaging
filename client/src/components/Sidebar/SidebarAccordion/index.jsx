import { useSelector } from "react-redux";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronRightOutlined } from "@mui/icons-material";
import AccordionItem from "./AccordionItem";
import AccordionAction from "./AccordionAction";

import {
  StyledAccordion,
  StyledAccordionSummary,
  AccordionTitle,
} from "./styled";

const SidebarAccordion = ({ type }) => {
  const friendsList = useSelector((state) => state.user.friends);

  return (
    <StyledAccordion elevation={0} disableGutters>
      <StyledAccordionSummary
        expandIcon={
          <ChevronRightOutlined style={{ color: "white" }} fontSize="small" />
        }
      >
        <AccordionTitle>
          {type === "direct-message" ? "Direct messages" : "Rooms"}
        </AccordionTitle>
      </StyledAccordionSummary>
      <AccordionDetails>
        {type === "direct-message" &&
          friendsList?.map((friend) => (
            <AccordionItem
              type={type}
              image={friend.profilePicture}
              name={friend.username}
            />
          ))}
      </AccordionDetails>
      <AccordionAction type={type} />
    </StyledAccordion>
  );
};

export default SidebarAccordion;
