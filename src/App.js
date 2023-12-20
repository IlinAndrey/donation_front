import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import { useClickOutside } from "./functions/useClickOutside";
import SomePage from "./pages/SendData";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GithubCallbackComponent from "./auth/GithubCallbackComponent";
import GoogleCallbackComponent from "./auth/GoogleCallbackComponent";
import TwitchCallbackComponent from "./auth/TwitchCallbackComponent";
import сookies from "js-cookie";
import axios from "axios";
import BlankPage from "./pages/BlankPage";
import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import SendData from "./pages/SendData";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? storedDarkMode === "true" : false;
  });
  const [user, setUser] = useState(null);
  const [authenticationStatus, setAuthenticationStatus] = useState(true);

  useEffect(() => {
    handleUser();
  }, []);

  const handleUser = async () => {
    await axios
      .get(`http://${process.env.REACT_APP_ADDR}:8000/dj-rest-auth/user/`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setAuthenticationStatus(false);
        } else {
          console.error("Axios error:", error);
        }
      });
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  toggleDarkMode={toggleDarkMode}
                  darkMode={darkMode}
                  isAuthenticated={authenticationStatus}
                  user={user}
                  toggleSidebarOpen={toggleSidebarOpen}
                  sidebarOpen={sidebarOpen}
                  menuRef={menuRef}
                  isSmallScreen={isSmallScreen}
                >
                  {authenticationStatus ? <SendData /> : <BlankPage />}
                </Layout>
              }
            />
            <Route
              path="/dj-rest-auth/github/callback"
              exact
              element={<GithubCallbackComponent />}
            />
            <Route
              path="/dj-rest-auth/youtube/callback"
              exact
              element={<GoogleCallbackComponent />}
            />
            <Route
              path="/dj-rest-auth/twitch/callback"
              exact
              element={<TwitchCallbackComponent />}
            />
            <Route
              path="/dashboard"
              element={
                <Layout
                  toggleDarkMode={toggleDarkMode}
                  darkMode={darkMode}
                  isAuthenticated={authenticationStatus}
                  user={user}
                  toggleSidebarOpen={toggleSidebarOpen}
                  sidebarOpen={sidebarOpen}
                  menuRef={menuRef}
                  isSmallScreen={isSmallScreen}
                >
                  {authenticationStatus ? <Dashboard /> : <BlankPage />}
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
