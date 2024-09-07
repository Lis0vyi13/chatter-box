import { useCallback, useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { signOut } from "firebase/auth";
import { auth, dbRealtime } from "@/firebase/firebaseConfig";

import useUser from "@/hooks/useUser";
import useActions from "@/hooks/useActions";

import { sidebarIcons, userEditIcons } from "@/constants";

import { IFolder, IUserEditIcons } from "@/types/sidebar";
import { FaFolder } from "react-icons/fa";

const useSidebar = () => {
  const { logout } = useActions();

  const [icons, setIcons] = useState<IFolder[] | IUserEditIcons[]>(sidebarIcons);
  const data = useUser();

  useEffect(() => {
    const updateIcons = async () => {
      if (data?.folders) {
        const folders: IFolder[] = data?.folders;

        const updatedFolders: IFolder[] = folders.map((folder) => ({
          ...folder,
          Icon: <FaFolder />,
        }));

        setIcons(() => {
          const addedChats = [sidebarIcons[0], ...updatedFolders, sidebarIcons[1]];
          const userSettingsIcons = userEditIcons.map((icon, i) => ({
            ...icon,
            id: i + addedChats.length,
          }));
          const allChats = [...addedChats, ...userSettingsIcons];
          return allChats;
        });
      }
    };

    updateIcons();
  }, [data?.folders, sidebarIcons, userEditIcons]);

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
