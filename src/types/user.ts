import { User } from "firebase/auth";

type TMessageType = "text" | "action";
export type TChatType = "individual" | "group";

export interface IUser
  extends Pick<User, "uid" | "email" | "displayName" | "photoURL" | "emailVerified"> {}

export interface ILastMessage {
  by: string;
  message: string;
  type: TMessageType;
}

export interface IUsers {
  id: string;
  lastMessage: ILastMessage;
  avatar: string;
  title: string;
  updatedAt: number;
  unreadedMessages: number;
  isPin: boolean;
  chatType: TChatType;
}
