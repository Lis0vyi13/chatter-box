import { ReactNode } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../shadcn/context-menu";

import { FaRegFolderOpen } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

interface IChatListItemMenu {
  children: ReactNode;
  isPin: boolean;
}

export function ChatListItemMenu({ isPin, children }: IChatListItemMenu) {
  const labelWithIconClassName = "absolute left-[2rem] top-1/2 -translate-y-1/2";
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem>
          <div className="flex items-center">
            <FaRegFolderOpen className="text-[15px]" />
            <p className={labelWithIconClassName}>Open</p>
          </div>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <div className="flex items-center">
            {isPin ? (
              <>
                <TiPin className="text-[16px]" />
                <p className={labelWithIconClassName}>Unpin</p>
              </>
            ) : (
              <>
                <TiPin className="text-[16px]" />
                <p className={labelWithIconClassName}>Pin</p>
              </>
            )}
          </div>
        </ContextMenuItem>
        <ContextMenuItem>
          <div className="flex items-center">
            <RiInboxUnarchiveLine className="text-[16px]" />
            <p className={labelWithIconClassName}>Archive</p>
          </div>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <div className="flex items-center">
            <MdOutlineCleaningServices className="text-[16px]" />
            <p className={labelWithIconClassName}>Clear history</p>
          </div>
        </ContextMenuItem>
        <ContextMenuItem>
          <div className="flex items-center">
            <MdDeleteOutline className="text-[16px] text-[#ee242b]" />
            <p className={`${labelWithIconClassName} text-[#ee242b]`}>Delete chat</p>
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
