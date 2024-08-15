import SearchInput from "@/ui/SearchInput";
import ChatListItem from "./ChatListItem";

export interface IUsers {
  id: string;
  avatar: string;
  title: string;
  updatedAt: number;
  unreadedMessages: number;
  isLock: boolean;
}
const users: IUsers[] = [
  {
    id: "user1",
    avatar: "/avatar.jpg",
    title: "Alice Johnson",
    updatedAt: 1692000000000, // timestamp for testing
    unreadedMessages: 5,
    isLock: false,
  },
  {
    id: "user2",
    avatar: "",
    title: "Bob Smith",
    updatedAt: 1693000000000, // timestamp for testing
    unreadedMessages: 2,
    isLock: true,
  },
];

const ChatList = () => {
  return (
    <section className="user-list">
      <SearchInput placeholder="Search..." />
      <ul className="list mt-2 flex flex-col gap-2">
        {users.map((user) => (
          <li key={user.id}>
            <ChatListItem {...user} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChatList;
