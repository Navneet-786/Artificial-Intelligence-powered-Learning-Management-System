import { UserButton } from "@clerk/nextjs";
import React from "react";
import WelcomeBanner from "./WelcomeBanner";

const DashboardHeader = () => {
  return (
    <div className="p-5 shadow-lg flex justify-end">
      <UserButton showName />
    </div>
  );
};

export default DashboardHeader;
