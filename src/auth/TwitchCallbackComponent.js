import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";
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
        window.location.href = response.data.next || "/";
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
      <button
        onClick={handleButtonClick}
        type="button"
        class="m-4 text-white bg-[#bc42f4] hover:bg-[#bc42f4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ width: "1.3em", height: "1.3em", marginRight: "7px"}}
        >
          <path
            d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
        Sign in with Twitch
      </button>
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
