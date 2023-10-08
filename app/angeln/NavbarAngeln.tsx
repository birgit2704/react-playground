import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarAngeln = () => {
  return (
    <aside className="bg-slate-200 p-5 mr-5">
      <p className="mb-3">Angel Magazine</p>
      <div className="flex flex-col items-center">
        <Link href="/angeln/fuf">
          <Image src="/images/fisch.jpg" alt="" width={50} height={50} />
          Fuf
        </Link>
        <Link href="/angeln/rf">
          <Image src="/images/fisch.jpg" alt="" width={50} height={50} />
          RF
        </Link>
        <Link href="/angeln/nor">
          <Image src="/images/fisch.jpg" alt="" width={50} height={50} />
          Nor
        </Link>
      </div>
    </aside>
  );
};

export default NavbarAngeln;
