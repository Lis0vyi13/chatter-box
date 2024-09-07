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
    id: 0,
    Icon: <IoChatbox />,
    title: "All chats",
    type: "all",
    isActive: true,
    unreaded: 0,
    to: "/a",
  },
  {
    id: 1,
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

// delete

// delete
const reaction1: IReaction = {
  reaction: "like",
  users: ["user2", "user3"],
};

const reaction2: IReaction = {
  reaction: "love",
  users: ["user4"],
};

const reaction3: IReaction = {
  reaction: "haha",
  users: ["user1", "user5"],
};

const message1: IMessage = {
  id: "msg1",
  user: "user1",
  avatar: "https://example.com/avatar1.jpg",
  text: "Hello, how are you?",
  reactions: [reaction1, reaction2],
};

const message2: IMessage = {
  id: "msg2",
  user: "user2",
  avatar: "https://example.com/avatar2.jpg",
  text: "I am good, thank you!",
  reactions: [reaction1],
};

const message3: IMessage = {
  id: "msg3",
  user: "user3",
  avatar: "https://example.com/avatar3.jpg",
  text: "Did you see the game last night?",
  reactions: [reaction3],
};

// export const chat1: IChat = {
//   id: "user1",
//   avatar: "/avatar.jpg",
//   lastMessage: { by: "user1", message: "Hey! We are reading some text", type: "text" },
//   title: "Alice Johnson",
//   updatedAt: 1723742614000,
//   unreadedMessages: 5,
//   isPin: false,
//   chatType: "individual",
//   members: [],
//   messages: [],
//   onlineUsers: [],
// };

// export const chat2: IChat = {
//   id: "user1",
//   avatar: "/avatar.jpg",
//   lastMessage: { by: "user1", message: "Hey! We are reading some text", type: "text" },
//   title: "Alice Johnson",
//   updatedAt: 1723742614000,
//   unreadedMessages: 5,
//   isPin: false,
//   chatType: "individual",
//   members: [],
//   messages: [],
//   onlineUsers: [],
// };

export const AUTH_SERVICES = [
  {
    title: "Google",
    Icon: <FaGoogle />,
    className: "hover:bg-[#4287f5]",
  },
];
