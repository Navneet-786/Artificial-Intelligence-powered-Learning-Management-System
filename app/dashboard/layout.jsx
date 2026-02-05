import React from "react";
import DashboardHeader from "./_components/DashboardHeader";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* sidebar  */}
      <div className="md:w-64 hidden md:block fixed">
        <Sidebar />
      </div>
      {/* right content */}
      <div className="md:ml-64 ">
        <DashboardHeader />
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
