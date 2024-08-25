import { IoChatbox } from "react-icons/io5";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { FaGoogle, FaUser, FaFacebookF } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

import { ILogoutIcon, ISidebarIcons, IUserEditIcons } from "@/types/sidebar";
import { IUsers } from "@/types/user";
import { IChat, IMessage, IReaction } from "@/types/chat";

// import { FaFolder } from "react-icons/fa";

export const sidebarIcons: ISidebarIcons[] = [
  {
    id: 0,
    Icon: <IoChatbox />,
    title: "All chats",
    type: "all",
    isActive: true,
    unreaded: 0,
    to: "/all-chats",
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
};

// delete
export const users: IUsers[] = [
  {
    id: "user1",
    avatar: "/avatar.jpg",
    lastMessage: { by: "user1", message: "Hey! We are reading some text", type: "text" },
    title: "Alice Johnson",
    updatedAt: 1723742614000,
    unreadedMessages: 5,
    isPin: false,
    chatType: "individual",
  },
  {
    id: "user2",
    avatar: "/avatar.jpg",
    lastMessage: { by: "user1", message: "Voice message", type: "action" },
    title: "Alice Johnson",
    updatedAt: 1692000000000,
    unreadedMessages: 5,
    isPin: true,
    chatType: "individual",
  },
  {
    id: "user3",
    avatar: "",
    lastMessage: { by: "user1", message: "Hey! We are reading some text", type: "text" },
    title: "Bob Smith",
    updatedAt: Date.now(),
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user7",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user56",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user98",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user12",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user12414",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user43",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user46",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
  {
    id: "user111",
    avatar: "",
    lastMessage: { by: "user1", message: "sent you a photo", type: "action" },
    title: "Bob Smith",
    updatedAt: 1693000000000,
    unreadedMessages: 2,
    isPin: true,
    chatType: "group",
  },
];

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

export const chat1: IChat = {
  id: "chat1",
  title: "General Chat",
  members: ["user1, user2"],
  messages: [message1, message2],
  onlineUsers: ["user1"],
};

export const chat2: IChat = {
  id: "chat2",
  title: "Sports Discussion",
  members: ["user1"],
  onlineUsers: [],
  messages: [message3],
};

export const AUTH_SERVICES = [
  {
    title: "Google",
    Icon: <FaGoogle />,
    className: "hover:bg-[#4287f5]",
  },
  {
    title: "Facebook",
    Icon: <FaFacebookF />,
    className: "hover:bg-[#4267B2]",
  },
];
