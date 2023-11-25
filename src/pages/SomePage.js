import React, { useEffect, useState } from "react";
import Transactions from "../components/Transactions";

function SomePage({ darkMode }) {

  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <Transactions />
      </div>
    </div>
  );
}

export default SomePage;
