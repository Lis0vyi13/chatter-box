import { IChat } from "@/types/chat";
import Title from "@/ui/Title";

interface IChatProps {
  data: IChat;
}

const Chat = ({ data }: IChatProps) => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <Title className="text-[30px]">{data.title}</Title>
      </div>
    </header>
  );
};

export default Chat;
