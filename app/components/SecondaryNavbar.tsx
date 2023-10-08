import React from "react";
import Link from "next/link";
import Image from "next/image";

const SecondaryNavbar = () => {
  return (
    <nav className="flex justify-around">
      <Link href="/angeln">
        <Image src="/images/fisch.jpg" alt="" width={50} height={50} />
        Angeln
      </Link>
      <Link href="/jagen">
        <Image src="/images/hund.jpg" alt="" width={50} height={50} />
        Jagen
      </Link>
    </nav>
  );
};

export default SecondaryNavbar;
