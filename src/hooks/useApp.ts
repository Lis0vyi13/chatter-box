import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

import { monitorUserConnection } from "@/utils/monitorUserConnection";
import useActions from "./useActions";
import {
  createFavoritesChat,
  createOrUpdateUser,
  createTestFolder,
  getSortedChats,
} from "@/services/firebase";
import { generateFavoritesChatTemplate } from "@/templates";

export const useApp = () => {
  const { setUser, setChats, setFolders } = useActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || !user.emailVerified) return;

      monitorUserConnection();

      try {
        const userData = await createOrUpdateUser(user);
        const favoritesChat = generateFavoritesChatTemplate(user.uid);
        await createFavoritesChat(favoritesChat, user.uid);
        const foldersData = await createTestFolder(user);
        const chats = await getSortedChats(user.uid);

        setUser(userData);
        if (foldersData) setFolders(foldersData.data);
        if (chats) setChats(chats);
      } catch (error) {
        console.error("Error handling user authentication:", error);
      }
    });

    return () => unsubscribe();
  }, [setUser, setChats]);
};
