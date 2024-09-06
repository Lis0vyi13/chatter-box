import { ILastMessage, TChatType } from "./user";

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

export interface IChat {
  id: string;
  title: string;
  members: string[];
  messages: IMessage[];
  onlineUsers: string[];
  lastMessage: ILastMessage;
  avatar: string;
  updatedAt: number;
  unreadedMessages: number;
  isPin: boolean;
  chatType: TChatType;
}
