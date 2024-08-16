import ChatPage from "@/pages/ChatPage";
import { ReactNode } from "react";

interface RouteType {
  path: string;
  element: ReactNode;
  index?: boolean;
}
const routes: RouteType[] = [
  {
    index: true,
    path: "/",
    element: <ChatPage />,
  },
  {
    index: true,
    path: "/chat/:id",
    element: <ChatPage />,
  },
];

export default routes;
