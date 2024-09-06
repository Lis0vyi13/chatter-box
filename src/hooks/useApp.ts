import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { auth } from "@/firebase/firebaseConfig";

import { monitorUserConnection } from "@/utils/monitorUserConnection";
import useActions from "./useActions";

import { UserData } from "@/types/user";

export const useApp = () => {
  const db = getFirestore();
  const { setUser } = useActions();

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
                favorites: {
                  info: {
                    photos: 0,
                    videos: 0,
                    files: 0,
                    audio: 0,
                    links: 0,
                    voice: 0,
                  },
                  messages: [],
                },
                chats: [],
                folders: [],
              });
            } else {
              await updateDoc(userDocRef, {
                email: user.email,
                displayName: user.displayName || "Anonymous",
                photoUrl: "",
                emailVerified: user.emailVerified,
              });

              const data = userDoc.data() as UserData;
              console.log(data);
              setUser(data);
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
