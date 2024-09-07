import { IChat } from "./chat";
import { IFolder } from "./sidebar";

export type TChatType = "individual" | "group";

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  createdAt: Date;
  photoUrl: string;
  emailVerified: boolean;
  chats: IChat[];
  folders: IFolder[];
}
