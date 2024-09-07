import { ReactElement } from "react";
import { To } from "react-router-dom";

export interface IFolder {
  id: number;
  Icon: ReactElement;
  title: string;
  isActive: boolean;
  type: string;
  unreaded: number;
  to: To;
}

export interface IUserEditIcons extends Omit<IFolder, "type" | "unreaded" | "id"> {
  id?: number;
  type?: string;
}

export interface ILogoutIcon {
  Icon: ReactElement;
  title: string;
  to?: To;
  isActive: boolean;
}

export type TUnreadMessages = Record<string, number>;
