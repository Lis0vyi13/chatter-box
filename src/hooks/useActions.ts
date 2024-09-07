import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/redux/app/store";
import { userActions } from "@/redux/features/user";
import { chatActions } from "@/redux/features/chat";

const rootActions = {
  ...userActions,
  ...chatActions,
};

const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
