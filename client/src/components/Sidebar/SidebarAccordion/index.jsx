import { useEffect, useState } from "react";
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
  const conversations = useSelector((state) => state.user.conversations);
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
          conversations &&
          conversations.map((c) => (
            <AccordionItem type={type} conversation={c} key={c._id} />
          ))}
      </AccordionDetails>
      <AccordionAction type={type} />
    </StyledAccordion>
  );
};

export default SidebarAccordion;
