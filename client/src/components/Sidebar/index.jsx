import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarOption from "./SidebarOption";
import Options from "./SidebarOption/optionsData";
import SidebarAccordion from "./SidebarAccordion";
import SidebarHeader from "./SidebarHeader";

import { Container, Hr, SidebarOptions, BodyWrapper } from "./styled";
import { getConversations, getFriends } from "../../redux/apiCalls";

//TODO: Sidebar Scroll mechanism
const Sidebar = () => {
  let dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        await getFriends(dispatch, user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFriends();
  }, [user]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        await getConversations(dispatch, user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchConversations();
  }, [user]);

  return (
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
};

export default Sidebar;
