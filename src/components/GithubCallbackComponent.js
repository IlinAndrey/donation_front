import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const GithubCallbackComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  useEffect(() =>{
    console.log("bub")
    handleLoginGit();
  })

  const handleLoginGit = () => {
    axios
      .post("http://127.0.0.1:8000/dj-rest-auth/github/", {
        code: code,
      })
      .then((response) => {
        console.log(response);
        console.log("Da")
      })
      .catch((error) => {
        console.error("Ошибка выхода:", error);
        console.log("Net")
      });
  };

  return (
    <div>
      <h2>Github Callback Component</h2>
      <p>GitHub code: {code}</p>
    </div>
  );
};

export default GithubCallbackComponent;
