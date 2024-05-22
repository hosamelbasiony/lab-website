import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useLocale, useTranslations } from "next-intl";
import { client } from "@/app/lib/sanity";
import React from "react";
import Image from "next/image";

export const revalidate = 60 // revalidate at most every minute

const getData = async (locale: string) => {
  const query = `
    *[_type == 'hero' && locale == '${locale}' && labid == '${process.env.LAB_ID}']`;

  const list = await client.fetch(query);

  return list[0];
};

export default async function Footer() {
  const locale = useLocale();
  const t = useTranslations("Index");
  //   let labData = {
  //     facebook: "",
  //     twitter: "",
  //     instagram: "",
  //     phone: "",
  //     email: "",
  //   };

  const labData = await getData(locale);

  return (
    <footer className="max-w-6xl mx-auto py-8 px-6 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8">
        <div className="col-lg-4">
          <div className="clm f-clm">
            <div className="mb-8">
              <Image
                 alt="Tarqeem"
                 className="dark: block"
                 src="/images/logo-dark.png"
                 style={{ maxWidth: "140px", height: "auto" }}
                 width={140}
                 height={140}
              />
                <Image
                 alt="Tarqeem"
                 className="dark: hidden"
                 src="/images/logo-light.webp"
                 style={{ maxWidth: "140px", height: "auto" }}
                 width={140}
                 height={140}
              />
            </div>
            <div>
              <p className="text-gray-600 text-sm dark:text-gray-50">{t("mission")}</p>
              <div className="mt-4">
                <div className="flex flex-row">
                  <h5 className="text-lg text-gray-800 dark:text-gray-200 font-bold mr-0">
                    {t("followUs")}
                  </h5>
                  <a href={labData.facebook} className="mx-2" target="_blank">
                  <img
                      width={30}
                      height={30}
                      src="/icons/icons8-facebook-48.png"
                    ></img>
                  </a>
                  <a href={labData.twitter} className="mx-2" target="_blank">
                  <img
                      width={30}
                      height={30}
                      src="/icons/icons8-twitter-48.png"
                    ></img>
                  </a>
                  <a href={labData.instagram} className="mx-2" target="_blank">
                    <img
                      width={30}
                      height={30}
                      src="/icons/icons8-instagram-48.png"
                    ></img>
                  </a>
                  <a href={labData.youtube} className="mx-2" target="_blank">
                    <img
                      width={30}
                      height={30}
                      src="/icons/icons8-youtube-48.png"
                    ></img>
                  </a>
                  <a href={labData.linkedin} className="mx-2" target="_blank">
                    <img
                      width={30}
                      height={30}
                      src="/icons/icons8-linkedin-48.png"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-0 gap-8">
          <div>
            <h1 className="text-xl text-gray-600 font-semibold mt-16 mb-10 lg:mt-0 dark:text-gray-50">
              {t("contactInfo")}
            </h1>

            <ul className="text-sm text-gray-600 dark:text-gray-50">
              <li>
                <a
                  href={`tel:${labData.phone}`}
                  className="flex flex-row my-4"
                  dir="ltr"
                >
                  <PhoneIcon width={20} className="text-sm text-red-600 mr-2" />
                  <span className="px-2">{labData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={"mailto:" + labData.email}
                  className="flex flex-row"
                  dir="ltr"
                >
                  <EnvelopeIcon
                    width={20}
                    className="text-sm text-red-600 mr-2"
                  />
                  <span className="px-2">{labData.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            {/* <h1 className="text-xl text-gray-600 font-semibold mb-12">
            Download the app
          </h1>

          <a
            href="https://apps.apple.com/us/app/advanced-cell-laboratory/id1635999823"
            target="_blank"
            className="market-btn apple-btn"
            role="button"
          >
            <span className="market-button-subtitle">Get it on</span>
            <span className="market-button-title">App Store</span>
          </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
