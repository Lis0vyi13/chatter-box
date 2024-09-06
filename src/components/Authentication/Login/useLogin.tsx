import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

const useLogin = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [setUser, navigate]);

  useEffect(() => {
    if (isAuth && !localStorage.getItem("googleUserData")) {
      navigate("/a");
    }
  }, [isAuth]);

  return { isLoginPage };
};

export default useLogin;
