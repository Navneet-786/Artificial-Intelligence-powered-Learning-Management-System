"use client";
import { userTable } from "../configs/schema";
import { db } from "../configs/db";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { eq } from "drizzle-orm";

const Provider = ({ children }) => {
  const { user } = useUser();

  const checkIsNewUser = async () => {
    //check user already exist
    const res = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, user?.primaryEmailAddress?.emailAddress));

    console.log("res : ", res);
    //if not , save to db
    if (res?.length == 0) {
      const userResponse = await db
        .insert(userTable)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        })
        .returning({ id: userTable.id });

      console.log(userResponse);
    }
  };
  useEffect(() => {
    user && checkIsNewUser();
  }, [user]);

  return <div>{children}</div>;
};

export default Provider;
