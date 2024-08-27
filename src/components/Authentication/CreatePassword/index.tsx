import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/app/hooks";
import { motion } from "framer-motion";

import useAuth from "@/hooks/useLogin";

import Block from "@/ui/Block";
import Logo from "@/components/Logo";
import CreatePasswordForm from "./CreatePasswordForm";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CreatePassword = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");
  const isLogin = useAuth();
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin && user?.emailVerified) {
      navigate("/all-chats");
    }
  }, [isLogin]);

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
        className="w-full"
      >
        <div className="signup-header flex flex-col justify-center items-center mt-14">
          <p className="slogan inline-block text-[10px] xs:text-[11px] text-gray px-4 py-2 bg-white bg-opacity-5 rounded-full">
            Break the Silence, Spark the Conversation
          </p>
          <h1 className="mt-3 text-[28px] leading-8">Sign in</h1>
          <span className="text-gray inline-block pt-2 text-[11px]">
            Create a new password to sign in
          </span>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full flex flex-col justify-center items-center"
        variants={variants}
      >
        <CreatePasswordForm />
      </motion.div>
    </Block>
  );
};

export default CreatePassword;
