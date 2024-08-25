import { useAppSelector } from "@/redux/app/hooks";

const useLogin = () => {
  const isLogin = useAppSelector((store) => store.user.isLogin);
  return isLogin;
};

export default useLogin;
