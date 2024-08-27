import { Suspense, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useLogin";

import Loader from "@/ui/Loader";
import Sidebar from "@/components/Sidebar";

const Layout = () => {
  const mainRef = useRef(null);
  const isLogin = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/sign-up");
    }
  }, []);

  return (
    <div className="px-4 py-2 flex h-full">
      <section className="wrapper flex-1 bg-dark rounded-[26px] flex">
        <aside className="flex">
          <Sidebar id={"id"} />
        </aside>
        <main ref={mainRef} className="flex flex-1 py-2">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </section>
    </div>
  );
};

export default Layout;
