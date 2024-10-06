import { IChat } from "@/types/chat";
import Block from "@/ui/Block";
import Delete from "@/ui/Delete";
import { useCallback, useState } from "react";

interface IChatDetails {
  data: IChat;
}

const ChatDetails = ({ data }: IChatDetails) => {
  console.log(data);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isMembersVisible, setIsMembersVisible] = useState(true);

  const toggleSetInfoVisible = useCallback(() => {
    setIsInfoVisible((prev) => !prev);
  }, []);
  const toggleSetMembersVisible = useCallback(() => {
    setIsMembersVisible((prev) => !prev);
  }, []);

  return (
    <section
      className={`chat-details flex flex-col h-full gap-2 ${
        !isInfoVisible && !isMembersVisible ? "w-0" : "w-[300px]"
      }`}
    >
      {isInfoVisible && (
        <Block className="chat-info px-4 py-5 min-h-[54%]">
          <header>
            <h1 className="text-[22px] font-[500] capitalize">Chat Info</h1>
            <Delete handler={toggleSetInfoVisible} />
          </header>
          <main className="chat-info__content mt-3 h-full overflow-auto">
            <h2 className="font-[500] capitalize">Files</h2>
          </main>
        </Block>
      )}
      {isMembersVisible && (
        <Block className="chat-members px-4 py-5">
          <h1 className="text-[18px] font-[500] capitalize">Members</h1>
          <Delete handler={toggleSetMembersVisible} />
        </Block>
      )}
    </section>
  );
};

export default ChatDetails;
