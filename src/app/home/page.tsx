"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { User } from "@/types/user";

import { mainApiInstance } from "../../utils/apis";

const Page = () => {
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
    <section>
      <nav className={"flex h-12 items-center py-4"}>
        <h1 className={"text-2xl"}>linkle</h1>
      </nav>
      <ul className={"grid grid-cols-3 gap-4"}>
        {userList.map((user, index) => {
          return (
            <li key={user.userId} className={"bg-gray-500"}>
              <Link href={`/profile/${user.userId}`}>
                <div className={"relative h-[120px] w-full"}>
                  <Image
                    src={"/assets/images/home-default.jpg"}
                    fill={true}
                    alt={"home 기본 이미지"}
                  />
                </div>
                <div className={"p-4"}>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Page;
