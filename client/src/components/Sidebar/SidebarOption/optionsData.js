import {
  BookmarkBorderOutlined,
  InboxOutlined,
  CommentOutlined,
  ManageSearchOutlined,
  AppsOutlined,
  PeopleOutlined,
  FileCopyOutlined,
} from "@mui/icons-material";

const Options = [
  {
    Icon: CommentOutlined,
    title: "Threads",
    key: 1,
  },
  {
    Icon: InboxOutlined,
    title: "Mentions & reactions",
    key: 2,
  },
  {
    Icon: BookmarkBorderOutlined,
    title: "Saved items",
    key: 3,
  },
  {
    Icon: ManageSearchOutlined,
    title: "Channel browser",
    key: 4,
  },
  {
    Icon: PeopleOutlined,
    title: "People & user groups",
    key: 5,
  },
  {
    Icon: AppsOutlined,
    title: "Apps",
    key: 6,
  },
  {
    Icon: FileCopyOutlined,
    title: "File browser",
    key: 7,
  },
];

export default Options;
