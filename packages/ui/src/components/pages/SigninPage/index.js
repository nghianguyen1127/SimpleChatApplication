import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../../constants/routesKey";
import SigninTemplate from "../../templates/SigninTemplate";
import axios from "axios";
import { APIs } from "../../../constants/apiKey";

const SigninPage = () => {
  const history = useHistory();

  const onFinish = async (values) => {
    console.log("Success:", values);
    const response = await axios.post(APIs.SIGNIN, values);
    console.log("onFinish:", response);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const goToSignUp = () => history.push(ROUTES.SIGNUP);
  return (
    <SigninTemplate
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      goToSignUp={goToSignUp}
    />
  );
};

export default SigninPage;
