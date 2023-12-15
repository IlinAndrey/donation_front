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
        class="m-4 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fill-rule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clip-rule="evenodd"
          />
        </svg>
        Sign in with Google
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
