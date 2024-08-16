import { useState } from "react";

import SearchInput from "@/ui/SearchInput";
import ChatListItem from "./ChatListItem";

import { users } from "@/constants";

const ChatList = () => {
  const [activeChat, setActiveChat] = useState<string>("");
  return (
    <section className="user-list flex flex-col custom-scrollbar h-full">
      <SearchInput placeholder="Search..." />
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
