import React from "react";

function SomePage({ darkMode }) {
  return (
    <div className={`${darkMode && "dark"}`}>
      <div class="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <header>
          <p class="mb-2 text-sm font-semibold text-blue-600">Starter page</p>
          <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
            Some text
          </h1>
          <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
            Another text
          </p>
          <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <a
              class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
              rel="noreferrer"
            >
              button
            </a>
            <a
              class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="../examples.html"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default SomePage;
