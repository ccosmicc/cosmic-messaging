import { Container, SectionTitle } from "./styled";

/* SideOption is reusable component */
const SidebarOption = ({ Icon, title }) => (
  <Container>
    {Icon && <Icon fontSize="small" />}
    <SectionTitle>{title}</SectionTitle>
  </Container>
);

export default SidebarOption;
