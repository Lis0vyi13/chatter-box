import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

import { monitorUserConnection } from "@/utils/monitorUserConnection";
import useActions from "./useActions";

import { UserData } from "@/types/user";
import { IChat } from "@/types/chat";
import favoritesLogo from "/favorites.png";

const createChat = async (chatData: IChat, uid: string) => {
  try {
    const chatDocRef = doc(db, "chats", uid);
    const chatDoc = await getDoc(chatDocRef);

    if (!chatDoc.exists()) {
      await setDoc(chatDocRef, {
        chats: [chatData],
      });
    }

    return chatDoc.data();
  } catch (e) {
    console.error("Error creating chat: ", e);
  }
};

export const useApp = () => {
  const db = getFirestore();
  const { setUser, setChats } = useActions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        monitorUserConnection();

        if (user.emailVerified) {
          try {
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
              await setDoc(userDocRef, {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || "Anonymous",
                createdAt: Date.now(),
                photoUrl: "",
                emailVerified: user.emailVerified,
                folders: [
                  {
                    id: uuidv4(),
                    title: "Work",
                    type: "all",
                    isActive: false,
                    unreaded: 3,
                    to: "/a",
                  },
                ],
              });
            } else {
              await updateDoc(userDocRef, {
                email: user.email,
                displayName: user.displayName || "Anonymous",
                photoUrl: "",
                emailVerified: user.emailVerified,
              });

              const favoritesChat: IChat = {
                id: uuidv4(),
                title: "Favorites",
                members: [user.uid],
                messages: [],
                onlineUsers: [],
                lastMessage: null,
                avatar: favoritesLogo,
                updatedAt: Date.now(),
                unreadedMessages: 0,
                isPin: false,
                chatType: "individual",
                info: {
                  photos: 0,
                  videos: 0,
                  files: 0,
                  audio: 0,
                  links: 0,
                  voice: 0,
                },
              };
              const chatData = await createChat(favoritesChat, user.uid);

              const data = userDoc.data() as UserData;
              setUser(data);
              if (chatData) setChats(chatData.chats);
            }
          } catch (error) {
            console.error("Error adding or updating user data in Firestore:", error);
          }
        } else {
          console.log("Email not verified yet");
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db, setUser]);
};
