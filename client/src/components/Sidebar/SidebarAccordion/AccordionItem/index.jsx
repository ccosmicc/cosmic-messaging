import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemWrapper, SubTitle } from "../styled";
import { Avatar } from "@mui/material";
import { getUser } from "../../../../redux/apiCalls";
import { setCurrentChat } from "../../../../redux/userSlice";
/* Sidebar Accordion Item is reusable component */

const AccordionItem = ({ type, conversation }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userID = conversation.members.find((m) => m !== currentUser._id);
        const user = await getUser(userID);
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, [currentUser, conversation.members, conversation, dispatch]);

  return (
    //onClick: we set current chat since we need the informations in the chat component.
    <ItemWrapper onClick={() => dispatch(setCurrentChat(conversation))}>
      {type && type === "direct-message" ? (
        <Avatar
          alt="Avatar"
          src={user?.profilePicture}
          sx={{ width: 24, height: 24 }}
        />
      ) : (
        <span>#</span>
      )}
      <SubTitle>{user?.username}</SubTitle>
    </ItemWrapper>
  );
};

export default AccordionItem;
