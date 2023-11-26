import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import { useClickOutside } from "./functions/useClickOutside";
import SomePage from "./pages/SomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GithubCallbackComponent from "./auth/GithubCallbackComponent";
import сookies from "js-cookie";
import axios from "axios";
import BlankPage from "./pages/BlankPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticationStatus, setAuthenticationStatus] = useState(true);

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = async () => {
    await axios
      .get("http://127.0.0.1:8000/dj-rest-auth/user/", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data)
        setUser(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Если получена 401 ошибка, пользователь не авторизован
          setAuthenticationStatus(false);
        } else {
          console.error("Axios error:", error);
        }
      });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  function toggleSidebarOpen() {
    setSidebarOpen((callbackSidebarOpen) => !callbackSidebarOpen);
  }

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isSmallScreen) {
      setSidebarOpen(false);
    }
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth <= 1024;
      setIsSmallScreen(newIsSmallScreen);
      setSidebarOpen(!newIsSmallScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  сookies.get("jwt-auth");

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="bg-gray-50 dark:bg-gray-900">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      toggleDarkMode={toggleDarkMode}
                      darkMode={darkMode}
                      isAuthenticated={authenticationStatus}
                      user={user}
                    />
                    <SidebarToggle
                      toggleSidebarOpen={toggleSidebarOpen}
                      sidebarOpen={sidebarOpen}
                    />
                    <Sidebar
                      isOpen={sidebarOpen}
                      menuRef={menuRef}
                      isSmallScreen={isSmallScreen}
                    />
                    {authenticationStatus ?(
                    <SomePage />
                    ):(
                      <BlankPage />
                    )}
                  </>
                }
              />
              <Route
                path="/dj-rest-auth/github/callback"
                exact
                element={
                  <>
                    <GithubCallbackComponent />
                    {/* <Navigate replace to="/" /> */}
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
