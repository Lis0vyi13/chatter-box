import { Suspense, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

import useActions from "./hooks/useActions";

import Layout from "./layouts";
import routes from "./routes";
import LoginPage from "./pages/Login/LoginPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import Loader from "@/ui/Loader";

import { Toaster } from "sonner";

function App() {
  const { setUser, logout } = useActions();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          if (user) {
            if (user.emailVerified) {
              setUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                isVerified: user.emailVerified,
              });
            }
          }
        } catch (error) {
          console.error("Error fetching token:", error);
        } finally {
          setLoading(false);
        }
      } else {
        logout();
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [setUser, logout]);

  if (loading) {
    return <Loader />;
  }
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

