import { togglePinChat } from "@/services/firebase";
import { Location, NavigateFunction } from "react-router-dom";

export const openChat = (location: Location, navigate: NavigateFunction, id: string) => {
  const category = location.pathname.split("/")[1];
  navigate(`/${category}/${id}`, { replace: true });
};

export const doTooglePinChat = async (userId: string, chatId: string) => {
  await togglePinChat(userId, chatId);
};

export const archiveChat = () => {
  console.log("Archive clicked");
};

export const clearChatHistory = () => {
  console.log("Clear history clicked");
};

export const deleteChat = () => {
  console.log("Delete chat clicked");
};
