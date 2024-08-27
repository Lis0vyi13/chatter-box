import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { toast } from "sonner";

import useAuth from "@/hooks/useLogin";
import useActions from "@/hooks/useActions";

const useLogin = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();
  const { setUser } = useActions();

  useEffect(() => {
    if (isAuth) {
      navigate("/all-chats");
    }
  }, [isAuth]);

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");

      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");

            const loggedInUser = result.user;
            setUser({
              uid: loggedInUser.uid,
              email: loggedInUser.email,
              displayName: loggedInUser.displayName,
              photoURL: loggedInUser.photoURL,
              emailVerified: loggedInUser.emailVerified,
            });

            toast.success("Your account has been successfully activated.");
          })
          .catch((error) => {
            toast.error("There was an error during the activation process.");
            console.error("Error during sign-in:", error);
          });
      }
    }
  }, []);
  return;
};

export default useLogin;
