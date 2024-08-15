import { Suspense, useRef } from "react";
import { Outlet } from "react-router-dom";

import Loader from "@/ui/Loader";
import Sidebar from "@/components/Sidebar";

const Layout = () => {
  const mainRef = useRef(null);
  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

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
