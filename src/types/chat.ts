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
  members: number;
  messages: IMessage[];
}
