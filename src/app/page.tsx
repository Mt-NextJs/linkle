"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ClientRoute } from "@config/route";

export default function Intro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-450 dark:from-primary-350 dark:to-primary-450">
      {/* 스크린 리더 전용 텍스트*/}
      <h1 className="sr-only">
        Link At Once! 소셜 프로필 링크 관리 서비스 in my link 입니다!
      </h1>
      <p className="sr-only">시작하기 버튼을 눌러 로그인을 진행해 주세요.</p>

      <div className="flex min-h-screen w-full flex-col justify-between p-6 sm:p-12 md:p-20 lg:p-40">
        <div className="flex flex-col space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-black capitalize text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            link at once!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-auto"
        >
          <Link
            href={ClientRoute.LOGIN}
            className="button mb-6 mt-6 bg-white px-8 text-xl text-primary shadow transition duration-300 hover:bg-foreground focus:outline-none focus:ring-2 focus:ring-white/50 sm:text-2xl md:mb-10 md:mt-10 md:text-3xl"
            aria-label="시작하기 - Link At Once 서비스 시작하기"
          >
            START!
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
