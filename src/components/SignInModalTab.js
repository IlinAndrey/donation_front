import React, { useState } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Dialog, Transition } from "@headlessui/react";
import GithubCallbackComponent from "../auth/GithubCallbackComponent";

function SignInModalTab() {
  return (
    <>
    <div class="w-full mt-2 flex p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <span className="block m-1">
        <GithubCallbackComponent />
      </span>
      <span className="block m-1">
        <GithubCallbackComponent />
      </span>
      <span className="block m-1">
        <GithubCallbackComponent />
      </span>
      <span className="block m-1">
        <GithubCallbackComponent />
      </span>
    </div>
    </>
  );
}

export default SignInModalTab;
