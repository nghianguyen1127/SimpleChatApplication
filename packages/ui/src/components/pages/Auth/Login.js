import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "tony.ng@yopmail.com",
        password: "Password@123",
        confirmPassword: "Password@123",
        firstName: "Tony",
        lastName: "Ng",
      }),
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return <h1>Hello World</h1>;
};

export default Login;
