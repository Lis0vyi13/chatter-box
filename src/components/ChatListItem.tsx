import { Link } from "react-router-dom";

import { formatTimestamp } from "@/utils/formatTimestamp";

import Title from "@/ui/Title";
import Counter from "@/ui/Counter";
import Avatar from "./Avatar";
import LastMessage from "./LastMessage";

import { IUsers } from "@/types/user";
import { TiPin } from "react-icons/ti";

interface IChatListItemProps extends IUsers {
  isActive: boolean;
  setChat: () => void;
}

const ChatListItem = (props: IChatListItemProps) => {
  const { lastMessage, chatType, unreadedMessages, updatedAt, isPin, id, title, avatar } = props;
  const duration = formatTimestamp(updatedAt);

  return (
    <Link
      to={`/chat/${props.id}`}
      onClick={props.setChat}
      className={`chat-list-item flex transition-colors items-center rounded-xl gap-3 w-full p-2 cursor-pointer ${
        props.isActive ? "bg-lightBlue" : "hover:bg-blue hover:bg-opacity-15"
      }`}
    >
      <Avatar className="min-h-[50px] max-h-[50px] max-w-[50px] min-w-[50px]" avatar={avatar} />
      <div className="user-info flex flex-1 flex-col gap-[6px]">
        <Title className={"text-[14px]"}>{title}</Title>
        <LastMessage data={{ ...lastMessage, chatType, id }} />
      </div>
      <div className="flex gap-1 self-end justify-end">
        <div className="flex flex-col gap-2 items-end">
          <strong className="text-[12px] font-normal opacity-80">{duration}</strong>
          <div className="flex justify-center items-center gap-1">
            {unreadedMessages && <Counter>{unreadedMessages}</Counter>}
            {isPin && <TiPin className="text-blue text-[22px]" />}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatListItem;
