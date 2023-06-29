import React, { useEffect } from "react";
import ControlledTextInput from "../shared/textInput/ControlledTextInput";
import { useForm } from "react-hook-form";
import { ILogin } from "../../constant/validation/types";
import {
  loginDefaultValues,
  loginResolver,
} from "../../constant/validation/validation";
import { useAppDispatch, useAppSelector } from "../../constant/redux/hooks";
import { login } from "../../constant/redux/auth/authApi";
import { Typography } from "@mui/material";
import { editAuthState, setIsLogin } from "../../constant/redux/auth/authSlice";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import { DB_USER } from "../../constant/https/config";

const LoginForm = () => {
  const { handleSubmit, control } = useForm<ILogin>({
    defaultValues: loginDefaultValues,
    resolver: loginResolver,
  });

  const dispatch = useAppDispatch();

  const { loading, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const onLogin = async (values: ILogin) => {
    console.log(values);
    const res = await dispatch(login(values));
    console.log(res);
    if (res.payload.status === "success") {
      localStorage.setItem(DB_USER, res.payload.data.access_token);
      addToast("Login successful!", { appearance: "success" });
      dispatch(setIsLogin(true));
      navigate("/");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(editAuthState({ name: "error", value: "" }));
    }, 5000);
  }, [dispatch, error]);

  return (
    <div className="flex justify-center items-center mt-8 w-full px-10">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <ControlledTextInput<ILogin>
            control={control}
            name="email"
            label="email"
            type="email"
            placeholder="Enter Your Email"
          />
          <ControlledTextInput<ILogin>
            control={control}
            name="password"
            label="password"
            type="password"
            placeholder="Enter Your Password"
          />
          {error && (
            <Typography className="text-red-500 text-sm text-center mb-2">
              {error}
            </Typography>
          )}
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleSubmit(onLogin)}
            >
              {loading ? "loading..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
