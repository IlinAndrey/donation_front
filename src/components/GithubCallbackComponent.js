import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Сookies from 'js-cookie';

const GithubCallbackComponent = () => {
  const [token, setToken] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("bub");
    handleLoginGit();
  }, []);

  const handleLoginGit = () => {
    axios
      .post(
        "http://127.0.0.1:8000/dj-rest-auth/github/",
        {
          code: code,
        },
        // {
        //   credentials: "include",
        // },
        // {
        //   withCredentials: true,
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Headers": "*",
        //     "Access-Control-Allow-Credentials": "true",
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        console.log("Da");
        setToken("Bearer "+ response.data.access);
        
      })
      .catch((error) => {
        console.error("Ошибка выхода:", error);
        console.log("Net");
      });
  };

  Сookies.set('jwt-auth', token, { expires: 7 });

  // navigate(-1);

  return (
    <div>
      <h2>Github Callback Component</h2>
      <p>GitHub code: {code}</p>
      <p>Token: {token}</p>
    </div>
  );
};

export default GithubCallbackComponent;
