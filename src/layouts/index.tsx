import { Suspense, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import Loader from "@/ui/Loader";
import Sidebar from "@/components/Sidebar";
import useEmailVerification from "@/hooks/useEmailVerification";

const Layout = () => {
  useEmailVerification();

  const mainRef = useRef(null);
  const isLogin = useAuth();
  const navigate = useNavigate();
  const isCheckingAuth = isLogin === null;

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (isCheckingAuth) {
    return <Loader />;
  }

  if (isLogin) {
    return (
      <div className="px-4 py-2 flex h-full">
        <section className="wrapper flex-1 bg-dark rounded-[26px] flex">
          <aside className="flex justify-center min-w-[96px]">
            <Sidebar />
          </aside>
          <main ref={mainRef} className="flex flex-1 py-2">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </section>
      </div>
    );
  }

  return null;
};

export default Layout;
