import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchInput from "@/ui/SearchInput";
import ChatListItem from "./ChatListItem";

import { users } from "@/constants";

const ChatList = () => {
  const { id } = useParams<{ id: string }>();
  const [activeChat, setActiveChat] = useState<string>("");

  useEffect(() => {
    if (!id) setActiveChat("");
  }, [id]);

  return (
    <section className="user-list flex flex-col custom-scrollbar h-full">
      <SearchInput name="search" placeholder="Search..." />
      <div className="mt-2 transition-all -ml-2 overflow-auto custom-scrollbar chat-scrollbar">
        <ul className="list flex flex-col">
          {users.map((user) => (
            <li key={user.id}>
              <ChatListItem
                {...user}
                isActive={user.id === activeChat}
                setChat={() => setActiveChat(user.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChatList;
