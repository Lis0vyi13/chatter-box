type TMessageType = "text" | "action";
export type TChatType = "individual" | "group";

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
