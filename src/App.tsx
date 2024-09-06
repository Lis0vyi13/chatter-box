import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { useApp } from "./hooks/useApp";

import Layout from "./layouts";
import routes from "./routes";
import LoginPage from "./pages/Login/LoginPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";

import Loader from "@/ui/Loader";

function App() {
  useApp();
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
          <Route path="sign-up" element={<LoginPage />} />
          <Route path="create-password" element={<CreatePasswordPage />} />
        </Routes>
      </Suspense>

      <Toaster toastOptions={{ className: "toaster" }} richColors />
    </Router>
  );
}

export default App;

