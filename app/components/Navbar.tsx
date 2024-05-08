import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./ModeToggle";

type PageProps = {
  locale: string;
}

export default function Navbar({ locale }: PageProps) {
  const t = useTranslations("Mode");
  let modes = {light: t("light"), dark:t("dark"), system: t("system")};

  return (
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
      <Link href="/">
        <Image
          width={150}
          height={75}
          className="dark: block"
          src="/images/logo-dark.png"
          alt=""
        />
        <Image
          width={150}
          height={75}
          className="dark: hidden"
          src="/images/logo-light.webp"
          alt=""
        />
      </Link>

      {/* <img width="164" height="50" src="https://tibalab.com/wp-content/uploads/2021/11/tibalab-1.png" alt="logo" data-lazy-src="https://tibalab.com/wp-content/uploads/2021/11/tibalab-1.png" data-ll-status="loaded" class="entered lazyloaded"></img> */}

      <div className="flex flex-row items-center gap-2">
        <div className="lang">
          {locale == "ar" ? (
            <Link href="/en" className="lang-btn">
              <span className="lang-text dark:text-gray-200">ENG</span>
            </Link>
          ) : (
            ""
          )}

          {locale == "en" ? (
            <Link href="/ar" className="lang-btn ">
              <span className="lang-text dark:text-gray-200">عربي</span>
            </Link>
          ) : (
            ""
          )}
        </div>

        {/* <div>
          <MagnifyingGlassIcon className="h-6 w-6 text-red-500" />
        </div>
        <div className="lang">
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

        <ModeToggle modes={modes} locale={locale} />
      </div>
    </nav>
  );
}
