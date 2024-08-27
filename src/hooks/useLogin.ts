import { useAppSelector } from "@/redux/app/hooks";

const useAuth = () => {
  const isAuth = useAppSelector((store) => store.user.isAuth);
  return isAuth;
};

export default useAuth;
