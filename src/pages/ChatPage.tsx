import ChatBlock from "@/components/ChatBlock";

const ChatPage = () => {
  return (
    <div className="chat-page overflow-hidden flex flex-1">
      <div className="chat-block w-4/5">
        {/* расстянуть на всю ширину при условии что нету справа ничего */}
        <ChatBlock />
      </div>
    </div>
  );
};

export default ChatPage;
