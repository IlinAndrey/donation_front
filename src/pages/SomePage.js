import React, { useEffect, useState } from "react";
import Transactions from "../components/Transactions";
import Footer from "../components/Footer";

function SomePage({ darkMode }) {

  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full pb-10 pt-5 px-4 sm:px-6 md:px-8 lg:ps-72">
        <Transactions />
        <Footer />
      </div>
    </div>
  );
}

export default SomePage;
