import React from "react";
import SignupTemplate from "../../templates/SignupTemplate";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../constants/routesKey";
import axios from "axios";
import { APIs } from "../../../constants/apiKey";

const SignupPage = () => {
  const history = useHistory();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const response = await axios.post(APIs.SIGNUP, values);
    console.log("onFinish:", response);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const goToSignIn = () => history.push(ROUTES.SIGNIN);

  return (
    <SignupTemplate
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      goToSignIn={goToSignIn}
    />
  );
};

export default SignupPage;
