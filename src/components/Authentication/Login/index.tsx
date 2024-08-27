import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import useActions from "@/hooks/useActions";
import useLogin from "./useLogin";
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
  useLogin();

  const location = useLocation();
  const { setUser } = useActions();
  const handlers = [() => signInWithGoogle(setUser), () => {}];

  const isLoginPage = location.pathname.includes("login");

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
        <Link to={"/sign-up"} className="logo pt-4">
          <Logo width={28} height={28} />
        </Link>
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
