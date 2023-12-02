import React, { useState } from "react";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Sidebar({ isOpen, menuRef }) {
  const [accordionState, setAccordionState] = useState({
    users: false,
    account: false,
    projects: false,
  });

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div
      ref={menuRef}
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.2s ease-in-out",
      }}
      className={`fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700 open 
      `}
    >
      <div className="px-6">
        <a
          className="flex-none text-xl font-bold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
          aria-label="Brand"
        >
          GameDay
        </a>
      </div>

      <nav
        className="accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open=""
      >
        <ul className="space-y-1.5">
          <li>
            {/* <Link to={'/dashboard'}> */}
            <a
              className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-white text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/dashboard"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </a>
            {/* </Link> */}
          </li>

          <li className="hs-accordion active" id="users-accordion">
            <button
              type="button"
              className={`hs-accordion-toggle text-sm w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 
          ${accordionState.users ? "text-blue-600" : "text-slate-700"} 
          hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 rounded-lg
          dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              onClick={() => toggleAccordion("users")}
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Users
              <svg
                className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
              <svg
                className={`ms-auto w-4 h-4 transition-transform duration-200 ease-in-out 
            ${accordionState.users ? "" : "transform rotate-180"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>

            <div
              id="account-accordion-child"
              className={`hs-accordion-content w-full overflow-hidden transition-max-height duration-200 ease-in-out ${
                accordionState.users ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                display: accordionState.users ? "block" : "hidden",
              }}
            >
              <ul className="pt-2 ps-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="hs-accordion active" id="account-accordion">
            <button
              type="button"
              className={`hs-accordion-toggle text-sm w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 
          ${accordionState.account ? "text-blue-600" : "text-slate-700"} 
          hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 rounded-lg
          dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              onClick={() => toggleAccordion("account")}
            >
              <svg
                className="flex-shrink-0 mt-0.5 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="15" r="3"></circle>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M10 15H6a4 4 0 0 0-4 4v2"></path>
                <path d="m21.7 16.4-.9-.3"></path>
                <path d="m15.2 13.9-.9-.3"></path>
                <path d="m16.6 18.7.3-.9"></path>
                <path d="m19.1 12.2.3-.9"></path>
                <path d="m19.6 18.7-.4-1"></path>
                <path d="m16.8 12.3-.4-1"></path>
                <path d="m14.3 16.6 1-.4"></path>
                <path d="m20.7 13.8 1-.4"></path>
              </svg>
              Account
              <svg
                className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
              <svg
                className={`ms-auto w-4 h-4 transition-transform duration-200 ease-in-out 
            ${accordionState.account ? "" : "transform rotate-180"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>

            <div
              id="account-accordion-child"
              className={`hs-accordion-content w-full overflow-hidden transition-max-height duration-200 ease-in-out ${
                accordionState.account ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                display: accordionState.account ? "block" : "hidden",
              }}
            >
              <ul className="pt-2 ps-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="hs-accordion active" id="projects-accordion">
            <button
              type="button"
              className={`hs-accordion-toggle text-sm w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 
          ${accordionState.projects ? "text-blue-600" : "text-slate-700"} 
          hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 rounded-lg
          dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              onClick={() => toggleAccordion("projects")}
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Projects
              <svg
                className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
              <svg
                className={`ms-auto w-4 h-4 transition-transform duration-200 ease-in-out 
            ${accordionState.projects ? "" : "transform rotate-180"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>

            <div
              id="projects-accordion-child"
              className={`hs-accordion-content w-full overflow-hidden transition-max-height duration-200 ease-in-out ${
                accordionState.projects ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                display: accordionState.projects ? "block" : "hidden",
              }}
            >
              <ul className="pt-2 ps-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/"
            >
              <MailOutlineIcon style={{ width: "0.7em", height: "0.7em" }}/>
              Send Message
            </a>
          </li>
          <li>
            <a
              className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Analytics
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
