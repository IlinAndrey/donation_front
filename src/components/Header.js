import React, { useState, useRef } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import axios from "axios";
import GithubCallbackComponent from "../auth/GithubCallbackComponent";
import LogoutIcon from "@mui/icons-material/Logout";
import SignInModalTab from "./SignInModalTab";
import LoginIcon from "@mui/icons-material/Login";
import { useClickOutside } from "../functions/useClickOutside";

function Header({ toggleDarkMode, darkMode, isAuthenticated, user }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [modalSignIn, setModalSignIn] = useState(false);

  const handleModalOpen = () => {
    setModalSignIn(!modalSignIn);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  });

  return (
    <div className={`${darkMode && "dark"}`}>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="me-5 lg:left-10 lg:absolute">
            <a
              className="flex-none text-xl font-bold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              GameDay
            </a>
          </div>

          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>

            {isAuthenticated ? (
              <div className="hidden sm:block">
                <label htmlFor="icon" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-gray-400"
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
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="icon"
                    name="icon"
                    className="outline-none border py-2 px-4 ps-11 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Search"
                  />
                </div>
              </div>
            ) : (
              <span></span>
            )}

            {/* <GithubCallbackComponent /> */}

            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              <button
                onClick={toggleDarkMode}
                type="button"
                className="w-10 h-10 rounded-full pointer-events-auto bg-gray-100 px-2 py-2 text-1xl leading-5 text-gray-400 hover:text-gray-600 dark:text-gray-200 dark:bg-gray-700 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {darkMode ? (
                  <WbSunnyIcon style={{ width: "0.8em", height: "0.8em" }} />
                ) : (
                  <DarkModeIcon style={{ width: "0.8em", height: "0.8em" }} />
                )}
              </button>

              <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                {isAuthenticated ? (
                  <button
                    id="hs-dropdown-with-header"
                    type="button"
                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <img
                      onClick={toggleMenu}
                      className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </button>
                ) : (
                  <div>
                  <button
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    onClick={handleModalOpen}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Sign in
                  </button>
                  {modalSignIn && (
                    <SignInModalTab modalSign={setModalSignIn} />
                  )}
                  </div>
                )}

                {isMenuOpen && (
                  <div className="absolute right-0 mt-11 duration min-w-[15rem] max-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700">
                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                      {isAuthenticated ? (
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Signed in as
                          </p>
                          <div className="flex">
                            {user ? (
                              <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                                {user.username}
                              </p>
                            ) : (
                              <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                                Loading...
                              </p>
                            )}
                            <button
                              onClick={() => {
                                document.cookie =
                                  "jwt-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                                  document.cookie =
                                  "auth_method=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                                window.location.reload();
                              }}
                              className="flex items-center text-sm text-red-500 dark:text-red-400 right-0 mr-5 absolute"
                            >
                              Exit
                              <LogoutIcon
                                style={{
                                  marginLeft: "5px",
                                  width: "0.6em",
                                  height: "0.6em",
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="">
                          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                            Not signed
                          </p>
                          <button
                            // data-modal-target="default-modal"
                            // data-modal-toggle="default-modal"
                            // onClick={handleModalOpen}
                            className="flex items-center text-sm text-blue-500 dark:text-blue-400 right-0 mr-5"
                          >
                            Sign In With...
                            <LoginIcon
                              style={{
                                marginLeft: "5px",
                                width: "0.6em",
                                height: "0.6em",
                              }}
                            />
                          </button>
                          {modalSignIn && (
                            <SignInModalTab modalSign={setModalSignIn} />
                          )}
                          {/* <SignInModalTab /> */}
                          {/* <SignInModalTab modalSign={setModalSignIn}/> */}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                          <path d="M12 12v9" />
                          <path d="m8 17 4 4 4-4" />
                        </svg>
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Team Account
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
