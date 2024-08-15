import { IoChatbox } from "react-icons/io5";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { ILogoutIcon, ISidebarIcons, IUserEditIcons } from "./types";
import { BiLogOut } from "react-icons/bi";
// import { FaFolder } from "react-icons/fa";

export const sidebarIcons: ISidebarIcons[] = [
  {
    id: 0,
    Icon: <IoChatbox />,
    title: "All chats",
    type: "all",
    isActive: true,
    unreaded: 0,
    to: "/",
  },
  {
    id: 1,
    Icon: <RiInboxUnarchiveLine />,
    title: "Archive chats",
    type: "archive",
    isActive: false,
    unreaded: 0,
    to: "/",
  },
];

export const userEditIcons: IUserEditIcons[] = [
  {
    Icon: <FaUser />,
    title: "Profile",
    isActive: false,
    to: "/",
  },
  {
    Icon: <CgOptions />,
    title: "Edit",
    isActive: false,
    to: "/",
  },
];

export const logOutIcon: ILogoutIcon = {
  Icon: <BiLogOut />,
  title: "Log out",
  isActive: false,
  to: "/",
};
