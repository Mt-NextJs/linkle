"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ClientRoute } from "@config/route";

export default function Intro() {
  return (
    <div className="h-screen bg-gradient-to-br from-primary to-primary-450 p-40 dark:from-primary-350 dark:to-primary-450">
      {/* 스크린 리더 전용 텍스트*/}
      <h1 className="sr-only">
        Link At Once! 소셜 프로필 링크 관리 서비스 in my link 입니다!
      </h1>
      <p className="sr-only">시작하기 버튼을 눌러 로그인을 진행해 주세요.</p>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-9xl font-black capitalize text-white"
          >
            link at once!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl text-white/90"
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={ClientRoute.LOGIN}
            className="button bg-white text-3xl text-primary shadow transition duration-300 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="시작하기 - Link At Once 서비스 시작하기"
          >
            START!
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
