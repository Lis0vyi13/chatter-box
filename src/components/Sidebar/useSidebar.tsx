import { useCallback, useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { signOut } from "firebase/auth";
import { auth, dbRealtime } from "@/firebase/firebaseConfig";

import useActions from "@/hooks/useActions";

import { sidebarIcons, userEditIcons } from "@/constants";
import { FaFolder } from "react-icons/fa";

import { TSidebarProps } from ".";
import { ISidebarIcons, IUserEditIcons, TUnreadMessages } from "@/types/sidebar";

const useSidebar = ({ id }: TSidebarProps) => {
  const { logout } = useActions();

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
        to: "/a",
      },
      {
        id: 2,
        Icon: <FaFolder />,
        title: "Friends",
        type: "all",
        isActive: false,
        unreaded: 0,
        to: "/a",
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

  const handleLogout = async () => {
    logout();
    signOut(auth);

    const user = auth.currentUser;

    if (user) {
      const userStatusDatabaseRef = ref(dbRealtime, `/status/${user.uid}`);
      const currentTimestamp = Date.now();

      const isOfflineForDatabase = {
        state: "offline",
        updatedAt: currentTimestamp,
      };

      try {
        await set(userStatusDatabaseRef, isOfflineForDatabase);
      } catch (error) {
        console.error("Error updating status or signing out:", error);
      }
    } else {
      console.log("No user is signed in.");
    }
  };

  return { icons, handleIconClick, handleLogout };
};

export default useSidebar;
