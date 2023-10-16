import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        <Image src="/images/hund.jpg" alt="logo" width={50} height={50} />
      </Link>

      <div className="flex gap-2 ml-auto">
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="bg-base-100 p-3">
            <Link href="/angeln">Dropdown</Link>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200  w-52 mt-3"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
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
    </div>
  );
};

export default Navbar;
