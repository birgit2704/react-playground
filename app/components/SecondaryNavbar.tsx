import React from "react";
import Link from "next/link";
import Image from "next/image";
import fisch from "../../public/images/fisch.jpg";
import hund from "../../public/images/hund.jpg";

const SecondaryNavbar = () => {
  return (
    <nav className="flex justify-around">
      <Link href="/angeln">
        <Image src={fisch} alt="" width={50} height={50} />
        Angeln
      </Link>
      <Link href="/jagen">
        <Image src={hund} alt="" width={50} height={50} />
        Jagen
      </Link>
    </nav>
  );
};

export default SecondaryNavbar;
