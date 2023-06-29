import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginCard from "../../components/auth/LoginCard";
import RegisterCard from "../../components/auth/RegisterCard";
import VeryfyUser from "./VeryfyUser";

const Login = () => {
  // const [step, setStep] = useState(0);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  function renderScreen(step: string) {
    const getPath = step.split("/")[2]; // register | login

    switch (getPath) {
      case "login":
        return <LoginCard />;

      case "register":
        return <RegisterCard />;

      case "confirmation/:userId/:token":
        return <VeryfyUser />;
      default:
        return <LoginCard />;
    }
  }

  const getPath = pathname.split("/")[2];

  return (
    <Box className="flex items-center ">
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1595479310824-2dfe9df03cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByZXR0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <Box className="flex items-center justify-center flex-col w-full h-full">
        <Box className="flex items-center  cursor-pointer">
          <Box onClick={() => navigate("/auth/register")}>
            <Typography variant="body1">Register</Typography>
            <Box
              className={`w-[150px] h-1 rounded-[5px] ${
                getPath === "register" ? "bg-green-500" : "bg-gray-500"
              }`}
            />
          </Box>
          <Box onClick={() => navigate("/auth/login")}>
            <Typography variant="body1">Login</Typography>
            <Box
              className={`w-[150px] h-1 rounded-[5px] ${
                getPath === "login" ? "bg-green-500" : "bg-gray-500"
              }`}
            />
          </Box>
        </Box>
        {renderScreen(pathname)}
      </Box>
    </Box>
  );
};

export default Login;
