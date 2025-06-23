import { useState, useEffect } from "react";
import { useAppSelector } from "../hooks/typedRedux";
import { RootStateType } from "../app/store";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { token } = useAppSelector((state: RootStateType) => state.user);

  useEffect(() => {
    setLoggedIn(!!token);
    setCheckingStatus(false);
  }, [token]);

  return { loggedIn, checkingStatus };
};
