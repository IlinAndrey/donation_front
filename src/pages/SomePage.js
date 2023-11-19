import React from "react";
import Chart from "../components/Chart";
import Transactions from "../components/Transactions";

function SomePage({ darkMode }) {
  return (
    <div className={`${darkMode && "dark"}`}>
      <div class="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {/* <Chart /> */}
        <Transactions />
      </div>
    </div>
  );
}

export default SomePage;
