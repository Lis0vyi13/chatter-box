import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts";
import routes from "./routes";
import LoginPage from "./pages/LoginPage";

import { Toaster } from "sonner";
import Loader from "@/ui/Loader";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route, i) => (
              <Route key={i} index={route.index} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Suspense>

      <Toaster toastOptions={{ className: "toaster" }} richColors />
    </Router>
  );
}

export default App;

