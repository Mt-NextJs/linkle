"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Admin from "@app/admin/page";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.log(token, "token");
      router.push("/intro");
    }
    // return () => sessionStorage.removeItem("token");
  }, []);

  return <Admin />;
}
