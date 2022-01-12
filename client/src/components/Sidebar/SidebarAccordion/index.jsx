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
        <AccordionItem type={type} />
        <AccordionItem type={type} />
        <AccordionItem type={type} />
      </AccordionDetails>
      <AccordionAction type={type} />
    </StyledAccordion>
  );
};

export default SidebarAccordion;
