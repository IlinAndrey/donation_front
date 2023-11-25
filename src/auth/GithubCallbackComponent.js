import React, { useEffect, useState, onChange } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Сookies from "js-cookie";

const GithubCallbackComponent = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [postData, setPostData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    handleLoginGit();
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [postData]);

  const handleLoginGit = () => {
    axios
      .post(
        `http://127.0.0.1:8000/dj-rest-auth/github/?code=${code}`,
        {
          code: code,
        },
        {
          credentials: "include",
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Da");
        const newToken = response.data.access;
        setToken(newToken);
        localStorage.setItem("token", newToken);
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка выхода:", error);
        console.log("Net");
      });
  };

  // Сookies.set("jwt-auth", token, { expires: 7 });

  // const handleLogout = () => {
  //   setToken('');
  //   localStorage.removeItem('token');
  // };

  return (
    <div>
      {/* <h2>Github Callback Component</h2>
      <p>GitHub code: {code}</p>
      <p>Token: {token}</p> */}
      <a href="https://github.com/login/oauth/authorize?client_id=Iv1.9e1ed9594dd98e77&redirect_uri=http://127.0.0.1:3000/dj-rest-auth/github/callback">
        <button>Login with GitHub</button>
      </a>
      {postData && (
        <div>
          <h2>Данные после POST-запроса:</h2>
          <pre>{JSON.stringify(postData.user.username, null, 2)}</pre>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default GithubCallbackComponent;
