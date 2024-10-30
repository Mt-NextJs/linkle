import React from "react";

const getToken = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    alert("로그인이 필요합니다.");
    window.location.replace("/intro");
  }
  return token as string;
};

export default getToken;
