import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "@/firebase/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

import { UserData } from "@/types/user";
import { IChat } from "@/types/chat";

export const createOrUpdateUser = async (user: User) => {
  const userDocRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userDocRef);

  const userData: UserData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName || "Anonymous",
    photoUrl: "",
    emailVerified: user.emailVerified,
    createdAt: Date.now(),
  };

  if (!userDoc.exists()) {
    await setDoc(userDocRef, userData);
  } else {
    await updateDoc(userDocRef, {
      email: userData.email,
      displayName: userData.displayName,
      searchableTokens: user.displayName?.toLowerCase().split(" ") || [],
      photoUrl: userData.photoUrl,
      emailVerified: userData.emailVerified,
    });
  }

  return userDoc.exists() ? (userDoc.data() as UserData) : userData;
};

export const createFavoritesChat = async (chatData: IChat, uid: string) => {
  const chatDocRef = doc(db, "chats", uid);
  const chatDoc = await getDoc(chatDocRef);

  if (!chatDoc.exists()) {
    await setDoc(chatDocRef, {
      chats: [chatData],
    });
  }
  const updatedChatDoc = await getDoc(chatDocRef);

  return updatedChatDoc.data();
};

export const createChat = async (chatData: IChat, uid: string) => {
  const chatDocRef = doc(db, "chats", uid);
  const chatDoc = await getDoc(chatDocRef);

  await updateDoc(chatDocRef, {
    chats: [...chatDoc.data()?.chats, chatData],
  });

  const updatedChatDoc = await getDoc(chatDocRef);
  return updatedChatDoc.data() as IChat;
};

export const createTestFolder = async (user: User) => {
  const folderDocRef = doc(db, "folders", user.uid);
  const folderDoc = await getDoc(folderDocRef);
  const testFolder = {
    id: uuidv4(),
    title: "Work",
    type: "all",
    isActive: false,
    unreaded: 3,
    to: "/a",
  };

  if (!folderDoc.exists()) {
    await setDoc(folderDocRef, {
      data: [testFolder],
    });
  }

  return folderDoc.data();
};

export const getSortedChats = async (uid: string): Promise<IChat[]> => {
  const chatDocRef = doc(db, "chats", uid);
  const chatDoc = await getDoc(chatDocRef);

  if (!chatDoc.exists()) {
    return [];
  }

  const chatData = chatDoc.data()?.chats || [];

  const sortedChats = chatData.sort(
    (a: IChat, b: IChat) => (b.updatedAt || 0) - (a.updatedAt || 0),
  );

  return sortedChats;
};

export const getUserById = async (uid: string): Promise<UserData | null> => {
  const userDocRef = doc(db, "users", uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists) {
    return null;
  }
  return userDoc.data() as UserData;
};

export const searchByDisplayName = async (searchTerm: string): Promise<UserData[]> => {
  try {
    const usersRef = collection(db, "users");
    const lowerSearchTerm = searchTerm.toLowerCase();

    const q = query(usersRef);
    const querySnapshot = await getDocs(q);

    const users: UserData[] = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data() as UserData;
      const isMatch = userData.displayName?.toLowerCase().includes(lowerSearchTerm);

      if (isMatch) users.push(userData);
    });

    return users;
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
