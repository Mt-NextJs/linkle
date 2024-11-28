import React from "react";
import Image from "next/image";
import Link from "next/link";

import { User } from "@/types/user";

export function PostCard({ userId, name, email }: User) {
  return (
    <Link
      href={`/profile/${userId}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="aspect-[1.91/1] overflow-hidden bg-gray-100">
        <Image
          src={`/assets/images/placeholder.svg`}
          alt={"유저 대표 이미지"}
          width={400}
          height={209}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
          {name}
        </h2>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{email}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{userId}</span>
        </div>
      </div>
    </Link>
  );
}
