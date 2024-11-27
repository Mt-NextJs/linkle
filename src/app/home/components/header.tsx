import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            linkle
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/trending"
              className="text-sm font-medium hover:text-primary"
            >
              트렌딩
            </Link>
            <Link
              href="/latest"
              className="text-sm font-medium hover:text-primary"
            >
              최신
            </Link>
            <Link
              href="/feed"
              className="text-sm font-medium hover:text-primary"
            >
              피드
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-background rounded-md border px-2 py-1 text-sm">
            <option>이번 주</option>
            <option>이번 달</option>
            <option>올해</option>
          </select>
          <button className="rounded-full p-2 hover:bg-gray-100">||</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
