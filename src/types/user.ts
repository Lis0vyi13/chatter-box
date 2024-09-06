type TMessageType = "text" | "action";
export type TChatType = "individual" | "group";

interface FavoritesInfo {
  photos: number;
  videos: number;
  files: number;
  audio: number;
  links: number;
  voice: number;
}

interface Favorites {
  info: FavoritesInfo;
  messages: any[];
}

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  createdAt: Date;
  photoUrl: string;
  emailVerified: boolean;
  favorites: Favorites;
  chats: any[];
  folders: any[];
}

export interface ILastMessage {
  by: string;
  message: string;
  type: TMessageType;
}
