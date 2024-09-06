import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "sonner";

import ChatBlock from "@/components/ChatBlock";

const ChatPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  useEffect(() => {
    const handleAuthStateChanged = async () => {
      if (location.pathname.includes("/a")) {
        toast.success("You have successfully signed in!");
      }
    };

    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="chat-page overflow-hidden flex flex-1">
      <div className={`chat-block ${id ? "w-4/5" : "w-full"}`}>
        {/* Adjust width based on presence of `id` */}
        <ChatBlock id={id} />
      </div>
    </div>
  );
};

export default ChatPage;
