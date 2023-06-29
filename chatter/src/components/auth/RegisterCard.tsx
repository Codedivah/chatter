import React from "react";
import { useForm } from "react-hook-form";
import { ISignUp } from "../../constant/validation/types";
import {
  registerDefaultValues,
  registerResolver,
} from "../../constant/validation/validation";
import ControlledTextInput from "../shared/textInput/ControlledTextInput";
import { register } from "../../constant/redux/auth/authApi";
import { useAppDispatch, useAppSelector } from "../../constant/redux/hooks";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { setIsLogin } from "../../constant/redux/auth/authSlice";
import { DB_USER } from "../../constant/https/config";

const RegisterForm = () => {
  const { handleSubmit, control } = useForm<ISignUp>({
    defaultValues: registerDefaultValues,
    resolver: registerResolver,
  });

  const dispatch = useAppDispatch();
  const { addToast } = useToasts();
  const { loading, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const onRegister = async (values: ISignUp) => {
    console.log(values);
    const res = await dispatch(register(values));
    console.log(res);
    if (res.payload.status === "success") {
      // localStorage.setItem(DB_USER, res.payload.token);
      addToast("registration successful!", { appearance: "success" });
      addToast("Please check email to verify account", { appearance: "info" });
      // dispatch(setIsLogin(true));
      navigate("/auth/login");
    }
  };

  return (
    <div className="flex justify-center items-center mt-8 ">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <div className="">
            <div className="grid grid-cols-2 gap-x-4">
              <ControlledTextInput<ISignUp>
                control={control}
                name="firstName"
                label="First Name"
                placeholder="Enter your First Name"
              />
              <ControlledTextInput<ISignUp>
                control={control}
                name="lastName"
                label="Last Name"
                placeholder="Enter Your Last Name"
              />
            </div>

            <ControlledTextInput<ISignUp>
              control={control}
              name="username"
              label="Username"
              placeholder="Enter a username of your choice"
            />
            <ControlledTextInput<ISignUp>
              control={control}
              name="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <ControlledTextInput<ISignUp>
              control={control}
              name="role"
              label="You are joining as?"
              isSelect
              selectItem={[
                {
                  label: "Reader",
                  value: "reader",
                },
                {
                  label: "Writer",
                  value: "writer",
                },
              ]}
              placeholder="Reader"
            />
            <ControlledTextInput<ISignUp>
              control={control}
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              type="password"
            />
            <ControlledTextInput<ISignUp>
              control={control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Your Password"
              type="password"
            />
          </div>

          {error && (
            <Typography className="text-red-500 text-sm text-center mb-2">
              {error}
            </Typography>
          )}
          <div className="mb-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              onClick={handleSubmit(onRegister)}
            >
              {loading ? "loading..." : "Create Account"}
            </button>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign Up With Google
            </button>
            <button
              className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              {" "}
              Sign Up With LinkedIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
