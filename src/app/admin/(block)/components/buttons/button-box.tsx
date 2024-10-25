import React from "react";

const ButtonBox = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex flex-col gap-2 py-6">{children}</div>;
};

export default ButtonBox;
