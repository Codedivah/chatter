import React, { useEffect, useState } from "react";
import { fetchUser } from "../../constant/redux/auth/authApi";
import {
  useAppDispatch,
  useAppSelector,
} from "../../constant/redux/hooks/index";

const HydrationWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, user } = useAppSelector((state) => state?.auth);
  const [mounted, setMounted] = useState(false);

  // async function getUserDetails() {
  // dispatch(fetchUser());
  // }

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchUser());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return <>{children}</>;
};

export default HydrationWrapper;
