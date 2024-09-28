import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

import useUser from "@/hooks/useUser";

import Block from "@/ui/Block";
import ChatList from "./ChatList";
import Chat from "./Chat";

import { IChat } from "@/types/chat";

const ChatBlock = ({ id }: { id?: string }) => {
  const [currentChat, setCurrentChat] = useState<IChat | null>(null);
  const user = useUser();
  const [chats, setChats] = useState<IChat[] | null>(null);

  useEffect(() => {
    if (user?.uid) {
      const chatsRef = doc(db, "chats", user.uid);

      const unsubscribe = onSnapshot(chatsRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data() as { chats: IChat[] };
          const sortedChats = data.chats.sort(
            (a: IChat, b: IChat) => (b.updatedAt || 0) - (a.updatedAt || 0),
          );
          setChats(sortedChats);
        } else {
          setChats([]);
        }
      });

      return () => unsubscribe();
    }
  }, [user?.uid]);

  useEffect(() => {
    const chat = chats?.find((chat) => chat.id == id);
    setCurrentChat(chat || null);
  }, [chats, id]);

  return (
    <Block className={`flex ${currentChat ? "gap-5" : "gap-2"} pl-4`}>
      <div className="w-[min(300px,_100%)] h-full py-4">
        <ChatList data={chats} />
      </div>
      {currentChat ? (
        <div className="chat flex flex-col w-full px-3 py-4 flex-1">
          <Chat data={currentChat} />
        </div>
      ) : (
        <div className="chat flex bg-gray bg-opacity-30 p-4 justify-center items-center flex-col w-full px-3 flex-1">
          <span className="px-4 py-2 text-xs text-[0.9rem] bg-dark text-white rounded-2xl">
            Choose who you would like to write to
          </span>
        </div>
      )}
    </Block>
  );
};

export default ChatBlock;
