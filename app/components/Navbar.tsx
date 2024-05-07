import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { ArrowLongRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
      {/* <Link href="/" className='font-bold text-3xl'>Tiba<span className='text-primary'>Lab</span></Link> */}

      <Link href="/">
        <Image
          width={150}
          height={75}
          src="https://tibalab.com/wp-content/uploads/2021/11/tibalab-1.png"
          // src="https://s3.eu-west-1.amazonaws.com/blazma.com/white-label/cell_logo.png"
          alt=""
        />
      </Link>

      {/* <img width="164" height="50" src="https://tibalab.com/wp-content/uploads/2021/11/tibalab-1.png" alt="logo" data-lazy-src="https://tibalab.com/wp-content/uploads/2021/11/tibalab-1.png" data-ll-status="loaded" class="entered lazyloaded"></img> */}

      <div className="flex flex-row items-center gap-2">
        <div className="lang">
          <Link
            href="/en"
            className="lang-btn"
          >
            <span className="lang-text">EN</span>
          </Link>
          <span>/</span>
          <Link
            href="/ar"
            className="lang-btn "
          >
            <span className="lang-text">عربي</span>
          </Link>
        </div>

        <div>
          <MagnifyingGlassIcon className="h-6 w-6 text-red-500" />
        </div>
        {/* <div className="lang">
          <Link
            href="http://acl.com.sa/?lang=en&amp;lang=en"
          >
            <span className="lang-text ml-3">Sign in</span>
          </Link>
          <Link
            href="http://acl.com.sa/?lang=en&amp;lang=en"
          >
            <span className="lang-text ml-3 bg-blue-500 rounded-2xl py-2 px-6 text-white">Sign up</span>
          </Link>
        </div> */}

        {/* <ModeToggle /> */}
      </div>
    </nav>
  );
}
