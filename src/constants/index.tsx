import { IoChatbox } from "react-icons/io5";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { FaGoogle, FaUser } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

import { ILogoutIcon, IFolder, IUserEditIcons } from "@/types/sidebar";
import { IMessage, IReaction } from "@/types/chat";

// import { FaFolder } from "react-icons/fa";

export const sidebarIcons: IFolder[] = [
  {
    id: "0",
    Icon: <IoChatbox />,
    title: "All chats",
    type: "all",
    isActive: true,
    unreaded: 0,
    to: "/a",
  },
  {
    id: "1",
    Icon: <RiInboxUnarchiveLine />,
    title: "Archive chats",
    type: "archive",
    isActive: false,
    unreaded: 0,
    to: "/archive",
  },
];

export const userEditIcons: IUserEditIcons[] = [
  {
    Icon: <FaUser />,
    title: "Profile",
    isActive: false,
    to: "/profile",
  },
  {
    Icon: <CgOptions />,
    title: "Edit",
    isActive: false,
    to: "/edit",
  },
];

export const logOutIcon: ILogoutIcon = {
  Icon: <BiLogOut />,
  title: "Log out",
  isActive: false,
  to: "/login",
};

export const AUTH_SERVICES = [
  {
    title: "Google",
    Icon: <FaGoogle />,
    className: "hover:bg-[#4287f5]",
  },
];
