import SidebarOption from "./SidebarOption";
import Options from "./SidebarOption/optionsData";
import SidebarAccordion from "./SidebarAccordion";
import SidebarHeader from "./SidebarHeader";

import { Container, Hr, SidebarOptions, BodyWrapper } from "./styled";

//TODO: Sidebar Scroll mechanism
const Sidebar = () => (
  <Container>
    <Hr />
    <SidebarHeader />
    <BodyWrapper>
      <Hr />
      <SidebarOptions>
        {Options.map((item) => (
          <SidebarOption Icon={item.Icon} title={item.title} key={item.key} />
        ))}
      </SidebarOptions>
      <Hr />
      <SidebarAccordion type="direct-message" />
      <Hr />
      <SidebarAccordion type="room" />
    </BodyWrapper>
  </Container>
);

export default Sidebar;
