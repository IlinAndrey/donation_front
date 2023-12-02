import React, { useState } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Dialog, Transition } from "@headlessui/react";
import GithubCallbackComponent from "../auth/GithubCallbackComponent";

function SignInModalTab({ modalSign }) {
  const handleButtonClick = () => {
    modalSign(false);
  };

  return (
    <>
      {modalSign && (
        <>
          <div
            className="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50 z-40"
            onClick={handleButtonClick}
          ></div>
          <div
            id="default-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="w-full place-content-evenly relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sign in With
                  </h3>
                  <button
                    onClick={handleButtonClick}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="flex items-center w-full">
                  <GithubCallbackComponent />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SignInModalTab;
