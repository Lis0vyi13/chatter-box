import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { toast } from "sonner";

import ChatBlock from "@/components/Chat/ChatBlock";

const ChatPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  useEffect(() => {
    const handleAuthStateChanged = async (user: User | null) => {
      if (user && location.pathname.includes("/a")) {
        const toastShown = sessionStorage.getItem("toastShown");

        if (!toastShown) {
          toast.success("You have successfully signed in!");
          sessionStorage.setItem("toastShown", "true");
        }
      }
    };

    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
    return () => {
      unsubscribe();
    };
  }, [location.pathname]);

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
