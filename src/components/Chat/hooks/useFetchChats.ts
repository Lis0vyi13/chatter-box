import { useEffect, useState } from "react";
import { IChat } from "@/types/chat";
import { searchByDisplayName } from "@/services/firebase";
import { userToChat } from "@/templates";

const useFetchChats = (data: IChat[] | null, searchValue: string) => {
  const [currentChats, setCurrentChats] = useState<IChat[] | null>(null);

  useEffect(() => {
    const searchUser = async (query: string) => {
      const users = await searchByDisplayName(query);
      return users;
    };

    const fetchData = async () => {
      if (searchValue !== "") {
        const chatsByQuery =
          data?.filter((chat) => chat.title.toLowerCase().includes(searchValue.toLowerCase())) ||
          [];

        const usersByQuery = await searchUser(searchValue);
        const usersChats: IChat[] = usersByQuery.map((user) => userToChat(user));

        const combinedList = [...chatsByQuery, ...usersChats];

        const uniqueChats = combinedList.reduce<IChat[]>((acc, chat) => {
          const isDuplicate = acc.some(
            (existingChat) =>
              existingChat.id === chat.id ||
              (new Set(existingChat.members).size === new Set(chat.members).size &&
                existingChat.members.every((member) => chat.members.includes(member))),
          );

          if (!isDuplicate) {
            acc.push(chat);
          }
          return acc;
        }, []);

        setCurrentChats(uniqueChats);
      } else {
        setCurrentChats(data || null);
      }
    };

    fetchData();
  }, [searchValue, data]);

  return { currentChats, setCurrentChats };
};

export default useFetchChats;
