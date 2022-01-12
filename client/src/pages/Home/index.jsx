import styled from "styled-components";
import { Header, Sidebar, Chat } from "../../components/index";

const HomeBodyWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Home = () => (
  <>
    <Header />
    {/* AppBodyWrapper includes the SideBar and Chat Section*/}
    <HomeBodyWrapper>
      <Sidebar />
      <Chat chatType="direct-message" />
    </HomeBodyWrapper>
  </>
);

export default Home;
