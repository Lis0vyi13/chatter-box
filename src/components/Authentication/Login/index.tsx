import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { toast } from "sonner";

import useActions from "@/hooks/useActions";
import useLogin from "@/hooks/useLogin";
import { signInWithGoogle } from "@/utils/signInWithGoogle";

import Block from "@/ui/Block";
import Button from "@/ui/Button";
import LoginForm from "./LoginForm";
import Logo from "@/components/Logo";

import { AUTH_SERVICES } from "@/constants";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Login = () => {
  const location = useLocation();
  const { setUser } = useActions();
  const isLogin = useLogin();
  const navigate = useNavigate();
  const handlers = [() => signInWithGoogle(setUser), () => {}];

  const isLoginPage = location.pathname.includes("login");

  useEffect(() => {
    if (isLogin) {
      navigate("/all-chats");
    }
  }, [isLogin]);

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");

      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn");

            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser({
              uid: loggedInUser.uid,
              email: loggedInUser.email,
              displayName: loggedInUser.displayName,
              photoURL: loggedInUser.photoURL,
              isVerified: loggedInUser.emailVerified,
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

  return (
    <Block
      color="dark"
      className={`flex transition-all duration-700 flex-col relative min-w-full items-center text-center text-white ${
        isLoginPage ? "-ml-[100%]" : ""
      }`}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.1 }}
        variants={variants}
      >
        <div className="logo pt-4">
          <Logo width={28} height={28} />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={variants}
      >
        <div className="signup-header flex flex-col justify-center items-center mt-14">
          <p className="slogan inline-block text-[10px] xs:text-[11px] text-gray px-4 py-2 bg-white bg-opacity-5 rounded-full">
            Break the Silence, Spark the Conversation
          </p>
          <h1 className="mt-3 text-[28px] leading-8">Log in</h1>
          <span className="text-gray inline-block pt-2 text-[11px]">
            Enter your credentials to access your account
          </span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={variants}
      >
        <div className="auth-buttons mt-6 flex gap-3 items-center">
          {AUTH_SERVICES.map(({ title, className, Icon }, i) => (
            <Button
              onClick={handlers[i]}
              key={title}
              className={`rounded-lg border border-gray ${className}`}
            >
              {Icon}
            </Button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={variants}
        className="w-full flex flex-col justify-center items-center"
      >
        <div className="divider-block w-full xs:w-[280px] flex justify-center items-center gap-2 text-gray mt-4 text-[9px]">
          <div className="divider w-full h-[2px] bg-gray bg-opacity-15" />
          <span>OR</span>
          <div className="divider w-full h-[2px] bg-gray bg-opacity-15" />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
        variants={variants}
        className="w-full flex flex-col justify-center items-center"
      >
        <LoginForm />
      </motion.div>
    </Block>
  );
};

export default Login;
