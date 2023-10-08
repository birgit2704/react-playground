import React, { ReactNode } from "react";
import NavbarAngeln from "./NavbarAngeln";

interface Props {
  children: ReactNode;
}

const AngelnLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <NavbarAngeln />
      <div>{children}</div>
    </div>
  );
};

export default AngelnLayout;
