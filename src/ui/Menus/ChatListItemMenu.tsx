import { ReactNode, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useUser from "@/hooks/useUser";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../shadcn/context-menu";

import { doTooglePinChat, openChat } from "./MenuActions";

import { FaRegFolderOpen } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { MdOutlineCleaningServices, MdDeleteOutline } from "react-icons/md";

import { IChat } from "@/types/chat";

interface IChatListItemMenu {
  data: IChat;
  children?: ReactNode;
}

export function ChatListItemMenu({ data, children }: IChatListItemMenu) {
  const labelWithIconClassName = "absolute left-[2rem] top-1/2 -translate-y-1/2";
  const user = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = useMemo(
    () => [
      {
        icon: <FaRegFolderOpen className="text-[15px]" />,
        label: "Open",
        separator: true,
        action: () => openChat(location, navigate, data.id),
      },
      {
        icon: <TiPin className="text-[16px]" />,
        label: data.isPin ? "Unpin" : "Pin",
        separator: false,
        action: async () => {
          if (user) {
            await doTooglePinChat(user.uid, data.id);
          }
        },
      },
      {
        icon: <RiInboxUnarchiveLine className="text-[16px]" />,
        label: "Archive",
        separator: true,
        action: () => {},
      },
      {
        icon: <MdOutlineCleaningServices className="text-[16px]" />,
        label: "Clear history",
        separator: false,
        action: () => {},
      },
      {
        icon: <MdDeleteOutline className="text-[16px] text-[#ee242b]" />,
        label: "Delete chat",
        isDanger: true,
        separator: false,
        action: () => {},
      },
    ],
    [data, data.id],
  );

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        {menuItems.map((item, index) => (
          <div key={index}>
            <ContextMenuItem onClick={item.action}>
              <div className="flex items-center">
                {item.icon}
                <p className={`${labelWithIconClassName} ${item.isDanger ? "text-[#ee242b]" : ""}`}>
                  {item.label}
                </p>
              </div>
            </ContextMenuItem>
            {item.separator && <ContextMenuSeparator />}
          </div>
        ))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
