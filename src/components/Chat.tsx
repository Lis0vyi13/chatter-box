import Block from "@/ui/Block";
import ChatList from "./ChatList";

const Chat = () => {
  return (
    <Block>
      <div className="w-1/4">
        <ChatList />
      </div>
    </Block>
  );
};

export default Chat;
