import { useCallback, useEffect, useState } from "react";
import { sidebarIcons, userEditIcons } from "@/constants";
import { ISidebarIcons, IUserEditIcons, TUnreadMessages } from "@/types/sidebar";
import { TSidebarProps } from ".";
import { FaFolder } from "react-icons/fa";

const useSidebar = ({ id }: TSidebarProps) => {
  const [icons, setIcons] = useState<ISidebarIcons[] | IUserEditIcons[]>(sidebarIcons);

  const fetchUnreadMessages = useCallback(async (): Promise<TUnreadMessages> => {
    console.log(id);
    const unreadMessages: TUnreadMessages = { all: 5, archive: 2 };
    return unreadMessages;
  }, [id]);

  const fetchExtraChats = useCallback(async (): Promise<ISidebarIcons[]> => {
    const extraChats: ISidebarIcons[] = [
      {
        id: 1,
        Icon: <FaFolder />,
        title: "Work",
        type: "all",
        isActive: false,
        unreaded: 0,
        to: "/chats/work",
      },
      {
        id: 2,
        Icon: <FaFolder />,
        title: "Friends",
        type: "all",
        isActive: false,
        unreaded: 0,
        to: "/chats/friends",
      },
    ];
    return extraChats;
  }, []);

  useEffect(() => {
    const updateIcons = async () => {
      const [extraChats, unreadMessages] = await Promise.all([
        fetchExtraChats(),
        fetchUnreadMessages(),
      ]);

      setIcons(() => {
        const addedChats = [sidebarIcons[0], ...extraChats, sidebarIcons[1]].map((icon, i) => ({
          ...icon,
          id: i,
          unreaded: icon.type ? unreadMessages[icon.type] || 0 : 0,
        }));
        const userSettingsIcons = userEditIcons.map((icon, i) => ({
          ...icon,
          id: i + addedChats.length,
        }));
        const allChats = [...addedChats, ...userSettingsIcons];
        return allChats;
      });
    };

    updateIcons();
  }, [fetchExtraChats, fetchUnreadMessages]);

  const handleIconClick = useCallback((index: number) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon) => ({
        ...icon,
        isActive: icon.id === index,
      })),
    );
  }, []);

  return { icons, handleIconClick };
};

export default useSidebar;
