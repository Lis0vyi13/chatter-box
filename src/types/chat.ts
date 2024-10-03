import { IFolder } from "./sidebar";

type TMessageType = "text" | "action";
export type TChatType = "individual" | "group" | "none";

export interface ILastMessage {
  by?: string | undefined;
  message?: string;
  type?: TMessageType;
}

export interface IReaction {
  reaction: string;
  users: string[];
}

export interface IMessage {
  id: string;
  uid: string;
  text: string;
  reactions: IReaction[];
}

export interface IChatInfo {
  photos: number;
  videos: number;
  files: number;
  audio: number;
  links: number;
  voice: number;
}

export interface IChat {
  id: string;
  title: string;
  members: string[];
  messages: IMessage[];
  onlineUsers: string[];
  lastMessage: ILastMessage | null;
  avatar: string;
  updatedAt: number;
  unreadedMessages: number;
  isPin: boolean;
  chatType: TChatType;
  info: IChatInfo;
  folders: IFolder[];
  order?: number;
}
