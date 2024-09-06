import { ReactNode } from "react";

import ChatPage from "@/pages/ChatPage";
import LoginPage from "@/pages/Login/LoginPage";

interface RouteType {
  path?: string;
  element: ReactNode;
  index?: boolean;
}
const routes: RouteType[] = [
  { path: "*", element: <ChatPage /> },
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: "/a",
    element: <ChatPage />,
  },
  {
    path: "/a/:id",
    element: <ChatPage />,
  },
];

export default routes;
