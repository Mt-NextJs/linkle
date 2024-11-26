"use client";
import React from "react";
import Script from "next/script";

const KakaoScript = () => {
  const onLoad = () => {
    if (typeof window === undefined) return;
    console.log(process.env.NEXT_PUBLIC_KAKAO_JS_KEY, "JS KEY");
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };
  return (
    <Script
      id={"kakao-sdk"}
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
      integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka"
      crossOrigin="anonymous"
      async
      onLoad={onLoad}
    />
  );
};

export default KakaoScript;
