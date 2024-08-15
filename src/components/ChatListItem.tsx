import Avatar from "./Avatar";

import { IUsers } from "./ChatList";

const ChatListItem = (props: IUsers) => {
  return (
    <div className="chat-list-item w-full py-1">
      <Avatar avatar={props.avatar} />
    </div>
  );
};

export default ChatListItem;
