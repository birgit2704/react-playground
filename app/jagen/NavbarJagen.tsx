import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavbarJagen = () => {
  return (
    <aside className="bg-slate-200 p-5 mr-5">
      <p className="mb-3">Jagd Magazine</p>
      <div className="flex flex-col items-center">
        <Link href="/jagen/wuh">
          <Image src="/images/hund.jpg" alt="" width={50} height={50} />
          Wuh
        </Link>
        <Link href="/jagen/wh">
          <Image src="/images/hund.jpg" alt="" width={50} height={50} />
          Wh
        </Link>
        <Link href="/jagen/djz">
          <Image src="/images/hund.jpg" alt="" width={50} height={50} />
          Djz
        </Link>
        <Link href="/jagen/jww">
          <Image src="/images/hund.jpg" alt="" width={50} height={50} />
          Jww
        </Link>
      </div>
    </aside>
  );
};

export default NavbarJagen;
