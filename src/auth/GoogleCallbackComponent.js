import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const GithubCallbackComponent = () => {
  const [postData, setPostData] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  console.log(code);
  document.cookie = "auth_method=google";

  useEffect(() => {
    const handleLoginYouTube = async () => {
      try {
        const response = await axios.post(
          `http://${process.env.REACT_APP_ADDR}:8000/dj-rest-auth/youtube/`,
          {
            code: decodeURIComponent(code),
          },
          {
            withCredentials: true,
          }
        );
        console.log(response);
        document.cookie = `jwt-auth=${response.data.access}; expires=${new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ).toUTCString()}; path=/`;
        setPostData(response.data);
        window.location.href = response.data.next || "/";
      } catch (error) {
        console.error("Ошибка выхода:", error.response.data);
        console.log("Net");
      }
    };

    if (
      location.pathname === "/dj-rest-auth/youtube/callback" &&
      code !== null
    ) {
      handleLoginYouTube();
    }
  }, [code]);

  const handleButtonClickYoutube = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=code&redirect_uri=http://127.0.0.1:3000/dj-rest-auth/youtube/callback&client_id=1044043285606-ks8hr8g1ds12de1uu0slsli4r7014060.apps.googleusercontent.com";
  };

  return (
    <div>
      <button
        onClick={handleButtonClickYoutube}
        type="button"
        className="m-4 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fillRule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clipRule="evenodd"
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
