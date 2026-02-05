"use client";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { Progress } from "../../../components/ui/progress";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();

  const MenuList = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { name: "Upgrade", icon: <Shield />, path: "/dashboard/upgrade" },
    { name: "Profile", icon: <UserCircle />, path: "/dashboard/profile" },
  ];
  return (
    <div className="h-screen shadow-md p-5">
      {/* logo section */}
      <div className="flex gap-2 items-center ml-2">
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <h2 className="font-bold text-2xl">StudyNotion</h2>
      </div>

      {/* create new button */}
      <div className="mt-10">
        <Button className={"w-full"}>+ Create New</Button>
        <div className="mt-2">
          {MenuList.map((menu, index) => {
            return (
              <div
                key={index}
                className={`flex gap-5 p-4 hover:bg-slate-200 rounded-lg cursor-pointer items-center ${path == menu.path && "bg-slate-200"}`}
              >
                {menu.icon}
                <h2>{menu.name}</h2>
              </div>
            );
          })}
        </div>{" "}
      </div>

      {/* bottom credit section */}
      <div className="border p-3 bg-slate-100 rounded-lg shadow-lg absolute bottom-10 w-[85%]">
        <h2 className="text-lg mb-2">Available Credits : 5</h2>
        <Progress value={30} />
        <h2 className="text-sm">1 out of 5 credits used</h2>
        <Link href="/dashboard/upgrade" className="text-primary text-xs mt-3">
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
