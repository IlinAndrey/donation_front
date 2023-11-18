import { useState, useRef, useLayoutEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import { useClickOutside } from "./functions/useClickOutside";
import SomePage from "./pages/SomePage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="bg-gray-50 dark:bg-gray-900">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <SidebarToggle
            toggleSidebarOpen={toggleSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
          <Sidebar
            isOpen={sidebarOpen}
            menuRef={menuRef}
            isSmallScreen={isSmallScreen}
          />
          <SomePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </>
  );
}

export default App;
