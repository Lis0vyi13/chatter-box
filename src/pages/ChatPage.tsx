import Chat from "@/components/Chat";

const ChatPage = () => {
  return (
    <div className="chat-page flex flex-1">
      <div className="chat h-full w-4/5">
        <Chat />
      </div>
    </div>
  );
};

export default ChatPage;
