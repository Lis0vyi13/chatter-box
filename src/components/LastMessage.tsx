import { ILastMessage, TChatType } from "@/types/user";

interface ILastMessageProps {
  data: ILastMessage & { id: string; chatType: TChatType };
}

const LastMessage = ({ data }: ILastMessageProps) => {
  const findUserById = (id: string) => {
    console.log(id);
    return "Test user";
  };

  const isSender = data.by === data.id;
  const isAction = data.type === "action";
  const sender = findUserById(data.id);

  return (
    <strong
      className={`last-message text-[12px] line-clamp-1 ${
        isAction ? "text-blue" : "text-dark text-opacity-70"
      }`}
    >
      {!isAction && isSender && <span className="text-blue font-normal">You: </span>}
      {data.chatType === "group" ? `${sender} ${data.message}` : data.message}
    </strong>
  );
};

export default LastMessage;
