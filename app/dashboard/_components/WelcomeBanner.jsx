"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  const { user } = useUser();
  return (
    <div className="bg-slate-200 flex items-center gap-6 rounded-lg shadow-lg">
      <Image
        src={"/banner-imae.png"}
        alt="banner image"
        width={120}
        height={100}
      />
      <div>
        <h2 className="font-bold text-3xl">
          <span className="text-primary">Hello</span>, {user?.fullName}
        </h2>
        <p className="text-slate-500">
          Welcome Back, Its time to get back and start learning
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
