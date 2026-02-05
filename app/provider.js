"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

import axios from "axios";

const Provider = ({ children }) => {
  const { user } = useUser();

  const checkIsNewUser = async () => {
    //check user already exist
    const result = await axios.post("/api/create-user", { user: user });
    console.log(result);
  };
  useEffect(() => {
    user && checkIsNewUser();
  }, [user]);

  return <div>{children}</div>;
};

export default Provider;
