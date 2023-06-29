import React from "react";
import { useAppDispatch } from "../../constant/redux/hooks/index";
import { useParams, useNavigate } from "react-router-dom";
import { VerifyingUser } from "../../constant/redux/auth/authApi";
import { useToasts } from "react-toast-notifications";

function VeryfyUser() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const { token, userid } = useParams();

  const handleVerify = async () => {
    const verifyPayload = {
      userId: userid,
      token: token,
    };
    const res = await dispatch(VerifyingUser(verifyPayload));
    if (res?.payload?.verified) {
      addToast("Email verified successful", { appearance: "success" });
      navigate("/auth/login");
    }
    console.log(res);
  };

  React.useEffect(() => {
    handleVerify();
  }, []);

  return <div>Veryfying all user we need to design a ui </div>;
}

export default VeryfyUser;
