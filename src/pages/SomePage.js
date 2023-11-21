import React, { useEffect, useState } from "react";
import Transactions from "../components/Transactions";

function SomePage({ darkMode }) {

  const handleButtonClick = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Iv1.9e1ed9594dd98e77&redirect_uri=http://127.0.0.1:3000/dj-rest-auth/github/callback';

  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <button onClick={handleButtonClick}>Login with GitHub</button>
        <Transactions />
      </div>
    </div>
  );
}

export default SomePage;
