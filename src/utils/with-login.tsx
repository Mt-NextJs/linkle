import React, { ComponentType } from "react";
import { JSX } from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;
import Link from "next/link";
import Intro from "@app/intro/page";

// 로그인 상태에 따라 컴포넌트를 렌더링

interface Props {
  isLoggedIn: boolean;
}
export function withLogin<T>(
  Component: ComponentType<Omit<IntrinsicAttributes & T & Props, "isLoggedIn">>,
) {
  return function withLogin(props: IntrinsicAttributes & T & Props) {
    const { isLoggedIn, ...restProps } = props;
    if (!isLoggedIn) return <Intro />;
    return <Component {...restProps} />;
  };
}
