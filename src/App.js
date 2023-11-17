import { useState, useRef } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import { useClickOutside } from "./functions/useClickOutside";
import SomePage from "./pages/SomePage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebarOpen(callbackSidebarOpen) {
    setSidebarOpen((callbackSidebarOpen) => !callbackSidebarOpen);
  }

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setSidebarOpen(false));

  return (
    <>
      <div className="bg-gray-50 dark:bg-slate-900">
        <Header />
        <SidebarToggle
          toggleSidebarOpen={toggleSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
        <Sidebar isOpen={sidebarOpen} menuRef={menuRef} />
        <SomePage />
      </div>
    </>
  );
}

export default App;
