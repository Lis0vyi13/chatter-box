import { TChatType } from "./user";

type TMessageType = "text" | "action";

export interface ILastMessage {
  by: string;
  message: string;
  type: TMessageType;
}

export interface IReaction {
  reaction: string;
  users: string[];
}

export interface IMessage {
  id: string;
  user: string;
  avatar: string;
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
}
