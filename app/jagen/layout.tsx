import React, { ReactNode } from "react";
import NavbarJagen from "./NavbarJagen";

interface Props {
  children: ReactNode;
}

const JagenLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <NavbarJagen />
      <div>{children}</div>
    </div>
  );
};

export default JagenLayout;
