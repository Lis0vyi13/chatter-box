import { useEffect, useRef, useState } from "react";

import Title from "@/ui/Title";
import Icon from "@/ui/Icon";
import Input from "@/ui/Input";

import { IChat } from "@/types/chat";

import { CiSearch } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { GrAttachment, GrMicrophone, GrSend } from "react-icons/gr";

const Chat = ({ data }: { data: IChat }) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [data]);

  return (
    <>
      <header className="chat-header bg-white flex justify-between items-center">
        <div>
          <Title className="text-[28px] leading-8">{data?.title}</Title>
          {data?.chatType === "individual" && data?.members?.length > 2 && (
            <p className="members mt-1 font-[400] text-[13px] text-dark text-opacity-70">
              {data?.members?.length} members, {data?.onlineUsers?.length} online
            </p>
          )}
        </div>
        <div className="flex gap-1 leading-8 text-dark text-opacity-70 text-[28px] items-center">
          <Icon>
            <CiSearch />
          </Icon>
          {data?.chatType === "individual" && data?.members?.length === 2 && (
            <Icon>
              <IoCallOutline />
            </Icon>
          )}
          <Icon>
            <IoMdMore />
          </Icon>
        </div>
      </header>

      <main className="chat-main flex-1"></main>
      <footer className="chat-footer">
        <div className="relative">
          <Input
            ref={inputRef}
            noDeleteIcon
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-opacity-70 bg-lightBlue pl-9 text-dark placeholder:text-opacity-70 text-xs placeholder:text-xs py-4"
            name="message"
            placeholder="Your message"
          />
          <div className="absolute text-[18px] left-1 top-1/2 -translate-y-1/2 leading-[0.7] text-dark text-opacity-70">
            <Icon>
              <GrAttachment />
            </Icon>
          </div>
          <div className="absolute flex items-center gap-1 text-[20px] right-2 top-1/2 -translate-y-1/2 leading-[0.7] text-dark text-opacity-70">
            <Icon>
              <GrMicrophone />
            </Icon>
            <Icon>
              <GrSend />
            </Icon>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Chat;
