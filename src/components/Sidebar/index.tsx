import { Link } from "react-router-dom";

import useSidebar from "./useSidebar";

import SidebarIcon from "./SidebarIcon";

import { logOutIcon } from "@/constants";

export type TSidebarProps = {
  id: string;
};

const Sidebar = ({ id }: TSidebarProps) => {
  const { icons, handleIconClick, handleLogout } = useSidebar({ id });
  const [chats, settings] = [icons.slice(0, -2), icons.slice(-2)];

  return (
    <section className="flex overflow-auto custom-scrollbar px-2 flex-col justify-between gap-4 items-center py-4">
      <Link className="mt-1" to={"/a"}>
        <img width={27} height={27} src="/logo.svg" alt="Logo" />
      </Link>
      <div className="flex flex-col gap-3 justify-center">
        <div className="sidebar-icons flex gap-1 flex-col justify-center pt-2">
          {chats?.map((iconData, i) => (
            <SidebarIcon onClick={() => handleIconClick(iconData.id || 0)} key={i} {...iconData} />
          ))}
        </div>
        <hr className="border-white border-opacity-40 border-1 w-3/5 self-center" />
        <div className="sidebar-icons flex gap-1 flex-col justify-center">
          {settings?.map((iconData, i) => (
            <SidebarIcon onClick={() => handleIconClick(iconData.id || 0)} key={i} {...iconData} />
          ))}
        </div>
      </div>
      <div className="w-full">
        <SidebarIcon onClick={handleLogout} {...logOutIcon} />
      </div>
    </section>
  );
};

export default Sidebar;
