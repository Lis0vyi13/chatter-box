import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchInput from "@/ui/SearchInput";
import ChatListItem from "./ChatListItem";
import Loader from "@/ui/Loader";

import { IChat } from "@/types/chat";

const ChatList = ({ data }: { data: IChat[] | null }) => {
  const { id } = useParams<{ id: string }>();
  const [activeChat, setActiveChat] = useState<string>("");

  useEffect(() => {
    setActiveChat(id || "");
  }, [id]);

  return (
    <section className="user-list flex flex-col custom-scrollbar h-full">
      <SearchInput name="search" placeholder="Search..." />
      <div className="mt-2 transition-all -ml-2 overflow-auto custom-scrollbar chat-scrollbar">
        <ul className="list flex flex-col">
          {data ? (
            data.map((chat) => (
              <li key={chat.id}>
                <ChatListItem
                  {...chat}
                  isActive={chat.id == activeChat}
                  setChat={() => setActiveChat(chat.id)}
                />
              </li>
            ))
          ) : (
            <Loader isDefault />
          )}
        </ul>
      </div>
    </section>
  );
};

export default ChatList;
