import React from "react";
import Header from "../components/Header";
import SidebarToggle from "../components/SidebarToggle";
import Sidebar from "../components/Sidebar";

const Layout = ({ children, ...props }) => {
    const { toggleDarkMode, darkMode, isAuthenticated, user, toggleSidebarOpen, sidebarOpen, menuRef, isSmallScreen } = props;
  
    return (
      <div className={`${darkMode && 'dark'}`}>
        <div className="bg-gray-50 dark:bg-gray-900">
          <Header
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            isAuthenticated={isAuthenticated}
            user={user}
          />
          {isAuthenticated && (
            <>
              <SidebarToggle
                toggleSidebarOpen={toggleSidebarOpen}
                sidebarOpen={sidebarOpen}
              />
              <Sidebar isOpen={sidebarOpen} menuRef={menuRef} isSmallScreen={isSmallScreen} />
            </>
          )}
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
