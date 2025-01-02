"use client";
import React, { useEffect, useState } from "react";

import { User } from "@/types/user";
import { PostCard } from "@app/home/components/post-card";
import Header from "@app/home/components/header";

import { mainApiInstance } from "../../utils/apis";

export default function Home() {
  const [userList, setUserList] = useState<User[]>();
  const getAllUsers = async () => {
    const mainApis = await mainApiInstance;
    const response = await mainApis.getAllUsers({ limit: 10 });
    if (!response) return;
    if (response.ok) {
      const { users } = await response.json();
      setUserList(users);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    getAllUsers().then();
  }, []);
  if (!userList) return <div>Loading..</div>;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userList.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}
