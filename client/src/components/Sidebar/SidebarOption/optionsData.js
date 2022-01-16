import {
  InboxOutlined,
  CommentOutlined,
  ManageSearchOutlined,
  PersonAdd,
  PersonRemove,
} from "@mui/icons-material";

const Options = [
  {
    Icon: PersonAdd,
    title: "ADD FRIEND",
    key: 1,
  },
  {
    Icon: PersonRemove,
    title: "REMOVE FRIEND",
    key: 2,
  },
  {
    Icon: CommentOutlined,
    title: "Threads",
    key: 3,
  },
  {
    Icon: InboxOutlined,
    title: "Mentions & reactions",
    key: 4,
  },
  {
    Icon: ManageSearchOutlined,
    title: "Room browser",
    key: 5,
  },
];

export default Options;
