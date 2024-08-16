import { useParams } from "react-router-dom";

import Block from "@/ui/Block";
import ChatList from "./ChatList";
import Chat from "./Chat";

import { chat1 } from "@/constants";

const ChatBlock = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Block className="flex gap-5">
      <div className="w-[min(300px,_100%)] h-full">
        <ChatList />
      </div>
      {id && (
        <div className="chat">
          <Chat data={chat1} />
        </div>
      )}
    </Block>
  );
};

export default ChatBlock;
