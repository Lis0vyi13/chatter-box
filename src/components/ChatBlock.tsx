import Block from "@/ui/Block";
import ChatList from "./ChatList";
import Chat from "./Chat";

import { chat1 } from "@/constants";

const ChatBlock = ({ id }: { id?: string }) => {
  return (
    <Block className={`flex ${id ? "gap-5" : "gap-2"} pl-4`}>
      <div className="w-[min(300px,_100%)] h-full py-4">
        <ChatList />
      </div>
      {id ? (
        <div className="chat flex flex-col w-full px-3 py-4 flex-1">
          <Chat data={chat1} />
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
