import { ReactElement } from "react";
import { To } from "react-router-dom";

export interface IFolder {
  id: string;
  Icon: ReactElement;
  title: string;
  isActive: boolean;
  type: "all" | "archive";
  unreaded: number;
  to: To;
}

export interface IUserEditIcons extends Omit<IFolder, "type" | "unreaded" | "id"> {
  id?: string;
  type?: string;
}

export interface ILogoutIcon {
  Icon: ReactElement;
  title: string;
  to?: To;
  isActive: boolean;
}

export type TUnreadMessages = Record<string, number>;
