import { useState } from "react";
import { useParams } from "react-router-dom";

import { createChat } from "@/services/firebase";

import useUser from "@/hooks/useUser";
import useFetchChats from "./hooks/useFetchChats";
import useActiveChat from "./hooks/useActiveChat";

import SearchInput from "@/ui/SearchInput";
import ChatListItem from "./ChatListItem";
import Loader from "@/ui/Loader";
import AddChat from "@/ui/AddChat";

import { IChat } from "@/types/chat";

const ChatList = ({ data }: { data: IChat[] | null }) => {
  const { id } = useParams<{ id: string }>();
  const currentUser = useUser();
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>("");
  const { activeChat, setActiveChat } = useActiveChat(id);
  const { currentChats } = useFetchChats(data, debouncedSearchValue);

  const searchInputProps = {
    name: "search",
    placeholder: "Search...",
    value: searchValue,
    setValue: setSearchValue,
    setDebouncedValue: setDebouncedSearchValue,
  };

  const createNewChat = async (chatData: IChat) => {
    try {
      const uid = currentUser?.uid;
      const data: IChat = { ...chatData, chatType: "individual" };
      if (uid) {
        const chat = await createChat(data, uid);
        if (chat?.id) setActiveChat(chat?.id);
        setSearchValue("");
      }
    } catch (error) {
      console.error("Error creating or updating chat:", error);
    }
  };

  return (
    <section className="relative user-list flex flex-col custom-scrollbar h-full">
      <SearchInput {...searchInputProps} />
      <div className="mt-2 transition-all -ml-2 overflow-auto custom-scrollbar chat-scrollbar">
        <ul className="list flex flex-col">
          {currentChats ? (
            currentChats.map((chat) => (
              <li key={chat.id}>
                <ChatListItem
                  {...chat}
                  isActive={chat.id == activeChat}
                  setChat={
                    chat.chatType === "none"
                      ? () => createNewChat(chat)
                      : () => setActiveChat(chat.id)
                  }
                />
              </li>
            ))
          ) : (
            <Loader isDefault />
          )}
        </ul>
      </div>
      <button className={`absolute transition-all duration-200 right-3 bottom-4`}>
        <AddChat />
      </button>
    </section>
  );
};

export default ChatList;
