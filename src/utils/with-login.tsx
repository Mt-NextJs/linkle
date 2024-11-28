import React, { ComponentType } from "react";
import { JSX } from "react/jsx-runtime";

import IntrinsicAttributes = JSX.IntrinsicAttributes;

import Login from "@app/login/page";

// 로그인 상태에 따라 컴포넌트를 렌더링

interface Props {
  isLoggedIn: boolean;
}
export function withLogin<T>(
  Component: ComponentType<Omit<IntrinsicAttributes & T & Props, "isLoggedIn">>,
) {
  return function withLogin(props: IntrinsicAttributes & T & Props) {
    const { isLoggedIn, ...restProps } = props;
    if (!isLoggedIn) return <Login />;
    return <Component {...restProps} />;
  };
}
