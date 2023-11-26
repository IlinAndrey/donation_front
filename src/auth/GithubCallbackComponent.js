import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const GithubCallbackComponent = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [postData, setPostData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoginGit = async () => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/dj-rest-auth/github/`,
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
            },
          }
        );
        console.log(response);
        document.cookie = `jwt-auth=${response.data.access}; expires=${new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toUTCString()}; path=/`;
        setPostData(response.data);
        window.location.href = response.data.next || '/';
      } catch (error) {
        console.error("Ошибка выхода:", error);
        console.log("Net");
      }
    };

    if (
      location.pathname === "/dj-rest-auth/github/callback" &&
      code !== null
    ) {
      handleLoginGit();
    }
  }, [code]);

  const handleButtonClick = () => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=Iv1.9e1ed9594dd98e77&redirect_uri=http://127.0.0.1:3000/dj-rest-auth/github/callback";
  };

  return (
    <div>
      <a>
        <button onClick={handleButtonClick}>Login with GitHub</button>
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
