import { Link } from "react-router-dom";

import useUser from "@/hooks/useUser";
import useSidebar from "./useSidebar";

import SidebarIcon from "./SidebarIcon";

import { logOutIcon } from "@/constants";
import Loader from "@/ui/Loader";

const Sidebar = () => {
  const { icons, handleIconClick, handleLogout } = useSidebar();
  const [chats, settings] = [icons.slice(0, -2), icons.slice(-2)];
  const folders = useUser();

  return (
    <section className="flex overflow-auto custom-scrollbar px-2 flex-col justify-between gap-4 items-center py-4">
      <Link className="mt-1" to={"/a"}>
        <img width={27} height={27} src="/logo.svg" alt="Logo" />
      </Link>
      <div className="flex flex-col gap-3 justify-center">
        {folders ? (
          <>
            <div className="sidebar-icons flex gap-1 flex-col justify-center pt-2">
              {chats?.map((iconData, i) => (
                <SidebarIcon
                  onClick={() => handleIconClick(iconData.id || "0")}
                  key={i}
                  {...iconData}
                />
              ))}
            </div>
            <hr className="border-white border-opacity-40 border-1 w-3/5 self-center" />
            <div className="sidebar-icons flex gap-1 flex-col justify-center">
              {settings?.map((iconData, i) => (
                <SidebarIcon
                  onClick={() => handleIconClick(iconData.id || "0")}
                  key={i}
                  {...iconData}
                />
              ))}
            </div>
          </>
        ) : (
          <Loader className="flex-col gap-1" isVertical isDefault />
        )}
      </div>
      <div className={`w-full ${folders ? "" : "opacity-0 pointer-events-none"}`}>
        <SidebarIcon onClick={handleLogout} {...logOutIcon} />
      </div>
    </section>
  );
};

export default Sidebar;
